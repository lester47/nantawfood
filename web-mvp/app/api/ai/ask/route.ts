import { NextResponse } from "next/server";

import { BackendApiError, fetchBackendJson, type BackendAskResponse } from "@/lib/backend-api";

export async function POST(request: Request) {
  const body = (await request.json()) as {
    productSlug?: string;
    question?: string;
  };

  if (!body.productSlug || !body.question) {
    return NextResponse.json({ error: "Invalid AI ask request" }, { status: 400 });
  }

  try {
    const payload = await fetchBackendJson<BackendAskResponse>("/ai/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        product_slug: body.productSlug,
        question: body.question,
      }),
    });

    return NextResponse.json(payload);
  } catch (error) {
    if (error instanceof BackendApiError) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    }

    return NextResponse.json({ error: "AI ask failed" }, { status: 502 });
  }
}
