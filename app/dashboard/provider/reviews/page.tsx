import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardBody } from "@/components/dashboard/DashboardBody";
import { ReviewCard } from "@/components/marketplace/ReviewCard";
import { Card } from "@/components/ui/Card";
import { Rating } from "@/components/ui/Rating";
import { getReviewsByProvider, getProvider } from "@/lib/data";

export default function ProviderReviewsPage() {
  const provider = getProvider("p1")!;
  const reviews = getReviewsByProvider("p1");

  const dist = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: reviews.filter((r) => Math.round(r.rating) === star).length,
  }));
  const total = reviews.length || 1;

  return (
    <>
      <DashboardHeader title="Reviews" />
      <DashboardBody>
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="p-6 lg:col-span-1">
            <div className="text-center">
              <p className="font-display text-5xl font-extrabold text-slate-900">{provider.rating.toFixed(1)}</p>
              <Rating value={provider.rating} className="mt-2 justify-center" />
              <p className="mt-1 text-sm text-slate-400">{provider.reviewCount} reviews</p>
            </div>
            <div className="mt-6 space-y-2">
              {dist.map((d) => (
                <div key={d.star} className="flex items-center gap-2 text-sm">
                  <span className="w-3 text-slate-500">{d.star}</span>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full rounded-full bg-amber-400" style={{ width: `${(d.count / total) * 100}%` }} />
                  </div>
                  <span className="w-6 text-right text-xs text-slate-400">{d.count}</span>
                </div>
              ))}
            </div>
          </Card>

          <div className="space-y-4 lg:col-span-2">
            {reviews.map((r) => <ReviewCard key={r.id} review={r} />)}
          </div>
        </div>
      </DashboardBody>
    </>
  );
}
