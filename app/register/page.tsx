import Link from "next/link";
import { User, Briefcase, Building2, ArrowRight, Sparkles } from "lucide-react";

const roles = [
  {
    icon: User,
    title: "I need help",
    desc: "Book vetted cleaners, handymen, carers, tutors and more near you or online.",
    href: "/register/customer",
    cta: "Sign up as a customer",
    tone: "brand",
  },
  {
    icon: Briefcase,
    title: "I'm a provider",
    desc: "Offer your services, set your rates and grow your business with new customers.",
    href: "/register/provider",
    cta: "Become a provider",
    tone: "slate",
  },
  {
    icon: Building2,
    title: "We're an agency",
    desc: "Manage bookings for clients, refer providers and earn commission with full tracking.",
    href: "/register/agency",
    cta: "Register an agency",
    tone: "slate",
  },
];

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-50/60 to-white">
      <div className="mx-auto max-w-4xl px-4 py-16">
        <Link href="/" className="mb-10 flex items-center justify-center gap-2 font-display text-xl font-extrabold text-slate-900">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white">
            <Sparkles size={18} />
          </span>
          Servana
        </Link>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            How would you like to join?
          </h1>
          <p className="mt-3 text-lg text-slate-500">Choose the option that best describes you to get started.</p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {roles.map((r) => (
            <Link
              key={r.title}
              href={r.href}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-card-hover"
            >
              <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${r.tone === "brand" ? "bg-brand-600 text-white" : "bg-slate-900 text-white"}`}>
                <r.icon size={22} />
              </span>
              <h2 className="mt-4 font-display text-lg font-bold text-slate-900">{r.title}</h2>
              <p className="mt-1.5 flex-1 text-sm text-slate-500">{r.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                {r.cta} <ArrowRight size={15} className="transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          Already have an account? <Link href="/login" className="font-semibold text-brand-700 hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
}
