# 南投食材網站 MVP 交接摘要（第 1 批～第 5 批）

## 1. 這份文件的用途

這份交接文件用來快速回答三件事：

1. 今晚到底做了什麼
2. 現在專案在哪一個狀態
3. 下一位接手的人應該從哪裡開始

---

## 2. 本次工作主線

在不動既有 root 教學競賽版 PWA 的前提下，新增一組新的南投食材網站 MVP：

- `web-mvp/`：Next.js 前端
- `api-mvp/`：FastAPI 後端 stub
- `infra/`：Docker Compose 骨架

目標是讓新網站可以提供：

- 首頁
- 產品列表
- 產品詳情
- QR 導流
- AI 問答 stub
- 後續真實資料與 AI 的擴充路徑

---

## 3. 第 1～5 批完成摘要

## 第 1 批

- 建立 `web-mvp/` Next.js App Router 專案
- 建立 seed data 與型別
- 建立首頁與產品列表頁
- 預留 `/products/[slug]`、`/q/[productCode]`、`/ask`
- 建立前端測試基礎

## 第 2 批

- 補齊產品詳情頁
- 補齊 QR 導流頁邏輯
- 增加 product lookup helper
- 增加 mock API route 骨架
- 建立 `api-mvp/` FastAPI skeleton 與 health/products routes

## 第 3 批

- 前端列表與詳情頁改成 API 驅動
- AI 問答頁改成可互動 UI
- web 端加入 AI ask mock route
- backend 加入 `/api/v1/ai/ask` stub
- 建立 compose 與 Dockerfile 骨架

## 第 4 批

- web `/api/*` route handlers 改成真正 proxy FastAPI
- 新增 `web-mvp/lib/backend-api.ts`
- 進行 snake_case / camelCase 正規化
- backend detail shape 補齊
- 4 個產品的 traceability 資料補齊
- README / 啟動說明補齊
- 前後端測試、lint、build 全數驗證

## 第 5 批

- 補齊 `docs/architecture/nantou-food-web-mvp.md`
- 補齊這份 handoff 文件
- 把今晚的做法打包成 Hermes Skill

---

## 4. 目前實際可用內容

### 前端頁面

- `/`
- `/products`
- `/products/[slug]`
- `/q/[productCode]`
- `/ask`

### Web BFF/proxy

- `GET /api/products`
- `GET /api/products/[slug]`
- `GET /api/traceability/[productCode]`
- `POST /api/ai/ask`

### Backend API

- `GET /health`
- `GET /api/v1/products`
- `GET /api/v1/products/{slug}`
- `GET /api/v1/products/code/{product_code}`
- `GET /api/v1/traceability/{product_code}`
- `POST /api/v1/ai/ask`

---

## 5. 啟動方式

## API

```bash
cd api-mvp
python3 -m venv .venv
source .venv/bin/activate
pip install -e .[dev]
python -m uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

## Web

```bash
cd web-mvp
npm install
API_BASE_URL=http://127.0.0.1:8000/api/v1 npm run dev
```

---

## 6. 驗證指令

## Backend

```bash
cd api-mvp
./.venv/bin/python -m pytest -q
```

## Frontend

```bash
cd web-mvp
npm run test:run
npm run lint
npm run build
```

若 build 碰到 `.next` 清理錯誤：

```bash
cd web-mvp
rm -rf .next
npx next build
```

---

## 7. 目前重要檔案

### 架構/文件

- `README.md`
- `docs/plans/2026-05-02-nantou-food-web-mvp-plan.md`
- `docs/architecture/nantou-food-web-mvp.md`
- `docs/handoff/2026-05-02-nantou-food-mvp-phase-1-5-handoff.md`

### Web

- `web-mvp/app/`
- `web-mvp/components/`
- `web-mvp/lib/products.ts`
- `web-mvp/lib/backend-api.ts`
- `web-mvp/README.md`

### API

- `api-mvp/app/main.py`
- `api-mvp/app/api/routes/products.py`
- `api-mvp/app/api/routes/ai.py`
- `api-mvp/app/schemas.py`
- `api-mvp/README.md`

### Infra

- `infra/docker-compose.yml`

---

## 8. 目前已知限制

1. backend 仍是 seed/stub data
2. AI ask 仍是固定回答 stub
3. 尚未接資料庫
4. 尚未接真實履歷來源
5. Docker Compose 骨架已建，但本機是否可實跑要看 Docker 環境

---

## 9. 建議下一批（第 6 批）

最合理的下一步是四選一：

### 路線 A：資料層抽離

把 route 內資料拆到 service/repository/data layer。

### 路線 B：AI 真實化

把 backend `/api/v1/ai/ask` 接到真實 LLM 與來源限制邏輯。

### 路線 C：測試補強

加 `/q/[productCode]`、proxy error mapping、integration tests。

### 路線 D：容器驗證

Docker 可用時跑 `docker compose up --build` 實測整組服務。

---

## 10. 給下一位接手者的最短說明

如果只看一句話：

> 目前已經完成「保留 legacy PWA + 新增 Next.js Web MVP + FastAPI stub backend + Next proxy/BFF + 文件化」的第一輪可運作骨架，接下來應優先把資料層與 AI 從 stub 推進到真實化。

---

## 11. 第六批（已完成）摘要

本批先做「資料層抽離」：

- 新增 `api-mvp/app/data/products_seed.py`
- 新增 `api-mvp/app/services/products_service.py`
- `api-mvp/app/api/routes/products.py` 改為透過 service 取資料，不再內嵌大段 seed constants
- 新增 `api-mvp/tests/test_products_service.py`

### 第六批驗證

```bash
cd api-mvp
./.venv/bin/python -m pytest -q   # 11 passed

cd ../web-mvp
npm run test:run                  # 12 files / 19 tests passed
npm run lint                      # passed
npx next build                    # passed
```

---

## 12. 第六批-B（已完成）摘要：AI 真實化（LLM 優先 + fallback + 來源限制）

本批把 backend `POST /api/v1/ai/ask` 從固定 stub 推進為「可接真實 LLM」且可控風險的模式。

### 12.1 實作重點

1. 新增 `api-mvp/app/services/ai_service.py`
   - `ask_product_question()`：主流程
   - 有 `OPENAI_API_KEY` 時，呼叫 OpenAI 相容 `chat/completions`
   - 無金鑰或呼叫失敗時，回退為 deterministic seed 回答

2. 改寫 `api-mvp/app/api/routes/ai.py`
   - route 層瘦身，只處理 request/response schema
   - 主要邏輯移到 service 層

3. 加入來源限制（source allowlist）
   - 回傳 `sources` 一律至少包含 `seed:nantou-food`
   - traceability URL 僅在網域白名單內才可回傳
   - 透過 `AI_ALLOWED_SOURCE_DOMAINS` 控制

4. 更新後端文件 `api-mvp/README.md`
   - 補上 AI 問答模式與可用環境變數

### 12.2 新增/調整測試

- 更新 `api-mvp/tests/test_ai.py`
  - 驗證正常詢問與 unknown slug fallback
- 新增 `api-mvp/tests/test_ai_service.py`
  - 驗證來源網域限制生效
  - 驗證 LLM 可用時會優先採用 LLM 回答

### 12.3 第六批-B 驗證結果

```bash
cd api-mvp
./.venv/bin/python -m pytest -q   # 14 passed

cd ../web-mvp
npm run test:run                  # 12 files / 19 tests passed
npm run lint                      # passed
npx next build                    # passed
```

---

## 13. 第六批-C（已完成）摘要：/q 導頁與 proxy error mapping 測試補強

本批聚焦在「測試覆蓋面補強」，不改動核心資料流架構。

### 13.1 /q 導頁測試

- 新增 `web-mvp/app/q/[productCode]/page.test.ts`
  - 驗證可解析 product code 時，會 redirect 到對應 `/products/{slug}`
  - 驗證未知 product code 時，會 redirect 到 `/products`

### 13.2 proxy error mapping 測試補強

- `web-mvp/app/api/products/route.test.ts`
  - 新增 backend 非 2xx 時，status/error 訊息映射測試
  - 新增 fetch throw 時，回傳 502 fallback 測試

- `web-mvp/app/api/products/[slug]/route.test.ts`
  - 新增 fetch throw 時，回傳 502 fallback 測試

- `web-mvp/app/api/traceability/[productCode]/route.test.ts`
  - 新增 backend 404 detail 映射測試

- `web-mvp/app/api/ai/ask/route.test.ts`
  - 新增 backend 422 detail 映射測試

### 13.3 第六批-C 驗證結果

```bash
cd api-mvp
./.venv/bin/python -m pytest -q   # 14 passed

cd ../web-mvp
npm run test:run                  # 13 files / 26 tests passed
npm run lint                      # passed
npx next build                    # passed
```

---

## 14. 第六批-D（已完成）摘要：Docker Compose 實跑驗證

本批目標是把先前只完成骨架的 `infra/docker-compose.yml` 做實機驗證，確認 web/api 可同時啟動並提供服務。

### 14.1 初次實跑發現的問題

- `docker compose up --build` 初次啟動時，`api` container crash。
- 主要錯誤：`ModuleNotFoundError: No module named 'httpx'`
- 根因：
  - 第六批-B 新增 `ai_service.py` 使用 `httpx`
  - 但 `api-mvp/Dockerfile` 只安裝 `fastapi uvicorn`
  - 容器 runtime 缺少 `httpx`

### 14.2 修正內容

1. 更新 `api-mvp/pyproject.toml`
   - 將 `httpx>=0.28,<0.29` 移入 runtime dependencies

2. 更新 `api-mvp/Dockerfile`
   - `RUN pip install --no-cache-dir fastapi uvicorn`
   - 改為 `RUN pip install --no-cache-dir .`
   - 確保容器安裝與專案宣告一致

### 14.3 實跑與 smoke test 結果

- `docker compose up -d --build`：成功
- `docker compose ps`：`infra-api-1`、`infra-web-1` 均為 Up
- API health：`GET http://127.0.0.1:8000/health` 回傳 `{"status":"ok","service":"nantou-food-api-mvp"}`
- Backend products：`GET http://127.0.0.1:8000/api/v1/products` 正常
- Web proxy products：`GET http://127.0.0.1:3000/api/products` 正常（camelCase）
- AI ask backend：`POST http://127.0.0.1:8000/api/v1/ai/ask` 正常
- AI ask proxy：`POST http://127.0.0.1:3000/api/ai/ask` 正常

### 14.4 本批結論

- Docker 環境已打通，compose 骨架已從「可讀」提升到「可實跑」。
- 目前 web/api 兩服務可在本機容器模式下工作，BFF proxy 與 AI ask 端到端可用。

### 14.5 追加收尾（compose warning 清理）

- 移除 `infra/docker-compose.yml` 的過時欄位 `version: "3.9"`
- 重新執行 `docker compose ps`，warning 消失且服務維持正常（api/web 皆為 Up）
