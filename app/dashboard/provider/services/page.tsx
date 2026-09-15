import Link from "next/link";
import { Plus, MoreVertical, Eye, Pencil } from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardBody } from "@/components/dashboard/DashboardBody";
import { PlaceholderImage } from "@/components/marketplace/PlaceholderImage";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Rating } from "@/components/ui/Rating";
import { EmptyState } from "@/components/ui/EmptyState";
import { formatGBP } from "@/lib/utils";
import { getServicesByProvider, getCategory } from "@/lib/data";

export default function ProviderServicesPage() {
  const services = getServicesByProvider("p1");
  return (
    <>
      <DashboardHeader title="My services" />
      <DashboardBody>
        <div className="mb-5 flex items-center justify-between">
          <p className="text-sm text-slate-500">{services.length} active listings</p>
          <Button href="/dashboard/provider/services/new"><Plus size={16} /> New service</Button>
        </div>

        {services.length === 0 ? (
          <EmptyState icon="Briefcase" title="No services yet" description="Create your first listing to start getting booked." actionLabel="Create a service" actionHref="/dashboard/provider/services/new" />
        ) : (
          <div className="space-y-4">
            {services.map((s) => {
              const cat = getCategory(s.categorySlug);
              return (
                <Card key={s.id} className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center">
                  <PlaceholderImage seed={s.images[0]} icon={cat?.icon} className="h-24 w-full rounded-xl sm:w-32" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-slate-900">{s.title}</h3>
                      {s.featured && <Badge tone="brand">Featured</Badge>}
                      <Badge tone="green">Live</Badge>
                    </div>
                    <p className="mt-0.5 text-sm text-slate-500">{cat?.name} · {s.location}</p>
                    <div className="mt-2 flex flex-wrap items-center gap-4 text-sm">
                      <Rating value={s.rating} count={s.reviewCount} />
                      <span className="text-slate-400">{s.ordersCompleted} orders</span>
                      <span className="font-semibold text-slate-900">{formatGBP(s.hourlyRate)}/hr</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button href={`/services/${s.id}`} variant="outline" size="sm"><Eye size={15} /> View</Button>
                    <Button variant="ghost" size="sm"><Pencil size={15} /> Edit</Button>
                    <button className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100"><MoreVertical size={16} /></button>
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </DashboardBody>
    </>
  );
}
