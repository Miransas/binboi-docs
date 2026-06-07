import { Navbar } from "@/components/docs/navbar";
import Footer from "../../components/docs/docs-footer";


const entries = [
  {
    version: "v1.0.0",
    date: "May 2026",
    title: "Initial Release",
    items: [
      "HTTP, HTTPS, and TCP tunnels",
      "Personal access tokens (PATs) with prefix-based audit logging",
      "Request inspector and replay via dashboard and local inspector (port 4040)",
      "Frankfurt region (DigitalOcean)",
      "Web dashboard at binboi.com",
      "CLI for macOS, Linux, and Windows (x86_64 + arm64)",
      "Free plan: 3 tokens, 1 concurrent tunnel, 24h retention",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="mx-auto max-w-2xl px-4 py-20 md:px-6">
        <div className="mb-14">
          <p className="mb-3 text-xs uppercase tracking-widest text-white/35">
            Miransas / Binboi
          </p>
          <h1 className="text-3xl font-semibold tracking-tight">Changelog</h1>
        </div>

        <div className="space-y-14">
          {entries.map((entry) => (
            <div key={entry.version} className="border-t border-white/[0.07] pt-10">
              <div className="mb-5 flex items-baseline gap-4">
                <span className="font-mono text-sm font-medium text-lime-400">
                  {entry.version}
                </span>
                <span className="text-sm text-white/35">{entry.date}</span>
              </div>
              <h2 className="mb-4 text-lg font-medium">{entry.title}</h2>
              <ul className="space-y-2">
                {entry.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/65">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/25" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
