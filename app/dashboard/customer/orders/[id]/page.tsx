import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, MapPin, CalendarDays, Clock, Wallet, MessageCircle, Wifi } from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardBody } from "@/components/dashboard/DashboardBody";
import { OrderStatusBadge } from "@/components/dashboard/OrderStatusBadge";
import { Card } from "@/components/ui/Card";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { formatGBP, formatDate } from "@/lib/utils";
import { getOrder, getService, orders } from "@/lib/data";

export function generateStaticParams() {
  return orders.map((o) => ({ id: o.id }));
}

export default function CustomerOrderDetail({ params }: { params: { id: string } }) {
  const order = getOrder(params.id);
  if (!order) notFound();
  const service = getService(order.serviceId);
  const serviceFee = Math.max(0, order.total - order.baseAmount - order.addonsAmount + order.walletApplied);

  return (
    <>
      <DashboardHeader title="Order details" />
      <DashboardBody>
        <Link href="/dashboard/customer/orders" className="mb-4 inline-flex items-center gap-1 text-sm font-semibold text-slate-500 hover:text-slate-900">
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
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Instructions</p>
                  <p className="mt-1 text-sm text-slate-600">{order.instructions}</p>
                </div>
              )}
            </Card>

            {service && (
              <Card className="p-6">
                <h3 className="font-display font-bold text-slate-900">Provider</h3>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar name={order.providerName} size="lg" />
                    <div>
                      <p className="font-semibold text-slate-900">{order.providerName}</p>
                      <Link href={`/services/${service.id}`} className="text-sm text-brand-700 hover:underline">{service.title}</Link>
                    </div>
                  </div>
                  <Button variant="outline" size="sm"><MessageCircle size={15} /> Message</Button>
                </div>
              </Card>
            )}
          </div>

          {/* Summary */}
          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="font-display font-bold text-slate-900">Payment summary</h3>
              <dl className="mt-4 space-y-2.5 text-sm">
                <Row label="Base" value={formatGBP(order.baseAmount, { decimals: true })} />
                {order.addonsAmount > 0 && <Row label="Add-ons" value={formatGBP(order.addonsAmount, { decimals: true })} />}
                <Row label="Service fee" value={formatGBP(serviceFee, { decimals: true })} />
                {order.walletApplied > 0 && (
                  <Row label="Wallet credit" value={`−${formatGBP(order.walletApplied, { decimals: true })}`} accent />
                )}
                <div className="border-t border-slate-100 pt-2.5">
                  <Row label="Total paid" value={formatGBP(order.total, { decimals: true })} bold />
                </div>
              </dl>
              {order.walletApplied > 0 && (
                <p className="mt-3 inline-flex items-center gap-1 text-xs text-slate-400"><Wallet size={12} /> Wallet credit applied</p>
              )}
            </Card>

            {order.status === "completed" && (
              <Button href="/dashboard/customer/reviews" className="w-full">Leave a review</Button>
            )}
            {(order.status === "pending" || order.status === "accepted") && (
              <Button variant="danger" className="w-full">Cancel order</Button>
            )}
          </div>
        </div>
      </DashboardBody>
    </>
  );
}

function Detail({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
        <Icon size={16} />
      </span>
      <div>
        <p className="text-xs text-slate-400">{label}</p>
        <p className="text-sm font-medium text-slate-900">{value}</p>
      </div>
    </div>
  );
}

function Row({ label, value, bold, accent }: { label: string; value: string; bold?: boolean; accent?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <dt className={bold ? "font-semibold text-slate-900" : "text-slate-500"}>{label}</dt>
      <dd className={`${bold ? "font-display text-lg font-bold text-slate-900" : "font-medium"} ${accent ? "text-brand-600" : "text-slate-900"}`}>{value}</dd>
    </div>
  );
}
