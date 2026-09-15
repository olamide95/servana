import Link from "next/link";
import { ArrowRight, AlertTriangle } from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardBody } from "@/components/dashboard/DashboardBody";
import { StatGrid } from "@/components/dashboard/StatCard";
import { OrderStatusBadge } from "@/components/dashboard/OrderStatusBadge";
import { Card, CardHeader } from "@/components/ui/Card";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { formatGBP, formatDate } from "@/lib/utils";
import type { StatItem } from "@/lib/types";
import { orders, providers } from "@/lib/data";

const stats: StatItem[] = [
  { label: "Total users", value: "8,420", delta: "4.2%", trend: "up", icon: "Users" },
  { label: "Active providers", value: "1,284", delta: "2.1%", trend: "up", icon: "UserCog" },
  { label: "GMV this month", value: "£284k", delta: "9.4%", trend: "up", icon: "Banknote" },
  { label: "Open disputes", value: "3", delta: "1", trend: "down", icon: "ShieldAlert" },
];

const pendingProviders = providers.filter((p) => p.kyc !== "verified");

export default function AdminDashboard() {
  return (
    <>
      <DashboardHeader title="Admin overview" />
      <DashboardBody>
        <StatGrid stats={stats} />

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader title="Recent orders" action={<Link href="/dashboard/admin/orders" className="text-sm font-semibold text-brand-700 hover:underline">View all</Link>} />
            <div className="overflow-x-auto scroll-thin">
              <table className="w-full min-w-[640px] text-sm">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                    <th className="px-5 py-3">Reference</th>
                    <th className="px-5 py-3">Customer</th>
                    <th className="px-5 py-3">Total</th>
                    <th className="px-5 py-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {orders.slice(0, 6).map((o) => (
                    <tr key={o.id} className="hover:bg-slate-50/60">
                      <td className="px-5 py-3.5 font-mono text-xs font-semibold text-slate-500">{o.reference}</td>
                      <td className="px-5 py-3.5 text-slate-700">{o.customerName}</td>
                      <td className="px-5 py-3.5 font-semibold text-slate-900">{formatGBP(o.total, { decimals: true })}</td>
                      <td className="px-5 py-3.5"><OrderStatusBadge status={o.status} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <Card>
            <CardHeader title="Pending verification" action={<Link href="/dashboard/admin/providers" className="text-sm font-semibold text-brand-700 hover:underline">Review</Link>} />
            <ul className="divide-y divide-slate-100">
              {pendingProviders.length === 0 && <li className="px-5 py-4 text-sm text-slate-400">All caught up.</li>}
              {pendingProviders.map((p) => (
                <li key={p.id} className="flex items-center gap-3 px-5 py-3.5">
                  <Avatar name={p.name} size="sm" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-slate-900">{p.name}</p>
                    <p className="truncate text-xs text-slate-400">{p.city}</p>
                  </div>
                  <Badge tone="amber">{p.kyc}</Badge>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <Card className="mt-6 flex items-center gap-4 border-amber-200 bg-amber-50 p-5">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600"><AlertTriangle size={20} /></span>
          <div className="flex-1">
            <p className="font-semibold text-slate-900">3 disputes need attention</p>
            <p className="text-sm text-slate-500">Resolve open disputes to keep response times healthy.</p>
          </div>
          <Link href="/dashboard/admin/disputes" className="inline-flex items-center gap-1 text-sm font-semibold text-amber-700 hover:underline">
            Go to disputes <ArrowRight size={15} />
          </Link>
        </Card>
      </DashboardBody>
    </>
  );
}
