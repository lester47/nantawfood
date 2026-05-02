import { describe, expect, it } from "vitest";

import { featuredProducts, publishedProducts, townshipHighlights } from "@/lib/products";

describe("product seed data", () => {
  it("provides at least four published Nantou products for the MVP", () => {
    expect(publishedProducts.length).toBeGreaterThanOrEqual(4);
    expect(publishedProducts.every((product) => product.isPublished)).toBe(true);
  });

  it("exposes featured products that are part of the published catalog", () => {
    expect(featuredProducts).toHaveLength(3);
    expect(featuredProducts.every((product) => publishedProducts.includes(product))).toBe(true);
  });

  it("builds township highlights from the published catalog", () => {
    expect(townshipHighlights).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ slug: "puli", productCount: 1 }),
        expect.objectContaining({ slug: "lugu", productCount: 1 }),
        expect.objectContaining({ slug: "caotun", productCount: 1 }),
      ]),
    );
  });
});
