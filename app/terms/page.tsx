import { Navbar } from "@/components/docs/navbar";
import Footer from "../../components/docs/docs-footer";


export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="mx-auto max-w-2xl px-4 py-20 md:px-6">
        <div className="mb-10">
          <p className="mb-3 text-xs uppercase tracking-widest text-white/35">
            Miransas / Binboi
          </p>
          <h1 className="mb-2 text-3xl font-semibold tracking-tight">Terms of Service</h1>
          <p className="text-sm text-white/35">Last updated: May 2026</p>
        </div>

        <div className="prose-custom space-y-8 text-sm leading-7 text-white/65">
          <section>
            <h2 className="mb-3 text-base font-medium text-white">1. Acceptance</h2>
            <p>
              By accessing or using Binboi (the &ldquo;Service&rdquo;) operated by Miransas, you
              agree to be bound by these Terms of Service. If you do not agree, do not use
              the Service.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-base font-medium text-white">2. Use of the Service</h2>
            <p>You may use the Service to create encrypted tunnels between your local machine and the public internet. You agree not to:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Use the Service to violate any applicable law or regulation</li>
              <li>Transmit malware, spam, or abusive content</li>
              <li>Attempt to disrupt or circumvent the Service&rsquo;s security</li>
              <li>Resell or sublicense the Service without written permission</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-base font-medium text-white">3. Accounts</h2>
            <p>
              You are responsible for maintaining the confidentiality of your credentials and
              for all activity under your account. Notify us immediately at{" "}
              <a href="mailto:hello@miransas.com" className="text-lime-400/80 hover:text-lime-400">
                hello@miransas.com
              </a>{" "}
              of any unauthorized use.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-base font-medium text-white">4. Service Availability</h2>
            <p>
              We aim for high availability but do not guarantee uninterrupted access. The Service
              is provided &ldquo;as is&rdquo; without warranty of any kind. Planned maintenance will be
              communicated in advance where possible.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-base font-medium text-white">5. Data</h2>
            <p>
              Tunnel traffic is encrypted in transit. We log request metadata (method, path,
              status, timestamp) for the retention period specified by your plan. We do not
              log request or response bodies unless you explicitly enable request capture in
              the dashboard.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-base font-medium text-white">6. Termination</h2>
            <p>
              We may suspend or terminate your account for violations of these Terms. You may
              delete your account at any time from the dashboard.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-base font-medium text-white">7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Miransas shall not be liable for any
              indirect, incidental, or consequential damages arising from your use of the Service.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-base font-medium text-white">8. Changes</h2>
            <p>
              We may update these Terms from time to time. Continued use of the Service after
              changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-base font-medium text-white">9. Contact</h2>
            <p>
              Questions? Email{" "}
              <a href="mailto:hello@miransas.com" className="text-lime-400/80 hover:text-lime-400">
                hello@miransas.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
