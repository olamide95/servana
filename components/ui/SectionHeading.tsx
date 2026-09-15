export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="mb-2 text-sm font-bold uppercase tracking-wider text-brand-600">{eyebrow}</p>
      )}
      <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl text-balance">
        {title}
      </h2>
      {description && <p className="mt-3 text-lg text-slate-500 text-balance">{description}</p>}
    </div>
  );
}
