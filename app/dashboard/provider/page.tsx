import Link from "next/link";
import { Plus, TrendingUp } from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardBody } from "@/components/dashboard/DashboardBody";
import { StatGrid } from "@/components/dashboard/StatCard";
import { OrderTable } from "@/components/dashboard/OrderTable";
import { Card, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Rating } from "@/components/ui/Rating";
import { Avatar } from "@/components/ui/Avatar";
import type { StatItem } from "@/lib/types";
import { getOrdersByProvider, getReviewsByProvider, getProvider } from "@/lib/data";

const stats: StatItem[] = [
  { label: "This month", value: "£1,840", delta: "12%", trend: "up", icon: "Banknote" },
  { label: "Active orders", value: "5", delta: "2", trend: "up", icon: "ClipboardList" },
  { label: "Completion rate", value: "98%", icon: "CheckCircle2" },
  { label: "Avg. rating", value: "4.9", delta: "0.1", trend: "up", icon: "Star" },
];

export default function ProviderDashboard() {
  const provider = getProvider("p1")!;
  const orders = getOrdersByProvider("p1");
  const reviews = getReviewsByProvider("p1");

  return (
    <>
      <DashboardHeader title="Dashboard" />
      <DashboardBody>
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="font-display text-2xl font-bold text-slate-900">Hello, James 👋</h2>
            <p className="text-slate-500">Here&apos;s how your business is doing.</p>
          </div>
          <Button href="/dashboard/provider/services/new"><Plus size={16} /> New service</Button>
        </div>

        <StatGrid stats={stats} />

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader title="Incoming & active orders" action={<Link href="/dashboard/provider/orders" className="text-sm font-semibold text-brand-700 hover:underline">View all</Link>} />
              <div className="p-4">
                <OrderTable orders={orders} basePath="/dashboard/provider/orders" counterpartyLabel="Customer" counterpartyKey="customerName" />
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-5">
              <div className="flex items-center gap-2 text-brand-600"><TrendingUp size={18} /><h3 className="font-display font-bold text-slate-900">Performance</h3></div>
              <div className="mt-4 space-y-3 text-sm">
                <div className="flex items-center justify-between"><span className="text-slate-500">Provider level</span><span className="font-semibold capitalize text-slate-900">{provider.level.replace("-", " ")}</span></div>
                <div className="flex items-center justify-between"><span className="text-slate-500">Response time</span><span className="font-semibold text-slate-900">{provider.responseTime}</span></div>
                <div className="flex items-center justify-between"><span className="text-slate-500">Completed orders</span><span className="font-semibold text-slate-900">{provider.completedOrders}</span></div>
                <div className="flex items-center justify-between"><span className="text-slate-500">Rating</span><Rating value={provider.rating} count={provider.reviewCount} /></div>
              </div>
            </Card>

            <Card className="p-5">
              <h3 className="font-display font-bold text-slate-900">Latest review</h3>
              {reviews[0] && (
                <div className="mt-3">
                  <div className="flex items-center gap-2">
                    <Avatar name={reviews[0].authorAvatar} size="sm" />
                    <p className="text-sm font-semibold text-slate-900">{reviews[0].authorName}</p>
                  </div>
                  <Rating value={reviews[0].rating} className="mt-2" />
                  <p className="mt-2 text-sm text-slate-600">&ldquo;{reviews[0].comment}&rdquo;</p>
                </div>
              )}
            </Card>
          </div>
        </div>
      </DashboardBody>
    </>
  );
}
