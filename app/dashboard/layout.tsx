import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <aside className="fixed inset-y-0 left-0 hidden w-64 lg:block">
        <DashboardSidebar />
      </aside>
      <div className="flex min-h-screen w-full flex-col lg:pl-64">
        {children}
      </div>
    </div>
  );
}
