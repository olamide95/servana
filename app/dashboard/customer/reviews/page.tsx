import { Star } from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardBody } from "@/components/dashboard/DashboardBody";
import { ReviewCard } from "@/components/marketplace/ReviewCard";
import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { Button } from "@/components/ui/Button";
import { reviews, getOrdersByCustomer } from "@/lib/data";

export default function CustomerReviewsPage() {
  const myReviews = reviews.filter((r) => r.authorName === "Olivia Bennett");
  const completed = getOrdersByCustomer("u1").filter((o) => o.status === "completed");
  const reviewedOrderIds = new Set(myReviews.map((r) => r.orderId));
  const toReview = completed.filter((o) => !reviewedOrderIds.has(o.id));

  return (
    <>
      <DashboardHeader title="Reviews" />
      <DashboardBody>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4">
            <h2 className="font-display text-lg font-bold text-slate-900">Your reviews</h2>
            {myReviews.length > 0 ? (
              myReviews.map((r) => <ReviewCard key={r.id} review={r} />)
            ) : (
              <EmptyState icon="Star" title="No reviews yet" description="Reviews you write will appear here." />
            )}
          </div>

          <div>
            <Card className="p-5">
              <h3 className="font-display font-bold text-slate-900">Awaiting your review</h3>
              {toReview.length > 0 ? (
                <ul className="mt-4 space-y-3">
                  {toReview.map((o) => (
                    <li key={o.id} className="rounded-xl border border-slate-200 p-3">
                      <p className="text-sm font-medium text-slate-900">{o.serviceTitle}</p>
                      <p className="text-xs text-slate-400">{o.providerName}</p>
                      <div className="mt-2 flex items-center gap-1 text-slate-300">
                        {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} />)}
                      </div>
                      <Button size="sm" className="mt-3 w-full">Write review</Button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 text-sm text-slate-500">You&apos;re all caught up — nothing to review.</p>
              )}
            </Card>
          </div>
        </div>
      </DashboardBody>
    </>
  );
}
