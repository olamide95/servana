"use client";

import { useState } from "react";
import { Check, UserPlus } from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardBody } from "@/components/dashboard/DashboardBody";
import { Card } from "@/components/ui/Card";
import { Label, Input, Select, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { services, ukCities } from "@/lib/data";

export default function OrderOnBehalfPage() {
  const [done, setDone] = useState(false);

  return (
    <>
      <DashboardHeader title="Book on behalf of a client" />
      <DashboardBody>
        {done ? (
          <Card className="mx-auto max-w-lg p-8 text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white"><Check size={22} /></div>
            <h2 className="font-display text-xl font-bold text-slate-900">Booking created</h2>
            <p className="mt-2 text-slate-500">The order has been placed on behalf of your client and they&apos;ve been notified.</p>
            <div className="mt-5 flex justify-center gap-3">
              <Button onClick={() => setDone(false)} variant="outline">Book another</Button>
              <Button href="/dashboard/agency/clients">View clients</Button>
            </div>
          </Card>
        ) : (
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="lg:col-span-2 p-6">
              <div className="flex items-center gap-2">
                <UserPlus size={18} className="text-brand-600" />
                <h3 className="font-display font-bold text-slate-900">Booking details</h3>
              </div>
              <div className="mt-5 grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div><Label>Client name</Label><Input placeholder="e.g. Margaret Lewis" /></div>
                  <div><Label>Client email</Label><Input type="email" placeholder="client@example.co.uk" /></div>
                </div>
                <div>
                  <Label>Service</Label>
                  <Select defaultValue="">
                    <option value="" disabled>Choose a service</option>
                    {services.map((s) => <option key={s.id} value={s.id}>{s.title}</option>)}
                  </Select>
                </div>
                <div className="grid gap-5 sm:grid-cols-3">
                  <div><Label>Date</Label><Input type="date" /></div>
                  <div><Label>Time</Label><Input type="time" /></div>
                  <div><Label>Hours</Label><Input type="number" defaultValue={2} /></div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Label>City</Label>
                    <Select defaultValue="">
                      <option value="" disabled>Select</option>
                      {ukCities.map((c) => <option key={c}>{c}</option>)}
                    </Select>
                  </div>
                  <div><Label>Postcode</Label><Input placeholder="LS6 2AS" /></div>
                </div>
                <div><Label>Instructions</Label><Textarea placeholder="Any details the provider should know." /></div>
              </div>
            </Card>

            <div>
              <Card className="p-6">
                <h3 className="font-display font-bold text-slate-900">Summary</h3>
                <dl className="mt-4 space-y-2.5 text-sm">
                  <div className="flex justify-between"><dt className="text-slate-500">Estimated total</dt><dd className="font-medium text-slate-900">£120.00</dd></div>
                  <div className="flex justify-between"><dt className="text-slate-500">Your commission</dt><dd className="font-medium text-brand-600">£6.00</dd></div>
                </dl>
                <Button className="mt-5 w-full" onClick={() => setDone(true)}>Place booking</Button>
                <p className="mt-3 text-xs text-slate-400">The client will be notified and can manage the booking from their account.</p>
              </Card>
            </div>
          </div>
        )}
      </DashboardBody>
    </>
  );
}
