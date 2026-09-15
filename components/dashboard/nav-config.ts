import type { UserRole } from "@/lib/types";

export interface NavItem {
  href: string;
  label: string;
  icon: string;
}

export const dashboardNav: Record<Exclude<UserRole, "admin"> | "admin", NavItem[]> = {
  customer: [
    { href: "/dashboard/customer", label: "Overview", icon: "LayoutDashboard" },
    { href: "/services", label: "Browse services", icon: "Search" },
    { href: "/dashboard/customer/orders", label: "My orders", icon: "ShoppingBag" },
    { href: "/dashboard/customer/wallet", label: "Wallet", icon: "Wallet" },
    { href: "/dashboard/customer/saved", label: "Saved providers", icon: "Heart" },
    { href: "/dashboard/customer/messages", label: "Messages", icon: "MessageSquare" },
    { href: "/dashboard/customer/reviews", label: "Reviews", icon: "Star" },
    { href: "/dashboard/customer/settings", label: "Settings", icon: "Settings" },
  ],
  provider: [
    { href: "/dashboard/provider", label: "Overview", icon: "LayoutDashboard" },
    { href: "/dashboard/provider/services", label: "My services", icon: "LayoutGrid" },
    { href: "/dashboard/provider/services/new", label: "Add service", icon: "PlusCircle" },
    { href: "/dashboard/provider/orders", label: "Orders", icon: "ShoppingBag" },
    { href: "/dashboard/provider/earnings", label: "Earnings", icon: "Banknote" },
    { href: "/dashboard/provider/availability", label: "Availability", icon: "CalendarDays" },
    { href: "/dashboard/provider/reviews", label: "Reviews", icon: "Star" },
    { href: "/dashboard/provider/messages", label: "Messages", icon: "MessageSquare" },
    { href: "/dashboard/provider/onboarding", label: "Verification", icon: "BadgeCheck" },
    { href: "/dashboard/provider/settings", label: "Settings", icon: "Settings" },
  ],
  agency: [
    { href: "/dashboard/agency", label: "Overview", icon: "LayoutDashboard" },
    { href: "/dashboard/agency/services", label: "Agency services", icon: "LayoutGrid" },
    { href: "/dashboard/agency/services/new", label: "Add service", icon: "PlusCircle" },
    { href: "/dashboard/agency/order-on-behalf", label: "Order for client", icon: "Send" },
    { href: "/dashboard/agency/clients", label: "Clients", icon: "Users" },
    { href: "/dashboard/agency/referrals", label: "Referrals", icon: "Share2" },
    { href: "/dashboard/agency/commissions", label: "Commissions", icon: "Coins" },
    { href: "/dashboard/agency/payouts", label: "Payouts", icon: "Banknote" },
    { href: "/dashboard/agency/messages", label: "Messages", icon: "MessageSquare" },
    { href: "/dashboard/agency/onboarding", label: "Verification", icon: "BadgeCheck" },
    { href: "/dashboard/agency/settings", label: "Settings", icon: "Settings" },
  ],
  admin: [
    { href: "/dashboard/admin", label: "Overview", icon: "LayoutDashboard" },
    { href: "/dashboard/admin/customers", label: "Customers", icon: "Users" },
    { href: "/dashboard/admin/providers", label: "Providers", icon: "UserCog" },
    { href: "/dashboard/admin/agencies", label: "Agencies", icon: "Building2" },
    { href: "/dashboard/admin/categories", label: "Categories", icon: "Tags" },
    { href: "/dashboard/admin/services", label: "Services", icon: "LayoutGrid" },
    { href: "/dashboard/admin/orders", label: "Orders", icon: "ShoppingBag" },
    { href: "/dashboard/admin/commissions", label: "Commissions", icon: "Coins" },
    { href: "/dashboard/admin/disputes", label: "Disputes", icon: "ShieldAlert" },
    { href: "/dashboard/admin/reviews", label: "Reviews", icon: "Star" },
    { href: "/dashboard/admin/reports", label: "Reports", icon: "BarChart3" },
  ],
};

export const roleLabels: Record<string, string> = {
  customer: "Customer",
  provider: "Provider",
  agency: "Agency",
  admin: "Admin",
};
