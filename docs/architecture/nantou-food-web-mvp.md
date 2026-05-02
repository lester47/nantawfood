# 南投食材網站 MVP 架構說明

## 1. 目的

這份文件說明目前 `nantawfood` repo 內「南投食材網站 MVP」的實作架構、資料流、目錄分工與後續擴充方向。

此 MVP 的核心原則是：

1. **保留 root 既有教學競賽版 PWA，不直接覆寫**
2. **新網站以前後端雙軌方式獨立建置**
3. **先用 seed/stub 驗證內容流程，再逐步替換成真實資料來源**
4. **讓前端 UI、BFF/proxy、backend API 三層責任清楚分離**

---

## 2. Repo 角色分工

```text
nantawfood/
├── index.html / player.html / leaderboard.html
│   └── 既有 legacy classroom game / PWA
├── docs/
│   ├── plans/
│   ├── architecture/
│   └── handoff/
├── web-mvp/
│   └── Next.js App Router 前端 + BFF/proxy
├── api-mvp/
│   └── FastAPI 後端 stub API
└── infra/
    └── Docker Compose 骨架
```

### 分工原則

- **root legacy app**
  - 保持現況
  - 不混入新的 Next.js / FastAPI 邏輯
- **web-mvp**
  - 提供使用者實際瀏覽的頁面
  - 提供 `/api/*` Route Handlers 作為 BFF/proxy
- **api-mvp**
  - 提供產品、履歷、AI ask 的後端 API stub
  - 維持 backend-friendly snake_case response
- **infra**
  - 提供容器化啟動骨架

---

## 3. 目前頁面與路由

## 前端頁面

- `/`
  - 首頁
- `/products`
  - 產品列表頁
- `/products/[slug]`
  - 產品詳情頁
- `/q/[productCode]`
  - QR 導流頁
- `/ask`
  - AI 問答頁

## Next Route Handlers（BFF/proxy）

- `GET /api/products`
- `GET /api/products/[slug]`
- `GET /api/traceability/[productCode]`
- `POST /api/ai/ask`

## FastAPI API

- `GET /health`
- `GET /api/v1/products`
- `GET /api/v1/products/{slug}`
- `GET /api/v1/products/code/{product_code}`
- `GET /api/v1/traceability/{product_code}`
- `POST /api/v1/ai/ask`

---

## 4. 目前資料流

### 4.1 產品列表

```text
Browser
→ /products page
→ ProductsCatalogClient
→ GET /api/products
→ Next Route Handler proxy
→ GET /api/v1/products
→ FastAPI seed data
→ normalize snake_case → camelCase
→ 回前端渲染
```

### 4.2 產品詳情

```text
Browser
→ /products/[slug]
→ ProductDetailClient
→ GET /api/products/[slug]
→ Next proxy → FastAPI /api/v1/products/{slug}
→ 取得 product
→ GET /api/traceability/[productCode]
→ Next proxy → FastAPI /api/v1/traceability/{product_code}
→ 合併後渲染 detail view
```

### 4.3 AI 問答

```text
Browser
→ /ask
→ AskForm submit
→ POST /api/ai/ask
→ Next proxy 轉 body:
   productSlug -> product_slug
→ POST /api/v1/ai/ask
→ FastAPI stub answer
→ 回傳前端顯示 answer + sources
```

---

## 5. 為什麼要用 BFF/proxy 層

目前刻意不讓 browser component 直接呼叫 FastAPI，原因如下：

1. **欄位格式隔離**
   - backend 保持 snake_case
   - frontend 保持 camelCase
   - 轉換集中在 web `lib/backend-api.ts`

2. **錯誤處理集中**
   - backend `detail` / `error` 可以在 proxy 層統一映射

3. **未來擴充彈性**
   - 後續如果加 auth、cache、rate limit、fallback source，不需重寫所有 client components

4. **環境變數更安全**
   - backend base URL 只給 server-side Route Handler 用
   - 不需要暴露給 browser

---

## 6. 目前主要檔案

### Web

- `web-mvp/app/page.tsx`
- `web-mvp/app/products/page.tsx`
- `web-mvp/app/products/[slug]/page.tsx`
- `web-mvp/app/q/[productCode]/page.tsx`
- `web-mvp/app/ask/page.tsx`
- `web-mvp/components/products-catalog-client.tsx`
- `web-mvp/components/product-detail-client.tsx`
- `web-mvp/components/ask-form.tsx`
- `web-mvp/lib/products.ts`
- `web-mvp/lib/types.ts`
- `web-mvp/lib/backend-api.ts`

### API

- `api-mvp/app/main.py`
- `api-mvp/app/api/routes/health.py`
- `api-mvp/app/api/routes/products.py`
- `api-mvp/app/api/routes/ai.py`
- `api-mvp/app/schemas.py`

### Infra / Docs

- `infra/docker-compose.yml`
- `README.md`
- `web-mvp/README.md`
- `api-mvp/README.md`

---

## 7. 目前資料模型狀態

### Product

目前 FastAPI 與前端 detail view 已對齊以下欄位：

- `slug`
- `product_code`
- `name_zh`
- `township_slug`
- `township_name_zh`
- `category`
- `season_note`
- `short_intro`
- `story`
- `nutrition_note`
- `eating_tip`
- `is_published`
- `featured_question`

### Traceability

- `product_code`
- `origin_farm_name`
- `farmer_name`
- `cultivation_method`
- `harvest_window`
- `certification_note`
- `source_url`
- `updated_at`

### AI ask

Request:
- `product_slug`
- `question`

Response:
- `answer`
- `question`
- `sources`

---

## 8. 驗證方式

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

### 注意

若 `next build` 出現 `.next` 目錄清理錯誤，例如 `ENOTEMPTY`，先清除 `.next` 後重跑：

```bash
cd web-mvp
rm -rf .next
npx next build
```

---

## 9. 目前限制

1. **資料仍是 seed/stub**
   - 尚未接資料庫
   - 尚未接真實履歷來源

2. **AI 仍是 stub**
   - 尚未接 Gemini / RAG / sources retrieval

3. **Docker Compose 僅建立骨架**
   - 在目前環境不能直接保證 docker compose 實跑

4. **/q/[productCode] 整合驗證尚可再補強**
   - 可再加 route-level integration tests

---

## 10. 下一步建議

### 優先順序 A：資料層抽離

將 FastAPI route 內的 seed data 抽離成：

- `app/services/`
- `app/repositories/`
- 或 `app/data/seed_*`

避免 route 檔案過大。

### 優先順序 B：AI 真實化

把 `/api/v1/ai/ask` 從固定字串改成：

- 真實 LLM provider
- 知識來源限制
- fallback answer policy
- interaction logging

### 優先順序 C：測試補強

增加：

- `/q/[productCode]` redirect tests
- backend error mapping tests
- proxy timeout / bad response handling tests

### 優先順序 D：容器驗證

Docker 可用時，補做：

```bash
cd infra
docker compose up --build
```

並驗證：

- web 可開
- api 可開
- web 經 proxy 能拿到 backend data

---

## 11. 架構總結

目前這個 MVP 已經不是單純靜態頁面，而是形成了：

```text
Legacy PWA (保留)
+
Next.js Web MVP (UI + BFF)
+
FastAPI API MVP (stub backend)
+
Docker Compose skeleton
```

這個切法的最大好處是：

- 不破壞既有教學版
- 可逐批迭代
- 前後端責任清楚
- 後續可以自然升級成真實資料與 AI 系統
