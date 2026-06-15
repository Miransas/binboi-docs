// constants/docs-menu.ts
import { Box, Globe, Server, Shield, Terminal, Waypoints, Wrench } from "lucide-react";

export const SIDEBAR_MENU = [
  {
    group: "Getting Started",
    items: [
      { name: "Introduction", href: "/docs/introduction", icon: Globe },
      { name: "Quick Start", href: "/docs/quick_start", icon: Terminal },
      { name: "Installation", href: "/docs/installation", icon: Box },
    ],
  },
  {
    group: "Core",
    items: [
      { name: "Authentication", href: "/docs/authentication", icon: Shield },
      { name: "CLI Reference", href: "/docs/cli", icon: Terminal },
      { name: "HTTP Tunnels", href: "/docs/http_tunnels", icon: Waypoints },
      { name: "API", href: "/docs/api", icon: Server },
    ],
  },
  {
    group: "Support",
    items: [
      { name: "Troubleshooting", href: "/docs/troubleshooting", icon: Wrench },
    ],
  },
];
