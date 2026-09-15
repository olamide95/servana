import Link from "next/link";
import {
  ShieldCheck, Wallet, Star, Users, ArrowRight, BadgeCheck,
  Search, CalendarCheck, Sparkles, Building2,
} from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { HeroSearch } from "@/components/marketplace/HeroSearch";
import { ServiceCard } from "@/components/marketplace/ServiceCard";
import { ProviderCard } from "@/components/marketplace/ProviderCard";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredServices, categories, providers } from "@/lib/data";

const popularCategories = categories.slice(0, 12);
const topProviders = [...providers].sort((a, b) => b.rating - a.rating).slice(0, 3);

const trustItems = [
  { icon: ShieldCheck, title: "Vetted & verified", desc: "Every provider is ID-checked and reviewed before they can take bookings." },
  { icon: Wallet, title: "Secure payments", desc: "Pay safely in the app with wallet top-ups and a buyer-protected balance." },
  { icon: Star, title: "Real reviews", desc: "Honest ratings from verified bookings help you choose with confidence." },
  { icon: Users, title: "Local & online", desc: "Find trusted help on your doorstep or expert services delivered online." },
];

const steps = [
  { icon: Search, title: "Search & compare", desc: "Browse thousands of local and online services, filtered by price, rating and availability." },
  { icon: CalendarCheck, title: "Book in minutes", desc: "Pick a time, add any extras and confirm — pay securely through your Servana wallet." },
  { icon: Sparkles, title: "Get it done", desc: "Your provider arrives or joins online, completes the job, and you leave a review." },
];

export default function HomePage() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/60 to-white">
        <div className="bg-dotted absolute inset-0 opacity-[0.4]" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1 text-sm font-semibold text-brand-700 shadow-sm">
              <BadgeCheck size={15} /> Trusted by 50,000+ UK households
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl text-balance">
              Find trusted local help for{" "}
              <span className="text-brand-600">anything</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-slate-500 text-balance">
              From cleaning and handymen to carers and online tutors — book vetted professionals
              across the UK in just a few taps.
            </p>
            <div className="mx-auto mt-8 max-w-2xl">
              <HeroSearch />
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-slate-500">
              <span>Popular:</span>
              {["Cleaning", "Handyman", "Maths Tutoring", "Pet Care"].map((t, i) => (
                <Link
                  key={t}
                  href={`/services?q=${encodeURIComponent(t)}`}
                  className="font-medium text-slate-600 underline-offset-2 hover:text-brand-700 hover:underline"
                >
                  {t}{i < 3 ? "," : ""}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeading
          eyebrow="Browse by category"
          title="Whatever you need, there's a pro for it"
          description="Explore the most popular services booked on Servana this month."
        />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {popularCategories.map((c) => (
            <Link
              key={c.id}
              href={`/categories/${c.slug}`}
              className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-card transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card-hover"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
                <Icon name={c.icon} className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block truncate font-semibold text-slate-900">{c.name}</span>
                <span className="block text-xs text-slate-400">{c.serviceCount} pros</span>
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button href="/services" variant="outline">
            View all services <ArrowRight size={16} />
          </Button>
        </div>
      </section>

      {/* Featured services */}
      <section className="bg-slate-50/70 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            eyebrow="Featured"
            title="Top-rated services near you"
            description="Hand-picked professionals with outstanding reviews and fast response times."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredServices.slice(0, 8).map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeading
          align="center"
          eyebrow="How it works"
          title="Booking help has never been simpler"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
              <span className="absolute -top-3 left-6 flex h-7 w-7 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                {i + 1}
              </span>
              <s.icon className="h-8 w-8 text-brand-600" />
              <h3 className="mt-4 font-display text-lg font-bold text-slate-900">{s.title}</h3>
              <p className="mt-1.5 text-sm text-slate-500">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button href="/how-it-works" variant="ghost">
            Learn more about how Servana works <ArrowRight size={16} />
          </Button>
        </div>
      </section>

      {/* Trust */}
      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl text-balance">
              Safe, simple and built on trust
            </h2>
            <p className="mt-3 text-lg text-slate-300 text-balance">
              We handle the vetting and payments so you can focus on getting things done.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((t) => (
              <div key={t.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <t.icon className="h-8 w-8 text-brand-400" />
                <h3 className="mt-4 font-display text-lg font-bold">{t.title}</h3>
                <p className="mt-1.5 text-sm text-slate-300">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top providers */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeading
          eyebrow="Meet the pros"
          title="Top-rated providers this month"
          description="Real people delivering brilliant work across the UK."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {topProviders.map((p) => (
            <ProviderCard key={p.id} provider={p} />
          ))}
        </div>
      </section>

      {/* Dual CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col justify-between rounded-3xl bg-gradient-to-br from-brand-600 to-brand-700 p-8 text-white">
            <div>
              <Sparkles className="h-9 w-9" />
              <h3 className="mt-4 font-display text-2xl font-bold">Earn doing what you love</h3>
              <p className="mt-2 text-brand-50">
                Join thousands of providers growing their business on Servana. Set your own rates,
                choose your hours and get paid securely.
              </p>
            </div>
            <div className="mt-6">
              <Button href="/register/provider" variant="secondary" className="bg-white text-brand-700 hover:bg-brand-50">
                Become a provider <ArrowRight size={16} />
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-card">
            <div>
              <Building2 className="h-9 w-9 text-slate-900" />
              <h3 className="mt-4 font-display text-2xl font-bold text-slate-900">Partner as an agency</h3>
              <p className="mt-2 text-slate-500">
                Manage bookings on behalf of clients, refer providers and customers, and earn
                commission with full tracking and payouts.
              </p>
            </div>
            <div className="mt-6">
              <Button href="/register/agency">
                Register your agency <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
