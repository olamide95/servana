import Link from "next/link";
import { BadgeCheck, Building2, Users } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import { Rating } from "@/components/ui/Rating";
import { Badge } from "@/components/ui/Badge";
import type { Agency } from "@/lib/types";

export function AgencyCard({ agency }: { agency: Agency }) {
  return (
    <Link
      href={`/agencies/${agency.id}`}
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-card transition hover:-translate-y-0.5 hover:shadow-card-hover"
    >
      <div className="flex items-start gap-3">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-white">
          <Building2 size={22} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <h3 className="truncate font-bold text-slate-900 group-hover:text-brand-700">{agency.name}</h3>
            {agency.verified && <BadgeCheck size={16} className="shrink-0 text-brand-600" />}
          </div>
          <p className="line-clamp-2 text-sm text-slate-500">{agency.tagline}</p>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <Badge tone="brand">{agency.city}</Badge>
        <Badge tone="slate"><Users size={11} /> {agency.teamSize} in team</Badge>
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
        <Rating value={agency.rating} count={agency.reviewCount} />
        <span className="text-sm text-slate-400">{agency.servicesOffered} services</span>
      </div>
    </Link>
  );
}
