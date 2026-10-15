/**
 * ─────────────────────────────────────────────────────────────────────────────
 * CONTENT — all page copy lives here. Edit text, reorder arrays, delete items.
 * Facts here come from Thirukkumaran's resume; nothing is invented beyond
 * items explicitly marked TODO.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { site } from "./site.config";

export const intro = {
  headline: "Developer & Builder.",
  subheadline: "Curious about how things work, and what makes a product worth building.",
  paragraphs: [
    "I build things for the web and for phones. Right now that's KROW, a workforce staffing platform at Nearle Technologies, across two Flutter apps and a React dashboard.",
    "I like owning a feature the whole way through, from the interface to the API to the device it runs on. Before KROW I built a logistics platform and the rider app that runs alongside it, and before that, GenAI products at Fuzionest.",
    "On my own time I'm building Scrolla, an AI video ad generator. I'm still learning, and that's the part I enjoy most.",
  ],
  /** Small scannable line under the intro. Keep it short and factual. */
  facts: [
    "Building software professionally since 2024",
    "React, Next.js, Flutter, Node.js, AWS",
    "Coimbatore, India",
  ],
  cta: "Say hello",
};

/** A product worked on inside a role, shown as a one-line rail under the company. */
export type RailItem = {
  name: string;
  role: string;
  /** Optional, e.g. "Current". */
  period?: string;
  /** Optional product logo in /public/images. */
  logo?: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  /** Optional logo file in /public/images. Falls back to a text monogram. */
  logo?: string;
  monogram: string;
  /** Products inside this role, newest first. */
  rail?: RailItem[];
};

export const experience: Experience[] = [
  {
    company: "Nearle Technologies",
    role: "Full Stack Developer",
    period: "May 2025 – Present",
    logo: "/images/logo-nearle.png",
    location: "Coimbatore",
    rail: [
      {
        name: "KROW",
        role: "Frontend & mobile",
        period: "Current",
        logo: "/images/krow.png",
      },
      { name: "Doormile", role: "Frontend & mobile", logo: "/images/doormile.png" },
      { name: "FriendBuy", role: "Full-stack", logo: "/images/friendbuy.png" },
    ],
    monogram: "N",
  },
  {
    company: "Fuzionest",
    role: "Full Stack Developer Intern, GenAI",
    period: "Jan 2024 – Mar 2025",
    logo: "/images/logo-fuzionest.png",
    location: "Coimbatore",
    monogram: "F",
  },
  /**
   * Two roles from your earlier notes are NOT on your resume, so I left them off
   * the page. Uncomment either one to bring it back.
   *
   * Note: Sutherland (May 2024 – Feb 2025) overlaps Fuzionest (Jan 2024 – Mar 2025),
   * so showing both will raise questions. Adjust the dates if you add it back.
   *
   * { company: "Sutherland", role: "Customer Support Associate", period: "May 2024 – Feb 2025", monogram: "S" },
   * { company: "Webilicious", role: "Frontend Development Apprentice", period: "4 months", monogram: "W" },
   */
];

export type Education = {
  school: string;
  degree: string;
  period: string;
  detail?: string;
  /** Optional logo file in /public/images. Falls back to the text monogram. */
  logo?: string;
  monogram: string;
};

export const education: Education[] = [
  {
    school: "K.P.R. Institute of Engineering and Technology",
    degree: "B.E. Electronics and Communication Engineering",
    period: "2020 – 2024",
    detail: "CGPA 7.7",
    logo: "/images/logo-kpriet.webp",
    monogram: "K",
  },
];

export type Project = {
  name: string;
  category: string;
  /** Short, honest status — rendered as a small label, never as a launch claim. */
  status: string;
  description: string;
  /** Two to four concrete things you built. This is what a recruiter actually reads. */
  highlights?: string[];
  role: string;
  stack: string;
  image: string;
  /** Leave "" to hide the link entirely. */
  href: string;
  linkLabel?: string;
  /** Marks the preview as a placeholder frame rather than a real screenshot. */
  imageIsPlaceholder: boolean;
};

export const projects: Project[] = [
  {
    name: "KROW",
    category: "Workforce staffing platform",
    status: "In production at Nearle Technologies",
    description:
      "A workforce staffing platform: clients book shifts, vendors supply workers, and workers clock in by NFC or geofence and get paid. Two Flutter apps, a React dashboard, a Node and PostgreSQL backend.",
    highlights: [
      "Features across both Flutter apps and the React dashboard.",
      "End-to-end smoke test suite in Appium and WebdriverIO: 20 automated cases covering onboarding, shift assignment, clock-in and booking.",
      "Production defect fixes found in real user sessions.",
    ],
    role: "Frontend and mobile development",
    stack: "Flutter, React, Node.js, PostgreSQL, Google Cloud, Appium, WebdriverIO",
    image: "/images/project-krow.svg",
    href: "",
    imageIsPlaceholder: true,
  },
  {
    name: "Doormile",
    category: "Logistics operations platform",
    status: "In production at Nearle Technologies",
    description:
      "The operations platform behind a multi-stop delivery network: hubs, riders and parcels across first, mid and last mile, with live tracking on the map.",
    highlights: [
      "Hub, rider and parcel management with order to rider assignment.",
      "Live tracking: map visualisation, animated routes, Redis GEO location handling.",
      "Rider KPI, delivery and COD dashboards, and a redesign of the admin UI.",
    ],
    role: "Frontend and mobile development; led a redesign of the admin dashboard UI",
    stack: "React, Material UI, Node.js, REST APIs, Redis GEO, live location APIs",
    image: "/images/project-doormile.svg",
    href: "", // internal product — no public link
    imageIsPlaceholder: true,
  },
  {
    name: "Miler App",
    category: "Rider mobile app",
    status: "In production at Nearle Technologies",
    description:
      "The rider app that goes with Doormile, built end to end in Flutter. Riders accept orders, follow an optimised multi-stop route, and swipe to confirm each pickup and drop.",
    highlights: [
      "Multi-order management grouped by pickup location, with an optimised route across stops.",
      "Live map with GPS tracking and swipe-to-arrived confirmation.",
      "Offline, loading and error states, debugged on real devices over ADB.",
    ],
    role: "Built the app end to end",
    stack: "Flutter, Dart, GetX, REST APIs, local storage, ADB device debugging",
    image: "/images/project-miler.svg",
    href: "",
    imageIsPlaceholder: true,
  },
  {
    name: "Scrolla",
    category: "AI video ad generator",
    status: "Building it independently",
    description:
      "An AI kinetic typography video ad generator I'm building on my own, from the product and UI down to the generation pipeline.",
    highlights: [
      "Three-stage AI pipeline that turns a script into a finished animated ad.",
      "Beat-sync engine that times typography to the audio.",
      "Remotion system with twenty animation types, driven by AI-generated JSON.",
    ],
    role: "Product, architecture and AI pipeline design, end to end",
    stack: "Next.js, TypeScript, Remotion, Groq API, LLM pipelines",
    image: "/images/project-scrolla.svg",
    href: site.links.scrolla,
    linkLabel: "scrolla.in",
    imageIsPlaceholder: true,
  },
  {
    name: "AI Trip Planner",
    category: "AI product interface",
    status: "Client work at Fuzionest",
    description:
      "An AI trip planner for RSL, a Dubai-based client. I built the conversational flows and the client-facing interface.",
    highlights: [
      "Conversational planning flows built on LLM integration.",
      "Pixel-perfect client-facing UI, delivered to a live client.",
    ],
    role: "Conversational flows and frontend UI",
    stack: "Next.js, LLM integration, RAG",
    image: "/images/project-trip-planner.svg",
    href: "",
    imageIsPlaceholder: true,
  },
  {
    name: "Ponkali Masalas",
    category: "E-commerce · family business",
    status: "Live",
    description:
      "A premium spices brand rooted in our family's turmeric farming in Erode, carried into a modern direct-to-consumer storefront.",
    role: "Brand identity, storefront experience and product presentation",
    stack: "E-commerce storefront, product presentation, web",
    image: "/images/project-ponkali.svg",
    href: site.links.ponkali,
    linkLabel: "ponkali.in",
    imageIsPlaceholder: true, // TODO: drop in a real screenshot of ponkali.in, then set false
  },
];

/** Smaller pieces of work, shown as compact rows under Selected work. */
export const moreWork = [
  {
    name: "FriendBuy",
    logo: "/images/friendbuy.png",
    description:
      "Referral, loyalty and rewards workflows, plus the campaign and analytics dashboard UI, on a serverless backend.",
    stack: "React, TypeScript, Grommet, Node.js, AWS Lambda, DynamoDB, S3",
    context: "Nearle Technologies",
  },
  {
    name: "GenAI support chatbots",
    description:
      "Chatbots that crawl a client's website and answer from it, using RAG knowledge-base search and LLM tool calling.",
    stack: "Next.js, AI SDK, RAG, embeddings",
    context: "Fuzionest",
  },
  {
    name: "Diary App",
    description:
      "A privacy-conscious diary app concept for writing down daily thoughts and revisiting them later. It is built around four spaces: Today, Memories, Your Mind and Profile.",
    stack: "Flutter, Dart",
    context: "Personal experiment",
  },
];

export const exploring = {
  intro:
    "I enjoy learning by building. Some experiments are practical, some are just ideas I want to explore, and some teach me what not to build.",
  items: [
    {
      title: "AI pipelines and agentic workflows",
      description:
        "Multi-stage generation pipelines, RAG, tool calling and prompt design. The hard part is getting useful, repeatable output instead of one good demo.",
      icon: "/images/icon-ai.svg",
      tag: "Ongoing",
    },
    {
      title: "Programmatic video",
      description:
        "Generating video from code with Remotion. Animation systems, beat sync, and making text that actually feels designed.",
      icon: "/images/icon-craft.svg",
      tag: "Experiment",
    },
    {
      title: "Independent products",
      description:
        "Taking Scrolla from an idea to something people would pay for, and learning the parts of a business that aren't code.",
      icon: "/images/icon-product.svg",
      tag: "Building",
    },
    {
      title: "Product design and frontend craft",
      description:
        "How small decisions in layout, typography, interaction and content make a product easier to use.",
      icon: "/images/icon-mobile.svg",
      tag: "Learning",
    },
  ],
};

export const beyond = {
  intro:
    "I spend a lot of time thinking about what I could build next. I also like exploring ideas well outside the boundaries of my day-to-day work.",
  interests: [
    "Exploring AI and new technology",
    "Reading about product design and entrepreneurship",
    "Discovering new places and environments",
    "Building side projects and testing ideas",
  ],
  /** Optional editorial photo grid. Empty the array to remove the grid entirely. */
  photos: [
    { src: "/images/beyond-1.svg", alt: "Placeholder image to replace with your own photo", caption: "" },
    { src: "/images/beyond-2.svg", alt: "Placeholder image to replace with your own photo", caption: "" },
    { src: "/images/beyond-3.svg", alt: "Placeholder image to replace with your own photo", caption: "" },
  ],
};

export const principles = [
  "Build things people can actually use.",
  "Understand the problem before choosing the technology.",
  "Good design isn't decoration; it makes things easier to understand.",
  "Learn by building, not by collecting tutorials.",
  "Small improvements compound.",
  "Stay curious enough to change your mind.",
  "Be honest about what you know and what you're still learning.",
  "Make the simple things work exceptionally well.",
  "A useful product beats an impressive demo.",
  "Keep experimenting, even when the first idea doesn't work.",
];

export type StackGroup = {
  label: string;
  items: string[];
  /** Honest framing of depth — shown as a small note, not a percentage. */
  note: string;
};

export const stack: StackGroup[] = [
  {
    label: "Web frontend",
    items: ["React", "Next.js", "TypeScript", "Redux", "Tailwind CSS", "Material UI", "Grommet"],
    note: "Daily production work",
  },
  {
    label: "Mobile",
    items: ["Flutter", "Dart", "GetX", "Android (ADB, device debugging)"],
    note: "Shipped an app riders use on real deliveries",
  },
  {
    label: "Backend & APIs",
    items: ["Node.js", "Express.js", "REST APIs", "Live location APIs"],
    note: "Production work",
  },
  {
    label: "Cloud & serverless",
    items: ["AWS Lambda", "API Gateway", "S3", "Google Cloud", "Vercel"],
    note: "Shipped serverless APIs to production",
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MongoDB", "DynamoDB", "Redis (GEO)", "Supabase"],
    note: "Production and project work",
  },
  {
    label: "GenAI",
    items: [
      "OpenAI",
      "Gemini",
      "Groq",
      "RAG",
      "Tool and function calling",
      "Embeddings",
      "Prompt engineering",
    ],
    note: "Client products and my own AI pipeline",
  },
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "Dart", "HTML5", "CSS3", "Java"],
    note: "Java from coursework and certification, the rest daily",
  },
  {
    label: "Tools & testing",
    items: [
      "Appium",
      "WebdriverIO",
      "Jest",
      "React Testing Library",
      "Git",
      "GitHub",
      "Postman",
      "Figma",
      "Zod",
    ],
    note: "Built the mobile end-to-end suite with Appium and WebdriverIO",
  },
];

export const internet = [
  { label: "GitHub", href: site.links.github, handle: "iamthirukkumaran" },
  { label: "LinkedIn", href: site.links.linkedin, handle: "Work history and updates" },
  { label: "Email", href: site.email ? `mailto:${site.email}` : "", handle: site.email },
  { label: "Resume", href: site.resumeUrl, handle: "PDF" },
  { label: "Scrolla", href: site.links.scrolla, handle: "scrolla.in" },
  { label: "Ponkali", href: site.links.ponkali, handle: "ponkali.in" },
];

export const contact = {
  headline: "Have something interesting to build?",
  body: "I'm looking for full-stack roles where I can own features end to end and keep learning from people who are better than me. I'm equally happy talking about products, AI, or building things independently.",
};
