import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardBody } from "@/components/dashboard/DashboardBody";
import { StatGrid } from "@/components/dashboard/StatCard";
import { Card } from "@/components/ui/Card";
import { categories } from "@/lib/data";
import type { StatItem } from "@/lib/types";

const stats: StatItem[] = [
  { label: "GMV (YTD)", value: "£2.4M", delta: "18%", trend: "up", icon: "Banknote" },
  { label: "Take rate", value: "13.2%", icon: "Percent" },
  { label: "New users (mo)", value: "1,204", delta: "6%", trend: "up", icon: "UserPlus" },
  { label: "Repeat rate", value: "62%", delta: "3%", trend: "up", icon: "Repeat" },
];

const revenueByMonth = [
  { m: "Jan", v: 180 }, { m: "Feb", v: 210 }, { m: "Mar", v: 240 },
  { m: "Apr", v: 220 }, { m: "May", v: 270 }, { m: "Jun", v: 284 },
];
const maxV = Math.max(...revenueByMonth.map((r) => r.v));

const topCategories = [...categories].sort((a, b) => b.serviceCount - a.serviceCount).slice(0, 6);
const maxCat = Math.max(...topCategories.map((c) => c.serviceCount));

export default function AdminReportsPage() {
  return (
    <>
      <DashboardHeader title="Reports" />
      <DashboardBody>
        <StatGrid stats={stats} />

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Card className="p-6">
            <h3 className="font-display font-bold text-slate-900">Monthly GMV (£k)</h3>
            <div className="mt-6 flex items-end justify-between gap-3" style={{ height: 200 }}>
              {revenueByMonth.map((r) => (
                <div key={r.m} className="flex flex-1 flex-col items-center gap-2">
                  <div className="flex w-full flex-1 items-end">
                    <div className="w-full rounded-t-lg bg-brand-500 transition hover:bg-brand-600" style={{ height: `${(r.v / maxV) * 100}%` }} title={`£${r.v}k`} />
                  </div>
                  <span className="text-xs font-medium text-slate-400">{r.m}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-display font-bold text-slate-900">Top categories by supply</h3>
            <div className="mt-5 space-y-3">
              {topCategories.map((c) => (
                <div key={c.id} className="flex items-center gap-3 text-sm">
                  <span className="w-32 shrink-0 truncate text-slate-600">{c.name}</span>
                  <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full rounded-full bg-brand-500" style={{ width: `${(c.serviceCount / maxCat) * 100}%` }} />
                  </div>
                  <span className="w-10 text-right text-xs font-semibold text-slate-500">{c.serviceCount}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </DashboardBody>
    </>
  );
}
