import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center">
      <p className="font-display text-7xl font-extrabold text-brand-600">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold text-slate-900">Page not found</h1>
      <p className="mt-2 max-w-md text-slate-500">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <div className="mt-6 flex gap-3">
        <Button href="/">Back to home</Button>
        <Button href="/services" variant="outline">Browse services</Button>
      </div>
    </div>
  );
}
