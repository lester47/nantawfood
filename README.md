# Nantou Food MVP

南投食材網站 MVP，目前拆成兩個子專案：

- `web-mvp/`：Next.js App Router 前端
- `api-mvp/`：FastAPI 後端 stub API
- `infra/`：Docker Compose 啟動骨架

## 目前功能

- 首頁與產品列表頁
- 產品詳情頁與履歷區塊
- QR 導流頁面流程
- AI 問答頁（經由 Next Route Handler proxy 到 FastAPI）
- FastAPI `products / traceability / ai/ask` stub API
- Docker Compose 骨架

## 專案結構

```text
nantawfood/
├─ web-mvp/
├─ api-mvp/
├─ infra/
└─ README.md
```

## 本機開發

### 1) 啟動 API

```bash
cd api-mvp
python3 -m venv .venv
source .venv/bin/activate
pip install -e .[dev]
python -m uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

API 預設位置：

- `http://127.0.0.1:8000`
- `http://127.0.0.1:8000/api/v1/products`

### 2) 啟動 Web

另開第二個終端：

```bash
cd web-mvp
npm install
API_BASE_URL=http://127.0.0.1:8000/api/v1 npm run dev
```

Web 預設位置：

- `http://127.0.0.1:3000`

## 驗證指令

### 前端

```bash
cd web-mvp
npm run test:run
npm run lint
npm run build
```

### 後端

```bash
cd api-mvp
./.venv/bin/python -m pytest -q
```

## Docker Compose

目前已提供 compose 與 Dockerfile 骨架：

```bash
cd infra
docker compose up --build
```

啟動後預期：

- Web: `http://localhost:3000`
- API: `http://localhost:8000`

## 注意事項

- Web 的 `/api/*` Route Handlers 現在會 proxy 到 FastAPI。
- 若未設定 `API_BASE_URL`，web 預設會打 `http://127.0.0.1:8000/api/v1`。
- 目前這些 API 都還是 stub/seed data，尚未接正式資料來源。
