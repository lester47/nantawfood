import { AskForm } from "@/components/ask-form";

export default function AskPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold tracking-[0.24em] text-emerald-700 uppercase">
          AI Ask Stub
        </p>
        <h1 className="mt-4 text-3xl font-semibold text-slate-900">南投食材 AI 問答</h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          這一批先把問答介面與 stub API 串起來，下一批再接真正的 FastAPI / Gemini 流程。
        </p>
        <div className="mt-8">
          <AskForm />
        </div>
      </div>
    </div>
  );
}
