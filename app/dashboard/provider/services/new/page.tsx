import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardBody } from "@/components/dashboard/DashboardBody";
import { ServiceCreationForm } from "@/components/forms/ServiceCreationForm";

export default function ProviderNewServicePage() {
  return (
    <>
      <DashboardHeader title="Create a service" />
      <DashboardBody>
        <div className="mb-6 max-w-2xl">
          <h2 className="font-display text-xl font-bold text-slate-900">List a new service</h2>
          <p className="mt-1 text-slate-500">Tell customers what you offer, set your pricing and define your coverage.</p>
        </div>
        <ServiceCreationForm backHref="/dashboard/provider/services" />
      </DashboardBody>
    </>
  );
}
