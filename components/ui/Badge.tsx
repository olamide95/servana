import { cn } from "@/lib/utils";

type Tone = "brand" | "slate" | "amber" | "blue" | "red" | "green" | "violet";

const tones: Record<Tone, string> = {
  brand: "bg-brand-50 text-brand-700 border-brand-100",
  slate: "bg-slate-100 text-slate-600 border-slate-200",
  amber: "bg-amber-50 text-amber-700 border-amber-100",
  blue: "bg-blue-50 text-blue-700 border-blue-100",
  red: "bg-red-50 text-red-700 border-red-100",
  green: "bg-emerald-50 text-emerald-700 border-emerald-100",
  violet: "bg-violet-50 text-violet-700 border-violet-100",
};

export function Badge({
  children,
  tone = "slate",
  className,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
