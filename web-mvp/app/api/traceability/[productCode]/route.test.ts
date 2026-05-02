import { afterEach, describe, expect, it, vi } from "vitest";

import { GET } from "@/app/api/traceability/[productCode]/route";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("GET /api/traceability/[productCode]", () => {
  it("returns normalized traceability data for a known product code", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        traceability: {
          product_code: "NT-PULI-GUAVA-001",
          origin_farm_name: "埔里示範果園",
          farmer_name: "王小明",
          cultivation_method: "友善栽培",
          harvest_window: "7-10 月",
          certification_note: "示範履歷",
          source_url: "https://example.com",
          updated_at: "2026-05-02",
        },
      }),
    });

    vi.stubGlobal("fetch", fetchMock);

    const response = await GET(
      new Request("http://localhost/api/traceability/NT-PULI-GUAVA-001"),
      {
        params: Promise.resolve({ productCode: "NT-PULI-GUAVA-001" }),
      },
    );
    const payload = await response.json();

    expect(response.status).toBe(200);
    expect(payload.traceability.productCode).toBe("NT-PULI-GUAVA-001");
    expect(payload.traceability.originFarmName).toBe("埔里示範果園");
  });

  it("maps backend error message and status for missing traceability", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: false,
      status: 404,
      json: async () => ({ detail: "Traceability not found" }),
    });

    vi.stubGlobal("fetch", fetchMock);

    const response = await GET(new Request("http://localhost/api/traceability/missing"), {
      params: Promise.resolve({ productCode: "missing" }),
    });
    const payload = await response.json();

    expect(response.status).toBe(404);
    expect(payload.error).toMatch(/traceability not found/i);
  });
});
