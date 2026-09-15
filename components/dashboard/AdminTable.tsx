import { Card, CardHeader } from "@/components/ui/Card";

export interface Column<T> {
  header: string;
  cell: (row: T) => React.ReactNode;
  className?: string;
}

export function AdminTable<T extends { id?: string }>({
  title,
  subtitle,
  action,
  columns,
  rows,
  minWidth = 720,
}: {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  columns: Column<T>[];
  rows: T[];
  minWidth?: number;
}) {
  return (
    <Card>
      <CardHeader title={title} subtitle={subtitle} action={action} />
      <div className="overflow-x-auto scroll-thin">
        <table className="w-full text-sm" style={{ minWidth }}>
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              {columns.map((c, i) => (
                <th key={i} className={`px-5 py-3 ${c.className ?? ""}`}>{c.header}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((row, ri) => (
              <tr key={row.id ?? ri} className="hover:bg-slate-50/60">
                {columns.map((c, ci) => (
                  <td key={ci} className={`px-5 py-4 ${c.className ?? ""}`}>{c.cell(row)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
