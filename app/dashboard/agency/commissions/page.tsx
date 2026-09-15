import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardBody } from "@/components/dashboard/DashboardBody";
import { CommissionCard } from "@/components/dashboard/CommissionCard";
import { Card, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { formatGBP, formatDate } from "@/lib/utils";
import { getCommissionsByAgency } from "@/lib/data";

const statusTone = { paid: "green", available: "brand", pending: "amber" } as const;

export default function AgencyCommissionsPage() {
  const commissions = getCommissionsByAgency("a1");
  const earned = commissions.reduce((s, c) => s + c.amount, 0);
  const available = commissions.filter((c) => c.status === "available").reduce((s, c) => s + c.amount, 0);
  const pending = commissions.filter((c) => c.status === "pending").reduce((s, c) => s + c.amount, 0);

  return (
    <>
      <DashboardHeader title="Commissions" />
      <DashboardBody>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1"><CommissionCard earned={earned} available={available} pending={pending} /></div>
          <div className="lg:col-span-2">
            <Card>
              <CardHeader title="Commission history" subtitle={`${commissions.length} entries`} action={<Button size="sm">Withdraw {formatGBP(available, { decimals: true })}</Button>} />
              <div className="overflow-x-auto scroll-thin">
                <table className="w-full min-w-[620px] text-sm">
                  <thead>
                    <tr className="border-b border-slate-100 bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      <th className="px-5 py-3">Description</th>
                      <th className="px-5 py-3">Source</th>
                      <th className="px-5 py-3">Date</th>
                      <th className="px-5 py-3">Amount</th>
                      <th className="px-5 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {commissions.map((c) => (
                      <tr key={c.id} className="hover:bg-slate-50/60">
                        <td className="px-5 py-4 font-medium text-slate-900">{c.description}</td>
                        <td className="px-5 py-4"><Badge tone={c.source === "transaction" ? "blue" : "violet"}>{c.source}</Badge></td>
                        <td className="px-5 py-4 text-slate-500">{formatDate(c.date)}</td>
                        <td className="px-5 py-4 font-semibold text-slate-900">{formatGBP(c.amount, { decimals: true })}</td>
                        <td className="px-5 py-4"><Badge tone={statusTone[c.status]}>{c.status}</Badge></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </DashboardBody>
    </>
  );
}
