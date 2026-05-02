import Link from "next/link";

import { ProductCard } from "@/components/product-card";
import { SectionTitle } from "@/components/section-title";
import { featuredProducts, publishedProducts, townshipHighlights } from "@/lib/products";

export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 py-12 lg:px-8 lg:py-16">
      <section className="grid gap-8 rounded-[2rem] bg-slate-900 px-8 py-10 text-white shadow-lg shadow-slate-950/10 lg:grid-cols-[1.3fr_0.9fr] lg:px-10 lg:py-14">
        <div className="space-y-6">
          <p className="text-sm font-semibold tracking-[0.28em] text-emerald-300 uppercase">
            Phase 1 / Web MVP
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
            南投食材探索
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-200">
            先用首頁、產品列表與 QR 導流雛形，把南投代表食材、鄉鎮故事與履歷脈絡整理成一個可展示的網站 MVP。
          </p>
          <div className="flex flex-wrap gap-4 text-sm font-semibold">
            <Link
              className="rounded-full bg-emerald-400 px-5 py-3 text-slate-950 transition hover:bg-emerald-300"
              href="/products"
            >
              瀏覽食材列表
            </Link>
            <Link
              className="rounded-full border border-white/20 px-5 py-3 text-white transition hover:border-emerald-300 hover:text-emerald-200"
              href="/q/demo-product"
            >
              查看 QR 導流規劃
            </Link>
          </div>
        </div>

        <div className="grid gap-4 rounded-[1.5rem] bg-white/8 p-5 backdrop-blur">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-emerald-200">目前已上架食材</p>
            <p className="mt-3 text-4xl font-bold">{publishedProducts.length}</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-emerald-200">代表鄉鎮</p>
            <p className="mt-3 text-4xl font-bold">{townshipHighlights.length}</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-emerald-200">下一批銜接</p>
            <p className="mt-3 text-base leading-7 text-slate-200">
              產品詳情、QR route、FastAPI 與 AI 問答頁。
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionTitle
          eyebrow="Featured"
          title="先把最有代表性的食材放上首頁"
          description="這一批先用假資料建立內容結構，讓後續接實際圖片、履歷來源與 API 時不需要重做版型。"
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_1.15fr] lg:items-start">
        <div className="rounded-[2rem] border border-emerald-100 bg-white p-8 shadow-sm shadow-emerald-950/5">
          <SectionTitle
            eyebrow="Townships"
            title="把鄉鎮故事先整理成可閱讀區塊"
            description="未來可以在這裡接上地圖、產區照片與教學現場活動說明。"
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {townshipHighlights.map((township) => (
            <article
              key={township.slug}
              className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6"
            >
              <p className="text-sm font-semibold tracking-wide text-emerald-700">
                {township.nameZh}
              </p>
              <p className="mt-3 text-base leading-7 text-slate-600">{township.summary}</p>
              <p className="mt-4 text-sm font-medium text-slate-500">
                已納入 {township.productCount} 項代表食材
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
