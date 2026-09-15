import { Badge } from "@/components/ui/Badge";
import type { ProviderLevel } from "@/lib/types";

const labels: Record<ProviderLevel, { label: string; tone: "slate" | "blue" | "violet" | "amber" | "brand" }> = {
  new: { label: "New provider", tone: "slate" },
  rising: { label: "Rising talent", tone: "blue" },
  "level-1": { label: "Level 1", tone: "blue" },
  "level-2": { label: "Level 2", tone: "violet" },
  "top-rated": { label: "Top Rated", tone: "amber" },
};

export function ProviderLevelBadge({ level }: { level: ProviderLevel }) {
  const { label, tone } = labels[level];
  return <Badge tone={tone}>{label}</Badge>;
}
