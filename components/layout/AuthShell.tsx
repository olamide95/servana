import Link from "next/link";
import { Sparkles } from "lucide-react";

export function AuthShell({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Left brand panel */}
      <div className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-brand-600 to-brand-800 p-12 text-white lg:flex">
        <div className="bg-grid absolute inset-0 opacity-10" />
        <Link href="/" className="relative flex items-center gap-2 font-display text-xl font-extrabold">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-brand-700">
            <Sparkles size={18} />
          </span>
          Servana
        </Link>
        <div className="relative">
          <h2 className="font-display text-3xl font-extrabold leading-tight text-balance">
            The UK&apos;s trusted marketplace for local & online help.
          </h2>
          <p className="mt-4 max-w-sm text-brand-50">
            Join 50,000+ households and thousands of verified professionals getting things done on
            Servana.
          </p>
          <div className="mt-8 flex items-center gap-6 text-sm">
            <div><p className="font-display text-2xl font-bold">26+</p><p className="text-brand-100">categories</p></div>
            <div><p className="font-display text-2xl font-bold">4.8★</p><p className="text-brand-100">avg. rating</p></div>
            <div><p className="font-display text-2xl font-bold">10</p><p className="text-brand-100">major cities</p></div>
          </div>
        </div>
        <p className="relative text-xs text-brand-100">© {new Date().getFullYear()} Servana. All rights reserved.</p>
      </div>

      {/* Right content */}
      <div className="flex items-center justify-center bg-white px-4 py-12">
        <div className="w-full max-w-md">
          <Link href="/" className="mb-8 flex items-center gap-2 font-display text-xl font-extrabold text-slate-900 lg:hidden">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white">
              <Sparkles size={18} />
            </span>
            Servana
          </Link>
          <h1 className="font-display text-2xl font-extrabold text-slate-900">{title}</h1>
          {subtitle && <p className="mt-1 text-slate-500">{subtitle}</p>}
          <div className="mt-8">{children}</div>
          {footer && <div className="mt-6 text-center text-sm text-slate-500">{footer}</div>}
        </div>
      </div>
    </div>
  );
}
