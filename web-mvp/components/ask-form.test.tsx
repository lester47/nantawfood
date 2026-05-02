import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { AskForm } from "@/components/ask-form";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("AskForm", () => {
  it("submits a question to the AI mock API and renders the answer", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        answer: "埔里芭樂適合用來做產地到餐桌的入門教材。",
        sources: ["seed:nantou-food"],
      }),
    });

    vi.stubGlobal("fetch", fetchMock);

    render(<AskForm />);

    fireEvent.change(screen.getByLabelText(/想問哪一項食材/i), {
      target: { value: "puli-guava" },
    });
    fireEvent.change(screen.getByLabelText(/你的問題/i), {
      target: { value: "它為什麼適合食農課？" },
    });
    fireEvent.click(screen.getByRole("button", { name: /送出問題/i }));

    await waitFor(() => {
      expect(screen.getByText(/埔里芭樂適合用來做產地到餐桌的入門教材/)).toBeInTheDocument();
    });

    expect(fetchMock).toHaveBeenCalledWith("/api/ai/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        productSlug: "puli-guava",
        question: "它為什麼適合食農課？",
      }),
    });
  });
});
