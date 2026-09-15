import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardBody } from "@/components/dashboard/DashboardBody";
import { AdminTable, type Column } from "@/components/dashboard/AdminTable";
import { ProviderLevelBadge } from "@/components/marketplace/ProviderLevelBadge";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Rating } from "@/components/ui/Rating";
import { Button } from "@/components/ui/Button";
import { providers } from "@/lib/data";
import type { Provider, KycStatus } from "@/lib/types";

const kycTone: Record<KycStatus, "green" | "amber" | "slate" | "red"> = {
  verified: "green", pending: "amber", unverified: "slate", rejected: "red",
};

const columns: Column<Provider>[] = [
  { header: "Provider", cell: (p) => (
    <div className="flex items-center gap-2">
      <Avatar name={p.name} size="sm" />
      <div><p className="font-medium text-slate-900">{p.name}</p><p className="text-xs text-slate-400">{p.city}</p></div>
    </div>
  ) },
  { header: "Level", cell: (p) => <ProviderLevelBadge level={p.level} /> },
  { header: "Rating", cell: (p) => <Rating value={p.rating} count={p.reviewCount} /> },
  { header: "Orders", cell: (p) => <span className="text-slate-700">{p.completedOrders}</span> },
  { header: "KYC", cell: (p) => <Badge tone={kycTone[p.kyc]}>{p.kyc}</Badge> },
  { header: "", cell: (p) => (
    p.kyc !== "verified"
      ? <Button size="sm" variant="outline">Review</Button>
      : <span className="text-xs text-slate-400">—</span>
  ), className: "text-right" },
];

export default function AdminProvidersPage() {
  return (
    <>
      <DashboardHeader title="Providers" />
      <DashboardBody>
        <AdminTable title="All providers" subtitle={`${providers.length} providers`} columns={columns} rows={providers} minWidth={800} />
      </DashboardBody>
    </>
  );
}
