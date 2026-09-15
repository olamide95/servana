import { Star } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import { formatDate, cn } from "@/lib/utils";
import type { Review } from "@/lib/types";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
      <div className="flex items-center gap-3">
        <Avatar name={review.authorAvatar} />
        <div>
          <p className="font-semibold text-slate-900">{review.authorName}</p>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={13}
                className={cn(i < review.rating ? "fill-amber-400 text-amber-400" : "text-slate-200")}
              />
            ))}
            <span className="ml-1 text-xs text-slate-400">{formatDate(review.date)}</span>
          </div>
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{review.comment}</p>
      {review.response && (
        <div className="mt-3 rounded-xl bg-slate-50 p-3">
          <p className="text-xs font-semibold text-slate-500">Provider responded</p>
          <p className="mt-1 text-sm text-slate-600">{review.response}</p>
        </div>
      )}
    </div>
  );
}
