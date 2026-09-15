import { SiteShell } from "@/components/layout/SiteShell";
import { ServicesBrowser } from "@/components/marketplace/ServicesBrowser";

export default function ServicesPage({
  searchParams,
}: {
  searchParams: { q?: string; city?: string; category?: string };
}) {
  return (
    <SiteShell>
      <div className="border-b border-slate-100 bg-slate-50/60">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-slate-900">
            Browse services
          </h1>
          <p className="mt-1 text-slate-500">
            Discover vetted local and online professionals across the UK.
          </p>
        </div>
      </div>
      <ServicesBrowser
        initialQuery={searchParams.q ?? ""}
        initialCity={searchParams.city ?? ""}
        initialCategory={searchParams.category ?? ""}
      />
    </SiteShell>
  );
}
