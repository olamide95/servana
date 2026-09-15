"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import { categories } from "@/lib/data";

export function CategoryPills({ limit }: { limit?: number }) {
  const pathname = usePathname();
  const list = limit ? categories.slice(0, limit) : categories;
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 scroll-thin">
      {list.map((c) => {
        const active = pathname === `/categories/${c.slug}`;
        return (
          <Link
            key={c.id}
            href={`/categories/${c.slug}`}
            className={cn(
              "inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-semibold transition",
              active
                ? "border-brand-600 bg-brand-600 text-white"
                : "border-slate-200 bg-white text-slate-600 hover:border-brand-200 hover:text-brand-700"
            )}
          >
            <Icon name={c.icon} size={14} />
            {c.name}
          </Link>
        );
      })}
    </div>
  );
}
