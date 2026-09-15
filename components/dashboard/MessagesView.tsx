"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import { timeAgo } from "@/lib/utils";
import { threads as allThreads, messages as allMessages } from "@/lib/data";

export function MessagesView() {
  const [activeId, setActiveId] = useState(allThreads[0]?.id ?? "");
  const active = allThreads.find((t) => t.id === activeId);
  const convo = allMessages
    .filter((m) => m.threadId === activeId)
    .sort((a, b) => +new Date(a.date) - +new Date(b.date));

  return (
    <div className="grid h-[calc(100vh-13rem)] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card lg:grid-cols-3">
      {/* Thread list */}
      <div className="divide-y divide-slate-100 overflow-y-auto border-r border-slate-100 lg:col-span-1">
        {allThreads.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveId(t.id)}
            className={`flex w-full items-center gap-3 px-4 py-3.5 text-left transition hover:bg-slate-50 ${
              activeId === t.id ? "bg-brand-50/60" : ""
            }`}
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

      {/* Conversation */}
      <div className="hidden flex-col lg:col-span-2 lg:flex">
        {active ? (
          <>
            <div className="flex items-center gap-3 border-b border-slate-100 px-5 py-3.5">
              <Avatar name={active.participantName} size="sm" />
              <p className="font-semibold text-slate-900">{active.participantName}</p>
            </div>
            <div className="flex-1 space-y-3 overflow-y-auto bg-slate-50/50 p-5">
              {convo.map((m) => {
                const mine = m.fromName === "Olivia Bennett";
                return (
                  <div key={m.id} className={`flex ${mine ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm ${
                      mine ? "bg-brand-600 text-white" : "bg-white text-slate-700 shadow-card"
                    }`}>
                      {m.body}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center gap-2 border-t border-slate-100 p-3">
              <input
                placeholder="Type a message…"
                className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm focus-ring"
              />
              <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white hover:bg-brand-700">
                <Send size={16} />
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-1 items-center justify-center text-sm text-slate-400">Select a conversation</div>
        )}
      </div>
    </div>
  );
}
