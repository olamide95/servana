import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardBody } from "@/components/dashboard/DashboardBody";
import { OrderTable } from "@/components/dashboard/OrderTable";
import { getOrdersByProvider } from "@/lib/data";

export default function ProviderOrdersPage() {
  const orders = getOrdersByProvider("p1");
  return (
    <>
      <DashboardHeader title="Orders" />
      <DashboardBody>
        <p className="mb-4 text-sm text-slate-500">{orders.length} orders</p>
        <OrderTable orders={orders} basePath="/dashboard/provider/orders" counterpartyLabel="Customer" counterpartyKey="customerName" />
      </DashboardBody>
    </>
  );
}
