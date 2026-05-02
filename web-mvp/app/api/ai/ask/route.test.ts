import { afterEach, describe, expect, it, vi } from "vitest";

import { POST } from "@/app/api/ai/ask/route";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("POST /api/ai/ask", () => {
  it("proxies a product question to FastAPI and returns the answer", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        answer: "埔里芭樂適合用來做產地到餐桌的入門教材。",
        question: "它為什麼適合食農課？",
        sources: ["seed:nantou-food"],
      }),
    });

    vi.stubGlobal("fetch", fetchMock);

    const request = new Request("http://localhost/api/ai/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        productSlug: "puli-guava",
        question: "它為什麼適合食農課？",
      }),
    });

    const response = await POST(request);
    const payload = await response.json();

    expect(response.status).toBe(200);
    expect(fetchMock).toHaveBeenCalledWith("http://127.0.0.1:8000/api/v1/ai/ask", {
      cache: "no-store",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_slug: "puli-guava",
        question: "它為什麼適合食農課？",
      }),
    });
    expect(payload.answer).toMatch(/埔里芭樂/);
    expect(payload.sources).toContain("seed:nantou-food");
  });

  it("returns backend status/error when FastAPI rejects request", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: false,
      status: 422,
      json: async () => ({ detail: "Invalid payload" }),
    });

    vi.stubGlobal("fetch", fetchMock);

    const request = new Request("http://localhost/api/ai/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        productSlug: "puli-guava",
        question: "請提供摘要",
      }),
    });

    const response = await POST(request);
    const payload = await response.json();

    expect(response.status).toBe(422);
    expect(payload.error).toMatch(/invalid payload/i);
  });
});
