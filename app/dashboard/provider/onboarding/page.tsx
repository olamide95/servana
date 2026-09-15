import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardBody } from "@/components/dashboard/DashboardBody";
import { ProviderRegistrationForm } from "@/components/forms/ProviderRegistrationForm";

export default function ProviderOnboardingPage() {
  return (
    <>
      <DashboardHeader title="Onboarding" />
      <DashboardBody>
        <div className="mb-6 max-w-2xl">
          <h2 className="font-display text-xl font-bold text-slate-900">Complete your provider setup</h2>
          <p className="mt-1 text-slate-500">Finish these steps to start receiving bookings on Servana.</p>
        </div>
        <ProviderRegistrationForm />
      </DashboardBody>
    </>
  );
}
