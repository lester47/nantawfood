import { render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import ProductsPage from "@/app/products/page";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("ProductsPage", () => {
  it("renders the catalog heading and loads representative Nantou products from the API", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({
          products: [
            {
              slug: "puli-guava",
              productCode: "NT-PULI-GUAVA-001",
              nameZh: "埔里芭樂",
              townshipNameZh: "埔里鎮",
              townshipSlug: "puli",
              category: "fruit",
              seasonNote: "夏秋為主",
              shortIntro: "埔里盆地日夜溫差穩定。",
              story: "故事",
              nutritionNote: "維生素 C",
              eatingTip: "鮮食",
              isPublished: true,
              featuredQuestion: "為什麼適合食農課？",
            },
            {
              slug: "lugu-oolong-tea",
              productCode: "NT-LUGU-TEA-001",
              nameZh: "鹿谷凍頂烏龍茶",
              townshipNameZh: "鹿谷鄉",
              townshipSlug: "lugu",
              category: "tea",
              seasonNote: "春冬茶風味最具代表性。",
              shortIntro: "高海拔與雲霧環境。",
              story: "故事",
              nutritionNote: "茶多酚",
              eatingTip: "冷泡",
              isPublished: true,
              featuredQuestion: "故事怎麼講？",
            },
            {
              slug: "caotun-rice",
              productCode: "NT-CAOTUN-RICE-001",
              nameZh: "草屯稻米",
              townshipNameZh: "草屯鎮",
              townshipSlug: "caotun",
              category: "grain",
              seasonNote: "一期二期稻作",
              shortIntro: "平原水源穩定。",
              story: "故事",
              nutritionNote: "碳水化合物",
              eatingTip: "飯糰",
              isPublished: true,
              featuredQuestion: "如何串履歷？",
            },
          ],
        }),
      }),
    );

    render(<ProductsPage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /南投代表食材列表/i,
      }),
    ).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("埔里芭樂")).toBeInTheDocument();
    });

    expect(screen.getByText("鹿谷凍頂烏龍茶")).toBeInTheDocument();
    expect(screen.getByText("草屯稻米")).toBeInTheDocument();
  });
});
