"use client";

import { useState } from "react";
import { Check, ChevronRight, ChevronLeft, Plus, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Label, Input, Textarea, Select } from "@/components/ui/Input";
import { categories, ukCities } from "@/lib/data";
import { Stepper, Field } from "./ProviderRegistrationForm";

const steps = ["Overview", "Pricing & extras", "Coverage", "Publish"];

export function ServiceCreationForm({ backHref = "/dashboard/provider/services" }: { backHref?: string }) {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [included, setIncluded] = useState<string[]>(["", ""]);
  const [addons, setAddons] = useState<{ label: string; price: string }[]>([{ label: "", price: "" }]);

  if (done) {
    return (
      <div className="rounded-2xl border border-brand-200 bg-brand-50 p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white">
          <Sparkles size={26} />
        </div>
        <h2 className="font-display text-2xl font-bold text-slate-900">Service published</h2>
        <p className="mx-auto mt-2 max-w-md text-slate-600">
          Your new service is now live on the marketplace. Customers in your coverage area can find
          and book it straight away.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Button href={backHref}>View my services</Button>
          <Button href="/services" variant="outline">See it on marketplace</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
      <Stepper steps={steps} current={step} />

      <div className="mt-8">
        {step === 0 && (
          <div className="grid gap-5">
            <Field label="Service title">
              <Input placeholder="e.g. Sparkling deep clean for homes & flats" />
            </Field>
            <Field label="Category">
              <Select defaultValue="">
                <option value="" disabled>Choose a category</option>
                {categories.map((c) => <option key={c.id} value={c.slug}>{c.name}</option>)}
              </Select>
            </Field>
            <Field label="Description">
              <Textarea placeholder="Describe exactly what's included, your approach and what makes your service stand out." />
            </Field>
            <Field label="Delivery mode">
              <Select defaultValue="in-person">
                <option value="in-person">In person</option>
                <option value="online">Online</option>
                <option value="both">Both</option>
              </Select>
            </Field>
          </div>
        )}

        {step === 1 && (
          <div className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-3">
              <Field label="Hourly rate (£)"><Input type="number" placeholder="22" /></Field>
              <Field label="Fixed price (£, optional)"><Input type="number" placeholder="120" /></Field>
              <Field label="Min. hours"><Input type="number" placeholder="3" /></Field>
            </div>

            <div>
              <Label>What&apos;s included</Label>
              <div className="space-y-2">
                {included.map((v, i) => (
                  <div key={i} className="flex gap-2">
                    <Input
                      value={v}
                      placeholder="e.g. All cleaning supplies"
                      onChange={(e) =>
                        setIncluded((arr) => arr.map((x, j) => (j === i ? e.target.value : x)))
                      }
                    />
                    {included.length > 1 && (
                      <button
                        onClick={() => setIncluded((arr) => arr.filter((_, j) => j !== i))}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-400 hover:text-red-600"
                      >
                        <X size={16} />
                      </button>
                    )}
                  </div>
                ))}
              </div>
              <button
                onClick={() => setIncluded((arr) => [...arr, ""])}
                className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:underline"
              >
                <Plus size={14} /> Add item
              </button>
            </div>

            <div>
              <Label>Optional add-ons</Label>
              <div className="space-y-2">
                {addons.map((a, i) => (
                  <div key={i} className="flex gap-2">
                    <Input
                      value={a.label}
                      placeholder="e.g. Inside oven clean"
                      onChange={(e) =>
                        setAddons((arr) => arr.map((x, j) => (j === i ? { ...x, label: e.target.value } : x)))
                      }
                    />
                    <Input
                      value={a.price}
                      type="number"
                      placeholder="£"
                      className="w-24"
                      onChange={(e) =>
                        setAddons((arr) => arr.map((x, j) => (j === i ? { ...x, price: e.target.value } : x)))
                      }
                    />
                    {addons.length > 1 && (
                      <button
                        onClick={() => setAddons((arr) => arr.filter((_, j) => j !== i))}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-400 hover:text-red-600"
                      >
                        <X size={16} />
                      </button>
                    )}
                  </div>
                ))}
              </div>
              <button
                onClick={() => setAddons((arr) => [...arr, { label: "", price: "" }])}
                className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:underline"
              >
                <Plus size={14} /> Add add-on
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="grid gap-5">
            <Field label="Based in">
              <Select defaultValue="">
                <option value="" disabled>Select a city</option>
                {ukCities.map((c) => <option key={c}>{c}</option>)}
              </Select>
            </Field>
            <Field label="Coverage postcodes">
              <Input placeholder="e.g. SW1, SW3, SW7, W1" />
            </Field>
            <Field label="Typical response time">
              <Select defaultValue="within 2 hours">
                <option>within 1 hour</option>
                <option>within 2 hours</option>
                <option>within 4 hours</option>
                <option>within a day</option>
              </Select>
            </Field>
            <Field label="Available days">
              <Input placeholder="e.g. Mon, Tue, Wed, Thu, Fri" />
            </Field>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-3">
            <h3 className="font-display text-lg font-bold text-slate-900">Publish your service</h3>
            <p className="text-sm text-slate-600">
              Your listing will be visible to customers in your coverage area. You can edit or pause
              it any time from your dashboard.
            </p>
            <ul className="space-y-2">
              {["Overview & category set", "Pricing and extras configured", "Coverage area defined"].map((t) => (
                <li key={t} className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-600 text-white">
                    <Check size={12} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          className={step === 0 ? "invisible" : ""}
        >
          <ChevronLeft size={16} /> Back
        </Button>
        {step < steps.length - 1 ? (
          <Button onClick={() => setStep((s) => s + 1)}>
            Continue <ChevronRight size={16} />
          </Button>
        ) : (
          <Button onClick={() => setDone(true)}>Publish service</Button>
        )}
      </div>
    </div>
  );
}
