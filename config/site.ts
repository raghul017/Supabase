import {
  Database,
  Lock,
  Zap,
  FileText,
  Box,
  Code,
  Boxes,
  Workflow,
  Shield,
} from "lucide-react";
import { Feature, Integration } from "@/types";

export const siteConfig = {
  name: "Supabase",
  description: "The Open Source Firebase Alternative",
  links: {
    github: "https://github.com/supabase/supabase",
    docs: "https://supabase.com/docs",
    dashboard: "https://app.supabase.com",
  },
};

export const features: Feature[] = [
  {
    title: "Postgres Database",
    description:
      "Every project is a full Postgres database, the world's most trusted relational database.",
    icon: Database,
    image: "DatabasePreview",
    points: ["100% portable", "Built-in Auth with RLS", "Easy to extend"],
  },
  // ... other features
];

export const integrations: Integration[] = [
  {
    name: "Next.js",
    logo: "/logos/nextjs.svg",
    href: "/docs/guides/nextjs",
  },
  // ... other integrations
];
