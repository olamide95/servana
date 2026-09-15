import { ShieldAlert } from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardBody } from "@/components/dashboard/DashboardBody";
import { Card } from "@/components/ui/Card";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { formatDate } from "@/lib/utils";

const disputes = [
  { id: "d1", ref: "SVN-10247", customer: "Chloe Roberts", provider: "Grace Mensah", reason: "Provider didn't arrive for booking", opened: "2025-05-26", priority: "High", status: "Open" },
  { id: "d2", ref: "SVN-10244", customer: "Robert Hughes", provider: "Marek Nowak", reason: "Work not completed to standard", opened: "2025-06-02", priority: "Medium", status: "Investigating" },
  { id: "d3", ref: "SVN-10242", customer: "Olivia Bennett", provider: "James Okafor", reason: "Charged for extra hour not agreed", opened: "2025-06-03", priority: "Low", status: "Open" },
];

const priorityTone = { High: "red", Medium: "amber", Low: "slate" } as const;

export default function AdminDisputesPage() {
  return (
    <>
      <DashboardHeader title="Disputes" />
      <DashboardBody>
        <div className="space-y-4">
          {disputes.map((d) => (
            <Card key={d.id} className="p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600"><ShieldAlert size={20} /></span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs font-semibold text-slate-400">{d.ref}</span>
                      <Badge tone={priorityTone[d.priority as keyof typeof priorityTone]}>{d.priority} priority</Badge>
                      <Badge tone={d.status === "Open" ? "amber" : "blue"}>{d.status}</Badge>
                    </div>
                    <p className="mt-1.5 font-semibold text-slate-900">{d.reason}</p>
                    <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                      <span className="inline-flex items-center gap-1.5"><Avatar name={d.customer} size="sm" /> {d.customer}</span>
                      <span>vs</span>
                      <span className="inline-flex items-center gap-1.5"><Avatar name={d.provider} size="sm" /> {d.provider}</span>
                      <span>· Opened {formatDate(d.opened)}</span>
                    </div>
                  </div>
                </div>
                <div className="flex shrink-0 gap-2">
                  <Button variant="outline" size="sm">View details</Button>
                  <Button size="sm">Resolve</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </DashboardBody>
    </>
  );
}
