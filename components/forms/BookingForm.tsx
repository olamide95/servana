"use client";

import { useMemo, useState } from "react";
import { Check, CalendarDays, MapPin, Wifi, Wallet } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Label, Input, Textarea, Select } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { formatGBP } from "@/lib/utils";
import { walletBalance } from "@/lib/data";
import type { Service } from "@/lib/types";

export function BookingForm({ service }: { service: Service }) {
  const [rateType, setRateType] = useState<"hourly" | "fixed">(
    service.fixedRate ? "fixed" : "hourly"
  );
  const [hours, setHours] = useState(service.minHours);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [useWallet, setUseWallet] = useState(false);
  const [mode, setMode] = useState<"in-person" | "online">(
    service.mode === "online" ? "online" : "in-person"
  );
  const [submitted, setSubmitted] = useState(false);

  const toggleAddon = (id: string) =>
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );

  const breakdown = useMemo(() => {
    const base =
      rateType === "fixed" && service.fixedRate
        ? service.fixedRate
        : service.hourlyRate * hours;
    const addonsTotal = service.addons
      .filter((a) => selectedAddons.includes(a.id))
      .reduce((sum, a) => sum + a.price, 0);
    const serviceFee = Math.round((base + addonsTotal) * 0.05 * 100) / 100;
    const subtotal = base + addonsTotal + serviceFee;
    const walletApplied = useWallet ? Math.min(walletBalance, subtotal) : 0;
    const total = Math.max(0, subtotal - walletApplied);
    return { base, addonsTotal, serviceFee, subtotal, walletApplied, total };
  }, [rateType, hours, selectedAddons, useWallet, service]);

  if (submitted) {
    return (
      <div className="rounded-2xl border border-brand-200 bg-brand-50 p-6 text-center">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white">
          <Check size={22} />
        </div>
        <h3 className="font-display text-lg font-bold text-slate-900">Order confirmed!</h3>
        <p className="mt-1 text-sm text-slate-600">
          We&apos;ve sent your request to the provider. You&apos;ll get a confirmation shortly.
        </p>
        <div className="mt-4">
          <Button href="/dashboard/customer/orders" className="w-full">View my orders</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
      <div className="flex items-baseline justify-between">
        <h3 className="font-display text-lg font-bold text-slate-900">Book this service</h3>
        <Badge tone="brand">{service.responseTime}</Badge>
      </div>

      {/* Rate type */}
      <div className="mt-4 grid grid-cols-2 gap-2">
        <button
          onClick={() => setRateType("hourly")}
          className={`rounded-xl border p-3 text-left text-sm transition ${
            rateType === "hourly" ? "border-brand-500 bg-brand-50" : "border-slate-200 hover:border-slate-300"
          }`}
        >
          <p className="font-semibold text-slate-900">Hourly</p>
          <p className="text-slate-500">{formatGBP(service.hourlyRate)}/hr</p>
        </button>
        <button
          onClick={() => service.fixedRate && setRateType("fixed")}
          disabled={!service.fixedRate}
          className={`rounded-xl border p-3 text-left text-sm transition disabled:opacity-40 ${
            rateType === "fixed" ? "border-brand-500 bg-brand-50" : "border-slate-200 hover:border-slate-300"
          }`}
        >
          <p className="font-semibold text-slate-900">Fixed package</p>
          <p className="text-slate-500">{service.fixedRate ? formatGBP(service.fixedRate) : "N/A"}</p>
        </button>
      </div>

      {rateType === "hourly" && (
        <div className="mt-4">
          <Label htmlFor="hours" hint={`(min ${service.minHours}h)`}>Hours</Label>
          <Input
            id="hours"
            type="number"
            min={service.minHours}
            value={hours}
            onChange={(e) => setHours(Math.max(service.minHours, Number(e.target.value)))}
          />
        </div>
      )}

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div>
          <Label htmlFor="date">Date</Label>
          <Input id="date" type="date" />
        </div>
        <div>
          <Label htmlFor="time">Time</Label>
          <Input id="time" type="time" defaultValue="10:00" />
        </div>
      </div>

      {service.mode === "both" && (
        <div className="mt-4">
          <Label>Delivery</Label>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setMode("in-person")}
              className={`inline-flex items-center justify-center gap-1.5 rounded-xl border py-2 text-sm font-semibold ${
                mode === "in-person" ? "border-brand-500 bg-brand-50 text-brand-700" : "border-slate-200 text-slate-600"
              }`}
            >
              <MapPin size={14} /> In person
            </button>
            <button
              onClick={() => setMode("online")}
              className={`inline-flex items-center justify-center gap-1.5 rounded-xl border py-2 text-sm font-semibold ${
                mode === "online" ? "border-brand-500 bg-brand-50 text-brand-700" : "border-slate-200 text-slate-600"
              }`}
            >
              <Wifi size={14} /> Online
            </button>
          </div>
        </div>
      )}

      {mode === "in-person" && service.mode !== "online" && (
        <div className="mt-4 grid grid-cols-3 gap-3">
          <div className="col-span-2">
            <Label htmlFor="addr">Address</Label>
            <Input id="addr" placeholder="Street address" />
          </div>
          <div>
            <Label htmlFor="pc">Postcode</Label>
            <Input id="pc" placeholder="SW1A 1AA" />
          </div>
        </div>
      )}

      {service.addons.length > 0 && (
        <div className="mt-4">
          <Label>Add-ons</Label>
          <div className="space-y-2">
            {service.addons.map((a) => (
              <button
                key={a.id}
                onClick={() => toggleAddon(a.id)}
                className={`flex w-full items-center justify-between rounded-xl border px-3 py-2.5 text-sm transition ${
                  selectedAddons.includes(a.id) ? "border-brand-500 bg-brand-50" : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span
                    className={`flex h-4.5 w-4.5 items-center justify-center rounded border ${
                      selectedAddons.includes(a.id) ? "border-brand-600 bg-brand-600 text-white" : "border-slate-300"
                    }`}
                  >
                    {selectedAddons.includes(a.id) && <Check size={12} />}
                  </span>
                  {a.label}
                </span>
                <span className="font-semibold text-slate-900">+{formatGBP(a.price)}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="mt-4">
        <Label htmlFor="notes">Instructions (optional)</Label>
        <Textarea id="notes" placeholder="Anything the provider should know…" />
      </div>

      {/* Wallet */}
      <button
        onClick={() => setUseWallet((v) => !v)}
        className={`mt-4 flex w-full items-center justify-between rounded-xl border px-3 py-2.5 text-sm transition ${
          useWallet ? "border-brand-500 bg-brand-50" : "border-slate-200"
        }`}
      >
        <span className="flex items-center gap-2 text-slate-700">
          <Wallet size={15} className="text-brand-600" />
          Apply wallet balance
        </span>
        <span className="font-semibold text-slate-900">{formatGBP(walletBalance, { decimals: true })}</span>
      </button>

      {/* Breakdown */}
      <div className="mt-4 space-y-1.5 border-t border-slate-100 pt-4 text-sm">
        <Row label={rateType === "fixed" ? "Fixed package" : `${hours}h × ${formatGBP(service.hourlyRate)}`} value={breakdown.base} />
        {breakdown.addonsTotal > 0 && <Row label="Add-ons" value={breakdown.addonsTotal} />}
        <Row label="Service fee (5%)" value={breakdown.serviceFee} />
        {breakdown.walletApplied > 0 && (
          <Row label="Wallet applied" value={-breakdown.walletApplied} accent />
        )}
        <div className="flex items-center justify-between border-t border-slate-100 pt-2">
          <span className="font-bold text-slate-900">Total</span>
          <span className="font-display text-xl font-extrabold text-slate-900">
            {formatGBP(breakdown.total, { decimals: true })}
          </span>
        </div>
      </div>

      <div className="mt-4">
        <Button onClick={() => setSubmitted(true)} className="w-full" size="lg">
          <CalendarDays size={16} /> Confirm order
        </Button>
        <p className="mt-2 text-center text-xs text-slate-400">
          You won&apos;t be charged until the provider accepts.
        </p>
      </div>
    </div>
  );
}

function Row({ label, value, accent }: { label: string; value: number; accent?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-slate-500">{label}</span>
      <span className={accent ? "font-semibold text-brand-700" : "text-slate-700"}>
        {value < 0 ? "−" : ""}
        {formatGBP(Math.abs(value), { decimals: true })}
      </span>
    </div>
  );
}
