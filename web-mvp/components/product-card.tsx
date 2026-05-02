import Link from "next/link";

import type { Product } from "@/lib/types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm shadow-emerald-950/5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold tracking-wide text-emerald-700">
          {product.townshipNameZh}
        </span>
        <span className="text-xs font-medium tracking-wide text-slate-500">
          {product.productCode}
        </span>
      </div>

      <div className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">{product.nameZh}</h2>
        <p className="text-sm leading-6 text-slate-600">{product.shortIntro}</p>
      </div>

      <dl className="mt-5 space-y-3 text-sm text-slate-600">
        <div>
          <dt className="font-semibold text-slate-900">當季資訊</dt>
          <dd>{product.seasonNote}</dd>
        </div>
        <div>
          <dt className="font-semibold text-slate-900">推薦問答</dt>
          <dd>{product.featuredQuestion}</dd>
        </div>
      </dl>

      <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium">
        <Link
          className="rounded-full bg-emerald-600 px-4 py-2 text-white transition hover:bg-emerald-700"
          href={`/products/${product.slug}`}
        >
          查看詳情
        </Link>
        <Link
          className="rounded-full border border-emerald-200 px-4 py-2 text-emerald-700 transition hover:border-emerald-400"
          href={`/q/${product.productCode}`}
        >
          QR 導流預覽
        </Link>
      </div>
    </article>
  );
}
