import { describe, expect, it } from "vitest";

import {
  getProductByCode,
  getProductBySlug,
  getTraceabilityByProductCode,
  resolveProductPathByCode,
} from "@/lib/products";

describe("product lookup helpers", () => {
  it("finds a published product by slug", () => {
    expect(getProductBySlug("puli-guava")?.nameZh).toBe("埔里芭樂");
  });

  it("finds a published product by product code", () => {
    expect(getProductByCode("NT-LUGU-TEA-001")?.slug).toBe("lugu-oolong-tea");
  });

  it("resolves a QR product code into the product path", () => {
    expect(resolveProductPathByCode("NT-CAOTUN-RICE-001")).toBe("/products/caotun-rice");
  });

  it("returns traceability data for a known product code", () => {
    expect(getTraceabilityByProductCode("NT-PULI-GUAVA-001")).toEqual(
      expect.objectContaining({
        originFarmName: expect.any(String),
        farmerName: expect.any(String),
      }),
    );
  });

  it("returns null for unknown product slugs and codes", () => {
    expect(getProductBySlug("missing-product")).toBeNull();
    expect(getProductByCode("MISSING-CODE")).toBeNull();
    expect(resolveProductPathByCode("MISSING-CODE")).toBeNull();
    expect(getTraceabilityByProductCode("MISSING-CODE")).toBeNull();
  });
});
