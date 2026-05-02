import { afterEach, describe, expect, it, vi } from "vitest";

import { GET } from "@/app/api/products/route";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("GET /api/products", () => {
  it("proxies FastAPI products and normalizes them to frontend shape", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        products: [
          {
            slug: "puli-guava",
            product_code: "NT-PULI-GUAVA-001",
            name_zh: "埔里芭樂",
            township_slug: "puli",
            township_name_zh: "埔里鎮",
            category: "fruit",
            season_note: "夏秋為主",
            short_intro: "埔里盆地日夜溫差穩定。",
            story: "埔里芭樂故事",
            nutrition_note: "維生素 C",
            eating_tip: "鮮食",
            is_published: true,
            featured_question: "為什麼適合食農課？",
          },
        ],
      }),
    });

    vi.stubGlobal("fetch", fetchMock);

    const response = await GET();
    const payload = await response.json();

    expect(response.status).toBe(200);
    expect(fetchMock).toHaveBeenCalledWith("http://127.0.0.1:8000/api/v1/products", {
      cache: "no-store",
      headers: { Accept: "application/json" },
    });
    expect(payload.products[0]).toEqual(
      expect.objectContaining({
        slug: "puli-guava",
        productCode: "NT-PULI-GUAVA-001",
        nameZh: "埔里芭樂",
        townshipSlug: "puli",
        townshipNameZh: "埔里鎮",
      }),
    );
  });

  it("maps backend detail/error message and status when proxy fails", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: false,
      status: 503,
      json: async () => ({ error: "Backend overloaded" }),
    });

    vi.stubGlobal("fetch", fetchMock);

    const response = await GET();
    const payload = await response.json();

    expect(response.status).toBe(503);
    expect(payload.error).toBe("Backend overloaded");
  });

  it("returns 502 when unexpected fetch error happens", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("network down")));

    const response = await GET();
    const payload = await response.json();

    expect(response.status).toBe(502);
    expect(payload.error).toMatch(/failed to load products/i);
  });
});
