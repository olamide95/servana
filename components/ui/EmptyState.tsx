import { Icon } from "./Icon";
import { Button } from "./Button";

export function EmptyState({
  icon = "Inbox",
  title,
  description,
  actionLabel,
  actionHref,
}: {
  icon?: string;
  title: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50/50 px-6 py-14 text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-card">
        <Icon name={icon} className="h-6 w-6 text-brand-600" />
      </div>
      <h3 className="font-display text-lg font-bold text-slate-900">{title}</h3>
      {description && <p className="mt-1 max-w-sm text-sm text-slate-500">{description}</p>}
      {actionLabel && actionHref && (
        <div className="mt-5">
          <Button href={actionHref} size="sm">{actionLabel}</Button>
        </div>
      )}
    </div>
  );
}
