import Link from "next/link";
import { BadgeCheck, Clock, MapPin, Wifi } from "lucide-react";
import { PlaceholderImage } from "./PlaceholderImage";
import { Avatar } from "@/components/ui/Avatar";
import { Rating } from "@/components/ui/Rating";
import { Badge } from "@/components/ui/Badge";
import { formatGBP } from "@/lib/utils";
import { getProvider, getCategory } from "@/lib/data";
import type { Service } from "@/lib/types";

export function ServiceCard({ service }: { service: Service }) {
  const provider = getProvider(service.providerId);
  const category = getCategory(service.categorySlug);
  return (
    <Link
      href={`/services/${service.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition hover:-translate-y-0.5 hover:shadow-card-hover"
    >
      <div className="relative">
        <PlaceholderImage seed={service.images[0]} icon={category?.icon} className="h-44 w-full" />
        <div className="absolute left-3 top-3 flex gap-1.5">
          {service.featured && <Badge tone="brand">Featured</Badge>}
          {service.mode === "online" && (
            <Badge tone="blue"><Wifi size={11} /> Online</Badge>
          )}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 flex items-center gap-2">
          <Avatar name={provider?.name ?? "P"} size="sm" />
          <span className="truncate text-sm font-medium text-slate-600">{provider?.name}</span>
          {service.verified && <BadgeCheck size={15} className="text-brand-600" />}
        </div>
        <h3 className="line-clamp-2 font-semibold text-slate-900 group-hover:text-brand-700">
          {service.title}
        </h3>
        <div className="mt-2 flex items-center gap-3 text-xs text-slate-400">
          <span className="inline-flex items-center gap-1">
            {service.mode === "online" ? <Wifi size={12} /> : <MapPin size={12} />}
            {service.location}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock size={12} /> {service.responseTime}
          </span>
        </div>
        <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3">
          <Rating value={service.rating} count={service.reviewCount} />
          <div className="text-right">
            <p className="text-[11px] text-slate-400">From</p>
            <p className="font-display text-lg font-bold text-slate-900">
              {formatGBP(service.hourlyRate)}
              <span className="text-xs font-medium text-slate-400">/hr</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
