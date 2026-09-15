import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all focus-ring disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary: "bg-brand-600 text-white hover:bg-brand-700 shadow-sm hover:shadow-md",
  secondary: "bg-slate-900 text-white hover:bg-slate-800",
  outline: "border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50",
  ghost: "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
  danger: "bg-red-600 text-white hover:bg-red-700",
};

const sizes: Record<Size, string> = {
  sm: "text-sm px-3 py-1.5",
  md: "text-sm px-4 py-2.5",
  lg: "text-base px-6 py-3",
};

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = BaseProps & { href: string };

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } =
    props as ButtonAsButton;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
