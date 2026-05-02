import { NextResponse } from "next/server";

import { BackendApiError, fetchBackendJson, normalizeProduct, type BackendProductRecord } from "@/lib/backend-api";

export async function GET() {
  try {
    const payload = await fetchBackendJson<{ products: BackendProductRecord[] }>("/products");

    return NextResponse.json({
      products: payload.products.map(normalizeProduct),
    });
  } catch (error) {
    if (error instanceof BackendApiError) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    }

    return NextResponse.json({ error: "Failed to load products" }, { status: 502 });
  }
}
