"use client";

import { useState } from "react";

const productOptions = [
  { value: "puli-guava", label: "埔里芭樂" },
  { value: "lugu-oolong-tea", label: "鹿谷凍頂烏龍茶" },
  { value: "caotun-rice", label: "草屯稻米" },
  { value: "yuchi-black-tea", label: "魚池紅茶" },
];

type AskResponse = {
  answer: string;
  sources: string[];
};

export function AskForm() {
  const [productSlug, setProductSlug] = useState(productOptions[0].value);
  const [question, setQuestion] = useState("這項食材為什麼適合食農課？");
  const [status, setStatus] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const [answer, setAnswer] = useState<AskResponse | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/ai/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productSlug, question }),
      });

      if (!response.ok) {
        throw new Error("AI ask failed");
      }

      const payload = (await response.json()) as AskResponse;
      setAnswer(payload);
      setStatus("ready");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-slate-900" htmlFor="product-slug">
          想問哪一項食材？
        </label>
        <select
          id="product-slug"
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900"
          onChange={(event) => setProductSlug(event.target.value)}
          value={productSlug}
        >
          {productOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-slate-900" htmlFor="question">
          你的問題
        </label>
        <textarea
          id="question"
          className="min-h-32 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900"
          onChange={(event) => setQuestion(event.target.value)}
          value={question}
        />
      </div>

      <button
        className="rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-emerald-300"
        disabled={status === "loading"}
        type="submit"
      >
        {status === "loading" ? "送出中…" : "送出問題"}
      </button>

      {status === "ready" && answer ? (
        <div className="rounded-[1.5rem] border border-emerald-100 bg-emerald-50/60 p-5">
          <h2 className="text-lg font-semibold text-slate-900">AI 回答（stub）</h2>
          <p className="mt-3 text-base leading-7 text-slate-700">{answer.answer}</p>
          <p className="mt-3 text-sm text-slate-500">來源：{answer.sources.join(", ")}</p>
        </div>
      ) : null}

      {status === "error" ? (
        <p className="text-sm text-rose-600">AI 問答暫時失敗，請稍後再試。</p>
      ) : null}
    </form>
  );
}
