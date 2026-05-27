import Link from "next/link";
import { Navbar } from "@/components/docs/navbar";
import { DocsFooter } from "@/components/docs/docs-footer";

const channels = [
  {
    title: "Documentation",
    description: "Guides, CLI reference, API reference, and troubleshooting steps.",
    href: "/docs",
    label: "Browse docs",
  },
  {
    title: "GitHub Issues",
    description: "Report bugs or request features on the public issue tracker.",
    href: "https://github.com/Miransas/binboi/issues",
    label: "Open an issue",
  },
  {
    title: "GitHub Discussions",
    description: "Ask questions, share use cases, and propose ideas.",
    href: "https://github.com/Miransas/binboi/discussions",
    label: "Join the discussion",
  },
  {
    title: "Email",
    description: "For billing, account, or private matters.",
    href: "mailto:hello@miransas.com",
    label: "hello@miransas.com",
  },
  {
    title: "Security",
    description:
      "To report a security vulnerability, email us directly. Do not open a public issue.",
    href: "mailto:security@miransas.com",
    label: "security@miransas.com",
  },
];

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="mx-auto max-w-2xl px-4 py-20 md:px-6">
        <div className="mb-14">
          <p className="mb-3 text-xs uppercase tracking-widest text-white/35">
            Miransas / Binboi
          </p>
          <h1 className="mb-3 text-3xl font-semibold tracking-tight">Support</h1>
          <p className="text-base text-white/50">
            Get help with Binboi through the channels below.
          </p>
        </div>

        <div className="space-y-4">
          {channels.map((ch) => (
            <Link
              key={ch.title}
              href={ch.href}
              target={ch.href.startsWith("http") ? "_blank" : undefined}
              rel={ch.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex flex-col gap-1.5 rounded-xl border border-white/[0.07] bg-white/[0.02] p-6 transition-colors hover:border-white/[0.14] hover:bg-white/[0.04]"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-white">{ch.title}</span>
                <svg
                  className="h-4 w-4 text-white/25"
                  fill="none"
                  viewBox="0 0 16 16"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.5 8h9m0 0L9 4m3.5 4L9 12"
                  />
                </svg>
              </div>
              <p className="text-sm text-white/45">{ch.description}</p>
              <span className="mt-0.5 text-xs text-lime-400/80">{ch.label}</span>
            </Link>
          ))}
        </div>
      </main>

      <DocsFooter />
    </div>
  );
}
