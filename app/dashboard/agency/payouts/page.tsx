import { Banknote, ArrowUpRight } from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardBody } from "@/components/dashboard/DashboardBody";
import { Card, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { formatGBP, formatDate } from "@/lib/utils";
import { payouts } from "@/lib/data";

const statusTone = { paid: "green", processing: "amber", requested: "blue", rejected: "red" } as const;

export default function AgencyPayoutsPage() {
  const list = payouts.filter((p) => p.agencyId === "a1");
  return (
    <>
      <DashboardHeader title="Payouts" />
      <DashboardBody>
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="p-6">
            <div className="flex items-center gap-2 text-brand-600"><Banknote size={18} /><h3 className="font-display font-bold text-slate-900">Available balance</h3></div>
            <p className="mt-4 font-display text-4xl font-extrabold text-slate-900">{formatGBP(15.5, { decimals: true })}</p>
            <Button className="mt-4 w-full"><ArrowUpRight size={16} /> Request payout</Button>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader title="Payout history" subtitle={`${list.length} payouts`} />
            {list.length === 0 ? (
              <div className="p-4"><EmptyState icon="Banknote" title="No payouts yet" description="Request a payout once you have available commission." /></div>
            ) : (
              <div className="overflow-x-auto scroll-thin">
                <table className="w-full min-w-[560px] text-sm">
                  <thead>
                    <tr className="border-b border-slate-100 bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      <th className="px-5 py-3">Amount</th>
                      <th className="px-5 py-3">Method</th>
                      <th className="px-5 py-3">Requested</th>
                      <th className="px-5 py-3">Paid</th>
                      <th className="px-5 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {list.map((p) => (
                      <tr key={p.id} className="hover:bg-slate-50/60">
                        <td className="px-5 py-4 font-semibold text-slate-900">{formatGBP(p.amount, { decimals: true })}</td>
                        <td className="px-5 py-4 text-slate-500">{p.method}</td>
                        <td className="px-5 py-4 text-slate-500">{formatDate(p.requestedAt)}</td>
                        <td className="px-5 py-4 text-slate-500">{p.paidAt ? formatDate(p.paidAt) : "—"}</td>
                        <td className="px-5 py-4"><Badge tone={statusTone[p.status]}>{p.status}</Badge></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </Card>
        </div>
      </DashboardBody>
    </>
  );
}
