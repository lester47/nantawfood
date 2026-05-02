import Link from "next/link";

const navLinks = [
  { href: "/", label: "首頁" },
  { href: "/products", label: "產品列表" },
  { href: "/ask", label: "AI 問答" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-emerald-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex flex-col">
          <span className="text-sm font-semibold tracking-[0.24em] text-emerald-700">
            NANTOU FOOD MVP
          </span>
          <span className="text-lg font-bold text-slate-900">南投食材網站</span>
        </Link>

        <nav aria-label="主要導覽">
          <ul className="flex items-center gap-5 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link className="transition hover:text-emerald-700" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
