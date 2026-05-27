import Link from "next/link";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const columns = [
  {
    title: "Product",
    links: [
      { label: "Binboi", href: "https://binboi.com", external: true },
      { label: "Vertox", href: "https://vertox.com", external: true, badge: "Coming soon" },
      { label: "Rabilt", href: "https://rabilt.com", external: true, badge: "Coming soon" },
    ],
  },
  {
    title: "Docs",
    links: [
      { label: "Quick Start", href: "/docs/quick_start" },
      { label: "CLI Reference", href: "/docs/cli" },
      { label: "API Reference", href: "/docs/api" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Miransas", href: "https://miransas.com", external: true },
      { label: "Support", href: "/support" },
      { label: "Terms", href: "/terms" },
      { label: "Contact", href: "mailto:hello@miransas.com", external: true },
    ],
  },
];

export function DocsFooter() {
  return (
    <footer className="mt-20 border-t border-white/[0.06] bg-black">
      <div className="mx-auto max-w-[1600px] px-4 py-14 md:px-6 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="text-lg font-semibold tracking-tight text-white">binboi</span>
              <span className="rounded border border-white/[0.08] px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-white/35">
                docs
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-7 text-white/75">
              Expose local services to the internet with automatic HTTPS, request inspection, and webhook replay.
            </p>
            <p className="text-md text-white/25">
              A{" "}
              <a
                href="https://miransas.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FEFDE8] text-lg font-bold hover:text-white/70 transition-colors"
              >
                Miransas
              </a>{" "}
              product.
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title} className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/95">
                {col.title}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href} className="flex items-center gap-2">
                    {link.external ? (
                      <a
                        href={link.href}
                        target={link.href.startsWith("mailto") ? undefined : "_blank"}
                        rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                        className="text-md text-white/90 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-md text-white/90 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    )}
                    {"badge" in link && link.badge && (
                      <span className="rounded border border-white/[0.06] px-1.5 py-0.5 text-[10px] text-green-500">
                        {link.badge}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/[0.06] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg text-[#FEFDE8] ">
            © {new Date().getFullYear()} Miransas. All rights reserved.
          </p>

          <div className="flex items-center gap-1">
            <a
              href="https://x.com/miransas"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Miransas on X"
              className="flex h-8 w-8 items-center justify-center rounded-lg text-white/40 transition-colors hover:text-white/80"
            >
              <XIcon className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/Miransas/binboi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Binboi on GitHub"
              className="flex h-8 w-8 items-center justify-center rounded-lg text-white/40 transition-colors hover:text-white/80"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
