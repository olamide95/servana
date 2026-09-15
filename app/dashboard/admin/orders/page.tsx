import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardBody } from "@/components/dashboard/DashboardBody";
import { AdminTable, type Column } from "@/components/dashboard/AdminTable";
import { OrderStatusBadge } from "@/components/dashboard/OrderStatusBadge";
import { Avatar } from "@/components/ui/Avatar";
import { formatGBP, formatDate } from "@/lib/utils";
import { orders } from "@/lib/data";
import type { Order } from "@/lib/types";

const columns: Column<Order>[] = [
  { header: "Reference", cell: (o) => <span className="font-mono text-xs font-semibold text-slate-500">{o.reference}</span> },
  { header: "Service", cell: (o) => <span className="font-medium text-slate-900">{o.serviceTitle}</span> },
  { header: "Customer", cell: (o) => (
    <div className="flex items-center gap-2"><Avatar name={o.customerName} size="sm" /><span className="text-slate-700">{o.customerName}</span></div>
  ) },
  { header: "Provider", cell: (o) => <span className="text-slate-500">{o.providerName}</span> },
  { header: "Date", cell: (o) => <span className="text-slate-500">{formatDate(o.date)}</span> },
  { header: "Total", cell: (o) => <span className="font-semibold text-slate-900">{formatGBP(o.total, { decimals: true })}</span> },
  { header: "Status", cell: (o) => <OrderStatusBadge status={o.status} /> },
];

export default function AdminOrdersPage() {
  return (
    <>
      <DashboardHeader title="Orders" />
      <DashboardBody>
        <AdminTable title="All orders" subtitle={`${orders.length} orders`} columns={columns} rows={orders} minWidth={980} />
      </DashboardBody>
    </>
  );
}
