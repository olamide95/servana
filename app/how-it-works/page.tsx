import { SiteShell } from "@/components/layout/SiteShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  Search, MessageSquare, CalendarCheck, Star, ShieldCheck, Wallet,
  UserCheck, TrendingUp, ArrowRight,
} from "lucide-react";

const customerSteps = [
  { icon: Search, title: "Find the right pro", desc: "Search by service, location and budget. Compare verified providers by rating, response time and price." },
  { icon: MessageSquare, title: "Chat & agree details", desc: "Message providers to discuss your needs, then choose any optional extras for your booking." },
  { icon: CalendarCheck, title: "Book & pay securely", desc: "Pick a date and time and pay safely through your Servana wallet — your money is protected." },
  { icon: Star, title: "Relax & review", desc: "Your pro completes the job. Once you're happy, leave a review to help the community." },
];

const providerSteps = [
  { icon: UserCheck, title: "Create your profile", desc: "Sign up, complete identity verification and showcase your skills and experience." },
  { icon: CalendarCheck, title: "List your services", desc: "Set your rates, coverage area and availability. Add optional extras to upsell." },
  { icon: Wallet, title: "Get booked & paid", desc: "Accept bookings, do great work and receive secure payouts straight to your account." },
  { icon: TrendingUp, title: "Grow your reputation", desc: "Earn reviews, climb provider levels and unlock more visibility and customers." },
];

const guarantees = [
  { icon: ShieldCheck, title: "Verified professionals", desc: "Every provider is ID-checked before taking bookings." },
  { icon: Wallet, title: "Protected payments", desc: "Funds are held securely and only released when work is done." },
  { icon: Star, title: "Genuine reviews", desc: "Only verified bookings can leave a review." },
];

function Steps({ steps }: { steps: typeof customerSteps }) {
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <div key={s.title} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
          <span className="absolute -top-3 left-6 flex h-7 w-7 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">{i + 1}</span>
          <s.icon className="h-8 w-8 text-brand-600" />
          <h3 className="mt-4 font-display text-base font-bold text-slate-900">{s.title}</h3>
          <p className="mt-1.5 text-sm text-slate-500">{s.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default function HowItWorksPage() {
  return (
    <SiteShell>
      <div className="bg-gradient-to-b from-brand-50/60 to-white">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center">
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl text-balance">
            How Servana works
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-500">
            Booking trusted help — or earning as a professional — in four simple steps.
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <SectionHeading eyebrow="For customers" title="Get help in four steps" />
        <Steps steps={customerSteps} />
        <div className="mt-8"><Button href="/services">Browse services <ArrowRight size={16} /></Button></div>
      </section>

      <section className="bg-slate-50/70 py-12">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading eyebrow="For providers" title="Start earning in four steps" />
          <Steps steps={providerSteps} />
          <div className="mt-8"><Button href="/register/provider">Become a provider <ArrowRight size={16} /></Button></div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeading align="center" eyebrow="Peace of mind" title="Built-in trust & safety" />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {guarantees.map((g) => (
            <div key={g.title} className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-card">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                <g.icon size={24} />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-slate-900">{g.title}</h3>
              <p className="mt-1.5 text-sm text-slate-500">{g.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
