import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function Rating({
  value,
  count,
  size = 14,
  className,
}: {
  value: number;
  count?: number;
  size?: number;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-1 text-sm", className)}>
      <Star size={size} className="fill-amber-400 text-amber-400" />
      <span className="font-semibold text-slate-900">{value.toFixed(1)}</span>
      {count !== undefined && <span className="text-slate-400">({count})</span>}
    </span>
  );
}
