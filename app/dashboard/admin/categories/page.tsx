import { Plus } from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardBody } from "@/components/dashboard/DashboardBody";
import { AdminTable, type Column } from "@/components/dashboard/AdminTable";
import { Icon } from "@/components/ui/Icon";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { categories } from "@/lib/data";
import type { Category } from "@/lib/types";

const columns: Column<Category>[] = [
  { header: "Category", cell: (c) => (
    <div className="flex items-center gap-2.5">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600"><Icon name={c.icon} size={16} /></span>
      <span className="font-medium text-slate-900">{c.name}</span>
    </div>
  ) },
  { header: "Group", cell: (c) => <Badge tone="slate">{c.group}</Badge> },
  { header: "Slug", cell: (c) => <span className="font-mono text-xs text-slate-400">{c.slug}</span> },
  { header: "Services", cell: (c) => <span className="text-slate-700">{c.serviceCount}</span> },
  { header: "", cell: () => <Button size="sm" variant="ghost">Edit</Button>, className: "text-right" },
];

export default function AdminCategoriesPage() {
  return (
    <>
      <DashboardHeader title="Categories" />
      <DashboardBody>
        <div className="mb-4 flex justify-end">
          <Button><Plus size={16} /> Add category</Button>
        </div>
        <AdminTable title="Service categories" subtitle={`${categories.length} categories`} columns={columns} rows={categories} minWidth={720} />
      </DashboardBody>
    </>
  );
}
