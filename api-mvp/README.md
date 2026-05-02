# api-mvp

這是 Nantou Food MVP 的 FastAPI 後端 stub。

## 目前提供的 API

- `GET /health`
- `GET /api/v1/products`
- `GET /api/v1/products/{slug}`
- `GET /api/v1/products/code/{product_code}`
- `GET /api/v1/traceability/{product_code}`
- `POST /api/v1/ai/ask`

## 安裝

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -e .[dev]
```

## 啟動

```bash
python -m uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

## 測試

```bash
./.venv/bin/python -m pytest -q
```

## AI 問答模式（第六批-B）

`POST /api/v1/ai/ask` 目前採「LLM 優先、seed fallback」策略：

1. 若有設定 `OPENAI_API_KEY`，會嘗試呼叫 OpenAI 相容 Chat Completions
2. 若未設定金鑰或呼叫失敗，回退為 deterministic seed 回答
3. `sources` 會套用來源限制，只回傳允許網域（`AI_ALLOWED_SOURCE_DOMAINS`）與 `seed:nantou-food`

可選環境變數：

- `OPENAI_API_KEY`：啟用真實 LLM 呼叫
- `OPENAI_BASE_URL`：預設 `https://api.openai.com/v1`
- `AI_MODEL`：預設 `gpt-4o-mini`
- `AI_ALLOWED_SOURCE_DOMAINS`：逗號分隔網域白名單，預設 `example.com,nantou.gov.tw,taft.moa.gov.tw`

## 備註

- 目前資料來源仍以 repo 內建 seed data 為主。
- 回傳格式維持 backend-friendly 的 snake_case。
- 前端會在 Next Route Handler 層轉成 camelCase。
