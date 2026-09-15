import { Avatar } from "@/components/ui/Avatar";
import { timeAgo } from "@/lib/utils";
import type { Thread } from "@/lib/types";

export function MessageList({ threads }: { threads: Thread[] }) {
  return (
    <div className="divide-y divide-slate-100 rounded-2xl border border-slate-200 bg-white shadow-card">
      {threads.map((t) => (
        <button
          key={t.id}
          className="flex w-full items-center gap-3 px-4 py-3.5 text-left transition hover:bg-slate-50"
        >
          <Avatar name={t.participantName} />
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2">
              <p className="truncate font-semibold text-slate-900">{t.participantName}</p>
              <span className="shrink-0 text-xs text-slate-400">{timeAgo(t.updatedAt)}</span>
            </div>
            <p className="truncate text-sm text-slate-500">{t.lastMessage}</p>
          </div>
          {t.unreadCount > 0 && (
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-600 px-1.5 text-xs font-bold text-white">
              {t.unreadCount}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}
