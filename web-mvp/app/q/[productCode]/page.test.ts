import { describe, expect, it, vi } from "vitest";

const redirectMock = vi.fn();
const resolveProductPathByCodeMock = vi.fn();

vi.mock("next/navigation", () => ({
  redirect: (path: string) => redirectMock(path),
}));

vi.mock("@/lib/products", () => ({
  resolveProductPathByCode: (productCode: string) => resolveProductPathByCodeMock(productCode),
}));

import QrLandingPage from "@/app/q/[productCode]/page";

describe("QrLandingPage", () => {
  it("redirects to product detail path when product code can be resolved", async () => {
    resolveProductPathByCodeMock.mockReturnValue("/products/puli-guava");

    await QrLandingPage({
      params: Promise.resolve({ productCode: "NT-PULI-GUAVA-001" }),
    });

    expect(resolveProductPathByCodeMock).toHaveBeenCalledWith("NT-PULI-GUAVA-001");
    expect(redirectMock).toHaveBeenCalledWith("/products/puli-guava");
  });

  it("redirects to /products when product code is unknown", async () => {
    resolveProductPathByCodeMock.mockReturnValue(null);

    await QrLandingPage({
      params: Promise.resolve({ productCode: "UNKNOWN" }),
    });

    expect(resolveProductPathByCodeMock).toHaveBeenCalledWith("UNKNOWN");
    expect(redirectMock).toHaveBeenCalledWith("/products");
  });
});
