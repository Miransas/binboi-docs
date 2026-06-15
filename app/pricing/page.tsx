import Link from "next/link";
import { Navbar } from "@/components/docs/navbar";
import Footer from "../../components/docs/docs-footer";


const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "For trying Binboi out.",
    cta: "Start free",
    ctaHref: "https://binboi.com/register",
    ctaVariant: "secondary" as const,
    features: [
      "1 active tunnel",
      "1 personal access token (lifetime)",
      "100 requests / day",
      "HTTPS by default",
    ],
  },
  {
    name: "Pro",
    price: "$10",
    period: "/month",
    description: "For solo developers shipping real work.",
    cta: "Upgrade to Pro",
    ctaHref: "https://binboi.com/dashboard/billing",
    ctaVariant: "primary" as const,
    features: [
      "10 active tunnels",
      "25 personal access tokens",
      "10,000 requests / day",
      "10 custom domains",
    ],
  },
  {
    name: "Max",
    price: "$19",
    period: "/month",
    description: "For heavier workloads and teams.",
    cta: "Upgrade to Max",
    ctaHref: "https://binboi.com/dashboard/billing",
    ctaVariant: "secondary" as const,
    features: [
      "50 active tunnels",
      "100 personal access tokens",
      "Unlimited requests",
      "50 custom domains",
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="mx-auto max-w-5xl px-4 py-20 md:px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs uppercase tracking-widest text-white/35">
            Miransas / Binboi
          </p>
          <h1 className="mb-4 text-4xl font-semibold tracking-tight">
            Simple pricing
          </h1>
          <p className="mx-auto max-w-md text-base text-white/55">
            Start free. Upgrade when you need more tunnels, tokens, or requests.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative flex flex-col rounded-xl border border-white/[0.08] bg-white/[0.02] p-7"
            >
              {plan.badge && (
                <span className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white/40">
                  {plan.badge}
                </span>
              )}

              <div className="mb-6">
                <p className="mb-1 text-sm font-medium text-white/55">{plan.name}</p>
                <div className="mb-2 flex items-baseline gap-1">
                  <span className="text-3xl font-semibold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-sm text-white/40">{plan.period}</span>
                  )}
                </div>
                <p className="text-sm text-white/45">{plan.description}</p>
              </div>

              <ul className="mb-8 flex-1 space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-white/70">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-lime-400"
                      fill="none"
                      viewBox="0 0 16 16"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l3.5 3.5 6.5-7"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              {plan.ctaVariant === "primary" ? (
                <Link
                  href={plan.ctaHref}
                  className="inline-flex h-9 w-full items-center justify-center rounded-lg bg-lime-400 px-4 text-sm font-medium text-black transition-opacity hover:opacity-90"
                >
                  {plan.cta}
                </Link>
              ) : (
                <Link
                  href={plan.ctaHref}
                  className="inline-flex h-9 w-full items-center justify-center rounded-lg border border-white/[0.1] bg-white/[0.04] px-4 text-sm text-white/80 transition-colors hover:bg-white/[0.08]"
                >
                  {plan.cta}
                </Link>
              )}
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-white/35">
          Paid plans billed via Polar.sh. Cancel anytime from{" "}
          <Link
            href="https://binboi.com/dashboard/billing"
            className="text-white/55 underline underline-offset-2 hover:text-white/80"
          >
            /dashboard/billing
          </Link>
          .
        </p>
      </main>

      <Footer />
    </div>
  );
}
