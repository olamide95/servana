import { SiteShell } from "@/components/layout/SiteShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PricingCard } from "@/components/marketplace/PricingCard";
import { Badge } from "@/components/ui/Badge";

const customerPlans = [
  {
    name: "Pay as you go", price: "Free", cadence: "to join", highlighted: false,
    description: "Perfect for occasional bookings with no commitment.",
    features: ["Browse all services", "Secure in-app payments", "Verified providers", "Standard support", "5% service fee per booking"],
    cta: "Sign up free", ctaHref: "/register/customer",
  },
  {
    name: "Servana Plus", price: "£9", cadence: "/month", highlighted: true,
    description: "For households who book regular help and want to save.",
    features: ["Everything in Pay as you go", "Reduced 2% service fee", "Priority booking & support", "Exclusive wallet rewards", "Free cancellation up to 24h"],
    cta: "Start Plus", ctaHref: "/register/customer",
  },
  {
    name: "Family", price: "£19", cadence: "/month", highlighted: false,
    description: "Manage help for the whole household under one account.",
    features: ["Everything in Plus", "Up to 5 household members", "Shared wallet & booking history", "Dedicated account manager", "Annual home service review"],
    cta: "Choose Family", ctaHref: "/register/customer",
  },
];

const providerPlans = [
  {
    name: "Starter", price: "Free", cadence: "to list", highlighted: false,
    description: "Get discovered and take your first bookings.",
    features: ["List unlimited services", "Profile & reviews", "Secure payouts", "15% commission per order"],
    cta: "Join as provider", ctaHref: "/register/provider",
  },
  {
    name: "Pro", price: "£15", cadence: "/month", highlighted: true,
    description: "Grow faster with lower fees and better visibility.",
    features: ["Reduced 10% commission", "Featured in search results", "Advanced analytics", "Instant payouts", "Priority support"],
    cta: "Go Pro", ctaHref: "/register/provider",
  },
];

export default function PricingPage() {
  return (
    <SiteShell>
      <div className="bg-gradient-to-b from-brand-50/60 to-white">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <SectionHeading
            align="center"
            eyebrow="Pricing"
            title="Simple, transparent pricing"
            description="No hidden fees. Pay only for what you need, whether you're booking or providing."
          />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-8">
        <div className="mb-6 flex items-center gap-2">
          <Badge tone="brand">For customers</Badge>
          <span className="text-sm text-slate-400">Choose how you want to book</span>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {customerPlans.map((p) => <PricingCard key={p.name} {...p} />)}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-6 flex items-center gap-2">
          <Badge tone="violet">For providers</Badge>
          <span className="text-sm text-slate-400">Keep more of what you earn</span>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:max-w-3xl">
          {providerPlans.map((p) => <PricingCard key={p.name} {...p} />)}
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 pb-20">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center">
          <h3 className="font-display text-xl font-bold text-slate-900">Running an agency?</h3>
          <p className="mx-auto mt-2 max-w-md text-slate-500">
            Agencies get custom commission rates, referral tracking and dedicated onboarding. Talk to
            our partnerships team.
          </p>
          <div className="mt-5">
            <a href="/register/agency" className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">
              Register your agency
            </a>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
