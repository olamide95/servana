"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { categories } from "@/lib/data";

const primaryLinks = [
  { href: "/services", label: "Browse services" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const topCategories = categories.slice(0, 8);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/85 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white">
            <Sparkles size={18} />
          </span>
          <span className="font-display text-xl font-extrabold tracking-tight text-slate-900">
            Servana
          </span>
        </Link>

        <div className="relative hidden lg:block">
          <button
            onClick={() => setCatOpen((v) => !v)}
            onBlur={() => setTimeout(() => setCatOpen(false), 150)}
            className="flex items-center gap-1 rounded-lg px-2 py-1.5 text-sm font-semibold text-slate-600 hover:text-slate-900"
          >
            Categories <ChevronDown size={15} className={catOpen ? "rotate-180 transition" : "transition"} />
          </button>
          {catOpen && (
            <div className="absolute left-0 top-full mt-2 w-[520px] rounded-2xl border border-slate-100 bg-white p-3 shadow-card-hover">
              <div className="grid grid-cols-2 gap-1">
                {topCategories.map((c) => (
                  <Link
                    key={c.id}
                    href={`/categories/${c.slug}`}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-brand-700"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
              <Link href="/services" className="mt-2 block rounded-lg bg-slate-50 px-3 py-2 text-sm font-semibold text-brand-700">
                View all categories →
              </Link>
            </div>
          )}
        </div>

        <nav className="hidden items-center gap-1 lg:flex">
          {primaryLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-1.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-2 lg:flex">
          <Link href="/services" className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100">
            <Search size={18} />
          </Link>
          <Button href="/login" variant="ghost" size="sm">Log in</Button>
          <Button href="/register" size="sm">Join Servana</Button>
        </div>

        <button
          className="ml-auto flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {primaryLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="mt-3 flex flex-col gap-2 border-t border-slate-100 pt-3">
            <Button href="/login" variant="outline" size="md">Log in</Button>
            <Button href="/register" size="md">Join Servana</Button>
          </div>
        </div>
      )}
    </header>
  );
}
