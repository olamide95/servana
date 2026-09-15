"use client";

import { useState } from "react";
import { Check, ChevronRight, ChevronLeft, Building2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Label, Input, Textarea, Select } from "@/components/ui/Input";
import { categories, ukCities } from "@/lib/data";
import { Stepper, Field, UploadBox } from "./ProviderRegistrationForm";

const steps = ["Agency details", "Services & team", "Verification (KYC)", "Review"];

export function AgencyRegistrationForm() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="rounded-2xl border border-brand-200 bg-brand-50 p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white">
          <Building2 size={26} />
        </div>
        <h2 className="font-display text-2xl font-bold text-slate-900">Agency application submitted</h2>
        <p className="mx-auto mt-2 max-w-md text-slate-600">
          Thanks for registering your agency with Servana. Our partnerships team will be in touch to
          finish onboarding, set up your referral code and unlock commission tracking.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Button href="/dashboard/agency">Go to dashboard</Button>
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
            <Field label="Agency name"><Input placeholder="e.g. Bright Home Agency" /></Field>
            <Field label="Contact email"><Input type="email" placeholder="hello@agency.co.uk" /></Field>
            <Field label="Phone"><Input placeholder="0121 000 0000" /></Field>
            <Field label="City">
              <Select defaultValue="">
                <option value="" disabled>Select a city</option>
                {ukCities.map((c) => <option key={c}>{c}</option>)}
              </Select>
            </Field>
            <Field label="Postcode"><Input placeholder="B1 1HQ" /></Field>
            <Field label="Companies House no. (optional)"><Input placeholder="12345678" /></Field>
          </div>
        )}

        {step === 1 && (
          <div className="grid gap-5">
            <Field label="Primary specialism">
              <Select defaultValue="">
                <option value="" disabled>Choose your main category</option>
                {categories.map((c) => <option key={c.id} value={c.slug}>{c.name}</option>)}
              </Select>
            </Field>
            <Field label="Agency tagline">
              <Input placeholder="e.g. Vetted home & care professionals across the Midlands" />
            </Field>
            <Field label="About your agency">
              <Textarea placeholder="Describe the services you manage, your vetting process and the areas you cover." />
            </Field>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Team size"><Input type="number" placeholder="28" /></Field>
              <Field label="Services you'll offer"><Input type="number" placeholder="14" /></Field>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="grid gap-5">
            <p className="rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
              Agencies are verified to confirm they are a legitimate business and can manage bookings
              on behalf of clients. All documents are encrypted.
            </p>
            <Field label="Business registration">
              <UploadBox label="Certificate of incorporation or business licence" />
            </Field>
            <Field label="Proof of insurance">
              <UploadBox label="Public liability / professional indemnity" />
            </Field>
            <Field label="Authorised signatory ID">
              <UploadBox label="Passport or driving licence of director" />
            </Field>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-3">
            <h3 className="font-display text-lg font-bold text-slate-900">Ready to submit</h3>
            <p className="text-sm text-slate-600">
              By submitting, you agree to Servana&apos;s agency partner terms, including the standard
              referral commission structure and code of conduct.
            </p>
            <ul className="space-y-2">
              {["Agency profile complete", "Services & team set", "Verification documents uploaded"].map((t) => (
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
