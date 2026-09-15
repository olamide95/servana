import Link from "next/link";
import { Share2, UserPlus, ArrowRight } from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardBody } from "@/components/dashboard/DashboardBody";
import { StatGrid } from "@/components/dashboard/StatCard";
import { CommissionCard } from "@/components/dashboard/CommissionCard";
import { ReferralTable } from "@/components/dashboard/ReferralTable";
import { Card, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import type { StatItem } from "@/lib/types";
import { getAgency, getReferralsByAgency, getCommissionsByAgency } from "@/lib/data";

const stats: StatItem[] = [
  { label: "Providers referred", value: "46", delta: "3", trend: "up", icon: "Users" },
  { label: "Customers referred", value: "132", delta: "8", trend: "up", icon: "UserCheck" },
  { label: "Active orders", value: "11", icon: "ClipboardList" },
  { label: "Avg. rating", value: "4.8", icon: "Star" },
];

export default function AgencyDashboard() {
  const agency = getAgency("a1")!;
  const referrals = getReferralsByAgency("a1");
  const commissions = getCommissionsByAgency("a1");

  const earned = commissions.reduce((s, c) => s + c.amount, 0);
  const available = commissions.filter((c) => c.status === "available").reduce((s, c) => s + c.amount, 0);
  const pending = commissions.filter((c) => c.status === "pending").reduce((s, c) => s + c.amount, 0);

  return (
    <>
      <DashboardHeader title="Dashboard" />
      <DashboardBody>
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="font-display text-2xl font-bold text-slate-900">{agency.name}</h2>
            <p className="text-slate-500">Manage clients, referrals and commission.</p>
          </div>
          <div className="flex gap-2">
            <Button href="/dashboard/agency/order-on-behalf" variant="outline"><UserPlus size={16} /> Book for client</Button>
            <Button href="/dashboard/agency/referrals"><Share2 size={16} /> Invite</Button>
          </div>
        </div>

        <StatGrid stats={stats} />

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader title="Recent referrals" action={<Link href="/dashboard/agency/referrals" className="text-sm font-semibold text-brand-700 hover:underline">View all</Link>} />
              <div className="p-4"><ReferralTable referrals={referrals.slice(0, 5)} /></div>
            </Card>
          </div>
          <div className="space-y-4">
            <CommissionCard earned={earned} available={available} pending={pending} />
            <Card className="p-5">
              <h3 className="font-display text-sm font-bold text-slate-900">Your referral code</h3>
              <div className="mt-3 flex items-center justify-between rounded-xl border border-dashed border-brand-300 bg-brand-50 px-4 py-3">
                <span className="font-mono text-lg font-bold text-brand-700">{agency.referralCode}</span>
                <Badge tone="brand">Active</Badge>
              </div>
              <p className="mt-2 text-xs text-slate-400">Share this code — you earn commission on every referral that converts.</p>
            </Card>
          </div>
        </div>
      </DashboardBody>
    </>
  );
}
