import { NextResponse } from "next/server";

import { BackendApiError, fetchBackendJson, normalizeProduct, type BackendProductRecord } from "@/lib/backend-api";

export async function GET(_request: Request, context: RouteContext<"/api/products/[slug]">) {
  const { slug } = await context.params;

  try {
    const payload = await fetchBackendJson<{ product: BackendProductRecord }>(`/products/${slug}`);

    return NextResponse.json({
      product: normalizeProduct(payload.product),
    });
  } catch (error) {
    if (error instanceof BackendApiError) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    }

    return NextResponse.json({ error: "Failed to load product" }, { status: 502 });
  }
}
