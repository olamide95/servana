"use client";

import { useState } from "react";
import { Check, ChevronRight, ChevronLeft, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Label, Input, Textarea, Select } from "@/components/ui/Input";
import { categories, ukCities } from "@/lib/data";

const steps = ["Your details", "Skills & service", "Verification (KYC)", "Review"];

export function ProviderRegistrationForm() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="rounded-2xl border border-brand-200 bg-brand-50 p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white">
          <BadgeCheck size={26} />
        </div>
        <h2 className="font-display text-2xl font-bold text-slate-900">Application submitted</h2>
        <p className="mx-auto mt-2 max-w-md text-slate-600">
          Thanks for applying to become a Servana provider. Our team will review your details and
          verification documents — most applications are approved within 48 hours.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Button href="/dashboard/provider">Go to dashboard</Button>
          <Button href="/" variant="outline">Back to home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
      <Stepper steps={steps} current={step} />

      <div className="mt-8">
        {step === 0 && (
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full name"><Input placeholder="e.g. James Okafor" /></Field>
            <Field label="Email"><Input type="email" placeholder="you@example.co.uk" /></Field>
            <Field label="Phone"><Input placeholder="07700 900000" /></Field>
            <Field label="City">
              <Select defaultValue="">
                <option value="" disabled>Select a city</option>
                {ukCities.map((c) => <option key={c}>{c}</option>)}
              </Select>
            </Field>
            <Field label="Postcode"><Input placeholder="M1 1AE" /></Field>
            <Field label="Provider type">
              <Select defaultValue="individual">
                <option value="individual">Individual provider</option>
                <option value="agency">Part of an agency</option>
              </Select>
            </Field>
          </div>
        )}

        {step === 1 && (
          <div className="grid gap-5">
            <Field label="Primary category">
              <Select defaultValue="">
                <option value="" disabled>Choose your main category</option>
                {categories.map((c) => <option key={c.id} value={c.slug}>{c.name}</option>)}
              </Select>
            </Field>
            <Field label="Professional tagline">
              <Input placeholder="e.g. Reliable handyman & furniture assembly specialist" />
            </Field>
            <Field label="About you">
              <Textarea placeholder="Tell customers about your experience, qualifications and what makes you reliable." />
            </Field>
            <div className="grid gap-5 sm:grid-cols-3">
              <Field label="Hourly rate (£)"><Input type="number" placeholder="28" /></Field>
              <Field label="Min. booking (hrs)"><Input type="number" placeholder="1" /></Field>
              <Field label="Coverage / online">
                <Select defaultValue="in-person">
                  <option value="in-person">In person</option>
                  <option value="online">Online</option>
                  <option value="both">Both</option>
                </Select>
              </Field>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="grid gap-5">
            <p className="rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
              To keep Servana safe and trusted, we verify every provider&apos;s identity. Your
              documents are encrypted and only used for verification.
            </p>
            <Field label="ID document">
              <UploadBox label="Upload passport or driving licence" />
            </Field>
            <Field label="Proof of address">
              <UploadBox label="Utility bill or bank statement (last 3 months)" />
            </Field>
            <Field label="DBS / certifications (optional)">
              <UploadBox label="Upload any relevant certificates" />
            </Field>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-3">
            <h3 className="font-display text-lg font-bold text-slate-900">Almost there</h3>
            <p className="text-sm text-slate-600">
              Please confirm your details are correct. By submitting, you agree to Servana&apos;s
              provider terms and code of conduct.
            </p>
            <ul className="space-y-2">
              {["Profile details complete", "Service & rates set", "Verification documents uploaded"].map((t) => (
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
          <Button onClick={() => setDone(true)}>Submit application</Button>
        )}
      </div>
    </div>
  );
}

export function Stepper({ steps, current }: { steps: string[]; current: number }) {
  return (
    <div className="flex items-center gap-2">
      {steps.map((s, i) => (
        <div key={s} className="flex flex-1 items-center gap-2">
          <div className="flex items-center gap-2">
            <span
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold transition ${
                i < current
                  ? "bg-brand-600 text-white"
                  : i === current
                  ? "bg-brand-600 text-white ring-4 ring-brand-100"
                  : "bg-slate-100 text-slate-400"
              }`}
            >
              {i < current ? <Check size={15} /> : i + 1}
            </span>
            <span className={`hidden text-sm font-semibold sm:block ${i <= current ? "text-slate-900" : "text-slate-400"}`}>
              {s}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div className={`h-0.5 flex-1 rounded ${i < current ? "bg-brand-600" : "bg-slate-100"}`} />
          )}
        </div>
      ))}
    </div>
  );
}

export function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <Label>{label}</Label>
      {children}
    </div>
  );
}

export function UploadBox({ label }: { label: string }) {
  return (
    <div className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 px-4 py-8 text-center transition hover:border-brand-300 hover:bg-brand-50/40">
      <Check className="mb-2 h-6 w-6 text-slate-300" />
      <p className="text-sm font-medium text-slate-600">{label}</p>
      <p className="text-xs text-slate-400">PNG, JPG or PDF up to 10MB</p>
    </div>
  );
}
