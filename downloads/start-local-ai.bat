@echo off
setlocal
title Nantou Food - Local AI
set "NANTOU_LAUNCHER=%~f0"
powershell.exe -NoProfile -ExecutionPolicy Bypass -Command "$s=[IO.File]::ReadAllText($env:NANTOU_LAUNCHER); $code=($s -split '(?m)^# POWERSHELL_START\r?$',2)[1]; & ([scriptblock]::Create($code))"
if errorlevel 1 pause
exit /b
# POWERSHELL_START
$ErrorActionPreference = 'Stop'
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$backend = $null
$frontend = $null
try {
    Write-Host 'Nantou Food: local AI setup (Windows / Python 3.11+)' -ForegroundColor Green
    $python = $null
    foreach ($candidate in @('py', 'python')) {
        if (Get-Command $candidate -ErrorAction SilentlyContinue) {
            $result = & $candidate -c "import sys; print(sys.executable if sys.version_info >= (3,11) else '')" 2>$null
            if ($LASTEXITCODE -eq 0 -and $result) { $python = [string]($result | Select-Object -Last 1); break }
        }
    }
    if (-not $python) { throw 'Install Python 3.11 or newer from https://www.python.org/downloads/windows/ (enable Add Python to PATH), then run this BAT again.' }
    foreach ($port in @(8000, 8765)) {
        if (Get-NetTCPConnection -LocalPort $port -State Listen -ErrorAction SilentlyContinue) {
            throw "Port $port is already in use. Close the previous local AI launcher or the application using this port, then retry."
        }
    }
    $workspace = Join-Path $env:LOCALAPPDATA 'NantouFoodAI'
    New-Item -ItemType Directory -Force -Path $workspace | Out-Null
    $site = Join-Path $workspace 'nantawfood-main'
    $ready = Join-Path $workspace 'setup-r24.ready'
    $venvPython = Join-Path $workspace 'venv/Scripts/python.exe'
    if (-not (Test-Path $ready) -or -not (Test-Path $venvPython) -or -not (Test-Path "$site/api-mvp/app/main.py")) {
        Write-Host 'First run: downloading website (about 110 MB). Please wait...'
        $archive = Join-Path $workspace 'website.zip'
        Invoke-WebRequest -UseBasicParsing -Uri 'https://codeload.github.com/lester47/nantawfood/zip/refs/heads/main' -OutFile $archive
        Expand-Archive -LiteralPath $archive -DestinationPath $workspace -Force
        Remove-Item -LiteralPath $archive
        Write-Host 'Creating a private Python environment and installing dependencies...'
        & $python -m venv (Join-Path $workspace 'venv')
        if ($LASTEXITCODE -ne 0) { throw 'Could not create Python environment.' }
        & $venvPython -m pip install 'fastapi>=0.128,<0.129' 'uvicorn>=0.38,<0.39' 'httpx>=0.28,<0.29'
        if ($LASTEXITCODE -ne 0) { throw 'Dependency installation failed. Check your Internet connection and run this BAT again.' }
        Set-Content -LiteralPath $ready -Value 'r24' -Encoding ASCII
    }
    $backend = Start-Process -FilePath $venvPython -ArgumentList @('-m','uvicorn','app.main:app','--host','127.0.0.1','--port','8000') -WorkingDirectory (Join-Path $site 'api-mvp') -WindowStyle Hidden -PassThru
    $frontend = Start-Process -FilePath $venvPython -ArgumentList @('-m','http.server','8765','--bind','127.0.0.1') -WorkingDirectory $site -WindowStyle Hidden -PassThru
    $healthy = $false
    for ($attempt = 0; $attempt -lt 30; $attempt++) {
        Start-Sleep -Milliseconds 500
        if ($backend.HasExited -or $frontend.HasExited) { throw 'Local service stopped unexpectedly. Close other launchers and retry.' }
        try {
            $null = Invoke-WebRequest -UseBasicParsing -Uri 'http://127.0.0.1:8000/health' -TimeoutSec 2
            $null = Invoke-WebRequest -UseBasicParsing -Uri 'http://127.0.0.1:8765/index.html' -TimeoutSec 2
            $healthy = $true; break
        } catch { }
    }
    if (-not $healthy) { throw 'Local services did not start in time. Please retry.' }
    Start-Process 'http://127.0.0.1:8765/index.html'
    Write-Host 'Ready! Enter your API key in the browser, save, then test AI connection.' -ForegroundColor Green
    Write-Host 'Keep this window open while using AI. API keys are not saved to disk.'
    $null = Read-Host 'Press Enter here to stop both local services'
} catch {
    Write-Host $_.Exception.Message -ForegroundColor Red
    $null = Read-Host 'Press Enter to exit'
} finally {
    foreach ($process in @($frontend, $backend)) {
        if ($null -ne $process -and -not $process.HasExited) { Stop-Process -Id $process.Id -ErrorAction SilentlyContinue }
    }
}
