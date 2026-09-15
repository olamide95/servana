import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardBody } from "@/components/dashboard/DashboardBody";
import { OrderTable } from "@/components/dashboard/OrderTable";
import { getOrdersByCustomer } from "@/lib/data";

export default function CustomerOrdersPage() {
  const orders = getOrdersByCustomer("u1");
  return (
    <>
      <DashboardHeader title="My orders" />
      <DashboardBody>
        <p className="mb-4 text-sm text-slate-500">{orders.length} orders in total</p>
        <OrderTable orders={orders} basePath="/dashboard/customer/orders" />
      </DashboardBody>
    </>
  );
}
