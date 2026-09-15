import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export function PricingCard({
  name,
  price,
  cadence,
  description,
  features,
  cta,
  ctaHref,
  highlighted,
}: {
  name: string;
  price: string;
  cadence?: string;
  description: string;
  features: string[];
  cta: string;
  ctaHref: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl border bg-white p-6 shadow-card",
        highlighted ? "border-brand-500 ring-2 ring-brand-100" : "border-slate-200"
      )}
    >
      {highlighted && (
        <div className="absolute -top-3 left-6">
          <Badge tone="brand">Most popular</Badge>
        </div>
      )}
      <h3 className="font-display text-lg font-bold text-slate-900">{name}</h3>
      <div className="mt-2 flex items-end gap-1">
        <span className="font-display text-4xl font-extrabold text-slate-900">{price}</span>
        {cadence && <span className="mb-1 text-sm text-slate-400">{cadence}</span>}
      </div>
      <p className="mt-2 text-sm text-slate-500">{description}</p>
      <ul className="mt-5 flex-1 space-y-2.5">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
            <Check size={16} className="mt-0.5 shrink-0 text-brand-600" />
            {f}
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Button href={ctaHref} variant={highlighted ? "primary" : "outline"} className="w-full">
          {cta}
        </Button>
      </div>
    </div>
  );
}
