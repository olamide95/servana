import type {
  Agency,
  Category,
  Commission,
  Message,
  Order,
  Payout,
  Provider,
  Referral,
  Review,
  Service,
  Thread,
  User,
  WalletTransaction,
} from "./types";

// ============================================================================
// CATEGORIES
// ============================================================================

export const categories: Category[] = [
  { id: "c1", slug: "cleaning", name: "Cleaning", icon: "Sparkles", group: "Home & Domestic", description: "Domestic and deep cleaning for homes and flats.", serviceCount: 142 },
  { id: "c2", slug: "domestic-help", name: "Domestic Help", icon: "Home", group: "Home & Domestic", description: "General household help and daily chores.", serviceCount: 88 },
  { id: "c3", slug: "housekeeping", name: "Housekeeping", icon: "BedDouble", group: "Home & Domestic", description: "Ongoing housekeeping and home management.", serviceCount: 54 },
  { id: "c4", slug: "laundry-ironing", name: "Laundry & Ironing", icon: "Shirt", group: "Home & Domestic", description: "Washing, ironing and laundry services.", serviceCount: 47 },
  { id: "c5", slug: "gardening", name: "Gardening", icon: "Trees", group: "Home & Domestic", description: "Lawn care, planting and garden maintenance.", serviceCount: 76 },
  { id: "c6", slug: "handyman", name: "Handyman", icon: "Hammer", group: "Trades & Repairs", description: "Odd jobs, fixes and small repairs.", serviceCount: 121 },
  { id: "c7", slug: "plumbing", name: "Plumbing", icon: "Droplets", group: "Trades & Repairs", description: "Leaks, installations and plumbing repairs.", serviceCount: 63 },
  { id: "c8", slug: "electrical-repairs", name: "Electrical Repairs", icon: "Plug", group: "Trades & Repairs", description: "Certified electrical work and repairs.", serviceCount: 58 },
  { id: "c9", slug: "painting-decorating", name: "Painting & Decorating", icon: "PaintRoller", group: "Trades & Repairs", description: "Interior and exterior painting and decorating.", serviceCount: 69 },
  { id: "c10", slug: "furniture-assembly", name: "Furniture Assembly", icon: "Wrench", group: "Trades & Repairs", description: "Flat-pack and furniture assembly.", serviceCount: 41 },
  { id: "c11", slug: "moving-lifting", name: "Moving & Lifting Help", icon: "Truck", group: "Trades & Repairs", description: "Removals, lifting and moving help.", serviceCount: 52 },
  { id: "c12", slug: "elderly-support", name: "Elderly Support", icon: "HeartHandshake", group: "Care & Support", description: "Companionship and support for older adults.", serviceCount: 38 },
  { id: "c13", slug: "childcare-support", name: "Childcare Support", icon: "Baby", group: "Care & Support", description: "Babysitting and childcare assistance.", serviceCount: 44 },
  { id: "c14", slug: "pet-care", name: "Pet Care", icon: "PawPrint", group: "Care & Support", description: "Dog walking, pet sitting and grooming.", serviceCount: 67 },
  { id: "c15", slug: "cooking-meal-prep", name: "Cooking & Meal Prep", icon: "ChefHat", group: "Care & Support", description: "Private chefs and weekly meal prep.", serviceCount: 33 },
  { id: "c16", slug: "beauty-grooming", name: "Beauty & Grooming", icon: "Scissors", group: "Care & Support", description: "Mobile beauty, hair and grooming.", serviceCount: 59 },
  { id: "c17", slug: "event-support", name: "Event Support", icon: "PartyPopper", group: "Professional & Online", description: "Event staff, setup and coordination.", serviceCount: 29 },
  { id: "c18", slug: "admin-assistance", name: "Admin Assistance", icon: "ClipboardList", group: "Professional & Online", description: "Administrative and clerical support.", serviceCount: 36 },
  { id: "c19", slug: "virtual-assistance", name: "Virtual Assistance", icon: "Laptop", group: "Professional & Online", description: "Remote VA and back-office support.", serviceCount: 71 },
  { id: "c20", slug: "online-tutoring", name: "Online Tutoring", icon: "GraduationCap", group: "Tutoring", description: "One-to-one online tutoring, all subjects.", serviceCount: 94 },
  { id: "c21", slug: "maths-tutoring", name: "Maths Tutoring", icon: "Calculator", group: "Tutoring", description: "Maths tuition from KS2 to A-Level.", serviceCount: 61 },
  { id: "c22", slug: "english-tutoring", name: "English Tutoring", icon: "BookOpen", group: "Tutoring", description: "English language and literature tuition.", serviceCount: 48 },
  { id: "c23", slug: "science-tutoring", name: "Science Tutoring", icon: "FlaskConical", group: "Tutoring", description: "Biology, chemistry and physics tuition.", serviceCount: 43 },
  { id: "c24", slug: "coding-tutoring", name: "Coding Tutoring", icon: "Code", group: "Tutoring", description: "Programming and computer science tuition.", serviceCount: 39 },
  { id: "c25", slug: "language-tutoring", name: "Language Tutoring", icon: "Languages", group: "Tutoring", description: "French, Spanish, German and more.", serviceCount: 35 },
  { id: "c26", slug: "music-tutoring", name: "Music Tutoring", icon: "Music", group: "Tutoring", description: "Instrument and vocal tuition.", serviceCount: 27 },
];

export const categoryGroups = [
  "Home & Domestic",
  "Care & Support",
  "Trades & Repairs",
  "Professional & Online",
  "Tutoring",
] as const;

// ============================================================================
// UK CITIES
// ============================================================================

export const ukCities = [
  "London",
  "Manchester",
  "Birmingham",
  "Leeds",
  "Coventry",
  "Liverpool",
  "Bristol",
  "Cardiff",
  "Glasgow",
  "Edinburgh",
];

// ============================================================================
// USERS
// ============================================================================

export const users: User[] = [
  { id: "u1", name: "Olivia Bennett", email: "olivia@example.co.uk", role: "customer", avatar: "Olivia Bennett", city: "London", postcode: "SW1A 1AA", joinedAt: "2024-03-12", phone: "07700 900123" },
  { id: "u2", name: "James Okafor", email: "james@example.co.uk", role: "provider", avatar: "James Okafor", city: "Manchester", postcode: "M1 1AE", joinedAt: "2023-11-02", phone: "07700 900456" },
  { id: "u3", name: "Bright Home Agency", email: "hello@brighthome.co.uk", role: "agency", avatar: "Bright Home", city: "Birmingham", postcode: "B1 1HQ", joinedAt: "2023-06-21" },
  { id: "u4", name: "Admin", email: "admin@servana.co.uk", role: "admin", avatar: "Servana Admin", city: "London", postcode: "EC1A 1BB", joinedAt: "2023-01-01" },
];

// The currently "logged in" user per role — used to simulate role-based dashboards.
export const currentUsers: Record<string, User> = {
  customer: users[0],
  provider: users[1],
  agency: users[2],
  admin: users[3],
};

// ============================================================================
// PROVIDERS
// ============================================================================

export const providers: Provider[] = [
  { id: "p1", userId: "u2", name: "James Okafor", type: "individual", avatar: "James Okafor", tagline: "Reliable handyman & furniture assembly specialist", bio: "Over 8 years of experience helping households across Greater Manchester with repairs, flat-pack assembly and general maintenance. Fully insured and DBS-checked.", city: "Manchester", postcode: "M1 1AE", coverage: ["M1", "M2", "M3", "M14"], rating: 4.9, reviewCount: 187, completedOrders: 412, level: "top-rated", verified: true, kyc: "verified", responseTime: "within 1 hour", memberSince: "2023-11-02", languages: ["English"], skills: ["Furniture assembly", "Shelving", "Door repairs", "TV mounting"], online: false },
  { id: "p2", userId: "u5", name: "Sophie Clarke", type: "individual", avatar: "Sophie Clarke", tagline: "Trusted domestic cleaner — homes & end of tenancy", bio: "Detail-obsessed cleaner serving central London. I bring my own eco-friendly supplies and treat every home like my own.", city: "London", postcode: "SW1A 1AA", coverage: ["SW1", "SW3", "SW7", "W1"], rating: 4.8, reviewCount: 243, completedOrders: 530, level: "top-rated", verified: true, kyc: "verified", responseTime: "within 2 hours", memberSince: "2023-02-18", languages: ["English", "Polish"], skills: ["Deep cleaning", "End of tenancy", "Oven cleaning"], online: false },
  { id: "p3", userId: "u6", name: "Daniel Wright", type: "individual", avatar: "Daniel Wright", tagline: "GCSE & A-Level Maths tutor (online)", bio: "Cambridge maths graduate and qualified teacher. I help students build confidence and smash their target grades, online across the UK.", city: "Bristol", postcode: "BS1 4DJ", coverage: ["Online"], rating: 5.0, reviewCount: 96, completedOrders: 188, level: "level-2", verified: true, kyc: "verified", responseTime: "within 3 hours", memberSince: "2023-09-04", languages: ["English"], skills: ["GCSE Maths", "A-Level Maths", "Further Maths"], online: true },
  { id: "p4", userId: "u7", name: "Aisha Khan", type: "individual", avatar: "Aisha Khan", tagline: "Gentle, experienced elderly companion & carer", bio: "Compassionate care assistant with 6 years' experience supporting older adults with companionship, errands and daily living.", city: "Leeds", postcode: "LS1 4DY", coverage: ["LS1", "LS2", "LS6"], rating: 4.9, reviewCount: 71, completedOrders: 154, level: "level-2", verified: true, kyc: "verified", responseTime: "within 4 hours", memberSince: "2024-01-15", languages: ["English", "Urdu"], skills: ["Companionship", "Medication reminders", "Meal prep"], online: false },
  { id: "p5", userId: "u8", name: "Marek Nowak", type: "individual", avatar: "Marek Nowak", tagline: "Professional gardener & landscaper", bio: "From lawn care to full garden makeovers across Coventry. Reliable, tidy and great with hedges.", city: "Coventry", postcode: "CV1 1GS", coverage: ["CV1", "CV2", "CV3"], rating: 4.7, reviewCount: 58, completedOrders: 121, level: "level-1", verified: true, kyc: "verified", responseTime: "within 6 hours", memberSince: "2024-04-09", languages: ["English", "Polish"], skills: ["Lawn mowing", "Hedge trimming", "Planting"], online: false },
  { id: "p6", userId: "u9", name: "Grace Mensah", type: "individual", avatar: "Grace Mensah", tagline: "Mobile beauty & hair stylist", bio: "Bringing the salon to you across Liverpool. Hair, nails and special-occasion glam.", city: "Liverpool", postcode: "L1 8JQ", coverage: ["L1", "L2", "L3", "L8"], rating: 4.8, reviewCount: 133, completedOrders: 289, level: "level-2", verified: true, kyc: "verified", responseTime: "within 2 hours", memberSince: "2023-07-22", languages: ["English"], skills: ["Hair styling", "Manicure", "Makeup"], online: false },
  { id: "p7", userId: "u10", name: "Tom Fletcher", type: "individual", avatar: "Tom Fletcher", tagline: "Qualified electrician — repairs & installs", bio: "NICEIC-registered electrician covering Edinburgh. Safe, certified work with full guarantees.", city: "Edinburgh", postcode: "EH1 1RE", coverage: ["EH1", "EH2", "EH3"], rating: 4.9, reviewCount: 84, completedOrders: 176, level: "level-2", verified: true, kyc: "verified", responseTime: "within 1 hour", memberSince: "2023-10-30", languages: ["English"], skills: ["Sockets & switches", "Fuse boards", "Lighting"], online: false },
  { id: "p8", userId: "u11", name: "Lucia Romano", type: "individual", avatar: "Lucia Romano", tagline: "Italian & Spanish language tutor (online)", bio: "Native Italian speaker and certified language teacher. Conversational and exam-focused lessons online.", city: "Cardiff", postcode: "CF10 1EP", coverage: ["Online"], rating: 4.9, reviewCount: 52, completedOrders: 108, level: "level-1", verified: true, kyc: "verified", responseTime: "within 5 hours", memberSince: "2024-02-11", languages: ["English", "Italian", "Spanish"], skills: ["Italian", "Spanish", "Conversation practice"], online: true },
  { id: "p9", userId: "u12", name: "Priya Sharma", type: "individual", avatar: "Priya Sharma", tagline: "Virtual assistant & admin support", bio: "Organised remote VA helping small businesses with inbox management, scheduling and data entry.", city: "London", postcode: "E1 6AN", coverage: ["Online"], rating: 4.8, reviewCount: 64, completedOrders: 142, level: "level-1", verified: true, kyc: "verified", responseTime: "within 3 hours", memberSince: "2024-03-28", languages: ["English", "Hindi"], skills: ["Inbox management", "Scheduling", "Data entry"], online: true },
  { id: "p10", userId: "u13", name: "Connor Walsh", type: "individual", avatar: "Connor Walsh", tagline: "Pet sitter & dog walker", bio: "Animal-loving, insured dog walker and pet sitter covering Glasgow's west end.", city: "Glasgow", postcode: "G1 1XW", coverage: ["G1", "G3", "G12"], rating: 4.7, reviewCount: 41, completedOrders: 97, level: "level-1", verified: false, kyc: "pending", responseTime: "within 4 hours", memberSince: "2024-05-19", languages: ["English"], skills: ["Dog walking", "Pet sitting", "Feeding visits"], online: false },
];

// ============================================================================
// AGENCIES
// ============================================================================

export const agencies: Agency[] = [
  { id: "a1", userId: "u3", name: "Bright Home Agency", avatar: "Bright Home", tagline: "Vetted home & care professionals across the Midlands", bio: "Bright Home connects households with carefully vetted cleaners, carers and tradespeople. We manage bookings on behalf of busy clients and refer trusted providers to the Servana network.", city: "Birmingham", postcode: "B1 1HQ", rating: 4.8, reviewCount: 312, teamSize: 28, verified: true, kyc: "verified", servicesOffered: 14, providersReferred: 46, customersReferred: 132, memberSince: "2023-06-21", referralCode: "BRIGHT25" },
  { id: "a2", userId: "u14", name: "CareFirst Partners", avatar: "CareFirst", tagline: "Specialist care & elderly support agency", bio: "A London-based care agency providing companionship, domiciliary support and respite care through a network of qualified carers.", city: "London", postcode: "N1 9GU", rating: 4.9, reviewCount: 198, teamSize: 41, verified: true, kyc: "verified", servicesOffered: 9, providersReferred: 33, customersReferred: 87, memberSince: "2023-08-14", referralCode: "CAREFIRST" },
  { id: "a3", userId: "u15", name: "TutorBridge", avatar: "TutorBridge", tagline: "Online tutoring agency — all subjects, all levels", bio: "TutorBridge matches students with vetted online tutors and manages scheduling, payments and progress reporting for parents.", city: "Leeds", postcode: "LS1 4DY", rating: 4.7, reviewCount: 156, teamSize: 62, verified: true, kyc: "verified", servicesOffered: 18, providersReferred: 71, customersReferred: 204, memberSince: "2023-10-02", referralCode: "BRIDGE10" },
];

// ============================================================================
// SERVICES
// ============================================================================

export const services: Service[] = [
  {
    id: "s1", title: "Sparkling deep clean for homes & flats", slug: "deep-clean-homes-flats", categorySlug: "cleaning", providerId: "p2", providerType: "individual",
    description: "A thorough top-to-bottom clean of your home using eco-friendly products. Ideal for spring cleans, post-renovation tidy-ups or simply resetting your space. I focus on kitchens, bathrooms and high-touch areas, leaving everything fresh and spotless.",
    mode: "in-person", location: "London", coverage: ["SW1", "SW3", "SW7", "W1"], hourlyRate: 22, fixedRate: 120, minHours: 3, responseTime: "within 2 hours",
    included: ["All cleaning supplies", "Kitchen & bathroom deep clean", "Dusting & vacuuming", "Bin emptying"],
    addons: [{ id: "ad1", label: "Inside oven clean", price: 25 }, { id: "ad2", label: "Interior windows", price: 18 }, { id: "ad3", label: "Ironing (per hour)", price: 15 }],
    rating: 4.8, reviewCount: 243, ordersCompleted: 530, verified: true, images: ["clean-1", "clean-2", "clean-3"], featured: true, availability: ["Mon", "Tue", "Wed", "Thu", "Fri"],
  },
  {
    id: "s2", title: "Flat-pack & furniture assembly", slug: "furniture-assembly", categorySlug: "furniture-assembly", providerId: "p1", providerType: "individual",
    description: "Fast, careful assembly of flat-pack furniture — wardrobes, beds, desks, shelving and more. I bring all my own tools and clear up the packaging afterwards. No job too fiddly.",
    mode: "in-person", location: "Manchester", coverage: ["M1", "M2", "M3", "M14"], hourlyRate: 28, fixedRate: 45, minHours: 1, responseTime: "within 1 hour",
    included: ["All tools provided", "Packaging removal", "Levelling & wall-fixing", "Tidy finish"],
    addons: [{ id: "ad4", label: "Wall anchoring", price: 12 }, { id: "ad5", label: "Old furniture disposal", price: 30 }],
    rating: 4.9, reviewCount: 187, ordersCompleted: 412, verified: true, images: ["furniture-1", "furniture-2"], featured: true, availability: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  },
  {
    id: "s3", title: "GCSE & A-Level Maths tuition (online)", slug: "maths-tuition-online", categorySlug: "maths-tutoring", providerId: "p3", providerType: "individual",
    description: "One-to-one online maths tuition tailored to your exam board. We work through past papers, build problem-solving confidence and target the grades you need. Cambridge graduate and qualified teacher.",
    mode: "online", location: "Online", coverage: ["Online"], hourlyRate: 38, minHours: 1, responseTime: "within 3 hours",
    included: ["Tailored lesson plan", "Past-paper practice", "Homework feedback", "Progress reports"],
    addons: [{ id: "ad6", label: "Extra revision pack", price: 20 }, { id: "ad7", label: "Mock exam marking", price: 25 }],
    rating: 5.0, reviewCount: 96, ordersCompleted: 188, verified: true, images: ["maths-1", "maths-2"], featured: true, availability: ["Mon", "Wed", "Thu", "Sat", "Sun"],
  },
  {
    id: "s4", title: "Companionship & elderly support visits", slug: "elderly-support-visits", categorySlug: "elderly-support", providerId: "p4", providerType: "individual",
    description: "Warm, patient companionship and practical support for older adults — conversation, light errands, meal prep and medication reminders. Tailored to each person's routine and dignity.",
    mode: "in-person", location: "Leeds", coverage: ["LS1", "LS2", "LS6"], hourlyRate: 20, minHours: 2, responseTime: "within 4 hours",
    included: ["Companionship & conversation", "Light meal preparation", "Errands & shopping", "Medication reminders"],
    addons: [{ id: "ad8", label: "Accompanied appointment", price: 15 }],
    rating: 4.9, reviewCount: 71, ordersCompleted: 154, verified: true, images: ["care-1", "care-2"], featured: false, availability: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  {
    id: "s5", title: "Garden maintenance & lawn care", slug: "garden-maintenance", categorySlug: "gardening", providerId: "p5", providerType: "individual",
    description: "Keep your garden looking its best — mowing, weeding, hedge trimming and seasonal tidy-ups. Reliable visits with all waste cleared away.",
    mode: "in-person", location: "Coventry", coverage: ["CV1", "CV2", "CV3"], hourlyRate: 24, fixedRate: 60, minHours: 2, responseTime: "within 6 hours",
    included: ["Lawn mowing", "Weeding", "Hedge trimming", "Green-waste removal"],
    addons: [{ id: "ad9", label: "Pressure-wash patio", price: 35 }, { id: "ad10", label: "Planting (per tray)", price: 10 }],
    rating: 4.7, reviewCount: 58, ordersCompleted: 121, verified: true, images: ["garden-1", "garden-2"], featured: false, availability: ["Tue", "Wed", "Thu", "Fri", "Sat"],
  },
  {
    id: "s6", title: "Mobile hair styling & blow-dry", slug: "mobile-hair-styling", categorySlug: "beauty-grooming", providerId: "p6", providerType: "individual",
    description: "Salon-quality hair styling in the comfort of your home. Cuts, colours, blow-dries and special-occasion styling across Liverpool.",
    mode: "in-person", location: "Liverpool", coverage: ["L1", "L2", "L3", "L8"], hourlyRate: 35, fixedRate: 40, minHours: 1, responseTime: "within 2 hours",
    included: ["Consultation", "Wash & blow-dry", "Styling", "Premium products"],
    addons: [{ id: "ad11", label: "Full colour", price: 45 }, { id: "ad12", label: "Updo / occasion style", price: 30 }],
    rating: 4.8, reviewCount: 133, ordersCompleted: 289, verified: true, images: ["beauty-1", "beauty-2"], featured: true, availability: ["Mon", "Tue", "Thu", "Fri", "Sat"],
  },
  {
    id: "s7", title: "Certified electrical repairs & installs", slug: "electrical-repairs", categorySlug: "electrical-repairs", providerId: "p7", providerType: "individual",
    description: "NICEIC-registered electrician for safe, guaranteed work — sockets, lighting, fuse boards and fault-finding across Edinburgh.",
    mode: "in-person", location: "Edinburgh", coverage: ["EH1", "EH2", "EH3"], hourlyRate: 45, fixedRate: 80, minHours: 1, responseTime: "within 1 hour",
    included: ["Fault diagnosis", "Certified work", "Safety check", "Workmanship guarantee"],
    addons: [{ id: "ad13", label: "EICR safety certificate", price: 120 }],
    rating: 4.9, reviewCount: 84, ordersCompleted: 176, verified: true, images: ["electric-1", "electric-2"], featured: false, availability: ["Mon", "Tue", "Wed", "Thu", "Fri"],
  },
  {
    id: "s8", title: "Italian & Spanish lessons (online)", slug: "italian-spanish-lessons", categorySlug: "language-tutoring", providerId: "p8", providerType: "individual",
    description: "Learn Italian or Spanish with a native-speaking, certified teacher. Conversational fluency or exam preparation — lessons designed around you.",
    mode: "online", location: "Online", coverage: ["Online"], hourlyRate: 30, minHours: 1, responseTime: "within 5 hours",
    included: ["Personalised curriculum", "Conversation practice", "Grammar resources", "Homework review"],
    addons: [{ id: "ad14", label: "Exam preparation pack", price: 22 }],
    rating: 4.9, reviewCount: 52, ordersCompleted: 108, verified: true, images: ["lang-1", "lang-2"], featured: false, availability: ["Mon", "Tue", "Wed", "Thu"],
  },
  {
    id: "s9", title: "Remote virtual assistant & admin support", slug: "virtual-assistant", categorySlug: "virtual-assistance", providerId: "p9", providerType: "individual",
    description: "Reliable remote VA support for small businesses and busy professionals — inbox triage, calendar management, data entry and document prep.",
    mode: "online", location: "Online", coverage: ["Online"], hourlyRate: 26, minHours: 2, responseTime: "within 3 hours",
    included: ["Inbox management", "Calendar scheduling", "Data entry", "Weekly summary"],
    addons: [{ id: "ad15", label: "CRM tidy-up", price: 40 }],
    rating: 4.8, reviewCount: 64, ordersCompleted: 142, verified: true, images: ["va-1", "va-2"], featured: false, availability: ["Mon", "Tue", "Wed", "Thu", "Fri"],
  },
  {
    id: "s10", title: "Dog walking & feeding visits", slug: "dog-walking", categorySlug: "pet-care", providerId: "p10", providerType: "individual",
    description: "Energetic dog walks and drop-in feeding visits across Glasgow's west end. Insured, reliable and your pet's new best friend.",
    mode: "in-person", location: "Glasgow", coverage: ["G1", "G3", "G12"], hourlyRate: 18, fixedRate: 15, minHours: 1, responseTime: "within 4 hours",
    included: ["30–60 min walk", "Fresh water top-up", "Photo update", "Lots of fuss"],
    addons: [{ id: "ad16", label: "Extra dog", price: 8 }, { id: "ad17", label: "Solo walk", price: 6 }],
    rating: 4.7, reviewCount: 41, ordersCompleted: 97, verified: false, images: ["pet-1", "pet-2"], featured: false, availability: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  {
    id: "s11", title: "End of tenancy cleaning", slug: "end-of-tenancy-clean", categorySlug: "cleaning", providerId: "p2", providerType: "individual",
    description: "Deposit-back end of tenancy cleaning to agency standards. Every cupboard, appliance and skirting board, ready for inspection.",
    mode: "in-person", location: "London", coverage: ["SW1", "SW3", "SW7", "W1"], hourlyRate: 25, fixedRate: 180, minHours: 4, responseTime: "within 2 hours",
    included: ["Full property clean", "Inside appliances", "Limescale removal", "Inspection-ready finish"],
    addons: [{ id: "ad18", label: "Carpet shampoo", price: 40 }],
    rating: 4.8, reviewCount: 92, ordersCompleted: 161, verified: true, images: ["clean-4", "clean-5"], featured: false, availability: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  },
  {
    id: "s12", title: "Handyman — odd jobs & repairs", slug: "handyman-odd-jobs", categorySlug: "handyman", providerId: "p1", providerType: "individual",
    description: "Your go-to for the jobs on the list — shelves, curtain rails, leaky taps, door fixes and more. One visit, lots ticked off.",
    mode: "in-person", location: "Manchester", coverage: ["M1", "M2", "M3", "M14"], hourlyRate: 30, minHours: 1, responseTime: "within 1 hour",
    included: ["All tools provided", "Multiple jobs per visit", "Tidy finish", "Honest pricing"],
    addons: [{ id: "ad19", label: "Materials sourcing", price: 0 }],
    rating: 4.9, reviewCount: 64, ordersCompleted: 133, verified: true, images: ["handy-1", "handy-2"], featured: true, availability: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  },
];

// ============================================================================
// ORDERS
// ============================================================================

export const orders: Order[] = [
  { id: "o1", reference: "SVN-10241", serviceId: "s1", serviceTitle: "Sparkling deep clean for homes & flats", customerId: "u1", customerName: "Olivia Bennett", providerId: "p2", providerName: "Sophie Clarke", status: "completed", rateType: "fixed", hours: 4, baseAmount: 120, addonsAmount: 25, walletApplied: 10, total: 135, date: "2025-05-18", time: "10:00", address: "12 Eaton Square", postcode: "SW1A 1AA", mode: "in-person", instructions: "Please focus on the kitchen and bathrooms. Key under the mat.", createdAt: "2025-05-12" },
  { id: "o2", reference: "SVN-10242", serviceId: "s2", serviceTitle: "Flat-pack & furniture assembly", customerId: "u1", customerName: "Olivia Bennett", providerId: "p1", providerName: "James Okafor", status: "in-progress", rateType: "hourly", hours: 3, baseAmount: 84, addonsAmount: 12, walletApplied: 0, total: 96, date: "2025-06-04", time: "14:00", address: "12 Eaton Square", postcode: "SW1A 1AA", mode: "in-person", instructions: "Two wardrobes and a desk to build.", createdAt: "2025-05-30" },
  { id: "o3", reference: "SVN-10243", serviceId: "s3", serviceTitle: "GCSE & A-Level Maths tuition (online)", customerId: "u1", customerName: "Olivia Bennett", providerId: "p3", providerName: "Daniel Wright", status: "accepted", rateType: "hourly", hours: 1, baseAmount: 38, addonsAmount: 0, walletApplied: 5, total: 33, date: "2025-06-06", time: "17:30", address: "Online", postcode: "Online", mode: "online", instructions: "Focus on calculus revision before the exam.", createdAt: "2025-06-01" },
  { id: "o4", reference: "SVN-10244", serviceId: "s5", serviceTitle: "Garden maintenance & lawn care", customerId: "u16", customerName: "Robert Hughes", providerId: "p5", providerName: "Marek Nowak", status: "pending", rateType: "fixed", hours: 2, baseAmount: 60, addonsAmount: 35, walletApplied: 0, total: 95, date: "2025-06-08", time: "09:00", address: "4 Spon Street", postcode: "CV1 3BB", mode: "in-person", instructions: "Front and back lawn, plus patio pressure-wash.", createdAt: "2025-06-01" },
  { id: "o5", reference: "SVN-10245", serviceId: "s12", serviceTitle: "Handyman — odd jobs & repairs", customerId: "u17", customerName: "Emma Davies", providerId: "p1", providerName: "James Okafor", status: "completed", rateType: "hourly", hours: 2, baseAmount: 60, addonsAmount: 0, walletApplied: 0, total: 60, date: "2025-05-22", time: "11:00", address: "88 Deansgate", postcode: "M3 2ER", mode: "in-person", instructions: "Hang three pictures and fix a wobbly shelf.", createdAt: "2025-05-19" },
  { id: "o6", reference: "SVN-10246", serviceId: "s4", serviceTitle: "Companionship & elderly support visits", customerId: "u18", customerName: "Margaret Lewis", providerId: "p4", providerName: "Aisha Khan", agencyId: "a2", status: "in-progress", rateType: "hourly", hours: 3, baseAmount: 60, addonsAmount: 15, walletApplied: 0, total: 75, date: "2025-06-03", time: "13:00", address: "21 Headingley Lane", postcode: "LS6 2AS", mode: "in-person", instructions: "Mum enjoys a walk if weather allows.", createdAt: "2025-05-28" },
  { id: "o7", reference: "SVN-10247", serviceId: "s6", serviceTitle: "Mobile hair styling & blow-dry", customerId: "u19", customerName: "Chloe Roberts", providerId: "p6", providerName: "Grace Mensah", status: "cancelled", rateType: "fixed", hours: 1, baseAmount: 40, addonsAmount: 30, walletApplied: 0, total: 70, date: "2025-05-25", time: "16:00", address: "5 Bold Street", postcode: "L1 4DS", mode: "in-person", instructions: "Occasion updo for a wedding.", createdAt: "2025-05-20" },
  { id: "o8", reference: "SVN-10248", serviceId: "s9", serviceTitle: "Remote virtual assistant & admin support", customerId: "u20", customerName: "Bright Home Agency", providerId: "p9", providerName: "Priya Sharma", agencyId: "a1", status: "completed", rateType: "hourly", hours: 5, baseAmount: 130, addonsAmount: 40, walletApplied: 0, total: 170, date: "2025-05-15", time: "09:00", address: "Online", postcode: "Online", mode: "online", instructions: "Weekly inbox triage and CRM tidy-up.", createdAt: "2025-05-10" },
];

// ============================================================================
// REVIEWS
// ============================================================================

export const reviews: Review[] = [
  { id: "r1", orderId: "o1", serviceId: "s1", providerId: "p2", authorName: "Olivia Bennett", authorAvatar: "Olivia Bennett", rating: 5, comment: "Sophie was fantastic — my flat has never looked so good. Punctual, thorough and lovely to deal with.", date: "2025-05-19", response: "Thank you so much Olivia, it was a pleasure!" },
  { id: "r2", orderId: "o5", serviceId: "s12", providerId: "p1", authorName: "Emma Davies", authorAvatar: "Emma Davies", rating: 5, comment: "James fixed everything on my list in under two hours. Tidy, friendly and great value.", date: "2025-05-23" },
  { id: "r3", orderId: "o8", serviceId: "s9", providerId: "p9", authorName: "Bright Home Agency", authorAvatar: "Bright Home", rating: 4, comment: "Priya is organised and reliable. Quick to get up to speed with our systems.", date: "2025-05-16" },
  { id: "r4", orderId: "o3", serviceId: "s3", providerId: "p3", authorName: "Parent of student", authorAvatar: "Helen Carter", rating: 5, comment: "Daniel turned my son's maths grade around in a term. Highly recommend.", date: "2025-04-30", response: "Delighted to hear it — he worked really hard!" },
  { id: "r5", orderId: "o6", serviceId: "s4", providerId: "p4", authorName: "Margaret Lewis", authorAvatar: "Margaret Lewis", rating: 5, comment: "Aisha is so kind and patient with my mother. We're very grateful.", date: "2025-05-29" },
  { id: "r6", orderId: "o2", serviceId: "s2", providerId: "p1", authorName: "David Thompson", authorAvatar: "David Thompson", rating: 5, comment: "Built a complicated wardrobe perfectly and cleared all the boxes. Brilliant.", date: "2025-05-02" },
];

// ============================================================================
// REFERRALS  (for agency a1 — Bright Home)
// ============================================================================

export const referrals: Referral[] = [
  { id: "ref1", agencyId: "a1", type: "provider", name: "Marek Nowak", email: "marek@example.co.uk", status: "converted", invitedAt: "2024-03-10", convertedAt: "2024-04-09", commissionEarned: 25 },
  { id: "ref2", agencyId: "a1", type: "provider", name: "Connor Walsh", email: "connor@example.co.uk", status: "converted", invitedAt: "2024-05-01", convertedAt: "2024-05-19", commissionEarned: 25 },
  { id: "ref3", agencyId: "a1", type: "customer", name: "Robert Hughes", email: "robert@example.co.uk", status: "converted", invitedAt: "2025-05-20", convertedAt: "2025-06-01", commissionEarned: 9.5 },
  { id: "ref4", agencyId: "a1", type: "customer", name: "Emma Davies", email: "emma@example.co.uk", status: "converted", invitedAt: "2025-05-15", convertedAt: "2025-05-22", commissionEarned: 6 },
  { id: "ref5", agencyId: "a1", type: "provider", name: "Hannah Price", email: "hannah@example.co.uk", status: "signed-up", invitedAt: "2025-05-25" , commissionEarned: 0 },
  { id: "ref6", agencyId: "a1", type: "customer", name: "Lewis Carter", email: "lewis@example.co.uk", status: "invited", invitedAt: "2025-05-30", commissionEarned: 0 },
];

// ============================================================================
// COMMISSIONS  (for agency a1)
// ============================================================================

export const commissions: Commission[] = [
  { id: "cm1", agencyId: "a1", source: "onboarding", description: "Provider onboarding — Marek Nowak", amount: 25, status: "paid", date: "2024-04-09" },
  { id: "cm2", agencyId: "a1", source: "onboarding", description: "Provider onboarding — Connor Walsh", amount: 25, status: "paid", date: "2024-05-19" },
  { id: "cm3", agencyId: "a1", source: "transaction", description: "Commission on order SVN-10244", orderRef: "SVN-10244", amount: 9.5, status: "available", date: "2025-06-01" },
  { id: "cm4", agencyId: "a1", source: "transaction", description: "Commission on order SVN-10245", orderRef: "SVN-10245", amount: 6, status: "available", date: "2025-05-22" },
  { id: "cm5", agencyId: "a1", source: "transaction", description: "Commission on order SVN-10248", orderRef: "SVN-10248", amount: 17, status: "pending", date: "2025-05-15" },
];

// ============================================================================
// PAYOUTS  (for agency a1)
// ============================================================================

export const payouts: Payout[] = [
  { id: "py1", agencyId: "a1", amount: 50, method: "Bank transfer", status: "paid", requestedAt: "2024-06-01", paidAt: "2024-06-03" },
  { id: "py2", agencyId: "a1", amount: 15.5, method: "Bank transfer", status: "processing", requestedAt: "2025-06-01" },
];

// ============================================================================
// WALLET TRANSACTIONS  (for customer u1)
// ============================================================================

export const walletTransactions: WalletTransaction[] = [
  { id: "wt1", userId: "u1", type: "topup", description: "Top-up via Visa •••• 4242", amount: 50, balanceAfter: 50, date: "2025-05-01" },
  { id: "wt2", userId: "u1", type: "spend", description: "Applied to order SVN-10241", amount: -10, balanceAfter: 40, date: "2025-05-18" },
  { id: "wt3", userId: "u1", type: "reward", description: "Review reward bonus", amount: 5, balanceAfter: 45, date: "2025-05-19" },
  { id: "wt4", userId: "u1", type: "spend", description: "Applied to order SVN-10243", amount: -5, balanceAfter: 40, date: "2025-06-01" },
  { id: "wt5", userId: "u1", type: "topup", description: "Top-up via Visa •••• 4242", amount: 20, balanceAfter: 60, date: "2025-06-02" },
];

export const walletBalance = 60;

// ============================================================================
// MESSAGES & THREADS
// ============================================================================

export const threads: Thread[] = [
  { id: "t1", participantName: "Sophie Clarke", participantAvatar: "Sophie Clarke", lastMessage: "Perfect, see you Tuesday at 10!", unreadCount: 0, updatedAt: "2025-06-01T09:24:00Z" },
  { id: "t2", participantName: "James Okafor", participantAvatar: "James Okafor", lastMessage: "I can bring an extra anchor kit if needed.", unreadCount: 2, updatedAt: "2025-06-02T08:10:00Z" },
  { id: "t3", participantName: "Daniel Wright", participantAvatar: "Daniel Wright", lastMessage: "I've shared the revision pack for Friday.", unreadCount: 1, updatedAt: "2025-06-01T18:40:00Z" },
];

export const messages: Message[] = [
  { id: "m1", threadId: "t2", fromName: "James Okafor", fromAvatar: "James Okafor", preview: "Hi Olivia, confirming for Wednesday 2pm.", body: "Hi Olivia, confirming I'll be there Wednesday at 2pm for the two wardrobes and desk. I can bring an extra anchor kit if needed.", unread: true, date: "2025-06-02T08:10:00Z" },
  { id: "m2", threadId: "t2", fromName: "Olivia Bennett", fromAvatar: "Olivia Bennett", preview: "Great, thank you!", body: "Great, thank you! The boxes are in the spare room.", unread: false, date: "2025-06-02T08:18:00Z" },
  { id: "m3", threadId: "t1", fromName: "Sophie Clarke", fromAvatar: "Sophie Clarke", preview: "Perfect, see you Tuesday at 10!", body: "Perfect, see you Tuesday at 10! I'll bring everything I need.", unread: false, date: "2025-06-01T09:24:00Z" },
  { id: "m4", threadId: "t3", fromName: "Daniel Wright", fromAvatar: "Daniel Wright", preview: "I've shared the revision pack for Friday.", body: "I've shared the revision pack for Friday's session — have a look before we meet.", unread: true, date: "2025-06-01T18:40:00Z" },
];

// ============================================================================
// LOOKUP HELPERS
// ============================================================================

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
export const getService = (id: string) => services.find((s) => s.id === id);
export const getProvider = (id: string) => providers.find((p) => p.id === id);
export const getAgency = (id: string) => agencies.find((a) => a.id === id);
export const getOrder = (id: string) => orders.find((o) => o.id === id);

export const getServicesByCategory = (slug: string) =>
  services.filter((s) => s.categorySlug === slug);

export const getServicesByProvider = (providerId: string) =>
  services.filter((s) => s.providerId === providerId);

export const getReviewsByProvider = (providerId: string) =>
  reviews.filter((r) => r.providerId === providerId);

export const getReviewsByService = (serviceId: string) =>
  reviews.filter((r) => r.serviceId === serviceId);

export const getOrdersByCustomer = (customerId: string) =>
  orders.filter((o) => o.customerId === customerId);

export const getOrdersByProvider = (providerId: string) =>
  orders.filter((o) => o.providerId === providerId);

export const getOrdersByAgency = (agencyId: string) =>
  orders.filter((o) => o.agencyId === agencyId);

export const getReferralsByAgency = (agencyId: string) =>
  referrals.filter((r) => r.agencyId === agencyId);

export const getCommissionsByAgency = (agencyId: string) =>
  commissions.filter((c) => c.agencyId === agencyId);

export const featuredServices = services.filter((s) => s.featured);
