import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardBody } from "@/components/dashboard/DashboardBody";
import { StatGrid } from "@/components/dashboard/StatCard";
import { WalletCard } from "@/components/dashboard/WalletCard";
import { OrderTable } from "@/components/dashboard/OrderTable";
import { ServiceCard } from "@/components/marketplace/ServiceCard";
import { Card, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import type { StatItem } from "@/lib/types";
import { getOrdersByCustomer, walletBalance, featuredServices } from "@/lib/data";

const stats: StatItem[] = [
  { label: "Active orders", value: "3", delta: "1 this week", trend: "up", icon: "ShoppingBag" },
  { label: "Completed", value: "12", delta: "2", trend: "up", icon: "CheckCircle2" },
  { label: "Saved providers", value: "8", icon: "Heart" },
  { label: "Wallet balance", value: "£60.00", icon: "Wallet" },
];

export default function CustomerDashboard() {
  const orders = getOrdersByCustomer("u1");
  return (
    <>
      <DashboardHeader title="Dashboard" />
      <DashboardBody>
        <div className="mb-6 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-700 p-6 text-white">
          <p className="text-sm font-semibold text-brand-100">Welcome back, Olivia 👋</p>
          <h2 className="mt-1 font-display text-2xl font-bold">What do you need help with today?</h2>
          <div className="mt-4">
            <Button href="/services" variant="secondary" className="bg-white text-brand-700 hover:bg-brand-50">
              Browse services <ArrowRight size={16} />
            </Button>
          </div>
        </div>

        <StatGrid stats={stats} />

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader title="Recent orders" action={<Link href="/dashboard/customer/orders" className="text-sm font-semibold text-brand-700 hover:underline">View all</Link>} />
              <div className="p-4">
                <OrderTable orders={orders.slice(0, 4)} basePath="/dashboard/customer/orders" />
              </div>
            </Card>
          </div>
          <div>
            <WalletCard balance={walletBalance} tokens={3} />
          </div>
        </div>

        <div className="mt-8">
          <div className="mb-4 flex items-center gap-2">
            <Sparkles size={18} className="text-brand-600" />
            <h3 className="font-display text-lg font-bold text-slate-900">Recommended for you</h3>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.slice(0, 3).map((s) => <ServiceCard key={s.id} service={s} />)}
          </div>
        </div>
      </DashboardBody>
    </>
  );
}
