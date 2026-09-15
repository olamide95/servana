import { Icon } from "@/components/ui/Icon";
import { gradientFromSeed, cn } from "@/lib/utils";

export function PlaceholderImage({
  seed,
  icon = "Image",
  className,
}: {
  seed: string;
  icon?: string;
  className?: string;
}) {
  return (
    <div
      className={cn("relative flex items-center justify-center overflow-hidden", className)}
      style={{ background: gradientFromSeed(seed) }}
    >
      <div className="absolute inset-0 bg-grid opacity-20" />
      <Icon name={icon} className="relative h-8 w-8 text-white/70" />
    </div>
  );
}
