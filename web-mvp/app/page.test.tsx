import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import HomePage from "@/app/page";

describe("HomePage", () => {
  it("shows the Nantou food MVP headline and main entry links", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /南投食材探索/i,
      }),
    ).toBeInTheDocument();

    expect(screen.getByRole("link", { name: /瀏覽食材列表/i })).toHaveAttribute(
      "href",
      "/products",
    );
    expect(screen.getByRole("link", { name: /查看 qr 導流規劃/i })).toHaveAttribute(
      "href",
      "/q/demo-product",
    );
  });
});
