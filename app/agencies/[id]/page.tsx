import { notFound } from "next/navigation";
import { BadgeCheck, MapPin, Users, Briefcase, ChevronRight, MessageCircle, ShieldCheck } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { Avatar } from "@/components/ui/Avatar";
import { Rating } from "@/components/ui/Rating";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { getAgency, agencies } from "@/lib/data";

export function generateStaticParams() {
  return agencies.map((a) => ({ id: a.id }));
}

export default function AgencyPage({ params }: { params: { id: string } }) {
  const agency = getAgency(params.id);
  if (!agency) notFound();

  const stats = [
    { label: "Rating", value: agency.rating.toFixed(1), icon: BadgeCheck },
    { label: "Team", value: String(agency.teamSize), icon: Users },
    { label: "Services", value: String(agency.servicesOffered), icon: Briefcase },
    { label: "Customers", value: String(agency.customersReferred), icon: ShieldCheck },
  ];

  return (
    <SiteShell>
      <div className="h-40 bg-gradient-to-r from-slate-800 to-slate-900" />
      <div className="mx-auto max-w-5xl px-4">
        <div className="-mt-14 rounded-3xl border border-slate-200 bg-white p-6 shadow-card-hover sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex items-end gap-4">
              <Avatar name={agency.name} size="xl" className="ring-4 ring-white" />
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="font-display text-2xl font-extrabold text-slate-900">{agency.name}</h1>
                  {agency.verified && <BadgeCheck size={20} className="text-brand-600" />}
                </div>
                <p className="text-slate-500">{agency.tagline}</p>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <Badge tone="violet">Verified agency</Badge>
                  <Badge tone="slate"><MapPin size={11} /> {agency.city}</Badge>
                  <Rating value={agency.rating} count={agency.reviewCount} />
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline"><MessageCircle size={16} /> Message</Button>
              <Button href="/services">View services</Button>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3">
                <s.icon className="h-5 w-5 text-brand-600" />
                <div>
                  <p className="font-display text-lg font-bold text-slate-900">{s.value}</p>
                  <p className="text-xs text-slate-400">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="py-10">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
            <h2 className="font-display text-xl font-bold text-slate-900">About {agency.name}</h2>
            <p className="mt-3 leading-relaxed text-slate-600">{agency.bio}</p>
            <dl className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-slate-50 p-4">
                <dt className="text-xs text-slate-400">Providers referred</dt>
                <dd className="font-display text-2xl font-bold text-slate-900">{agency.providersReferred}</dd>
              </div>
              <div className="rounded-xl bg-slate-50 p-4">
                <dt className="text-xs text-slate-400">Member since</dt>
                <dd className="font-display text-2xl font-bold text-slate-900">{new Date(agency.memberSince).getFullYear()}</dd>
              </div>
              <div className="rounded-xl bg-slate-50 p-4">
                <dt className="text-xs text-slate-400">Based in</dt>
                <dd className="font-display text-2xl font-bold text-slate-900">{agency.city}</dd>
              </div>
            </dl>
          </section>

          <div className="mt-6 flex items-center justify-between rounded-2xl bg-brand-50 px-6 py-5">
            <div>
              <h3 className="font-display font-bold text-slate-900">Work with {agency.name}</h3>
              <p className="text-sm text-slate-600">Let this agency manage your booking from start to finish.</p>
            </div>
            <Button href="/services">Get started <ChevronRight size={16} /></Button>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
