import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardBody } from "@/components/dashboard/DashboardBody";
import { AdminTable, type Column } from "@/components/dashboard/AdminTable";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Rating } from "@/components/ui/Rating";
import { agencies } from "@/lib/data";
import type { Agency } from "@/lib/types";

const columns: Column<Agency>[] = [
  { header: "Agency", cell: (a) => (
    <div className="flex items-center gap-2">
      <Avatar name={a.name} size="sm" />
      <div><p className="font-medium text-slate-900">{a.name}</p><p className="text-xs text-slate-400">{a.city}</p></div>
    </div>
  ) },
  { header: "Team", cell: (a) => <span className="text-slate-700">{a.teamSize}</span> },
  { header: "Providers", cell: (a) => <span className="text-slate-700">{a.providersReferred}</span> },
  { header: "Customers", cell: (a) => <span className="text-slate-700">{a.customersReferred}</span> },
  { header: "Rating", cell: (a) => <Rating value={a.rating} count={a.reviewCount} /> },
  { header: "Code", cell: (a) => <span className="font-mono text-xs font-semibold text-brand-700">{a.referralCode}</span> },
  { header: "Status", cell: (a) => <Badge tone={a.verified ? "green" : "amber"}>{a.verified ? "Verified" : "Pending"}</Badge> },
];

export default function AdminAgenciesPage() {
  return (
    <>
      <DashboardHeader title="Agencies" />
      <DashboardBody>
        <AdminTable title="All agencies" subtitle={`${agencies.length} agencies`} columns={columns} rows={agencies} minWidth={820} />
      </DashboardBody>
    </>
  );
}
