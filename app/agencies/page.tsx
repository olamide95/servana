import { SiteShell } from "@/components/layout/SiteShell";
import { AgencyCard } from "@/components/marketplace/AgencyCard";
import { agencies } from "@/lib/data";

export default function AgenciesPage() {
  return (
    <SiteShell>
      <div className="border-b border-slate-100 bg-slate-50/60">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-slate-900">Agencies</h1>
          <p className="mt-1 text-slate-500">Trusted agencies managing services across the UK.</p>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {agencies.map((a) => <AgencyCard key={a.id} agency={a} />)}
        </div>
      </div>
    </SiteShell>
  );
}
