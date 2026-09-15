import { ArrowDownLeft, ArrowUpRight, Gift, RotateCcw } from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardBody } from "@/components/dashboard/DashboardBody";
import { WalletCard } from "@/components/dashboard/WalletCard";
import { Card, CardHeader } from "@/components/ui/Card";
import { formatGBP, formatDate } from "@/lib/utils";
import { walletTransactions, walletBalance } from "@/lib/data";
import type { WalletTransaction } from "@/lib/types";

const iconFor: Record<WalletTransaction["type"], React.ElementType> = {
  topup: ArrowDownLeft,
  spend: ArrowUpRight,
  refund: RotateCcw,
  reward: Gift,
};

export default function WalletPage() {
  const txns = [...walletTransactions].sort((a, b) => +new Date(b.date) - +new Date(a.date));
  return (
    <>
      <DashboardHeader title="Wallet" />
      <DashboardBody>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1 space-y-4">
            <WalletCard balance={walletBalance} tokens={3} />
            <Card className="p-5">
              <h3 className="font-display text-sm font-bold text-slate-900">About your wallet</h3>
              <p className="mt-2 text-sm text-slate-500">
                Top up to pay faster at checkout. Refunds and review rewards are credited straight back
                to your balance.
              </p>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card>
              <CardHeader title="Transaction history" subtitle={`${txns.length} transactions`} />
              <ul className="divide-y divide-slate-100">
                {txns.map((t) => {
                  const Icon = iconFor[t.type];
                  const credit = t.amount > 0;
                  return (
                    <li key={t.id} className="flex items-center gap-4 px-5 py-4">
                      <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${credit ? "bg-brand-50 text-brand-600" : "bg-slate-100 text-slate-500"}`}>
                        <Icon size={18} />
                      </span>
                      <div className="flex-1">
                        <p className="font-medium text-slate-900">{t.description}</p>
                        <p className="text-xs text-slate-400 capitalize">{t.type} · {formatDate(t.date)}</p>
                      </div>
                      <div className="text-right">
                        <p className={`font-display font-bold ${credit ? "text-brand-600" : "text-slate-900"}`}>
                          {credit ? "+" : "−"}{formatGBP(Math.abs(t.amount), { decimals: true })}
                        </p>
                        <p className="text-xs text-slate-400">Bal {formatGBP(t.balanceAfter, { decimals: true })}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </Card>
          </div>
        </div>
      </DashboardBody>
    </>
  );
}
