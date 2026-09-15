import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { EmptyState } from "@/components/ui/EmptyState";
import { formatGBP, formatDate } from "@/lib/utils";
import type { Referral } from "@/lib/types";

const statusTone = {
  invited: "slate",
  "signed-up": "blue",
  converted: "green",
} as const;

export function ReferralTable({ referrals }: { referrals: Referral[] }) {
  if (referrals.length === 0) {
    return <EmptyState icon="Share2" title="No referrals yet" description="Share your referral link to start earning commission." />;
  }
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
      <div className="overflow-x-auto scroll-thin">
        <table className="w-full min-w-[680px] text-sm">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              <th className="px-5 py-3">Name</th>
              <th className="px-5 py-3">Type</th>
              <th className="px-5 py-3">Invited</th>
              <th className="px-5 py-3">Status</th>
              <th className="px-5 py-3">Commission</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {referrals.map((r) => (
              <tr key={r.id} className="hover:bg-slate-50/60">
                <td className="px-5 py-4">
                  <div className="flex items-center gap-2">
                    <Avatar name={r.name} size="sm" />
                    <div>
                      <p className="font-medium text-slate-900">{r.name}</p>
                      <p className="text-xs text-slate-400">{r.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <Badge tone={r.type === "provider" ? "violet" : "blue"}>{r.type}</Badge>
                </td>
                <td className="px-5 py-4 text-slate-500">{formatDate(r.invitedAt)}</td>
                <td className="px-5 py-4">
                  <Badge tone={statusTone[r.status]}>{r.status.replace("-", " ")}</Badge>
                </td>
                <td className="px-5 py-4 font-semibold text-slate-900">
                  {r.commissionEarned > 0 ? formatGBP(r.commissionEarned, { decimals: true }) : "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
