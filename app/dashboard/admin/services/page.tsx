import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardBody } from "@/components/dashboard/DashboardBody";
import { AdminTable, type Column } from "@/components/dashboard/AdminTable";
import { Badge } from "@/components/ui/Badge";
import { Rating } from "@/components/ui/Rating";
import { Button } from "@/components/ui/Button";
import { formatGBP, titleFromSlug } from "@/lib/utils";
import { services, getProvider } from "@/lib/data";
import type { Service } from "@/lib/types";

const columns: Column<Service>[] = [
  { header: "Service", cell: (s) => (
    <div><p className="font-medium text-slate-900">{s.title}</p><p className="text-xs text-slate-400">{getProvider(s.providerId)?.name}</p></div>
  ) },
  { header: "Category", cell: (s) => <Badge tone="slate">{titleFromSlug(s.categorySlug)}</Badge> },
  { header: "Rate", cell: (s) => <span className="font-semibold text-slate-900">{formatGBP(s.hourlyRate)}/hr</span> },
  { header: "Rating", cell: (s) => <Rating value={s.rating} count={s.reviewCount} /> },
  { header: "Orders", cell: (s) => <span className="text-slate-700">{s.ordersCompleted}</span> },
  { header: "Flags", cell: (s) => (
    <div className="flex gap-1">
      {s.featured && <Badge tone="brand">Featured</Badge>}
      {s.verified && <Badge tone="green">Verified</Badge>}
    </div>
  ) },
  { header: "", cell: () => <Button size="sm" variant="ghost">Manage</Button>, className: "text-right" },
];

export default function AdminServicesPage() {
  return (
    <>
      <DashboardHeader title="Services" />
      <DashboardBody>
        <AdminTable title="All services" subtitle={`${services.length} live services`} columns={columns} rows={services} minWidth={900} />
      </DashboardBody>
    </>
  );
}
