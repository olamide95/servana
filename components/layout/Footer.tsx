import Link from "next/link";
import { Sparkles } from "lucide-react";
import { categoryGroups } from "@/lib/data";

const footerCols = [
  {
    title: "Marketplace",
    links: [
      { href: "/services", label: "Browse services" },
      { href: "/how-it-works", label: "How it works" },
      { href: "/pricing", label: "Pricing & commission" },
      { href: "/help", label: "Help & FAQ" },
    ],
  },
  {
    title: "For providers",
    links: [
      { href: "/register/provider", label: "Become a provider" },
      { href: "/dashboard/provider", label: "Provider dashboard" },
      { href: "/dashboard/provider/onboarding", label: "Get verified" },
      { href: "/pricing", label: "Provider fees" },
    ],
  },
  {
    title: "For agencies",
    links: [
      { href: "/register/agency", label: "Register an agency" },
      { href: "/dashboard/agency", label: "Agency dashboard" },
      { href: "/dashboard/agency/referrals", label: "Referral programme" },
      { href: "/dashboard/agency/commissions", label: "Commissions" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Servana" },
      { href: "/help", label: "Contact & support" },
      { href: "/help", label: "Trust & safety" },
      { href: "/help", label: "Terms & privacy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white">
                <Sparkles size={18} />
              </span>
              <span className="font-display text-xl font-extrabold text-slate-900">Servana</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-slate-500">
              The UK marketplace for trusted local and online services — from cleaning and care to
              trades, professional support and tutoring.
            </p>
            <p className="mt-4 text-xs text-slate-400">
              Categories across {categoryGroups.length} groups, available nationwide.
            </p>
          </div>
          {footerCols.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold text-slate-900">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm text-slate-500 transition hover:text-brand-700">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Servana Ltd. Registered in England & Wales.</p>
          <p className="text-sm text-slate-400">Made for the UK · Prices shown in £ GBP</p>
        </div>
      </div>
    </footer>
  );
}
