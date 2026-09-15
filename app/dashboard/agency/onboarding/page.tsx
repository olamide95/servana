import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardBody } from "@/components/dashboard/DashboardBody";
import { AgencyRegistrationForm } from "@/components/forms/AgencyRegistrationForm";

export default function AgencyOnboardingPage() {
  return (
    <>
      <DashboardHeader title="Onboarding" />
      <DashboardBody>
        <div className="mb-6 max-w-2xl">
          <h2 className="font-display text-xl font-bold text-slate-900">Complete your agency setup</h2>
          <p className="mt-1 text-slate-500">Finish verification to unlock referrals, commission tracking and payouts.</p>
        </div>
        <AgencyRegistrationForm />
      </DashboardBody>
    </>
  );
}
