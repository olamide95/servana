"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Bell, Menu, X, Search } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import { DashboardSidebar } from "./DashboardSidebar";
import { currentUsers } from "@/lib/data";
import type { UserRole } from "@/lib/types";

function roleFromPath(path: string): UserRole {
  if (path.startsWith("/dashboard/provider")) return "provider";
  if (path.startsWith("/dashboard/agency")) return "agency";
  if (path.startsWith("/dashboard/admin")) return "admin";
  return "customer";
}

export function DashboardHeader({ title }: { title: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const role = roleFromPath(pathname);
  const user = currentUsers[role];

  return (
    <>
      <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-slate-100 bg-white/90 px-4 backdrop-blur sm:px-6">
        <button
          className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 lg:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>

        <h1 className="font-display text-lg font-bold text-slate-900">{title}</h1>

        <div className="ml-auto flex items-center gap-2">
          <div className="relative hidden md:block">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              placeholder="Search…"
              className="w-56 rounded-lg border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-sm focus-ring"
            />
          </div>
          <button className="relative flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100">
            <Bell size={18} />
            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-brand-500" />
          </button>
          <div className="flex items-center gap-2 rounded-lg pl-1 pr-2">
            <Avatar name={user.name} size="sm" />
            <div className="hidden text-left sm:block">
              <p className="text-sm font-semibold leading-tight text-slate-900">{user.name}</p>
              <p className="text-xs leading-tight text-slate-400">{user.city}</p>
            </div>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-slate-900/50" onClick={() => setMobileOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-72">
            <button
              className="absolute -right-10 top-4 flex h-8 w-8 items-center justify-center rounded-lg bg-white text-slate-700"
              onClick={() => setMobileOpen(false)}
            >
              <X size={18} />
            </button>
            <DashboardSidebar onNavigate={() => setMobileOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}
