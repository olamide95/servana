import Link from "next/link";
import { BadgeCheck, MapPin } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import { Rating } from "@/components/ui/Rating";
import { Badge } from "@/components/ui/Badge";
import { ProviderLevelBadge } from "./ProviderLevelBadge";
import type { Provider } from "@/lib/types";

export function ProviderCard({ provider }: { provider: Provider }) {
  return (
    <Link
      href={`/providers/${provider.id}`}
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-card transition hover:-translate-y-0.5 hover:shadow-card-hover"
    >
      <div className="flex items-start gap-3">
        <Avatar name={provider.name} size="lg" />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <h3 className="truncate font-bold text-slate-900 group-hover:text-brand-700">{provider.name}</h3>
            {provider.verified && <BadgeCheck size={16} className="shrink-0 text-brand-600" />}
          </div>
          <p className="line-clamp-2 text-sm text-slate-500">{provider.tagline}</p>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <ProviderLevelBadge level={provider.level} />
        <Badge tone="slate">
          <MapPin size={11} /> {provider.online ? "Online" : provider.city}
        </Badge>
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
        <Rating value={provider.rating} count={provider.reviewCount} />
        <span className="text-sm text-slate-400">{provider.completedOrders} orders</span>
      </div>
    </Link>
  );
}
