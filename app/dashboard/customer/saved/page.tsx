import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardBody } from "@/components/dashboard/DashboardBody";
import { ServiceCard } from "@/components/marketplace/ServiceCard";
import { ProviderCard } from "@/components/marketplace/ProviderCard";
import { services, providers } from "@/lib/data";

export default function SavedPage() {
  const savedServices = services.slice(0, 3);
  const savedProviders = providers.slice(0, 3);
  return (
    <>
      <DashboardHeader title="Saved" />
      <DashboardBody>
        <section>
          <h2 className="mb-4 font-display text-lg font-bold text-slate-900">Saved services</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {savedServices.map((s) => <ServiceCard key={s.id} service={s} />)}
          </div>
        </section>
        <section className="mt-10">
          <h2 className="mb-4 font-display text-lg font-bold text-slate-900">Saved providers</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {savedProviders.map((p) => <ProviderCard key={p.id} provider={p} />)}
          </div>
        </section>
      </DashboardBody>
    </>
  );
}
