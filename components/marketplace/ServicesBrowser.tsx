"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, MapPin, X } from "lucide-react";
import { ServiceCard } from "./ServiceCard";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { Icon } from "@/components/ui/Icon";
import { services, categories, categoryGroups, ukCities } from "@/lib/data";

type Mode = "all" | "in-person" | "online";
type SortKey = "recommended" | "rating" | "price-low" | "price-high";

export function ServicesBrowser({
  initialQuery = "",
  initialCity = "",
  initialCategory = "",
}: {
  initialQuery?: string;
  initialCity?: string;
  initialCategory?: string;
}) {
  const [q, setQ] = useState(initialQuery);
  const [city, setCity] = useState(initialCity);
  const [category, setCategory] = useState(initialCategory);
  const [mode, setMode] = useState<Mode>("all");
  const [maxRate, setMaxRate] = useState(100);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState<SortKey>("recommended");
  const [showFilters, setShowFilters] = useState(false);

  const results = useMemo(() => {
    let list = services.filter((s) => {
      if (q) {
        const hay = `${s.title} ${s.description} ${s.location}`.toLowerCase();
        if (!hay.includes(q.toLowerCase())) return false;
      }
      if (city && s.mode !== "online" && s.location !== city) return false;
      if (category && s.categorySlug !== category) return false;
      if (mode === "online" && s.mode === "in-person") return false;
      if (mode === "in-person" && s.mode === "online") return false;
      if (s.hourlyRate > maxRate) return false;
      if (s.rating < minRating) return false;
      return true;
    });

    list = [...list].sort((a, b) => {
      if (sort === "rating") return b.rating - a.rating;
      if (sort === "price-low") return a.hourlyRate - b.hourlyRate;
      if (sort === "price-high") return b.hourlyRate - a.hourlyRate;
      return Number(b.featured) - Number(a.featured) || b.rating - a.rating;
    });
    return list;
  }, [q, city, category, mode, maxRate, minRating, sort]);

  function reset() {
    setQ(""); setCity(""); setCategory(""); setMode("all");
    setMaxRate(100); setMinRating(0); setSort("recommended");
  }

  const activeFilters =
    (city ? 1 : 0) + (category ? 1 : 0) + (mode !== "all" ? 1 : 0) +
    (maxRate < 100 ? 1 : 0) + (minRating > 0 ? 1 : 0);

  const filterPanel = (
    <div className="space-y-6">
      <div>
        <h4 className="mb-2 text-sm font-bold text-slate-900">Category</h4>
        <div className="space-y-3">
          {categoryGroups.map((g) => (
            <details key={g} className="group" open={categories.some((c) => c.group === g && c.slug === category)}>
              <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-slate-600">
                {g}
                <span className="text-slate-300 transition group-open:rotate-90">›</span>
              </summary>
              <div className="mt-2 space-y-1">
                {categories.filter((c) => c.group === g).map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setCategory(category === c.slug ? "" : c.slug)}
                    className={`flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left text-sm transition ${
                      category === c.slug ? "bg-brand-50 font-semibold text-brand-700" : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <Icon name={c.icon} size={14} /> {c.name}
                  </button>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>

      <div>
        <h4 className="mb-2 text-sm font-bold text-slate-900">Location</h4>
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm"
        >
          <option value="">Anywhere in the UK</option>
          {ukCities.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      <div>
        <h4 className="mb-2 text-sm font-bold text-slate-900">Delivery</h4>
        <div className="flex rounded-xl border border-slate-200 p-1">
          {(["all", "in-person", "online"] as Mode[]).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`flex-1 rounded-lg px-2 py-1.5 text-xs font-semibold capitalize transition ${
                mode === m ? "bg-brand-600 text-white" : "text-slate-500 hover:text-slate-900"
              }`}
            >
              {m === "all" ? "All" : m.replace("-", " ")}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h4 className="mb-2 flex items-center justify-between text-sm font-bold text-slate-900">
          Max hourly rate <span className="text-brand-700">£{maxRate}</span>
        </h4>
        <input
          type="range" min={10} max={100} step={5} value={maxRate}
          onChange={(e) => setMaxRate(Number(e.target.value))}
          className="w-full accent-brand-600"
        />
      </div>

      <div>
        <h4 className="mb-2 text-sm font-bold text-slate-900">Minimum rating</h4>
        <div className="flex gap-2">
          {[0, 4, 4.5, 4.8].map((r) => (
            <button
              key={r}
              onClick={() => setMinRating(r)}
              className={`flex-1 rounded-lg border px-2 py-1.5 text-xs font-semibold transition ${
                minRating === r ? "border-brand-600 bg-brand-50 text-brand-700" : "border-slate-200 text-slate-500"
              }`}
            >
              {r === 0 ? "Any" : `${r}+`}
            </button>
          ))}
        </div>
      </div>

      {activeFilters > 0 && (
        <Button variant="ghost" onClick={reset} className="w-full">
          <X size={14} /> Clear filters
        </Button>
      )}
    </div>
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      {/* Search header */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex flex-1 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3">
          <Search className="h-5 w-5 text-slate-400" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search services..."
            className="w-full bg-transparent py-3 text-sm focus:outline-none"
          />
        </div>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortKey)}
          className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm font-medium text-slate-700"
        >
          <option value="recommended">Recommended</option>
          <option value="rating">Highest rated</option>
          <option value="price-low">Price: low to high</option>
          <option value="price-high">Price: high to low</option>
        </select>
        <button
          onClick={() => setShowFilters((v) => !v)}
          className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 lg:hidden"
        >
          <SlidersHorizontal size={16} /> Filters
          {activeFilters > 0 && (
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-600 text-xs text-white">
              {activeFilters}
            </span>
          )}
        </button>
      </div>

      <div className="mt-6 flex gap-8">
        {/* Sidebar */}
        <aside className="hidden w-64 shrink-0 lg:block">
          <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
            {filterPanel}
          </div>
        </aside>

        {/* Mobile filters */}
        {showFilters && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="absolute inset-0 bg-slate-900/40" onClick={() => setShowFilters(false)} />
            <div className="absolute bottom-0 left-0 right-0 max-h-[85vh] overflow-y-auto rounded-t-3xl bg-white p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-display text-lg font-bold">Filters</h3>
                <button onClick={() => setShowFilters(false)}><X /></button>
              </div>
              {filterPanel}
              <Button className="mt-6 w-full" onClick={() => setShowFilters(false)}>
                Show {results.length} results
              </Button>
            </div>
          </div>
        )}

        {/* Results */}
        <div className="flex-1">
          <div className="mb-4 flex items-center gap-2 text-sm text-slate-500">
            <span className="font-semibold text-slate-900">{results.length}</span> services found
            {city && <span className="inline-flex items-center gap-1"><MapPin size={13} /> {city}</span>}
          </div>
          {results.length === 0 ? (
            <EmptyState
              icon="SearchX"
              title="No services match your filters"
              description="Try widening your search radius, raising your budget or clearing some filters."
            />
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {results.map((s) => <ServiceCard key={s.id} service={s} />)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
