"use client";

import { useState } from "react";
import { Copy, Check, Share2, Users, UserCheck } from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardBody } from "@/components/dashboard/DashboardBody";
import { ReferralTable } from "@/components/dashboard/ReferralTable";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { getReferralsByAgency, getAgency } from "@/lib/data";

export default function AgencyReferralsPage() {
  const agency = getAgency("a1")!;
  const referrals = getReferralsByAgency("a1");
  const [copied, setCopied] = useState(false);
  const link = `https://servana.co.uk/join?ref=${agency.referralCode}`;

  function copy() {
    navigator.clipboard?.writeText(link).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const providerCount = referrals.filter((r) => r.type === "provider").length;
  const customerCount = referrals.filter((r) => r.type === "customer").length;

  return (
    <>
      <DashboardHeader title="Referrals" />
      <DashboardBody>
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2 p-6">
            <div className="flex items-center gap-2"><Share2 size={18} className="text-brand-600" /><h3 className="font-display font-bold text-slate-900">Your referral link</h3></div>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <div className="flex-1 truncate rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-mono text-sm text-slate-600">{link}</div>
              <Button onClick={copy}>{copied ? <><Check size={16} /> Copied</> : <><Copy size={16} /> Copy</>}</Button>
            </div>
            <p className="mt-3 text-sm text-slate-500">
              Earn £25 for every provider who joins and completes onboarding, plus ongoing commission on
              the bookings of customers you refer.
            </p>
          </Card>
          <div className="grid gap-4">
            <Card className="flex items-center gap-3 p-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600"><Users size={20} /></span>
              <div><p className="font-display text-2xl font-bold text-slate-900">{providerCount}</p><p className="text-sm text-slate-400">Providers referred</p></div>
            </Card>
            <Card className="flex items-center gap-3 p-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><UserCheck size={20} /></span>
              <div><p className="font-display text-2xl font-bold text-slate-900">{customerCount}</p><p className="text-sm text-slate-400">Customers referred</p></div>
            </Card>
          </div>
        </div>

        <h3 className="mb-3 mt-8 font-display text-lg font-bold text-slate-900">All referrals</h3>
        <ReferralTable referrals={referrals} />
      </DashboardBody>
    </>
  );
}
