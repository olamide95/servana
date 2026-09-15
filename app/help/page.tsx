"use client";

import { useState } from "react";
import { ChevronDown, Search, LifeBuoy, CreditCard, ShieldCheck, UserCog } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { Button } from "@/components/ui/Button";

const topics = [
  { icon: LifeBuoy, title: "Getting started", desc: "Accounts, booking and the basics." },
  { icon: CreditCard, title: "Payments & wallet", desc: "Top-ups, fees, refunds and payouts." },
  { icon: ShieldCheck, title: "Trust & safety", desc: "Verification, disputes and protection." },
  { icon: UserCog, title: "For providers", desc: "Listings, orders and earnings." },
];

const faqs = [
  { q: "How do I book a service?", a: "Search for what you need, choose a provider, pick a date and time, add any extras and confirm your booking. Payment is taken securely through your Servana wallet or card." },
  { q: "Are providers verified?", a: "Yes. Every provider completes identity verification before they can take bookings, and many also upload professional certifications and DBS checks where relevant." },
  { q: "How does the Servana wallet work?", a: "You can top up your wallet and use the balance towards bookings. Refunds and rewards are credited back to your wallet, and you can view every transaction in your dashboard." },
  { q: "What fees does Servana charge?", a: "Customers pay a small service fee on each booking (reduced on paid plans). Providers pay a commission per completed order, which is lower on the Pro plan." },
  { q: "What if something goes wrong with my booking?", a: "Your payment is protected. If there's a problem, you can raise a dispute from your order page and our support team will help resolve it fairly." },
  { q: "How and when do providers get paid?", a: "Payouts are released after a job is marked complete. Pro providers can enable instant payouts; otherwise funds settle to your account on the standard schedule." },
  { q: "Can agencies manage bookings for clients?", a: "Yes. Registered agencies can book on behalf of clients, refer providers and customers, and track commission and payouts from their agency dashboard." },
  { q: "Can I cancel a booking?", a: "You can cancel from your orders page. Free cancellation windows depend on your plan and the provider's policy, which is shown before you confirm." },
];

export default function HelpPage() {
  const [open, setOpen] = useState<number | null>(0);
  const [query, setQuery] = useState("");

  const filtered = faqs.filter(
    (f) => f.q.toLowerCase().includes(query.toLowerCase()) || f.a.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <SiteShell>
      <div className="bg-gradient-to-b from-brand-50/60 to-white">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center">
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            How can we help?
          </h1>
          <div className="mx-auto mt-6 flex max-w-xl items-center gap-2 rounded-full border border-slate-200 bg-white px-4 shadow-card">
            <Search className="h-5 w-5 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search help articles..."
              className="w-full bg-transparent py-3.5 text-sm focus:outline-none"
            />
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-5xl px-4 py-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {topics.map((t) => (
            <div key={t.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
              <t.icon className="h-7 w-7 text-brand-600" />
              <h3 className="mt-3 font-display font-bold text-slate-900">{t.title}</h3>
              <p className="mt-0.5 text-sm text-slate-500">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-12">
        <h2 className="font-display text-2xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-5 space-y-3">
          {filtered.map((f, i) => (
            <div key={f.q} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-semibold text-slate-900">{f.q}</span>
                <ChevronDown className={`h-5 w-5 shrink-0 text-slate-400 transition ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{f.a}</p>}
            </div>
          ))}
          {filtered.length === 0 && (
            <p className="rounded-2xl border border-dashed border-slate-200 p-6 text-center text-sm text-slate-400">
              No articles match &ldquo;{query}&rdquo;. Try a different search.
            </p>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-20">
        <div className="rounded-3xl bg-slate-900 px-8 py-10 text-center text-white">
          <h3 className="font-display text-xl font-bold">Still need help?</h3>
          <p className="mx-auto mt-2 max-w-md text-slate-300">Our support team is here for you every day.</p>
          <div className="mt-5">
            <Button href="/dashboard/customer" variant="secondary" className="bg-white text-slate-900 hover:bg-slate-100">
              Contact support
            </Button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
