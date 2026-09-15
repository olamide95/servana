import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardBody } from "@/components/dashboard/DashboardBody";
import { AdminTable, type Column } from "@/components/dashboard/AdminTable";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";

interface Row { id: string; name: string; email: string; city: string; orders: number; joined: string; status: string; }

const customers: Row[] = [
  { id: "u1", name: "Olivia Bennett", email: "olivia@example.co.uk", city: "London", orders: 15, joined: "2024-03-12", status: "Active" },
  { id: "u16", name: "Robert Hughes", email: "robert@example.co.uk", city: "Coventry", orders: 3, joined: "2025-06-01", status: "Active" },
  { id: "u17", name: "Emma Davies", email: "emma@example.co.uk", city: "Manchester", orders: 5, joined: "2025-05-22", status: "Active" },
  { id: "u18", name: "Margaret Lewis", email: "margaret@example.co.uk", city: "Leeds", orders: 8, joined: "2025-05-28", status: "Active" },
  { id: "u19", name: "Chloe Roberts", email: "chloe@example.co.uk", city: "Liverpool", orders: 1, joined: "2025-05-20", status: "Lapsed" },
  { id: "u20", name: "David Thompson", email: "david@example.co.uk", city: "Manchester", orders: 2, joined: "2025-05-02", status: "Active" },
];

const columns: Column<Row>[] = [
  { header: "Customer", cell: (r) => (
    <div className="flex items-center gap-2">
      <Avatar name={r.name} size="sm" />
      <div><p className="font-medium text-slate-900">{r.name}</p><p className="text-xs text-slate-400">{r.email}</p></div>
    </div>
  ) },
  { header: "City", cell: (r) => <span className="text-slate-500">{r.city}</span> },
  { header: "Orders", cell: (r) => <span className="text-slate-700">{r.orders}</span> },
  { header: "Joined", cell: (r) => <span className="text-slate-500">{formatDate(r.joined)}</span> },
  { header: "Status", cell: (r) => <Badge tone={r.status === "Active" ? "green" : "slate"}>{r.status}</Badge> },
];

export default function AdminCustomersPage() {
  return (
    <>
      <DashboardHeader title="Customers" />
      <DashboardBody>
        <AdminTable title="All customers" subtitle="8,420 total · showing recent" columns={columns} rows={customers} />
      </DashboardBody>
    </>
  );
}
