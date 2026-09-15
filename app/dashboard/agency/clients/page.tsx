import { UserPlus, MessageCircle } from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardBody } from "@/components/dashboard/DashboardBody";
import { Card, CardHeader } from "@/components/ui/Card";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { formatGBP } from "@/lib/utils";

const clients = [
  { name: "Margaret Lewis", city: "Leeds", orders: 8, spend: 640, status: "Active" },
  { name: "Robert Hughes", city: "Coventry", orders: 3, spend: 285, status: "Active" },
  { name: "Emma Davies", city: "Manchester", orders: 5, spend: 410, status: "Active" },
  { name: "Chloe Roberts", city: "Liverpool", orders: 1, spend: 70, status: "Lapsed" },
  { name: "David Thompson", city: "Manchester", orders: 2, spend: 192, status: "Active" },
];

export default function AgencyClientsPage() {
  return (
    <>
      <DashboardHeader title="Clients" />
      <DashboardBody>
        <div className="mb-5 flex items-center justify-between">
          <p className="text-sm text-slate-500">{clients.length} managed clients</p>
          <Button><UserPlus size={16} /> Add client</Button>
        </div>
        <Card>
          <CardHeader title="Your clients" subtitle="Customers you book and manage on Servana" />
          <div className="overflow-x-auto scroll-thin">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  <th className="px-5 py-3">Client</th>
                  <th className="px-5 py-3">Location</th>
                  <th className="px-5 py-3">Orders</th>
                  <th className="px-5 py-3">Total spend</th>
                  <th className="px-5 py-3">Status</th>
                  <th className="px-5 py-3"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {clients.map((c) => (
                  <tr key={c.name} className="hover:bg-slate-50/60">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <Avatar name={c.name} size="sm" />
                        <span className="font-medium text-slate-900">{c.name}</span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-slate-500">{c.city}</td>
                    <td className="px-5 py-4 text-slate-700">{c.orders}</td>
                    <td className="px-5 py-4 font-semibold text-slate-900">{formatGBP(c.spend, { decimals: true })}</td>
                    <td className="px-5 py-4"><Badge tone={c.status === "Active" ? "green" : "slate"}>{c.status}</Badge></td>
                    <td className="px-5 py-4 text-right">
                      <button className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:underline">
                        <MessageCircle size={14} /> Message
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </DashboardBody>
    </>
  );
}
