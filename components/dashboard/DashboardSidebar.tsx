"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, LogOut, ArrowLeftRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import { dashboardNav, roleLabels } from "./nav-config";
import type { UserRole } from "@/lib/types";

function roleFromPath(path: string): UserRole {
  if (path.startsWith("/dashboard/provider")) return "provider";
  if (path.startsWith("/dashboard/agency")) return "agency";
  if (path.startsWith("/dashboard/admin")) return "admin";
  return "customer";
}

export function DashboardSidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const role = roleFromPath(pathname);
  const items = dashboardNav[role];

  const otherRoles = (["customer", "provider", "agency", "admin"] as UserRole[]).filter(
    (r) => r !== role
  );

  return (
    <div className="flex h-full flex-col bg-slate-900 text-slate-300">
      <div className="flex h-16 items-center gap-2 px-5">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500 text-white">
            <Sparkles size={16} />
          </span>
          <span className="font-display text-lg font-extrabold text-white">Servana</span>
        </Link>
      </div>

      <div className="mx-3 mb-2 rounded-xl bg-slate-800/60 px-3 py-2">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Workspace</p>
        <p className="text-sm font-bold text-white">{roleLabels[role]} dashboard</p>
      </div>

      <nav className="flex-1 space-y-0.5 overflow-y-auto px-3 py-2 scroll-thin">
        {items.map((item) => {
          const active =
            pathname === item.href ||
            (item.href !== `/dashboard/${role}` && pathname.startsWith(item.href));
          const isExternal = !item.href.startsWith(`/dashboard/${role}`) && item.href.startsWith("/services");
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition",
                active
                  ? "bg-brand-500 text-white shadow-sm"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              )}
            >
              <Icon name={item.icon} className="h-4.5 w-4.5 shrink-0" size={18} />
              <span>{item.label}</span>
              {isExternal && <span className="ml-auto text-[10px] text-slate-500">↗</span>}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-slate-800 p-3">
        <p className="px-3 pb-1 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
          Switch role (demo)
        </p>
        <div className="grid grid-cols-3 gap-1 px-1">
          {otherRoles.map((r) => (
            <Link
              key={r}
              href={`/dashboard/${r}`}
              className="flex items-center justify-center gap-1 rounded-lg bg-slate-800 px-2 py-1.5 text-[11px] font-semibold text-slate-300 hover:bg-slate-700 hover:text-white"
            >
              {roleLabels[r]}
            </Link>
          ))}
        </div>
        <Link
          href="/"
          className="mt-2 flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-white"
        >
          <LogOut size={18} /> Log out
        </Link>
      </div>
    </div>
  );
}
