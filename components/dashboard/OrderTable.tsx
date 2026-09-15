import Link from "next/link";
import { OrderStatusBadge } from "./OrderStatusBadge";
import { Avatar } from "@/components/ui/Avatar";
import { EmptyState } from "@/components/ui/EmptyState";
import { formatGBP, formatDate } from "@/lib/utils";
import type { Order } from "@/lib/types";

export function OrderTable({
  orders,
  basePath = "/dashboard/customer/orders",
  counterpartyLabel = "Provider",
  counterpartyKey = "providerName",
}: {
  orders: Order[];
  basePath?: string;
  counterpartyLabel?: string;
  counterpartyKey?: "providerName" | "customerName";
}) {
  if (orders.length === 0) {
    return (
      <EmptyState
        icon="ShoppingBag"
        title="No orders yet"
        description="When orders come in, they'll appear here with full details and status."
      />
    );
  }
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
      <div className="overflow-x-auto scroll-thin">
        <table className="w-full min-w-[760px] text-sm">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              <th className="px-5 py-3">Reference</th>
              <th className="px-5 py-3">Service</th>
              <th className="px-5 py-3">{counterpartyLabel}</th>
              <th className="px-5 py-3">Date</th>
              <th className="px-5 py-3">Total</th>
              <th className="px-5 py-3">Status</th>
              <th className="px-5 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {orders.map((o) => (
              <tr key={o.id} className="transition hover:bg-slate-50/60">
                <td className="px-5 py-4 font-mono text-xs font-semibold text-slate-500">{o.reference}</td>
                <td className="px-5 py-4 font-medium text-slate-900">{o.serviceTitle}</td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-2">
                    <Avatar name={o[counterpartyKey]} size="sm" />
                    <span className="text-slate-700">{o[counterpartyKey]}</span>
                  </div>
                </td>
                <td className="px-5 py-4 text-slate-500">{formatDate(o.date)}</td>
                <td className="px-5 py-4 font-semibold text-slate-900">{formatGBP(o.total, { decimals: true })}</td>
                <td className="px-5 py-4"><OrderStatusBadge status={o.status} /></td>
                <td className="px-5 py-4 text-right">
                  <Link href={`${basePath}/${o.id}`} className="text-sm font-semibold text-brand-700 hover:underline">
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
