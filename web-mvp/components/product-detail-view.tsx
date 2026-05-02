import type { Product, TraceabilityRecord } from "@/lib/types";

export function ProductDetailView({
  product,
  traceability,
}: {
  product: Product;
  traceability: TraceabilityRecord;
}) {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12 lg:px-8 lg:py-16">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <section className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-lg shadow-slate-950/10">
          <p className="text-sm font-semibold tracking-[0.24em] text-emerald-300 uppercase">
            Product Story
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight">{product.nameZh}</h1>
          <p className="mt-3 text-base font-medium text-emerald-200">
            {product.townshipNameZh}・{product.productCode}
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-200">{product.shortIntro}</p>
          <div className="mt-8 space-y-6 rounded-[1.5rem] bg-white/8 p-6 backdrop-blur">
            <div>
              <h2 className="text-lg font-semibold">產地故事</h2>
              <p className="mt-2 text-base leading-7 text-slate-200">{product.story}</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <h2 className="text-lg font-semibold">當季資訊</h2>
                <p className="mt-2 text-base leading-7 text-slate-200">{product.seasonNote}</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold">食用建議</h2>
                <p className="mt-2 text-base leading-7 text-slate-200">{product.eatingTip}</p>
              </div>
            </div>
          </div>
        </section>

        <aside className="rounded-[2rem] border border-emerald-100 bg-white p-8 shadow-sm shadow-emerald-950/5">
          <p className="text-sm font-semibold tracking-[0.24em] text-emerald-700 uppercase">
            Traceability
          </p>
          <h2 className="mt-4 text-2xl font-semibold text-slate-900">履歷摘要</h2>
          <dl className="mt-6 space-y-5 text-sm text-slate-600">
            <div>
              <dt className="font-semibold text-slate-900">產地農場</dt>
              <dd className="mt-1">{traceability.originFarmName}</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">農友</dt>
              <dd className="mt-1">{traceability.farmerName}</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">栽培方式</dt>
              <dd className="mt-1">{traceability.cultivationMethod}</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">採收期</dt>
              <dd className="mt-1">{traceability.harvestWindow}</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">履歷備註</dt>
              <dd className="mt-1">{traceability.certificationNote}</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">更新日期</dt>
              <dd className="mt-1">{traceability.updatedAt}</dd>
            </div>
          </dl>
          <a
            className="mt-8 inline-flex rounded-full border border-emerald-200 px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:border-emerald-400"
            href={traceability.sourceUrl}
            rel="noreferrer"
            target="_blank"
          >
            查看履歷來源
          </a>
        </aside>
      </div>
    </div>
  );
}
