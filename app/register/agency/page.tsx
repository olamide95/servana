import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { AgencyRegistrationForm } from "@/components/forms/AgencyRegistrationForm";

export default function AgencyRegisterPage() {
  return (
    <SiteShell>
      <div className="border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-3xl px-4 py-10 text-center">
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Partner with Servana as an agency
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-slate-500">
            Manage bookings on behalf of clients, refer providers and customers, and earn commission
            with transparent tracking and payouts.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-4 py-10">
        <AgencyRegistrationForm />
        <p className="mt-6 text-center text-sm text-slate-500">
          Want to join as an individual provider?{" "}
          <Link href="/register/provider" className="font-semibold text-brand-700 hover:underline">Become a provider</Link>
        </p>
      </div>
    </SiteShell>
  );
}
