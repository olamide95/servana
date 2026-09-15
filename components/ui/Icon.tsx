"use client";

import * as Icons from "lucide-react";
import type { LucideProps } from "lucide-react";

interface IconProps extends LucideProps {
  name: string;
}

/**
 * Renders a lucide-react icon by its string name (used because category/stat
 * data stores icon names as strings). Falls back to a circle if not found.
 */
export function Icon({ name, ...props }: IconProps) {
  const Cmp = (Icons as unknown as Record<string, React.ComponentType<LucideProps>>)[name];
  const Fallback = Icons.Circle;
  const Component = Cmp ?? Fallback;
  return <Component {...props} />;
}
