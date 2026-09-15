import Link from "next/link";
import { AuthShell } from "@/components/layout/AuthShell";
import { Label, Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

const roleShortcuts = [
  { label: "Customer", href: "/dashboard/customer" },
  { label: "Provider", href: "/dashboard/provider" },
  { label: "Agency", href: "/dashboard/agency" },
  { label: "Admin", href: "/dashboard/admin" },
];

export default function LoginPage() {
  return (
    <AuthShell
      title="Welcome back"
      subtitle="Log in to manage your bookings and account."
      footer={<>Don&apos;t have an account? <Link href="/register" className="font-semibold text-brand-700 hover:underline">Sign up</Link></>}
    >
      <div className="space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@example.co.uk" />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="••••••••" />
        </div>
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-slate-600">
            <input type="checkbox" className="rounded border-slate-300 accent-brand-600" /> Remember me
          </label>
          <Link href="/help" className="font-medium text-brand-700 hover:underline">Forgot password?</Link>
        </div>
        <Button href="/dashboard/customer" className="w-full">Log in</Button>
      </div>

      <div className="my-6 flex items-center gap-3 text-xs text-slate-400">
        <div className="h-px flex-1 bg-slate-200" /> demo dashboards <div className="h-px flex-1 bg-slate-200" />
      </div>
      <div className="grid grid-cols-2 gap-2">
        {roleShortcuts.map((r) => (
          <Button key={r.label} href={r.href} variant="outline" size="sm">{r.label}</Button>
        ))}
      </div>
    </AuthShell>
  );
}
