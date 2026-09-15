import Link from "next/link";
import { notFound } from "next/navigation";
import { BadgeCheck, Clock, MapPin, Globe, Check, ChevronRight, MessageCircle } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { ServiceCard } from "@/components/marketplace/ServiceCard";
import { ReviewCard } from "@/components/marketplace/ReviewCard";
import { ProviderLevelBadge } from "@/components/marketplace/ProviderLevelBadge";
import { Avatar } from "@/components/ui/Avatar";
import { Rating } from "@/components/ui/Rating";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { getProvider, getServicesByProvider, getReviewsByProvider, providers } from "@/lib/data";

export function generateStaticParams() {
  return providers.map((p) => ({ id: p.id }));
}

export default function ProviderPage({ params }: { params: { id: string } }) {
  const provider = getProvider(params.id);
  if (!provider) notFound();
  const services = getServicesByProvider(provider.id);
  const reviews = getReviewsByProvider(provider.id);

  const stats = [
    { label: "Rating", value: provider.rating.toFixed(1) },
    { label: "Reviews", value: String(provider.reviewCount) },
    { label: "Completed", value: String(provider.completedOrders) },
    { label: "Response", value: provider.responseTime.replace("within ", "") },
  ];

  return (
    <SiteShell>
      {/* Cover */}
      <div className="h-40 bg-gradient-to-r from-brand-600 to-brand-800" />
      <div className="mx-auto max-w-5xl px-4">
        <div className="-mt-14 rounded-3xl border border-slate-200 bg-white p-6 shadow-card-hover sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex items-end gap-4">
              <Avatar name={provider.name} size="xl" className="ring-4 ring-white" />
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="font-display text-2xl font-extrabold text-slate-900">{provider.name}</h1>
                  {provider.verified && <BadgeCheck size={20} className="text-brand-600" />}
                </div>
                <p className="text-slate-500">{provider.tagline}</p>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <ProviderLevelBadge level={provider.level} />
                  <Badge tone="slate"><MapPin size={11} /> {provider.online ? "Online" : provider.city}</Badge>
                  <Badge tone="slate"><Clock size={11} /> {provider.responseTime}</Badge>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline"><MessageCircle size={16} /> Message</Button>
              <Button href="/services">Book now</Button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-slate-50 px-4 py-3 text-center">
                <p className="font-display text-xl font-bold text-slate-900">{s.value}</p>
                <p className="text-xs text-slate-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-8 py-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="font-display text-xl font-bold text-slate-900">About</h2>
              <p className="mt-3 leading-relaxed text-slate-600">{provider.bio}</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-slate-900">Skills</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {provider.skills.map((s) => (
                  <span key={s} className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1.5 text-sm font-medium text-brand-700">
                    <Check size={13} /> {s}
                  </span>
                ))}
              </div>
            </section>

            {services.length > 0 && (
              <section>
                <h2 className="font-display text-xl font-bold text-slate-900">Services</h2>
                <div className="mt-4 grid gap-5 sm:grid-cols-2">
                  {services.map((s) => <ServiceCard key={s.id} service={s} />)}
                </div>
              </section>
            )}

            <section>
              <div className="flex items-center justify-between">
                <h2 className="font-display text-xl font-bold text-slate-900">
                  Reviews <span className="text-slate-400">({provider.reviewCount})</span>
                </h2>
                <Rating value={provider.rating} size={18} />
              </div>
              <div className="mt-4 space-y-4">
                {reviews.length > 0 ? (
                  reviews.map((r) => <ReviewCard key={r.id} review={r} />)
                ) : (
                  <p className="rounded-2xl border border-dashed border-slate-200 p-6 text-center text-sm text-slate-400">
                    No reviews to show yet.
                  </p>
                )}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
              <h3 className="font-display font-bold text-slate-900">Details</h3>
              <dl className="mt-3 space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <dt className="text-slate-400">Member since</dt>
                  <dd className="font-medium text-slate-700">{new Date(provider.memberSince).getFullYear()}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-slate-400">Languages</dt>
                  <dd className="flex items-center gap-1 font-medium text-slate-700">
                    <Globe size={13} /> {provider.languages.join(", ")}
                  </dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-slate-400">Coverage</dt>
                  <dd className="font-medium text-slate-700">{provider.coverage.join(", ")}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-slate-400">Verification</dt>
                  <dd>
                    {provider.kyc === "verified"
                      ? <Badge tone="green"><BadgeCheck size={11} /> Verified</Badge>
                      : <Badge tone="amber">Pending</Badge>}
                  </dd>
                </div>
              </dl>
            </div>
            <Link
              href="/help"
              className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 text-sm font-medium text-slate-600 shadow-card transition hover:border-brand-200"
            >
              Report this profile <ChevronRight size={16} />
            </Link>
          </aside>
        </div>
      </div>
    </SiteShell>
  );
}
