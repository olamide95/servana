import { SiteShell } from "@/components/layout/SiteShell";
import { ProviderCard } from "@/components/marketplace/ProviderCard";
import { providers } from "@/lib/data";

export default function ProvidersPage() {
  return (
    <SiteShell>
      <div className="border-b border-slate-100 bg-slate-50/60">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-slate-900">Providers</h1>
          <p className="mt-1 text-slate-500">Meet the vetted professionals on Servana.</p>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {providers.map((p) => <ProviderCard key={p.id} provider={p} />)}
        </div>
      </div>
    </SiteShell>
  );
}
