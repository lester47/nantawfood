"use client";

import { useEffect, useState } from "react";

import { ProductCard } from "@/components/product-card";
import type { Product } from "@/lib/types";

export function ProductsCatalogClient() {
  const [products, setProducts] = useState<Product[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let active = true;

    async function loadProducts() {
      try {
        const response = await fetch("/api/products", { cache: "no-store" });

        if (!response.ok) {
          throw new Error("Failed to load products");
        }

        const payload = (await response.json()) as { products: Product[] };

        if (active) {
          setProducts(payload.products);
          setStatus("ready");
        }
      } catch {
        if (active) {
          setStatus("error");
        }
      }
    }

    loadProducts();

    return () => {
      active = false;
    };
  }, []);

  if (status === "loading") {
    return <p className="text-base text-slate-500">載入食材資料中…</p>;
  }

  if (status === "error") {
    return <p className="text-base text-rose-600">食材資料載入失敗，請稍後再試。</p>;
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
