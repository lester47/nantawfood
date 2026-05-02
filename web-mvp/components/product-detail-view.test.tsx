import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ProductDetailView } from "@/components/product-detail-view";
import { getProductBySlug, getTraceabilityByProductCode } from "@/lib/products";

const product = getProductBySlug("puli-guava");
const traceability = getTraceabilityByProductCode("NT-PULI-GUAVA-001");

describe("ProductDetailView", () => {
  it("renders product story and traceability blocks", () => {
    if (!product || !traceability) {
      throw new Error("Expected seed product and traceability to exist");
    }

    render(<ProductDetailView product={product} traceability={traceability} />);

    expect(
      screen.getByRole("heading", { level: 1, name: "埔里芭樂" }),
    ).toBeInTheDocument();
    expect(screen.getByText(/埔里芭樂常出現在在地市場/)).toBeInTheDocument();
    expect(screen.getByText(traceability.originFarmName)).toBeInTheDocument();
    expect(screen.getByText(traceability.cultivationMethod)).toBeInTheDocument();
  });
});
