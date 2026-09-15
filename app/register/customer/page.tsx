import Link from "next/link";
import { AuthShell } from "@/components/layout/AuthShell";
import { Label, Input, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { ukCities } from "@/lib/data";

export default function CustomerRegisterPage() {
  return (
    <AuthShell
      title="Create your account"
      subtitle="Sign up to start booking trusted help in minutes."
      footer={<>Already have an account? <Link href="/login" className="font-semibold text-brand-700 hover:underline">Log in</Link></>}
    >
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label htmlFor="first">First name</Label>
            <Input id="first" placeholder="Olivia" />
          </div>
          <div>
            <Label htmlFor="last">Last name</Label>
            <Input id="last" placeholder="Bennett" />
          </div>
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@example.co.uk" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label htmlFor="city">City</Label>
            <Select id="city" defaultValue="">
              <option value="" disabled>Select</option>
              {ukCities.map((c) => <option key={c}>{c}</option>)}
            </Select>
          </div>
          <div>
            <Label htmlFor="postcode">Postcode</Label>
            <Input id="postcode" placeholder="SW1A 1AA" />
          </div>
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="Create a password" />
        </div>
        <label className="flex items-start gap-2 text-sm text-slate-600">
          <input type="checkbox" className="mt-0.5 rounded border-slate-300 accent-brand-600" />
          I agree to Servana&apos;s <Link href="/help" className="font-medium text-brand-700 hover:underline">Terms</Link> and Privacy Policy.
        </label>
        <Button href="/dashboard/customer" className="w-full">Create account</Button>
      </div>
    </AuthShell>
  );
}
