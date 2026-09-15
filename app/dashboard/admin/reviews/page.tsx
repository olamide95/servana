import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardBody } from "@/components/dashboard/DashboardBody";
import { Card } from "@/components/ui/Card";
import { Avatar } from "@/components/ui/Avatar";
import { Rating } from "@/components/ui/Rating";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import { reviews, getProvider } from "@/lib/data";

export default function AdminReviewsPage() {
  return (
    <>
      <DashboardHeader title="Reviews" />
      <DashboardBody>
        <p className="mb-4 text-sm text-slate-500">Moderate reviews — hide any that violate community guidelines.</p>
        <div className="space-y-4">
          {reviews.map((r) => {
            const provider = getProvider(r.providerId);
            return (
              <Card key={r.id} className="p-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex gap-3">
                    <Avatar name={r.authorAvatar} />
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-slate-900">{r.authorName}</p>
                        <Rating value={r.rating} />
                        {r.rating <= 3 && <Badge tone="amber">Low rating</Badge>}
                      </div>
                      <p className="mt-1 text-sm text-slate-600">{r.comment}</p>
                      <p className="mt-1.5 text-xs text-slate-400">For {provider?.name} · {formatDate(r.date)}</p>
                    </div>
                  </div>
                  <div className="flex shrink-0 gap-2">
                    <Button variant="ghost" size="sm">Hide</Button>
                    <Button variant="outline" size="sm">Approve</Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </DashboardBody>
    </>
  );
}
