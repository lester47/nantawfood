import { NextResponse } from "next/server";

import {
  BackendApiError,
  fetchBackendJson,
  normalizeTraceability,
  type BackendTraceabilityRecord,
} from "@/lib/backend-api";

export async function GET(
  _request: Request,
  context: RouteContext<"/api/traceability/[productCode]">,
) {
  const { productCode } = await context.params;

  try {
    const payload = await fetchBackendJson<{ traceability: BackendTraceabilityRecord }>(
      `/traceability/${productCode}`,
    );

    return NextResponse.json({
      traceability: normalizeTraceability(payload.traceability),
    });
  } catch (error) {
    if (error instanceof BackendApiError) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    }

    return NextResponse.json({ error: "Failed to load traceability" }, { status: 502 });
  }
}
