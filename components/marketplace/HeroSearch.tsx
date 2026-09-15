"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin } from "lucide-react";
import { ukCities } from "@/lib/data";

export function HeroSearch() {
  const router = useRouter();
  const [q, setQ] = useState("");
  const [city, setCity] = useState("");

  function submit() {
    const params = new URLSearchParams();
    if (q.trim()) params.set("q", q.trim());
    if (city) params.set("city", city);
    router.push(`/services${params.toString() ? `?${params.toString()}` : ""}`);
  }

  return (
    <div className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-card-hover sm:flex-row sm:items-center sm:rounded-full">
      <div className="flex flex-1 items-center gap-2 px-3">
        <Search className="h-5 w-5 shrink-0 text-slate-400" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && submit()}
          placeholder="What do you need help with?"
          className="w-full bg-transparent py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
        />
      </div>
      <div className="flex items-center gap-2 border-t border-slate-100 px-3 sm:border-l sm:border-t-0">
        <MapPin className="h-5 w-5 shrink-0 text-slate-400" />
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full bg-transparent py-2.5 text-sm text-slate-700 focus:outline-none sm:w-36"
        >
          <option value="">Anywhere</option>
          {ukCities.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>
      <button
        onClick={submit}
        className="flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 sm:rounded-full"
      >
        <Search className="h-4 w-4" /> Search
      </button>
    </div>
  );
}
