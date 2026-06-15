import {
  ArrowUpRight,
  BookOpen,
  Bot,
  Cable,
  CloudCog,
  HardDrive,
  KeyRound,
  LifeBuoy,
  PanelsTopLeft,
  Route,
  ShieldCheck,
  TerminalSquare,
} from "lucide-react";

export const navLinks = [
  { href: "/docs", label: "Docs" },
  { href: "/pricing", label: "Pricing" },
  { href: "/support", label: "Support" },
  { href: "/changelog", label: "Changelog" },
];

export const workflowItems = [
  { href: "/docs/quick_start", label: "Local previews", icon: PanelsTopLeft },
  { href: "/docs/installation", label: "CLI installation", icon: HardDrive },
  { href: "/docs/http_tunnels", label: "Shared staging tunnels", icon: Cable },
  { href: "/docs/api", label: "Control plane automation", icon: CloudCog },
];

export const toolsMenu = {
  foundations: [
    {
      category: "Access",
      items: [
        { href: "/docs/authentication", label: "Auth and tokens", icon: KeyRound },
        { href: "/docs/api", label: "API operations", icon: ShieldCheck },
      ],
    },
    {
      category: "Traffic",
      items: [
        { href: "/docs/http_tunnels", label: "HTTP tunnels", icon: Route },
      ],
    },
  ],
  operations: [
    {
      category: "Learn",
      items: [
        { href: "/docs/cli", label: "CLI guide", icon: TerminalSquare },
        { href: "/docs/troubleshooting", label: "Troubleshooting", icon: LifeBuoy },
      ],
    },
  ],
};

export const footerLinks = {
  Product: [
    { name: "Docs", href: "/docs" },
    { name: "Pricing", href: "/pricing" },
    { name: "Changelog", href: "/changelog" },
    { name: "Support", href: "/support" },
  ],
  Platform: [
    { name: "Quick Start", href: "/docs/quick_start" },
    { name: "Installation", href: "/docs/installation" },
    { name: "HTTP Tunnels", href: "/docs/http_tunnels" },
    { name: "API", href: "/docs/api" },
  ],
  Workflows: [
    { name: "Authentication", href: "/docs/authentication" },
    { name: "CLI", href: "/docs/cli" },
    { name: "Troubleshooting", href: "/docs/troubleshooting" },
  ],
  Company: [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Terms", href: "/terms" },
  ],
};

export const footerSocialLinks = [
  { name: "Docs", icon: BookOpen, href: "/docs" },
  { name: "API", icon: Bot, href: "/docs/api" },
  { name: "Support", icon: LifeBuoy, href: "/support" },
  { name: "Pricing", icon: ArrowUpRight, href: "/pricing" },
];
