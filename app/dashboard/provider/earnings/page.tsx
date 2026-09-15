import { Banknote, ArrowUpRight, Clock, TrendingUp } from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardBody } from "@/components/dashboard/DashboardBody";
import { StatGrid } from "@/components/dashboard/StatCard";
import { Card, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { formatGBP, formatDate } from "@/lib/utils";
import { getOrdersByProvider } from "@/lib/data";
import type { StatItem } from "@/lib/types";

const stats: StatItem[] = [
  { label: "Available to withdraw", value: "£420.50", icon: "Wallet" },
  { label: "Pending clearance", value: "£96.00", icon: "Clock" },
  { label: "This month", value: "£1,840", delta: "12%", trend: "up", icon: "TrendingUp" },
  { label: "Lifetime earnings", value: "£18,420", icon: "Banknote" },
];

const monthly = [
  { month: "Jan", value: 1200 }, { month: "Feb", value: 1450 }, { month: "Mar", value: 1320 },
  { month: "Apr", value: 1680 }, { month: "May", value: 1920 }, { month: "Jun", value: 1840 },
];
const maxVal = Math.max(...monthly.map((m) => m.value));

export default function ProviderEarningsPage() {
  const completed = getOrdersByProvider("p1").filter((o) => o.status === "completed");
  return (
    <>
      <DashboardHeader title="Earnings" />
      <DashboardBody>
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-display text-xl font-bold text-slate-900">Earnings overview</h2>
          <Button><ArrowUpRight size={16} /> Withdraw funds</Button>
        </div>

        <StatGrid stats={stats} />

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2 p-6">
            <h3 className="font-display font-bold text-slate-900">Monthly earnings</h3>
            <div className="mt-6 flex items-end justify-between gap-3" style={{ height: 200 }}>
              {monthly.map((m) => (
                <div key={m.month} className="flex flex-1 flex-col items-center gap-2">
                  <div className="flex w-full flex-1 items-end">
                    <div
                      className="w-full rounded-t-lg bg-brand-500 transition-all hover:bg-brand-600"
                      style={{ height: `${(m.value / maxVal) * 100}%` }}
                      title={formatGBP(m.value)}
                    />
                  </div>
                  <span className="text-xs font-medium text-slate-400">{m.month}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-display font-bold text-slate-900">Payout details</h3>
            <div className="mt-4 space-y-3 text-sm">
              <div className="rounded-xl bg-slate-50 p-3">
                <p className="text-xs text-slate-400">Bank account</p>
                <p className="font-medium text-slate-900">Barclays •••• 8842</p>
              </div>
              <div className="flex items-center justify-between"><span className="text-slate-500">Schedule</span><span className="font-medium text-slate-900">Weekly (Fri)</span></div>
              <div className="flex items-center justify-between"><span className="text-slate-500">Next payout</span><span className="font-medium text-slate-900">06 Jun 2025</span></div>
            </div>
            <Button variant="outline" size="sm" className="mt-4 w-full">Update payout method</Button>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader title="Recent completed orders" />
          <ul className="divide-y divide-slate-100">
            {completed.map((o) => {
              const earn = Math.round(o.total * 0.85 * 100) / 100;
              return (
                <li key={o.id} className="flex items-center justify-between px-5 py-4">
                  <div>
                    <p className="font-medium text-slate-900">{o.serviceTitle}</p>
                    <p className="text-xs text-slate-400">{o.reference} · {formatDate(o.date)}</p>
                  </div>
                  <p className="font-display font-bold text-brand-600">+{formatGBP(earn, { decimals: true })}</p>
                </li>
              );
            })}
          </ul>
        </Card>
      </DashboardBody>
    </>
  );
}
