# 南投食材網頁 MVP Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** 在不破壞目前 `nantawfood` 教學競賽版 PWA 的前提下，規劃並建立一個新的「南投食材網頁 MVP」，讓使用者可以從首頁、產品頁、QR 入口與 AI 問答頁理解南投食材、產地故事與履歷資訊。

**Architecture:** 目前 repo 是純靜態 HTML/PWA 專案，沒有 `package.json`、沒有前端框架、也沒有後端服務，因此不適合直接把 AI 問答與資料 API 硬塞進既有根目錄。建議採 **雙軌架構**：保留現有 root 作為 legacy classroom game，新增 `web-mvp/`（Next.js 前端）與 `api-mvp/`（FastAPI 後端）作為新的南投食材網站 MVP。第一階段先做內容導向與 QR/產品頁，第二階段再接 AI。

**Tech Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS, FastAPI, PostgreSQL, Gemini API, Docker Compose

---

## 0. Repo reality check（已確認）

### Current state summary
- 現有 repo 主體是 **南投食農領地戰** 靜態 PWA，不是內容型網站。
- root 目前主要檔案：
  - `index.html`
  - `player.html`
  - `leaderboard.html`
  - `service-worker.js`
  - `manifest.json`
- 版本演進可見：`v1.4`、`v1.4.1`、`v1.5`、`v1.6`、`v1.7`
- 目前 `main` 頭部提交已回到簡化後的 `v1.4.2` 教學現場版。
- repo **沒有**：
  - `package.json`
  - `src/`
  - `app/`
  - `backend/`
  - 資料庫 migration
  - API 專案

### Key implication
**不要直接覆寫 root 來做新版南投食材網站。**
應該把現有競賽版保留，新的網站獨立放在新目錄，避免：
1. 破壞既有 GitHub Pages / 教學現場版
2. 把 MQTT/PWA 遊戲邏輯與產品履歷網站混在一起
3. 之後 AI/API 接入時結構失控

---

## 1. Target MVP scope

### MVP pages
1. 首頁 `/`
2. 產品列表頁 `/products`
3. 產品詳情頁 `/products/[slug]`
4. QR 導流頁 `/q/[productCode]`
5. AI 問答頁 `/ask`（可先掛假資料或 disabled UI）
6. 管理/內容檢查頁（內部）`/admin-preview`（可選，先不公開）

### MVP capabilities
- 顯示南投代表食材與鄉鎮
- 每個產品頁顯示：
  - 食材名稱
  - 鄉鎮
  - 產地故事
  - 當季資訊
  - 履歷摘要
  - 推薦問答
- QR code 可直接導到指定產品頁
- AI 問答初期只回答：
  - 產品故事
  - 食材知識
  - 食用建議
- 後端保留擴充欄位給：
  - 感測資料
  - 農友資料
  - traceability records
  - 互動紀錄

### Explicitly out of scope for MVP
- micro:bit / 感測器真實上傳
- 機器人整合
- 語音辨識
- 影像辨識
- 後台 CMS
- 完整多角色管理
- 縣府治理儀表板

---

## 2. Proposed directory structure

### New directories to create
- `docs/plans/2026-05-02-nantou-food-web-mvp-plan.md`
- `docs/architecture/nantou-food-web-mvp.md`
- `web-mvp/`
- `api-mvp/`
- `infra/`

### Desired structure
```text
nantawfood/
├── index.html                     # legacy classroom game (keep)
├── player.html                    # legacy classroom game (keep)
├── leaderboard.html               # legacy classroom game (keep)
├── docs/
│   ├── plans/
│   │   └── 2026-05-02-nantou-food-web-mvp-plan.md
│   └── architecture/
│       └── nantou-food-web-mvp.md
├── web-mvp/
│   ├── package.json
│   ├── app/
│   │   ├── page.tsx
│   │   ├── products/page.tsx
│   │   ├── products/[slug]/page.tsx
│   │   ├── q/[productCode]/page.tsx
│   │   └── ask/page.tsx
│   ├── components/
│   ├── lib/
│   ├── public/
│   └── tests/
├── api-mvp/
│   ├── pyproject.toml
│   ├── app/
│   │   ├── main.py
│   │   ├── api/
│   │   ├── models/
│   │   ├── schemas/
│   │   └── services/
│   └── tests/
└── infra/
    └── docker-compose.yml
```

---

## 3. Data model MVP

### Core tables

#### `townships`
- `id`
- `slug`
- `name_zh`
- `hero_image`
- `summary`

#### `products`
- `id`
- `slug`
- `product_code`  # 給 QR 使用，例如 `NT-PULI-GUAVA-001`
- `name_zh`
- `township_id`
- `category`
- `season_note`
- `short_intro`
- `story`
- `nutrition_note`
- `eating_tip`
- `hero_image`
- `is_published`

#### `traceability_records`
- `id`
- `product_id`
- `origin_farm_name`
- `farmer_name`
- `cultivation_method`
- `harvest_window`
- `certification_note`
- `source_url`
- `updated_at`

#### `knowledge_sources`
- `id`
- `product_id`
- `title`
- `source_type`
- `source_url`
- `snippet`

#### `ai_interaction_logs`
- `id`
- `session_id`
- `product_id`
- `question`
- `answer`
- `created_at`

### Future tables (not in first MVP implementation)
- `sensor_devices`
- `sensor_readings`
- `farmers`
- `qr_bindings`

---

## 4. API design MVP

### Public endpoints
- `GET /api/v1/townships`
- `GET /api/v1/products`
- `GET /api/v1/products/{slug}`
- `GET /api/v1/products/code/{product_code}`
- `GET /api/v1/traceability/{product_code}`
- `POST /api/v1/ai/ask`

### Example response: `GET /api/v1/products/{slug}`
```json
{
  "slug": "puli-guava",
  "product_code": "NT-PULI-GUAVA-001",
  "name_zh": "埔里芭樂",
  "township": {
    "slug": "puli",
    "name_zh": "埔里鎮"
  },
  "category": "fruit",
  "season_note": "夏秋為主",
  "short_intro": "埔里盆地氣候穩定，適合芭樂栽培。",
  "story": "埔里芭樂常見於在地市場與校園食農教材。",
  "nutrition_note": "富含維生素 C 與膳食纖維。",
  "eating_tip": "可切片鮮食，也可做成沙拉。",
  "hero_image": "/images/products/puli-guava.jpg",
  "traceability": {
    "origin_farm_name": "示範農場",
    "farmer_name": "王小明",
    "cultivation_method": "友善耕作",
    "harvest_window": "2026-05 至 2026-09",
    "certification_note": "示範資料",
    "source_url": "https://example.com"
  }
}
```

### Example request: `POST /api/v1/ai/ask`
```json
{
  "session_id": "web-demo-session-001",
  "product_code": "NT-PULI-GUAVA-001",
  "question": "這個食材有什麼特色？",
  "context_mode": "product"
}
```

### AI answer rules
- 只能引用：產品資料、履歷摘要、知識來源片段
- 不可捏造農友、認證或產量資訊
- 若資料不足，直接回答「目前資料不足」

---

## 5. Frontend information architecture

### Home page `/`
Sections:
1. Hero：南投食材 / 食農教育 / 掃碼探索
2. Featured products
3. Township highlights
4. How QR exploration works
5. CTA to `/products`

### Product list `/products`
- Filter by township
- Filter by category
- Product cards
- Quick QR code badge / product code

### Product detail `/products/[slug]`
- Hero image + title
- Township badge
- Story section
- Season / nutrition / eating tip
- Traceability summary
- Suggested questions
- CTA to AI ask

### QR route `/q/[productCode]`
- Server-side lookup by `product_code`
- 301 or 302 redirect to canonical `/products/[slug]`
- Unknown code shows friendly fallback page

### Ask page `/ask`
- Product selector
- Suggested prompts
- Ask form
- AI answer card
- Citations / data source snippets

---

## 6. Task breakdown

### Task 1: Write repo architecture note

**Objective:** 明確記錄目前 repo 是 legacy game，新的南投食材網站要走新目錄。

**Files:**
- Create: `docs/architecture/nantou-food-web-mvp.md`
- Modify: none
- Test: n/a

**Step 1: Write architecture note**
Document:
- current root purpose
- why not overwrite root
- new directories for `web-mvp` and `api-mvp`

**Step 2: Verify file exists**
Run: `test -f docs/architecture/nantou-food-web-mvp.md && echo OK`
Expected: `OK`

**Step 3: Commit**
```bash
git add docs/architecture/nantou-food-web-mvp.md
git commit -m "docs: add architecture note for nantou food web mvp"
```

---

### Task 2: Bootstrap `web-mvp` Next.js app

**Objective:** 建立新的前端專案，不碰現有 root 靜態版。

**Files:**
- Create: `web-mvp/package.json`
- Create: `web-mvp/app/page.tsx`
- Create: `web-mvp/app/products/page.tsx`
- Create: `web-mvp/app/products/[slug]/page.tsx`
- Create: `web-mvp/app/q/[productCode]/page.tsx`
- Create: `web-mvp/app/ask/page.tsx`

**Step 1: Initialize app**
Run:
```bash
cd web-mvp
npx create-next-app@latest . --ts --tailwind --eslint --app --src-dir false --import-alias "@/*"
```

**Step 2: Verify app boots**
Run:
```bash
npm run dev
```
Expected: local Next app starts successfully.

**Step 3: Commit**
```bash
git add web-mvp
git commit -m "feat: bootstrap web-mvp next app"
```

---

### Task 3: Add MVP content schema and seed data

**Objective:** 先用本地假資料把網站資訊架構做出來。

**Files:**
- Create: `web-mvp/lib/data/products.ts`
- Create: `web-mvp/lib/data/townships.ts`
- Create: `web-mvp/lib/types.ts`
- Test: `web-mvp/tests/data-schema.test.ts`

**Step 1: Write failing schema test**
Test should assert:
- every product has `slug`
- every product has `productCode`
- every product has `townshipSlug`

**Step 2: Run to verify failure**
Run:
```bash
cd web-mvp
npm test
```
Expected: fail because data files/types do not exist yet.

**Step 3: Add minimal data model and 5-8 seed products**
Suggested products:
- 埔里芭樂
- 魚池紅茶
- 仁愛高山高麗菜
- 名間茶
- 草屯稻米
- 竹山地瓜

**Step 4: Run tests**
Expected: pass.

**Step 5: Commit**
```bash
git add web-mvp/lib web-mvp/tests
git commit -m "feat: add product and township seed data"
```

---

### Task 4: Build homepage

**Objective:** 讓首頁清楚表達這不是競賽遊戲，而是南投食材探索網站。

**Files:**
- Modify: `web-mvp/app/page.tsx`
- Create: `web-mvp/components/home/hero.tsx`
- Create: `web-mvp/components/home/featured-products.tsx`
- Create: `web-mvp/components/home/township-grid.tsx`

**Step 1: Write failing UI test**
Check home page renders:
- site title
- featured products section
- township section

**Step 2: Implement minimal sections**
Use seed data only.

**Step 3: Verify manually**
Run app and confirm home page has:
- hero CTA
- featured product cards
- township cards

**Step 4: Commit**
```bash
git add web-mvp/app/page.tsx web-mvp/components/home
git commit -m "feat: build nantou food homepage"
```

---

### Task 5: Build product list page

**Objective:** 使用者可瀏覽全部產品並依鄉鎮查看。

**Files:**
- Modify: `web-mvp/app/products/page.tsx`
- Create: `web-mvp/components/products/product-card.tsx`
- Create: `web-mvp/components/products/product-filters.tsx`

**Step 1: Write failing test**
Check product list page renders all seed products.

**Step 2: Implement page**
Include:
- list header
- township filter
- product card grid

**Step 3: Verify manually**
- filter changes visible list
- product cards link to detail pages

**Step 4: Commit**
```bash
git add web-mvp/app/products web-mvp/components/products
git commit -m "feat: add product listing page"
```

---

### Task 6: Build product detail page

**Objective:** 建立每個食材的故事、履歷、建議問答入口。

**Files:**
- Modify: `web-mvp/app/products/[slug]/page.tsx`
- Create: `web-mvp/components/products/product-hero.tsx`
- Create: `web-mvp/components/products/traceability-card.tsx`
- Create: `web-mvp/components/products/suggested-questions.tsx`

**Step 1: Write failing test**
Check detail page loads product title and township.

**Step 2: Implement lookup by slug**
Return 404 for unknown slug.

**Step 3: Render sections**
- hero
- story
- season
- nutrition
- eating tips
- traceability summary
- suggested AI prompts

**Step 4: Commit**
```bash
git add web-mvp/app/products/[slug] web-mvp/components/products
git commit -m "feat: add product detail page"
```

---

### Task 7: Build QR redirect flow

**Objective:** 讓實體 QR code 可以穩定指向產品頁。

**Files:**
- Modify: `web-mvp/app/q/[productCode]/page.tsx`
- Test: `web-mvp/tests/qr-route.test.ts`

**Step 1: Write failing test**
Check valid `productCode` maps to expected slug.

**Step 2: Implement redirect**
- valid code → redirect `/products/[slug]`
- invalid code → friendly error page

**Step 3: Verify manually**
Open:
- `/q/NT-PULI-GUAVA-001`
- `/q/NOT-FOUND`

**Step 4: Commit**
```bash
git add web-mvp/app/q web-mvp/tests/qr-route.test.ts
git commit -m "feat: add qr redirect route"
```

---

### Task 8: Bootstrap `api-mvp` FastAPI app

**Objective:** 為之後產品資料與 AI 問答預備獨立後端。

**Files:**
- Create: `api-mvp/pyproject.toml`
- Create: `api-mvp/app/main.py`
- Create: `api-mvp/app/api/routes/products.py`
- Create: `api-mvp/app/api/routes/ai.py`
- Create: `api-mvp/tests/test_health.py`

**Step 1: Write failing health test**
Expect `GET /healthz` returns `200`.

**Step 2: Implement app skeleton**
Add:
- `GET /healthz`
- `GET /api/v1/products`
- stub `POST /api/v1/ai/ask`

**Step 3: Run tests**
Run:
```bash
cd api-mvp
pytest -q
```
Expected: pass.

**Step 4: Commit**
```bash
git add api-mvp
git commit -m "feat: bootstrap api-mvp fastapi app"
```

---

### Task 9: Add product API and connect frontend

**Objective:** 把前端從硬編碼資料過渡到 API 拉資料。

**Files:**
- Modify: `api-mvp/app/api/routes/products.py`
- Modify: `web-mvp/lib/data/products.ts` (or replace with fetch client)
- Create: `web-mvp/lib/api.ts`

**Step 1: Write failing integration test**
Front page/product page should fetch from API client.

**Step 2: Implement minimal JSON responses**
At this stage API may still serve seeded data from Python constants.

**Step 3: Switch frontend to API-backed fetch**
Keep server-side rendering where possible.

**Step 4: Verify manually**
- products list loads
- detail page loads
- broken API shows graceful fallback

**Step 5: Commit**
```bash
git add api-mvp web-mvp
git commit -m "feat: connect web mvp to product api"
```

---

### Task 10: Add AI ask stub, then Gemini-backed implementation

**Objective:** 先把問答流程打通，再補 Gemini。

**Files:**
- Modify: `api-mvp/app/api/routes/ai.py`
- Create: `api-mvp/app/services/ai_service.py`
- Modify: `web-mvp/app/ask/page.tsx`
- Create: `web-mvp/components/ask/ask-form.tsx`
- Create: `web-mvp/components/ask/answer-card.tsx`

**Step 1: Write failing test**
Expect `POST /api/v1/ai/ask` returns structured answer JSON.

**Step 2: Implement stubbed response**
Use product data to generate deterministic answer without LLM.

**Step 3: Wire frontend ask form**
- choose product
- enter question
- show answer

**Step 4: Replace stub with Gemini service**
Require:
- environment variable for API key
- guardrails using product data context only

**Step 5: Verify manually**
Questions to test:
- 「這個食材有什麼特色？」
- 「適合怎麼吃？」
- 「產地在哪裡？」

**Step 6: Commit**
```bash
git add api-mvp web-mvp
git commit -m "feat: add ai ask flow for product pages"
```

---

### Task 11: Add Docker Compose for local full-stack run

**Objective:** 本機可一鍵起前後端與資料庫。

**Files:**
- Create: `infra/docker-compose.yml`
- Create: `api-mvp/.env.example`
- Create: `web-mvp/.env.example`

**Step 1: Write compose file**
Services:
- postgres
- api-mvp
- web-mvp

**Step 2: Verify startup**
Run:
```bash
docker compose -f infra/docker-compose.yml up --build
```
Expected:
- frontend on expected port
- api on expected port
- db healthy

**Step 3: Commit**
```bash
git add infra api-mvp/.env.example web-mvp/.env.example
git commit -m "chore: add docker compose for nantou food mvp"
```

---

## 7. Verification checklist

- [ ] 現有 root 競賽版檔案未被覆寫
- [ ] `web-mvp/` 可獨立啟動
- [ ] `api-mvp/` 可獨立啟動
- [ ] 首頁、產品列表、產品詳情、QR 路由可用
- [ ] `POST /api/v1/ai/ask` 有可測試回應
- [ ] AI 回答不會捏造履歷資訊
- [ ] Docker Compose 可本機啟動全套服務

---

## 8. Immediate next move

**Recommended first implementation batch:**
1. Task 1（architecture note）
2. Task 2（bootstrap `web-mvp`）
3. Task 3（seed data）
4. Task 4（homepage）
5. Task 5（product list）

先把 **內容網站骨架與導航** 做出來，再接產品頁與 AI。
