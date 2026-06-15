import { ArrowUpRight, BookOpen, Bot, LifeBuoy } from "lucide-react";
import { FaGithub } from "react-icons/fa";

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
