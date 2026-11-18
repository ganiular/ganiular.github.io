export type ProjectVisual = "laundry" | "gnData" | "kwari" | "standify";

export type PortfolioProject = {
  number: string;
  name: string;
  type: string;
  description: string;
  contribution: string;
  stack: string[];
  highlights: string[];
  links: { label: string; href: string }[];
  cover?: string;
  logo?: string;
  visual: ProjectVisual;
  glyph: string;
};

export const projects: PortfolioProject[] = [
  {
    number: "01",
    name: "MyLaundry",
    type: "LAUNDRY SERVICE MARKETPLACE",
    description:
      "A laundry-service marketplace connecting customers with vendors to discover services, place orders, and manage requests.",
    contribution: "Founder & developer",
    stack: ["Flutter", "Dart", "Firebase", "Paystack", "REST APIs"],
    highlights: [
      "Customer and vendor experiences",
      "Service discovery",
      "Order management",
      "Payments",
      "Push notifications",
    ],
    links: [
      { label: "Visit website", href: "https://mylaundry.live" },
      // { label: "Backend API", href: "https://my-laundry.up.railway.app" },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.gnid.mylaundry",
      },
    ],
    logo: "/projects/mylaundry/logo.png",
    cover: "/projects/mylaundry/cover.jpg",
    visual: "laundry",
    glyph: "M",
  },
  {
    number: "02",
    name: "GN Data",
    type: "VTU & DIGITAL UTILITIES",
    description:
      "A digital utility platform for airtime and data purchases, wallet funding, transaction tracking, and developer API access.",
    contribution:
      "Product development across mobile, backend, and administration tools",
    stack: ["Flutter", "FastAPI", "Python", "PostgreSQL", "Next.js"],
    highlights: [
      "Airtime and data",
      "Cable and electricity",
      "Wallet funding",
      "Virtual accounts",
      "Transaction history",
      "Developer API",
    ],
    links: [
      { label: "Visit website", href: "https://www.gndata.com.ng" },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.gnid.gndata",
      },
      { label: "API documentation", href: "https://api.gndata.com.ng" },
      {
        label: "Developer dashboard",
        href: "https://gndata.com.ng/api-dashboard",
      },
      { label: "API pricing", href: "https://api.gndata.com.ng/pricing" },
    ],
    logo: "/projects/gn-data/logo.png",
    cover: "/projects/gn-data/feature_graphic.png",
    visual: "gnData",
    glyph: "GN",
  },
  {
    number: "03",
    name: "Kwari E-Market",
    type: "E-COMMERCE MARKETPLACE",
    logo: "/projects/kwari/logo.png",
    description:
      "A digital marketplace designed to connect buyers and vendors in Kano, with vendor onboarding, business profiles, and product discovery.",
    contribution: "Role details available on request",
    stack: ["Flutter", "Python", "FastAPI", "PostgreSQL", "SQLAlchemy"],
    highlights: [
      "Buyer and vendor experiences",
      "Vendor onboarding",
      "Identity verification",
      "Business profiles",
    ],
    links: [],
    visual: "kwari",
    glyph: "K",
  },
  {
    number: "04",
    name: "Standify",
    type: "EXHIBITION MARKETPLACE",
    logo: "/projects/standify/logo.png",
    description:
      "A marketplace concept designed to connect exhibition organisers, exhibitors, and vendors and simplify stand discovery and booking.",
    contribution: "Role details available on request",
    stack: ["Next.js", "TypeScript", "MongoDB", "Mongoose", "Stripe Connect"],
    highlights: [
      "Exhibitor and vendor management",
      "Stand discovery",
      "Organiser tools",
      "Multilingual support",
    ],
    links: [],
    visual: "standify",
    glyph: "S",
  },
];

export const skillGroups = [
  {
    title: "Mobile",
    skills: ["Flutter", "Dart", "Firebase", "Provider", "BLoC", "Riverpod"],
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "CSS Modules",
      "Tailwind",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Python",
      "FastAPI",
      "Express.js",
      "REST APIs",
      "Authentication",
      "Payment integrations",
    ],
  },
  {
    title: "Data & tools",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Firestore",
      "Git",
      "Docker",
      "Railway",
      "Postman",
      "Figma",
      "VS Code",
      "Codemagic",
    ],
  },
];
