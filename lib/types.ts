// ============================================================================
// Servana — Core domain types
// ============================================================================

export type UserRole = "customer" | "provider" | "agency" | "admin";

export type ProviderType = "individual" | "agency";

export type ServiceMode = "in-person" | "online" | "both";

export type RateType = "hourly" | "fixed";

export type OrderStatus =
  | "pending"
  | "accepted"
  | "in-progress"
  | "completed"
  | "cancelled"
  | "disputed";

export type ProviderLevel = "new" | "rising" | "level-1" | "level-2" | "top-rated";

export type KycStatus = "unverified" | "pending" | "verified" | "rejected";

export type CommissionStatus = "pending" | "available" | "paid";

export type PayoutStatus = "requested" | "processing" | "paid" | "rejected";

export type ReferralStatus = "invited" | "signed-up" | "converted";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar: string;
  city: string;
  postcode: string;
  joinedAt: string;
  phone?: string;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  icon: string; // lucide icon name
  description: string;
  group: "Home & Domestic" | "Care & Support" | "Trades & Repairs" | "Professional & Online" | "Tutoring";
  serviceCount: number;
}

export interface Provider {
  id: string;
  userId: string;
  name: string;
  type: ProviderType;
  avatar: string;
  tagline: string;
  bio: string;
  city: string;
  postcode: string;
  coverage: string[]; // postcode prefixes covered
  rating: number;
  reviewCount: number;
  completedOrders: number;
  level: ProviderLevel;
  verified: boolean;
  kyc: KycStatus;
  responseTime: string;
  memberSince: string;
  languages: string[];
  skills: string[];
  online: boolean;
}

export interface Agency {
  id: string;
  userId: string;
  name: string;
  avatar: string;
  tagline: string;
  bio: string;
  city: string;
  postcode: string;
  rating: number;
  reviewCount: number;
  teamSize: number;
  verified: boolean;
  kyc: KycStatus;
  servicesOffered: number;
  providersReferred: number;
  customersReferred: number;
  memberSince: string;
  referralCode: string;
}

export interface ServiceAddon {
  id: string;
  label: string;
  price: number;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  categorySlug: string;
  providerId: string;
  providerType: ProviderType;
  description: string;
  mode: ServiceMode;
  location: string;
  coverage: string[];
  hourlyRate: number;
  fixedRate?: number;
  minHours: number;
  responseTime: string;
  included: string[];
  addons: ServiceAddon[];
  rating: number;
  reviewCount: number;
  ordersCompleted: number;
  verified: boolean;
  images: string[]; // placeholder gradient seeds
  featured: boolean;
  availability: string[];
}

export interface Order {
  id: string;
  reference: string;
  serviceId: string;
  serviceTitle: string;
  customerId: string;
  customerName: string;
  providerId: string;
  providerName: string;
  agencyId?: string;
  status: OrderStatus;
  rateType: RateType;
  hours: number;
  baseAmount: number;
  addonsAmount: number;
  walletApplied: number;
  total: number;
  date: string;
  time: string;
  address: string;
  postcode: string;
  mode: ServiceMode;
  instructions: string;
  createdAt: string;
}

export interface Review {
  id: string;
  orderId: string;
  serviceId: string;
  providerId: string;
  authorName: string;
  authorAvatar: string;
  rating: number;
  comment: string;
  date: string;
  response?: string;
}

export interface Referral {
  id: string;
  agencyId: string;
  type: "customer" | "provider";
  name: string;
  email: string;
  status: ReferralStatus;
  invitedAt: string;
  convertedAt?: string;
  commissionEarned: number;
}

export interface Commission {
  id: string;
  agencyId: string;
  source: "transaction" | "onboarding";
  description: string;
  orderRef?: string;
  amount: number;
  status: CommissionStatus;
  date: string;
}

export interface Payout {
  id: string;
  agencyId: string;
  amount: number;
  method: string;
  status: PayoutStatus;
  requestedAt: string;
  paidAt?: string;
}

export interface WalletTransaction {
  id: string;
  userId: string;
  type: "topup" | "spend" | "refund" | "reward";
  description: string;
  amount: number; // positive credit, negative debit
  balanceAfter: number;
  date: string;
}

export interface Message {
  id: string;
  threadId: string;
  fromName: string;
  fromAvatar: string;
  preview: string;
  body: string;
  unread: boolean;
  date: string;
}

export interface Thread {
  id: string;
  participantName: string;
  participantAvatar: string;
  lastMessage: string;
  unreadCount: number;
  updatedAt: string;
}

export interface StatItem {
  label: string;
  value: string;
  delta?: string;
  trend?: "up" | "down" | "flat";
  icon: string;
}
