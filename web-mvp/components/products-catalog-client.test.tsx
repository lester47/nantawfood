import { render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { ProductsCatalogClient } from "@/components/products-catalog-client";

const productsPayload = {
  products: [
    {
      slug: "puli-guava",
      productCode: "NT-PULI-GUAVA-001",
      nameZh: "埔里芭樂",
      townshipNameZh: "埔里鎮",
      category: "fruit",
      seasonNote: "夏秋為主",
      shortIntro: "埔里盆地日夜溫差穩定。",
      story: "故事",
      nutritionNote: "維生素 C",
      eatingTip: "鮮食",
      isPublished: true,
      featuredQuestion: "為什麼適合食農課？",
    },
  ],
};

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("ProductsCatalogClient", () => {
  it("fetches products from the mock API and renders them", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => productsPayload,
      }),
    );

    render(<ProductsCatalogClient />);

    expect(screen.getByText(/載入食材資料中/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("埔里芭樂")).toBeInTheDocument();
    });

    expect(fetch).toHaveBeenCalledWith("/api/products", { cache: "no-store" });
  });
});
