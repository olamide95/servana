import { Coins } from "lucide-react";
import { formatGBP } from "@/lib/utils";

export function CommissionCard({
  earned,
  pending,
  available,
}: {
  earned: number;
  pending: number;
  available: number;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 p-6 text-white shadow-card">
      <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-brand-500/20" />
      <div className="relative">
        <div className="flex items-center gap-2 text-slate-300">
          <Coins size={18} />
          <span className="text-sm font-semibold">Commission earnings</span>
        </div>
        <p className="mt-4 font-display text-4xl font-extrabold">{formatGBP(earned, { decimals: true })}</p>
        <p className="mt-1 text-sm text-slate-300">Total earned to date</p>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-white/10 px-3 py-2.5">
            <p className="text-xs text-slate-300">Available</p>
            <p className="font-display text-lg font-bold text-brand-300">{formatGBP(available, { decimals: true })}</p>
          </div>
          <div className="rounded-xl bg-white/10 px-3 py-2.5">
            <p className="text-xs text-slate-300">Pending</p>
            <p className="font-display text-lg font-bold text-amber-300">{formatGBP(pending, { decimals: true })}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
