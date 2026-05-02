import { ProductsCatalogClient } from "@/components/products-catalog-client";
import { SectionTitle } from "@/components/section-title";

export default function ProductsPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-12 lg:px-8 lg:py-16">
      <SectionTitle
        eyebrow="Catalog"
        level="h1"
        title="南投代表食材列表"
        description="第三批已改成由前端向 mock API 取資料，後續只要把 API 換成真正後端即可。"
      />

      <ProductsCatalogClient />
    </div>
  );
}
