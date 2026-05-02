export function SectionTitle({
  eyebrow,
  title,
  description,
  level = "h2",
}: {
  eyebrow: string;
  title: string;
  description: string;
  level?: "h1" | "h2";
}) {
  const HeadingTag = level;

  return (
    <div className="max-w-3xl space-y-3">
      <p className="text-sm font-semibold tracking-[0.24em] text-emerald-700 uppercase">
        {eyebrow}
      </p>
      <HeadingTag className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
        {title}
      </HeadingTag>
      <p className="text-base leading-7 text-slate-600 md:text-lg">{description}</p>
    </div>
  );
}
