import Link from "next/link";
import { Plus, Eye } from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardBody } from "@/components/dashboard/DashboardBody";
import { PlaceholderImage } from "@/components/marketplace/PlaceholderImage";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Rating } from "@/components/ui/Rating";
import { formatGBP } from "@/lib/utils";
import { services, getCategory } from "@/lib/data";

// Agency-managed services (demo subset)
const managed = services.filter((s) => ["s1", "s4", "s12"].includes(s.id));

export default function AgencyServicesPage() {
  return (
    <>
      <DashboardHeader title="Managed services" />
      <DashboardBody>
        <div className="mb-5 flex items-center justify-between">
          <p className="text-sm text-slate-500">{managed.length} managed listings</p>
          <Button href="/dashboard/agency/services/new"><Plus size={16} /> New service</Button>
        </div>
        <div className="space-y-4">
          {managed.map((s) => {
            const cat = getCategory(s.categorySlug);
            return (
              <Card key={s.id} className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center">
                <PlaceholderImage seed={s.images[0]} icon={cat?.icon} className="h-24 w-full rounded-xl sm:w-32" />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-slate-900">{s.title}</h3>
                    <Badge tone="violet">Managed</Badge>
                  </div>
                  <p className="mt-0.5 text-sm text-slate-500">{cat?.name} · {s.location}</p>
                  <div className="mt-2 flex flex-wrap items-center gap-4 text-sm">
                    <Rating value={s.rating} count={s.reviewCount} />
                    <span className="text-slate-400">{s.ordersCompleted} orders</span>
                    <span className="font-semibold text-slate-900">{formatGBP(s.hourlyRate)}/hr</span>
                  </div>
                </div>
                <Button href={`/services/${s.id}`} variant="outline" size="sm"><Eye size={15} /> View</Button>
              </Card>
            );
          })}
        </div>
      </DashboardBody>
    </>
  );
}
