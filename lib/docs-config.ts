import {
  BookOpen,
  HardDrive,
  Server,
  Shield,
  Terminal,
  Waypoints,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type DocsItem = {
  title: string;
  href: string;
  icon?: LucideIcon;
  keywords?: string[];
  description?: string;
};

export type DocsSection = {
  title: string;
  items: DocsItem[];
};

export const docsConfig: DocsSection[] = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction",
        href: "/docs/introduction",
        icon: BookOpen,
        keywords: ["intro", "overview", "start", "binboi", "what is"],
        description: "What Binboi is, how it works, and why you'd use it.",
      },
      {
        title: "Quick Start",
        href: "/docs/quick_start",
        icon: Zap,
        keywords: ["quick", "start", "setup", "first tunnel", "3000", "expose"],
        description: "Get a public HTTPS URL in under two minutes.",
      },
      {
        title: "Installation",
        href: "/docs/installation",
        icon: HardDrive,
        keywords: ["install", "setup", "cli", "download", "npm", "brew", "homebrew"],
        description: "Install the Binboi CLI on macOS, Linux, or Windows.",
      },
    ],
  },
  {
    title: "Core",
    items: [
      {
        title: "Authentication",
        href: "/docs/authentication",
        icon: Shield,
        keywords: ["auth", "login", "token", "apikey", "oauth", "credentials"],
        description: "Log in, manage auth tokens, and configure access.",
      },
      {
        title: "CLI Reference",
        href: "/docs/cli",
        icon: Terminal,
        keywords: ["cli", "commands", "reference", "flags", "options"],
        description: "Complete Binboi CLI command and flag reference.",
      },
      {
        title: "HTTP Tunnels",
        href: "/docs/http_tunnels",
        icon: Waypoints,
        keywords: ["http", "tunnel", "forwarding", "port", "subdomain", "routing"],
        description: "Expose local HTTP services with automatic HTTPS.",
      },
      {
        title: "API",
        href: "/docs/api",
        icon: Server,
        keywords: ["api", "rest", "endpoints", "automation", "control plane"],
        description: "Automate workspace operations through the Binboi API.",
      },
    ],
  },
  {
    title: "Support",
    items: [
      {
        title: "Troubleshooting",
        href: "/docs/troubleshooting",
        icon: Wrench,
        keywords: ["troubleshoot", "fix", "error", "502", "504", "timeout", "connection refused"],
        description: "Common errors and how to resolve them.",
      },
    ],
  },
];

export const allDocsPages = docsConfig.flatMap((section) => section.items);

export function getDocByHref(href: string) {
  // strip trailing slash for robustness
  const normalized = href.replace(/\/$/, "");
  return allDocsPages.find((item) => item.href === normalized);
}

export function getSectionForHref(href: string): DocsSection | null {
  const normalized = href.replace(/\/$/, "");
  return (
    docsConfig.find((section) =>
      section.items.some((item) => item.href === normalized)
    ) ?? null
  );
}

export function getPrevNextDocs(href: string) {
  const normalized = href.replace(/\/$/, "");
  const index = allDocsPages.findIndex((item) => item.href === normalized);

  if (index === -1) return { prev: null, next: null };

  return {
    prev: index > 0 ? allDocsPages[index - 1] : null,
    next: index < allDocsPages.length - 1 ? allDocsPages[index + 1] : null,
  };
}
