import { Badge } from "@/components/ui/Badge";
import type { OrderStatus } from "@/lib/types";

const map: Record<OrderStatus, { tone: "amber" | "blue" | "violet" | "green" | "red" | "slate"; label: string }> = {
  pending: { tone: "amber", label: "Pending" },
  accepted: { tone: "blue", label: "Accepted" },
  "in-progress": { tone: "violet", label: "In progress" },
  completed: { tone: "green", label: "Completed" },
  cancelled: { tone: "slate", label: "Cancelled" },
  disputed: { tone: "red", label: "Disputed" },
};

export function OrderStatusBadge({ status }: { status: OrderStatus }) {
  const { tone, label } = map[status];
  return <Badge tone={tone}>{label}</Badge>;
}
