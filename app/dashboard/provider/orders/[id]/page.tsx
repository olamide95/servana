import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, MapPin, CalendarDays, Clock, MessageCircle, Wifi, Check } from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardBody } from "@/components/dashboard/DashboardBody";
import { OrderStatusBadge } from "@/components/dashboard/OrderStatusBadge";
import { Card } from "@/components/ui/Card";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { formatGBP, formatDate } from "@/lib/utils";
import { getOrder, getOrdersByProvider } from "@/lib/data";

export function generateStaticParams() {
  return getOrdersByProvider("p1").map((o) => ({ id: o.id }));
}

export default function ProviderOrderDetail({ params }: { params: { id: string } }) {
  const order = getOrder(params.id);
  if (!order) notFound();
  const providerEarnings = Math.round(order.total * 0.85 * 100) / 100;

  return (
    <>
      <DashboardHeader title="Order details" />
      <DashboardBody>
        <Link href="/dashboard/provider/orders" className="mb-4 inline-flex items-center gap-1 text-sm font-semibold text-slate-500 hover:text-slate-900">
          <ChevronLeft size={16} /> Back to orders
        </Link>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-xs font-semibold text-slate-400">{order.reference}</p>
                  <h2 className="mt-1 font-display text-xl font-bold text-slate-900">{order.serviceTitle}</h2>
                </div>
                <OrderStatusBadge status={order.status} />
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <Detail icon={CalendarDays} label="Date" value={formatDate(order.date)} />
                <Detail icon={Clock} label="Time" value={order.time} />
                <Detail icon={order.mode === "online" ? Wifi : MapPin} label="Location" value={order.mode === "online" ? "Online" : `${order.address}, ${order.postcode}`} />
                <Detail icon={Clock} label="Duration" value={`${order.hours} hour${order.hours > 1 ? "s" : ""}`} />
              </div>
              {order.instructions && (
                <div className="mt-5 rounded-xl bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Customer instructions</p>
                  <p className="mt-1 text-sm text-slate-600">{order.instructions}</p>
                </div>
              )}
            </Card>

            <Card className="p-6">
              <h3 className="font-display font-bold text-slate-900">Customer</h3>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar name={order.customerName} size="lg" />
                  <div>
                    <p className="font-semibold text-slate-900">{order.customerName}</p>
                    <p className="text-sm text-slate-400">{order.mode === "online" ? "Online booking" : order.postcode}</p>
                  </div>
                </div>
                <Button variant="outline" size="sm"><MessageCircle size={15} /> Message</Button>
              </div>
            </Card>
          </div>

          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="font-display font-bold text-slate-900">Your earnings</h3>
              <dl className="mt-4 space-y-2.5 text-sm">
                <div className="flex justify-between"><dt className="text-slate-500">Order total</dt><dd className="font-medium text-slate-900">{formatGBP(order.total, { decimals: true })}</dd></div>
                <div className="flex justify-between"><dt className="text-slate-500">Servana fee (15%)</dt><dd className="font-medium text-slate-500">−{formatGBP(order.total - providerEarnings, { decimals: true })}</dd></div>
                <div className="flex justify-between border-t border-slate-100 pt-2.5"><dt className="font-semibold text-slate-900">You receive</dt><dd className="font-display text-lg font-bold text-brand-600">{formatGBP(providerEarnings, { decimals: true })}</dd></div>
              </dl>
            </Card>

            {order.status === "pending" && (
              <div className="space-y-2">
                <Button className="w-full"><Check size={16} /> Accept order</Button>
                <Button variant="outline" className="w-full">Decline</Button>
              </div>
            )}
            {order.status === "in-progress" && <Button className="w-full"><Check size={16} /> Mark as complete</Button>}
          </div>
        </div>
      </DashboardBody>
    </>
  );
}

function Detail({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600"><Icon size={16} /></span>
      <div><p className="text-xs text-slate-400">{label}</p><p className="text-sm font-medium text-slate-900">{value}</p></div>
    </div>
  );
}
