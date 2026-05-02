import { afterEach, describe, expect, it, vi } from "vitest";

import { GET } from "@/app/api/products/[slug]/route";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("GET /api/products/[slug]", () => {
  it("returns a normalized product when the backend slug exists", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        product: {
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
      }),
    });

    vi.stubGlobal("fetch", fetchMock);

    const response = await GET(new Request("http://localhost/api/products/puli-guava"), {
      params: Promise.resolve({ slug: "puli-guava" }),
    });
    const payload = await response.json();

    expect(response.status).toBe(200);
    expect(payload.product.nameZh).toBe("埔里芭樂");
    expect(payload.product.productCode).toBe("NT-PULI-GUAVA-001");
  });

  it("returns backend 404 details when the slug does not exist", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: false,
      status: 404,
      json: async () => ({ detail: "Product not found" }),
    });

    vi.stubGlobal("fetch", fetchMock);

    const response = await GET(new Request("http://localhost/api/products/missing"), {
      params: Promise.resolve({ slug: "missing" }),
    });
    const payload = await response.json();

    expect(response.status).toBe(404);
    expect(payload.error).toMatch(/product not found/i);
  });

  it("returns 502 when backend fetch throws unexpected error", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("socket closed")));

    const response = await GET(new Request("http://localhost/api/products/puli-guava"), {
      params: Promise.resolve({ slug: "puli-guava" }),
    });
    const payload = await response.json();

    expect(response.status).toBe(502);
    expect(payload.error).toMatch(/failed to load product/i);
  });
});
