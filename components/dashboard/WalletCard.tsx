import { Wallet, Plus, ArrowUpRight } from "lucide-react";
import { formatGBP } from "@/lib/utils";

export function WalletCard({ balance, tokens }: { balance: number; tokens?: number }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 p-6 text-white shadow-card">
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10" />
      <div className="absolute -bottom-10 -left-6 h-28 w-28 rounded-full bg-white/5" />
      <div className="relative">
        <div className="flex items-center gap-2 text-brand-100">
          <Wallet size={18} />
          <span className="text-sm font-semibold">Servana Wallet</span>
        </div>
        <p className="mt-4 font-display text-4xl font-extrabold tracking-tight">
          {formatGBP(balance, { decimals: true })}
        </p>
        <p className="mt-1 text-sm text-brand-100">
          {tokens ?? 0} reward tokens · use towards any booking
        </p>
        <div className="mt-5 flex gap-2">
          <button className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3.5 py-2 text-sm font-semibold text-brand-700 hover:bg-brand-50">
            <Plus size={15} /> Top up
          </button>
          <button className="inline-flex items-center gap-1.5 rounded-lg bg-white/15 px-3.5 py-2 text-sm font-semibold text-white hover:bg-white/25">
            <ArrowUpRight size={15} /> History
          </button>
        </div>
      </div>
    </div>
  );
}
