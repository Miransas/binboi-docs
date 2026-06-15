/**
 * Shared navigation definitions for marketing, docs, auth, and dashboard surfaces.
 */
import { ArrowUpRight, BookOpen, Bot, LifeBuoy } from "lucide-react";
import type { IconName } from "./icons";
import { FaGithub } from "react-icons/fa";

export type NavItem = {
  label: string;
  href: string;
  icon?: IconName;
  badge?: string;
  children?: NavItem[];
};

export const SITE_HEADER_LINKS: NavItem[] = [
  { label: "Docs", href: "/docs", icon: "docs" },
  { label: "Pricing", href: "/pricing" },
  { label: "Changelog", href: "/changelog", icon: "changelog" },
  { label: "Support", href: "/support", icon: "support" },
];

export const SITE_FOOTER_LINKS: NavItem[] = [
  { label: "Docs", href: "/docs" },
  { label: "Pricing", href: "/pricing" },
  { label: "Changelog", href: "/changelog" },
  { label: "Support", href: "/support" },
  { label: "Terms", href: "/terms", icon: "terms" },
];

export const AUTH_LINKS: NavItem[] = [
  { label: "Login", href: "/login", icon: "login" },
  { label: "Register", href: "/register", icon: "register" },
  { label: "Forgot Password", href: "/forgot-password", icon: "support" },
  { label: "Check Email", href: "/check-email", icon: "docs" },
  { label: "Verify Email", href: "/verify-email", icon: "auth" },
  { label: "Accept Invite", href: "/accept-invite", icon: "register" },
];

export const DASHBOARD_LINKS: NavItem[] = [
  { label: "Overview", href: "/dashboard", icon: "dashboard" },
  { label: "Install", href: "/dashboard/install", icon: "cli" },
  { label: "Tunnels", href: "/dashboard/tunnels", icon: "tunnels" },
  { label: "Tokens", href: "/dashboard/tokens", icon: "tokens" },
  { label: "Usage", href: "/dashboard/usage", icon: "usage" },
  { label: "Logs", href: "/dashboard/log", icon: "logs" },
  { label: "Integrations", href: "/dashboard/integrations", icon: "integrations" },
  { label: "Billing", href: "/dashboard/billing", icon: "billing" },
  { label: "Settings", href: "/dashboard/settings", icon: "settings" },
];
export const DACS_LINKS: NavItem[] = [
  { label: "Overview", href: "/docs", icon: "dashboard" },
  { label: "Install", href: "/docs/install", icon: "cli" },
  { label: "Tunnels", href: "/docs/tunnels", icon: "tunnels" },
  { label: "Tokens", href: "/docs/tokens", icon: "tokens" },
  { label: "Usage", href: "/docs/usage", icon: "usage" },
  { label: "Logs", href: "/docs/log", icon: "logs" },
  { label: "Integrations", href: "/docs/integrations", icon: "integrations" },
  { label: "Billing", href: "/docs/billing", icon: "billing" },
  { label: "Settings", href: "/docs/settings", icon: "settings" },
];

export const DASHBOARD_SECONDARY_LINKS: NavItem[] = [
  { label: "Legacy token route", href: "/dashboard/api", icon: "tokens" },
  { label: "Legacy usage route", href: "/dashboard/total_requests", icon: "activity" },
];



export const FOOTER_LINKS = {
  product: [
    { label: "Docs", href: "https://www.dosc.binboi.com/docs" },
    { label: "Pricing", href: "/pricing" },
    { label: "Dashboard", href: "/dashboard" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Changelog", href: "/changelog" },
    { label: "Typography", href: "/typography" },
  ],
  company: [
    { label: "Miransas", href: "https://miransas.com" },
    { label: "GitHub", href: "https://github.com/Miransas/binboi" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
     { label: "Private", href: "/private" },
    

  ],
};

export const footerLinks = {
  Product: [
    { name: "Docs", href: "https://www.dosc.binboi.com/docs" },
    { name: "Pricing", href: "/pricing" },
    { name: "Changelog", href: "/changelog" },
    { name: "Support", href: "/support" },
    { name: "Private", href: "/private" },
    { name: "Refund", href: "/refund" },
  ],
  Platform: [
    { name: "Quick Start", href: "https://www.dosc.binboi.com/docs/quick_start" },
    { name: "Installation", href: "https://www.dosc.binboi.com/docs/installation" },
    { name: "HTTP Tunnels", href: "https://www.dosc.binboi.com/docs/http_tunnels" },
    { name: "API", href: "https://www.dosc.binboi.com/docs/api" },
  ],
  Workflows: [
    { name: "Authentication", href: "https://www.dosc.binboi.com/docs/authentication" },
    { name: "CLI", href: "https://www.dosc.binboi.com/docs/cli" },
    { name: "Troubleshooting", href: "https://www.dosc.binboi.com/docs/troubleshooting" },
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
  { name: "Github", icon: FaGithub, href: "https://github.com/miransas/binboi" },

];
