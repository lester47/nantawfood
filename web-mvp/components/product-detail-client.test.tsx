import { render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { ProductDetailClient } from "@/components/product-detail-client";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("ProductDetailClient", () => {
  it("fetches product detail and traceability before rendering the detail view", async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          product: {
            slug: "puli-guava",
            productCode: "NT-PULI-GUAVA-001",
            nameZh: "埔里芭樂",
            townshipSlug: "puli",
            townshipNameZh: "埔里鎮",
            category: "fruit",
            seasonNote: "夏秋為主",
            shortIntro: "埔里盆地日夜溫差穩定。",
            story: "埔里芭樂故事",
            nutritionNote: "維生素 C",
            eatingTip: "鮮食",
            isPublished: true,
            featuredQuestion: "為什麼適合食農課？",
          },
        }),
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          traceability: {
            productCode: "NT-PULI-GUAVA-001",
            originFarmName: "埔里示範果園",
            farmerName: "王小明",
            cultivationMethod: "友善栽培",
            harvestWindow: "7-10 月",
            certificationNote: "示範履歷",
            sourceUrl: "https://example.com",
            updatedAt: "2026-05-02",
          },
        }),
      });

    vi.stubGlobal("fetch", fetchMock);

    render(<ProductDetailClient slug="puli-guava" />);

    expect(screen.getByText(/載入產品資料中/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByRole("heading", { level: 1, name: "埔里芭樂" })).toBeInTheDocument();
    });

    expect(fetchMock).toHaveBeenNthCalledWith(1, "/api/products/puli-guava", { cache: "no-store" });
    expect(fetchMock).toHaveBeenNthCalledWith(2, "/api/traceability/NT-PULI-GUAVA-001", {
      cache: "no-store",
    });
  });
});
