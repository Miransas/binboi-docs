import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Space_Mono } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";

const satoshi = localFont({
  src: [
    {
      path: "./fonts/WEB/fonts/Satoshi-Variable.woff2",
      weight: "300 900",
      style: "normal",
    },
    {
      path: "./fonts/WEB/fonts/Satoshi-VariableItalic.woff2",
      weight: "300 900",
      style: "italic",
    },
    {
      path: "./fonts/WEB/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/WEB/fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

// ── Site Constants ──────────────────────────────────────────────────────────

const SITE_URL = "https://docs.binboi.com";
const SITE_NAME = "Binboi Docs";
const SITE_DESCRIPTION =
  "Self-hosted tunnels for developers. Expose any local service to the internet with automatic HTTPS, request inspection, and webhook replay.";
const SITE_KEYWORDS = [
  "binboi",
  "ngrok alternative",
  "tunnels",
  "localhost tunnel",
  "self-hosted ngrok",
  "webhook testing",
  "https tunnel",
  "tcp tunnel",
  "developer tools",
  "miransas",
];

// ── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s — Binboi Docs",
    default: "Binboi Docs — Self-hosted tunnels for developers",
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [{ name: "Miransas", url: "https://miransas.com" }],
  creator: "Miransas",
  publisher: "Miransas",
  applicationName: SITE_NAME,
  category: "technology",

  // OpenGraph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Binboi Docs — Self-hosted tunnels for developers",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Binboi — Self-hosted tunnels for developers",
      },
    ],
  },

  // Twitter / X
  twitter: {
    card: "summary_large_image",
    title: "Binboi Docs — Self-hosted tunnels for developers",
    description: SITE_DESCRIPTION,
    images: ["/og.png"],
    creator: "@miransas",
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#86a9ff",
      },
    ],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification (boş bırak, kendin eklersin sonra)
  verification: {
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },

  // Manifest (PWA)
  manifest: "/manifest.webmanifest",

  // Other
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-US": SITE_URL,
    },
  },

  // Apple-specific
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "black-translucent",
  },

  // Format detection
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

// ── Viewport ────────────────────────────────────────────────────────────────

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#000000" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark",
};

// ── Root Layout ─────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full dark scroll-smooth", satoshi.variable, spaceMono.variable)}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect to font CDNs for speed */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Structured data: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Miransas",
              url: "https://miransas.com",
              logo: "https://miransas.com/logo.png",
              sameAs: [
                "https://github.com/Miransas",
                "https://twitter.com/miransas",
              ],
            }),
          }}
        />

        {/* Structured data: SoftwareApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Binboi",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "macOS, Linux, Windows",
              description: SITE_DESCRIPTION,
              url: "https://binboi.com",
              author: {
                "@type": "Organization",
                name: "Miransas",
                url: "https://miransas.com",
              },
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            }),
          }}
        />
      </head>
      <body
        className={cn(
          "min-h-full font-sans antialiased bg-black text-white",
          "selection:bg-lime-400/20 selection:text-lime-100"
        )}
      >
        {children}
      </body>
    </html>
  );
}