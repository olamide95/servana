import { clsx, type ClassValue } from "clsx";

/** Tailwind-friendly className combiner. */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

/** Format a number as UK pounds. */
export function formatGBP(amount: number, opts?: { decimals?: boolean }): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: opts?.decimals ? 2 : 0,
    maximumFractionDigits: opts?.decimals ? 2 : 0,
  }).format(amount);
}

/** Short date e.g. "12 Jun 2025". */
export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

/** Relative-ish label for recency. */
export function timeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;
  return formatDate(iso);
}

/** Deterministic gradient from a seed string — used for placeholder imagery. */
export function gradientFromSeed(seed: string): string {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  }
  const h1 = Math.abs(hash) % 360;
  const h2 = (h1 + 40) % 360;
  return `linear-gradient(135deg, hsl(${h1} 60% 42%), hsl(${h2} 55% 30%))`;
}

/** Initials from a name. */
export function initials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

/** Title-case a slug. */
export function titleFromSlug(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export function pluralize(count: number, singular: string, plural?: string): string {
  return count === 1 ? singular : plural ?? `${singular}s`;
}

export function clampStars(rating: number): number {
  return Math.max(0, Math.min(5, rating));
}
