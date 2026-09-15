import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { ServiceCard } from "@/components/marketplace/ServiceCard";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { getCategory, getServicesByCategory, categories } from "@/lib/data";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = getCategory(params.slug);
  if (!category) notFound();
  const list = getServicesByCategory(category.slug);
  const related = categories.filter((c) => c.group === category.group && c.slug !== category.slug).slice(0, 5);

  return (
    <SiteShell>
      {/* Header */}
      <div className="border-b border-slate-100 bg-gradient-to-b from-brand-50/50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <nav className="flex items-center gap-1.5 text-sm text-slate-400">
            <Link href="/services" className="hover:text-slate-700">Services</Link>
            <ChevronRight size={14} />
            <span className="text-slate-600">{category.name}</span>
          </nav>
          <div className="mt-4 flex items-start gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 text-white">
              <Icon name={category.icon} className="h-7 w-7" />
            </span>
            <div>
              <h1 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                {category.name}
              </h1>
              <p className="mt-1 max-w-2xl text-slate-500">{category.description}</p>
              <p className="mt-1 text-sm font-medium text-slate-400">{category.serviceCount} professionals available</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Related categories */}
        {related.length > 0 && (
          <div className="mb-8 flex flex-wrap gap-2">
            {related.map((c) => (
              <Link
                key={c.id}
                href={`/categories/${c.slug}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:border-brand-200 hover:text-brand-700"
              >
                <Icon name={c.icon} size={14} /> {c.name}
              </Link>
            ))}
          </div>
        )}

        {list.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((s) => <ServiceCard key={s.id} service={s} />)}
          </div>
        ) : (
          <EmptyState
            icon={category.icon}
            title={`No ${category.name.toLowerCase()} listings yet`}
            description="Be the first to offer this service, or browse other categories."
            actionLabel="Browse all services"
            actionHref="/services"
          />
        )}

        <div className="mt-12 rounded-3xl bg-slate-900 px-8 py-10 text-center text-white">
          <h2 className="font-display text-2xl font-bold">Offer {category.name.toLowerCase()} on Servana</h2>
          <p className="mx-auto mt-2 max-w-md text-slate-300">
            Join as a provider and reach thousands of customers looking for exactly your skills.
          </p>
          <div className="mt-5">
            <Button href="/register/provider" variant="secondary" className="bg-white text-slate-900 hover:bg-slate-100">
              Become a provider <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
