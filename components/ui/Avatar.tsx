import { cn, gradientFromSeed, initials } from "@/lib/utils";

export function Avatar({
  name,
  size = "md",
  className,
}: {
  name: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}) {
  const sizes = {
    sm: "h-8 w-8 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-14 w-14 text-base",
    xl: "h-20 w-20 text-xl",
  };
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full font-bold text-white ring-2 ring-white",
        sizes[size],
        className
      )}
      style={{ background: gradientFromSeed(name) }}
      aria-hidden
    >
      {initials(name)}
    </div>
  );
}
