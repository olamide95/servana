import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardBody } from "@/components/dashboard/DashboardBody";
import { AdminTable, type Column } from "@/components/dashboard/AdminTable";
import { StatGrid } from "@/components/dashboard/StatCard";
import { Badge } from "@/components/ui/Badge";
import { formatGBP, formatDate } from "@/lib/utils";
import { commissions, getAgency } from "@/lib/data";
import type { Commission, CommissionStatus, StatItem } from "@/lib/types";

const statusTone: Record<CommissionStatus, "green" | "brand" | "amber"> = {
  paid: "green", available: "brand", pending: "amber",
};

const stats: StatItem[] = [
  { label: "Total paid out", value: "£50.00", icon: "Banknote" },
  { label: "Available", value: "£15.50", icon: "Wallet" },
  { label: "Pending", value: "£17.00", icon: "Clock" },
  { label: "Agencies earning", value: "3", icon: "Building2" },
];

const columns: Column<Commission>[] = [
  { header: "Agency", cell: (c) => <span className="font-medium text-slate-900">{getAgency(c.agencyId)?.name ?? c.agencyId}</span> },
  { header: "Description", cell: (c) => <span className="text-slate-600">{c.description}</span> },
  { header: "Source", cell: (c) => <Badge tone={c.source === "transaction" ? "blue" : "violet"}>{c.source}</Badge> },
  { header: "Date", cell: (c) => <span className="text-slate-500">{formatDate(c.date)}</span> },
  { header: "Amount", cell: (c) => <span className="font-semibold text-slate-900">{formatGBP(c.amount, { decimals: true })}</span> },
  { header: "Status", cell: (c) => <Badge tone={statusTone[c.status]}>{c.status}</Badge> },
];

export default function AdminCommissionsPage() {
  return (
    <>
      <DashboardHeader title="Commissions" />
      <DashboardBody>
        <StatGrid stats={stats} />
        <div className="mt-6">
          <AdminTable title="Commission ledger" subtitle="Across all agencies" columns={columns} rows={commissions} minWidth={860} />
        </div>
      </DashboardBody>
    </>
  );
}
