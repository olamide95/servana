import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import type { StatItem } from "@/lib/types";

export function StatCard({ stat }: { stat: StatItem }) {
  const trendColor =
    stat.trend === "up" ? "text-emerald-600" : stat.trend === "down" ? "text-red-500" : "text-slate-400";
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
      <div className="flex items-center justify-between">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
          <Icon name={stat.icon} size={18} />
        </span>
        {stat.delta && (
          <span className={cn("text-xs font-bold", trendColor)}>
            {stat.trend === "up" ? "▲" : stat.trend === "down" ? "▼" : "•"} {stat.delta}
          </span>
        )}
      </div>
      <p className="mt-4 font-display text-2xl font-extrabold text-slate-900">{stat.value}</p>
      <p className="text-sm text-slate-500">{stat.label}</p>
    </div>
  );
}

export function StatGrid({ stats }: { stats: StatItem[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s) => (
        <StatCard key={s.label} stat={s} />
      ))}
    </div>
  );
}
