import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, BadgeCheck, Clock, MapPin, Wifi, ChevronRight, Shield } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { PlaceholderImage } from "@/components/marketplace/PlaceholderImage";
import { ReviewCard } from "@/components/marketplace/ReviewCard";
import { BookingForm } from "@/components/forms/BookingForm";
import { Avatar } from "@/components/ui/Avatar";
import { Rating } from "@/components/ui/Rating";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { formatGBP } from "@/lib/utils";
import { getService, getProvider, getCategory, getReviewsByService, services } from "@/lib/data";

export function generateStaticParams() {
  return services.map((s) => ({ id: s.id }));
}

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  const service = getService(params.id);
  if (!service) notFound();
  const provider = getProvider(service.providerId);
  const category = getCategory(service.categorySlug);
  const reviews = getReviewsByService(service.id);

  return (
    <SiteShell>
      <div className="mx-auto max-w-6xl px-4 py-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-slate-400">
          <Link href="/services" className="hover:text-slate-700">Services</Link>
          <ChevronRight size={14} />
          {category && (
            <>
              <Link href={`/categories/${category.slug}`} className="hover:text-slate-700">{category.name}</Link>
              <ChevronRight size={14} />
            </>
          )}
          <span className="truncate text-slate-600">{service.title}</span>
        </nav>

        <div className="mt-5 grid gap-8 lg:grid-cols-3">
          {/* Main */}
          <div className="lg:col-span-2">
            <div className="flex flex-wrap items-center gap-2">
              {category && <Badge tone="brand">{category.name}</Badge>}
              {service.featured && <Badge tone="amber">Featured</Badge>}
              {service.mode !== "in-person" && <Badge tone="blue"><Wifi size={11} /> Online available</Badge>}
            </div>
            <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl text-balance">
              {service.title}
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <Rating value={service.rating} count={service.reviewCount} />
              <span className="inline-flex items-center gap-1">
                {service.mode === "online" ? <Wifi size={14} /> : <MapPin size={14} />} {service.location}
              </span>
              <span className="inline-flex items-center gap-1"><Clock size={14} /> Responds {service.responseTime}</span>
              <span>{service.ordersCompleted} completed</span>
            </div>

            {/* Gallery */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              {service.images.map((img, i) => (
                <PlaceholderImage
                  key={img}
                  seed={img}
                  icon={category?.icon}
                  className={i === 0 ? "col-span-3 h-64 rounded-2xl" : "h-28 rounded-xl"}
                />
              ))}
            </div>

            {/* Description */}
            <section className="mt-8">
              <h2 className="font-display text-xl font-bold text-slate-900">About this service</h2>
              <p className="mt-3 leading-relaxed text-slate-600">{service.description}</p>
            </section>

            {/* Included */}
            <section className="mt-8">
              <h2 className="font-display text-xl font-bold text-slate-900">What&apos;s included</h2>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {service.included.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-slate-600">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                      <Check size={12} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Provider card */}
            {provider && (
              <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
                <div className="flex items-start gap-4">
                  <Avatar name={provider.name} size="xl" />
                  <div className="flex-1">
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-display text-lg font-bold text-slate-900">{provider.name}</h3>
                      {provider.verified && <BadgeCheck size={18} className="text-brand-600" />}
                    </div>
                    <p className="text-sm text-slate-500">{provider.tagline}</p>
                    <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                      <Rating value={provider.rating} count={provider.reviewCount} />
                      <span>·</span>
                      <span>Member since {new Date(provider.memberSince).getFullYear()}</span>
                      <span>·</span>
                      <span>{provider.languages.join(", ")}</span>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{provider.bio}</p>
                <div className="mt-4">
                  <Button href={`/providers/${provider.id}`} variant="outline" size="sm">
                    View full profile <ChevronRight size={15} />
                  </Button>
                </div>
              </section>
            )}

            {/* Reviews */}
            <section className="mt-8">
              <div className="flex items-center justify-between">
                <h2 className="font-display text-xl font-bold text-slate-900">
                  Reviews <span className="text-slate-400">({service.reviewCount})</span>
                </h2>
                <Rating value={service.rating} size={18} />
              </div>
              <div className="mt-4 space-y-4">
                {reviews.length > 0 ? (
                  reviews.map((r) => <ReviewCard key={r.id} review={r} />)
                ) : (
                  <p className="rounded-2xl border border-dashed border-slate-200 p-6 text-center text-sm text-slate-400">
                    No reviews yet — be the first to book and review.
                  </p>
                )}
              </div>
            </section>
          </div>

          {/* Booking sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
                <div className="flex items-end justify-between border-b border-slate-100 pb-4">
                  <div>
                    <p className="text-sm text-slate-400">From</p>
                    <p className="font-display text-3xl font-extrabold text-slate-900">
                      {formatGBP(service.hourlyRate)}
                      <span className="text-base font-medium text-slate-400">/hr</span>
                    </p>
                  </div>
                  {service.fixedRate && (
                    <Badge tone="slate">or {formatGBP(service.fixedRate)} fixed</Badge>
                  )}
                </div>
                <div className="pt-4">
                  <BookingForm service={service} />
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-4 py-3 text-xs text-slate-500">
                <Shield size={15} className="text-brand-600" />
                Secure payment & Servana buyer protection on every booking.
              </div>
            </div>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
