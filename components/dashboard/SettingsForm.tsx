"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import { Label, Input, Textarea, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ukCities } from "@/lib/data";
import type { User } from "@/lib/types";

export function SettingsForm({ user, showBio = false }: { user: User; showBio?: boolean }) {
  const [saved, setSaved] = useState(false);

  function save() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <Card className="p-6">
          <h3 className="font-display text-lg font-bold text-slate-900">Profile</h3>
          <div className="mt-5 flex items-center gap-4">
            <Avatar name={user.name} size="xl" />
            <Button variant="outline" size="sm">Change photo</Button>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div><Label>Full name</Label><Input defaultValue={user.name} /></div>
            <div><Label>Email</Label><Input type="email" defaultValue={user.email} /></div>
            <div><Label>Phone</Label><Input defaultValue={user.phone ?? ""} placeholder="07700 900000" /></div>
            <div>
              <Label>City</Label>
              <Select defaultValue={user.city}>
                {ukCities.map((c) => <option key={c}>{c}</option>)}
              </Select>
            </div>
            <div><Label>Postcode</Label><Input defaultValue={user.postcode} /></div>
          </div>
          {showBio && (
            <div className="mt-4">
              <Label>Bio</Label>
              <Textarea placeholder="Tell customers about yourself and your experience." />
            </div>
          )}
          <div className="mt-5 flex items-center gap-3">
            <Button onClick={save}>{saved ? <><Check size={16} /> Saved</> : "Save changes"}</Button>
            {saved && <span className="text-sm text-brand-600">Your changes have been saved.</span>}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-display text-lg font-bold text-slate-900">Password</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div><Label>Current password</Label><Input type="password" placeholder="••••••••" /></div>
            <div className="sm:col-span-2 grid gap-4 sm:grid-cols-2">
              <div><Label>New password</Label><Input type="password" placeholder="••••••••" /></div>
              <div><Label>Confirm new password</Label><Input type="password" placeholder="••••••••" /></div>
            </div>
          </div>
          <div className="mt-5"><Button variant="outline">Update password</Button></div>
        </Card>
      </div>

      <div className="space-y-6">
        <Card className="p-6">
          <h3 className="font-display text-base font-bold text-slate-900">Notifications</h3>
          <div className="mt-4 space-y-3">
            {["Email notifications", "SMS reminders", "Marketing & offers", "Weekly summary"].map((n, i) => (
              <label key={n} className="flex items-center justify-between text-sm text-slate-600">
                {n}
                <input type="checkbox" defaultChecked={i < 2} className="h-5 w-9 appearance-none rounded-full bg-slate-200 transition checked:bg-brand-600" />
              </label>
            ))}
          </div>
        </Card>
        <Card className="p-6">
          <h3 className="font-display text-base font-bold text-slate-900">Danger zone</h3>
          <p className="mt-2 text-sm text-slate-500">Permanently delete your account and all data.</p>
          <div className="mt-4"><Button variant="danger" size="sm">Delete account</Button></div>
        </Card>
      </div>
    </div>
  );
}
