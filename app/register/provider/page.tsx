import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { ProviderRegistrationForm } from "@/components/forms/ProviderRegistrationForm";

export default function ProviderRegisterPage() {
  return (
    <SiteShell>
      <div className="border-b border-slate-100 bg-gradient-to-b from-brand-50/50 to-white">
        <div className="mx-auto max-w-3xl px-4 py-10 text-center">
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Become a Servana provider
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-slate-500">
            Set up your profile, list your service and get verified. Most applications are approved
            within 48 hours.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-4 py-10">
        <ProviderRegistrationForm />
        <p className="mt-6 text-center text-sm text-slate-500">
          Prefer to join as an agency?{" "}
          <Link href="/register/agency" className="font-semibold text-brand-700 hover:underline">Register an agency</Link>
        </p>
      </div>
    </SiteShell>
  );
}
