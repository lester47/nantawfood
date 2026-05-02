# web-mvp

這是 Nantou Food MVP 的 Next.js 前端。

## 角色

- 提供首頁、產品列表、產品詳情、AI 問答頁
- 使用 App Router 與 Route Handlers
- 由 `/api/*` Route Handlers proxy 到 FastAPI 後端

## 需求

- Node.js 20+
- npm
- 可連到 FastAPI 後端（預設 `http://127.0.0.1:8000/api/v1`）

## 啟動

```bash
npm install
API_BASE_URL=http://127.0.0.1:8000/api/v1 npm run dev
```

開啟：

- `http://localhost:3000`

## 測試與檢查

```bash
npm run test:run
npm run lint
npm run build
```

## 目前 API 流程

前端畫面不直接打 FastAPI，而是先進 Next Route Handlers：

- `GET /api/products`
- `GET /api/products/[slug]`
- `GET /api/traceability/[productCode]`
- `POST /api/ai/ask`

這一層負責：

- 轉發到 FastAPI
- 把 backend snake_case 轉成前端使用的 camelCase
- 統一前端 UI 取用格式

## 重要環境變數

- `API_BASE_URL`：FastAPI base URL，例如 `http://127.0.0.1:8000/api/v1`
