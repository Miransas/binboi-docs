/**
 * Structured content for the product-facing marketing site and documentation.
 */
export type LandingMetric = {
  label: string;
  value: string;
  detail: string;
};

export type FeatureCard = {
  title: string;
  description: string;
  eyebrow: string;
};

export type PricingPlan = {
  name: string;
  price: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  highlight?: boolean;
  footnote: string;
  features: string[];
};

export type ChangelogEntry = {
  date: string;
  version: string;
  title: string;
  summary: string;
  bullets: string[];
};

export type SupportChannel = {
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
};

export type DocsArticle = {
  slug: string;
  title: string;
  description: string;
  section: string;
  readingTime: string;
  blocks: Array<{
    heading: string;
    body: string;
    bullets?: string[];
    code?: {
      language: string;
      snippet: string;
    };
  }>;
};

export const LANDING_METRICS: LandingMetric[] = [
  {
    label: "Setup",
    value: "< 5 min",
    detail: "From install to your first routable tunnel.",
  },
  {
    label: "Access hygiene",
    value: "1-click",
    detail: "Rotate or revoke tokens without chasing owners.",
  },
  {
    label: "Control surface",
    value: "1 place",
    detail: "Tunnels, usage, billing, and rollout visibility together.",
  },
];

export const LANDING_FEATURES: FeatureCard[] = [
  {
    eyebrow: "Clarity",
    title: "Know which services are live and who can reach them",
    description:
      "Binboi keeps the public edge calm: healthy tunnels, scoped tokens, and usage patterns are visible before they turn into questions from customers.",
  },
  {
    eyebrow: "Guardrails",
    title: "Treat access like product surface, not an afterthought",
    description:
      "Create short-lived credentials, revoke stale keys, and keep environment boundaries explicit so the team moves faster without improvising security.",
  },
  {
    eyebrow: "Operations",
    title: "Ship with a control plane your team can actually use",
    description:
      "Premium defaults, clean docs, and an opinionated dashboard make onboarding lighter for engineers and less mysterious for the rest of the business.",
  },
];

export const PLATFORM_SECTIONS: FeatureCard[] = [
  {
    eyebrow: "HTTP tunnels",
    title: "Stable ingress for staging, demos, and internal tools",
    description:
      "Pin routes to environments, monitor health, and surface requests in a way that feels operationally trustworthy instead of improvised.",
  },
  {
    eyebrow: "Tokens",
    title: "Access that is deliberate, scoped, and easy to rotate",
    description:
      "Issue product, environment, or workflow-specific tokens so privileges stay understandable as teams grow.",
  },
  {
    eyebrow: "Usage",
    title: "Usage reporting that informs product and billing decisions",
    description:
      "Track request volume, noisy routes, and capacity trends with a model that can plug into billing and alerting later.",
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Starter",
    price: "$0",
    description: "For prototypes, local demos, and the first shared services.",
    ctaLabel: "Create starter workspace",
    ctaHref: "/register",
    footnote: "Single workspace, limited tunnel concurrency, community support.",
    features: [
      "Up to 2 active tunnels",
      "Basic request visibility",
      "Manual token rotation",
      "Docs and email support",
    ],
  },
  {
    name: "Team",
    price: "$49",
    description: "For engineering teams that need predictable routing and access hygiene.",
    ctaLabel: "Start team trial",
    ctaHref: "/register",
    highlight: true,
    footnote: "Per workspace / month, plus usage-based overages when enabled.",
    features: [
      "10 active tunnels included",
      "Scoped token management",
      "Shared usage dashboard",
      "Billing and workspace settings",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For regulated workloads, regional controls, and deeper support commitments.",
    ctaLabel: "Talk to sales",
    ctaHref: "/support",
    footnote: "Custom contracts, SSO roadmap, dedicated support channels.",
    features: [
      "Regional deployment planning",
      "Priority incident response",
      "Custom billing terms",
      "Integration and rollout support",
    ],
  },
];

export const PRICING_FAQS = [
  {
    question: "What counts as usage?",
    answer:
      "Usage is modeled around requests that traverse your Binboi-managed tunnels. The exact metering source should come from the control plane API in production.",
  },
  {
    question: "Can I start without adding billing details?",
    answer:
      "Yes. Starter workspaces can onboard without billing. Team and Enterprise checkout flows are designed to connect to Paddle when production credentials are present.",
  },
  {
    question: "How do tokens work across environments?",
    answer:
      "The app assumes environment-aware scoping. Tokens should be created with clear ownership and revoked centrally when an integration is retired.",
  },
];

export const CHANGELOG_ENTRIES: ChangelogEntry[] = [
  {
    date: "2026-03-28",
    version: "v0.9.0",
    title: "Usage views now model billing-readiness",
    summary:
      "We reshaped usage reporting so request totals, route hot spots, and billing surfaces can align around one response model.",
    bullets: [
      "Added route-level usage breakdowns for dashboard reporting.",
      "Prepared billing summary cards for Paddle-backed checkout flows.",
      "Improved empty states so unconfigured environments stay explicit.",
    ],
  },
  {
    date: "2026-03-16",
    version: "v0.8.4",
    title: "Token workflows became safer to operate",
    summary:
      "Token creation and revocation paths now emphasize names, scopes, and immediate copy-once secrets.",
    bullets: [
      "Introduced token scope presets for CLI, CI, and read-only workflows.",
      "Added revoke actions directly in the dashboard table.",
      "Documented expected control plane response shapes for future backend alignment.",
    ],
  },
  {
    date: "2026-02-27",
    version: "v0.8.0",
    title: "New docs IA for faster onboarding",
    summary:
      "The docs experience now mirrors the product mental model: quick start, auth, tunnels, requests, and debugging.",
    bullets: [
      "Added structured docs navigation and article landing page.",
      "Rewrote quick start for clearer local development setup.",
      "Created issue-focused debugging and bugs references.",
    ],
  },
];

export const SUPPORT_CHANNELS: SupportChannel[] = [
  {
    title: "Product docs",
    description:
      "Start with the docs when you need setup, routing, authentication, or request debugging guidance.",
    href: "/docs",
    ctaLabel: "Open docs",
  },
  {
    title: "Email support",
    description:
      "Use direct email for account questions, billing clarifications, or implementation help that needs context.",
    href: "mailto:hello@miransas.com",
    ctaLabel: "Email support",
  },
  {
    title: "Community and roadmap",
    description:
      "Share implementation feedback, feature requests, or rollout notes with the Binboi team as the product evolves.",
    href: "/changelog",
    ctaLabel: "See roadmap signals",
  },
];

export const DOCS_ARTICLES: DocsArticle[] = [
  {
    slug: "introduction",
    title: "Introduction",
    description:
      "What Binboi is, who it is for, and how the control plane fits into your stack.",
    section: "Getting Started",
    readingTime: "3 min read",
    blocks: [
      {
        heading: "Why teams reach for Binboi",
        body:
          "Binboi is designed for teams that need to expose internal services without treating access, observability, and billing readiness as separate systems. The product surface stays intentionally small so onboarding remains fast.",
        bullets: [
          "Create tunnels for staging apps, demos, and internal tools.",
          "Issue scoped tokens that reflect actual workflows.",
          "Review request volume and route behavior from one dashboard.",
        ],
      },
      {
        heading: "The product model",
        body:
          "A Binboi workspace usually sits between your operators, an upstream control plane, and the services that need routable ingress. The app in this repository focuses on the user-facing product experience.",
      },
    ],
  },
  {
    slug: "quick-start",
    title: "Quick Start",
    description:
      "The shortest path from local setup to your first healthy tunnel.",
    section: "Getting Started",
    readingTime: "4 min read",
    blocks: [
      {
        heading: "Local prerequisites",
        body:
          "For local development you only need the Next.js app plus whichever backend service will supply control plane and auth responses. Public pages work without external services, while dashboard pages surface configuration gaps explicitly.",
      },
      {
        heading: "Minimum environment",
        body:
          "Set the app URL plus the control plane base URL if you want dashboard data to populate. Add auth and billing variables when you are ready to exercise those flows.",
        code: {
          language: "bash",
          snippet:
            "NEXT_PUBLIC_APP_URL=http://localhost:3000\nCONTROL_PLANE_API_URL=http://localhost:8080\nCONTROL_PLANE_API_KEY=replace-me",
        },
      },
    ],
  },
  {
    slug: "authentication",
    title: "Authentication",
    description:
      "How the product-facing auth flows map to your upstream identity service.",
    section: "Getting Started",
    readingTime: "4 min read",
    blocks: [
      {
        heading: "Auth ownership",
        body:
          "This app keeps auth UI inside the Next.js layer while expecting the actual user lifecycle to come from an upstream auth service or provider. That keeps the user experience polished without hard-coding a single auth backend.",
      },
      {
        heading: "Expected endpoints",
        body:
          "By default, the auth actions expect login, register, forgot password, reset password, verify email, and invite acceptance endpoints under the configured auth base URL.",
        code: {
          language: "text",
          snippet:
            "POST /login\nPOST /register\nPOST /forgot-password\nPOST /reset-password\nPOST /verify-email\nPOST /accept-invite",
        },
      },
    ],
  },
  {
    slug: "cli",
    title: "CLI",
    description:
      "Recommended token scopes and installation flow for CLI-based workflows.",
    section: "Workflows",
    readingTime: "3 min read",
    blocks: [
      {
        heading: "Use dedicated CLI tokens",
        body:
          "Avoid reusing long-lived personal credentials. Give CLI workflows a named token with explicit scope so rotation and incident review stay legible.",
      },
      {
        heading: "Bootstrap example",
        body:
          "The dashboard install page mirrors this flow so documentation and product stay consistent.",
        code: {
          language: "bash",
          snippet:
            "curl -fsSL https://binboi.com/install.sh | sh\nbinboi login --token <token>\nbinboi http 3000",
        },
      },
    ],
  },
  {
    slug: "http-tunnels",
    title: "HTTP Tunnels",
    description:
      "How Binboi models tunnel creation, health, and routing metadata.",
    section: "Workflows",
    readingTime: "5 min read",
    blocks: [
      {
        heading: "Expected tunnel fields",
        body:
          "The dashboard tunnel page normalizes common fields such as hostname, region, protocol, status, and last seen timestamps. If your backend returns a different shape, update the normalization layer in one place.",
      },
      {
        heading: "Operational advice",
        body:
          "Use durable names, mark the owning environment, and make health transitions visible in your observability tooling. The product UI should reinforce those habits rather than fight them.",
      },
    ],
  },
  {
    slug: "requests",
    title: "Requests",
    description:
      "How request volume is represented in the dashboard and prepared for billing.",
    section: "Observability",
    readingTime: "4 min read",
    blocks: [
      {
        heading: "Usage model",
        body:
          "The usage page expects a current period summary, a short series for trendlines, and a list of top routes or workloads. That gives enough context for both product and finance conversations.",
      },
      {
        heading: "Shape example",
        body:
          "This is the style of response the UI is prepared to consume from the control plane adapter.",
        code: {
          language: "json",
          snippet:
            '{\n  "period": { "label": "April 2026", "requests": 1822400, "bandwidthGb": 92.4 },\n  "series": [{ "date": "2026-04-01", "requests": 71234, "errors": 82 }],\n  "topRoutes": [{ "route": "/internal/docs", "requests": 401245 }]\n}',
        },
      },
    ],
  },
  {
    slug: "debugging",
    title: "Debugging",
    description:
      "What to inspect first when auth, tunnels, or usage data do not look right.",
    section: "Observability",
    readingTime: "4 min read",
    blocks: [
      {
        heading: "Start with configuration",
        body:
          "If dashboard cards are empty, confirm the relevant service base URL and secret are present. The UI intentionally surfaces configuration gaps so local development stays honest.",
      },
      {
        heading: "Then check response shape",
        body:
          "If the service is reachable but cards still look empty, compare the payload against the normalization layer in lib/backend/control-plane.ts. That file is the contract between UI and backend.",
      },
    ],
  },
  {
    slug: "bugs",
    title: "Known Gaps",
    description:
      "Current product limitations and where external services are still required.",
    section: "Observability",
    readingTime: "2 min read",
    blocks: [
      {
        heading: "Current dependencies",
        body:
          "Billing checkout still depends on Paddle credentials and a backend capable of minting checkout URLs. Auth flows also depend on the upstream auth service being available.",
      },
      {
        heading: "What to update next",
        body:
          "Once the real control plane contract is finalized, tighten the normalization layer and replace TODO-level placeholders in billing and invite acceptance with strict backend validation.",
      },
    ],
  },
];
