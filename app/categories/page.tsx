import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { categories, categoryGroups } from "@/lib/data";

export default function CategoriesPage() {
  return (
    <SiteShell>
      <div className="border-b border-slate-100 bg-slate-50/60">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-slate-900">All categories</h1>
          <p className="mt-1 text-slate-500">Browse every service category on Servana.</p>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-10 space-y-10">
        {categoryGroups.map((g) => (
          <section key={g}>
            <SectionHeading title={g} />
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {categories.filter((c) => c.group === g).map((c) => (
                <Link key={c.id} href={`/categories/${c.slug}`}
                  className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-card transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card-hover">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
                    <Icon name={c.icon} className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate font-semibold text-slate-900">{c.name}</span>
                    <span className="block text-xs text-slate-400">{c.serviceCount} pros</span>
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </SiteShell>
  );
}
