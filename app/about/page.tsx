import { SiteShell } from "@/components/layout/SiteShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Target, Heart, Users, Sparkles, ArrowRight } from "lucide-react";

const stats = [
  { value: "50k+", label: "Households served" },
  { value: "12k+", label: "Verified providers" },
  { value: "26", label: "Service categories" },
  { value: "4.8★", label: "Average rating" },
];

const values = [
  { icon: Target, title: "Reliability first", desc: "We obsess over trust — vetting providers and protecting every booking so you never worry." },
  { icon: Heart, title: "People over transactions", desc: "Behind every booking is a person. We build for real relationships, not just clicks." },
  { icon: Users, title: "Opportunity for all", desc: "We help skilled people across the UK build sustainable businesses on their own terms." },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="bg-grid absolute inset-0 opacity-10" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-sm font-semibold">
            <Sparkles size={15} /> Our story
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight sm:text-5xl text-balance">
            We&apos;re making local help effortless and trustworthy
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
            Servana started with a simple frustration: finding reliable help shouldn&apos;t be a
            gamble. So we built a marketplace where every professional is verified, every payment is
            protected, and every review is real.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-4 py-12 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl font-extrabold text-brand-600 sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading eyebrow="Our mission" title="Trusted help, on demand, for everyone" />
            <p className="mt-4 leading-relaxed text-slate-600">
              From a one-off deep clean to ongoing care for a loved one or weekly maths tutoring, life
              runs on the small jobs that keep everything moving. Our mission is to connect UK
              households with the right professional for every one of those jobs — quickly, safely and
              fairly.
            </p>
            <p className="mt-3 leading-relaxed text-slate-600">
              We invest heavily in verification, secure payments and genuine reviews so that trust is
              never the bottleneck. And we give providers and agencies the tools to grow real
              businesses on the platform.
            </p>
            <div className="mt-6 flex gap-3">
              <Button href="/services">Find help <ArrowRight size={16} /></Button>
              <Button href="/register/provider" variant="outline">Join as a pro</Button>
            </div>
          </div>
          <div className="grid gap-4">
            {values.map((v) => (
              <div key={v.title} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <v.icon size={22} />
                </span>
                <div>
                  <h3 className="font-display font-bold text-slate-900">{v.title}</h3>
                  <p className="mt-0.5 text-sm text-slate-500">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
