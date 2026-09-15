import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardBody } from "@/components/dashboard/DashboardBody";
import { ServiceCreationForm } from "@/components/forms/ServiceCreationForm";

export default function AgencyNewServicePage() {
  return (
    <>
      <DashboardHeader title="Create a service" />
      <DashboardBody>
        <div className="mb-6 max-w-2xl">
          <h2 className="font-display text-xl font-bold text-slate-900">List a managed service</h2>
          <p className="mt-1 text-slate-500">Offer a service your agency manages on behalf of providers.</p>
        </div>
        <ServiceCreationForm backHref="/dashboard/agency/services" />
      </DashboardBody>
    </>
  );
}
