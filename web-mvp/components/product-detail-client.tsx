"use client";

import { useEffect, useState } from "react";

import { ProductDetailView } from "@/components/product-detail-view";
import type { Product, TraceabilityRecord } from "@/lib/types";

type State =
  | { status: "loading" }
  | { status: "error" }
  | { status: "ready"; product: Product; traceability: TraceabilityRecord };

export function ProductDetailClient({ slug }: { slug: string }) {
  const [state, setState] = useState<State>({ status: "loading" });

  useEffect(() => {
    let active = true;

    async function loadDetail() {
      try {
        const productResponse = await fetch(`/api/products/${slug}`, { cache: "no-store" });

        if (!productResponse.ok) {
          throw new Error("Failed to load product");
        }

        const productPayload = (await productResponse.json()) as { product: Product };
        const traceabilityResponse = await fetch(
          `/api/traceability/${productPayload.product.productCode}`,
          { cache: "no-store" },
        );

        if (!traceabilityResponse.ok) {
          throw new Error("Failed to load traceability");
        }

        const traceabilityPayload = (await traceabilityResponse.json()) as {
          traceability: TraceabilityRecord;
        };

        if (active) {
          setState({
            status: "ready",
            product: productPayload.product,
            traceability: traceabilityPayload.traceability,
          });
        }
      } catch {
        if (active) {
          setState({ status: "error" });
        }
      }
    }

    loadDetail();

    return () => {
      active = false;
    };
  }, [slug]);

  if (state.status === "loading") {
    return <p className="mx-auto max-w-5xl px-6 py-16 text-base text-slate-500 lg:px-8">載入產品資料中…</p>;
  }

  if (state.status === "error") {
    return <p className="mx-auto max-w-5xl px-6 py-16 text-base text-rose-600 lg:px-8">找不到產品或履歷資料。</p>;
  }

  return <ProductDetailView product={state.product} traceability={state.traceability} />;
}
