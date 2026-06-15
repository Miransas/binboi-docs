/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
  badge?: string;
};

type FooterColumn = {
  title: string;
  links: FooterLink[];
};

const columns: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Binboi", href: "https://binboi.com", external: true },
      { label: "Vertox", href: "/", external: true, badge: "Coming soon" },
      { label: "CourierX", href: "/", external: true, badge: "Coming soon" },
    ],
  },
  {
    title: "Docs",
    links: [
      { label: "Quick Start", href: "/docs/quick_start" },
      { label: "CLI Reference", href: "/docs/cli" },
      { label: "API Reference", href: "/docs/api" },
      { label: "Changelog", href: "/changelog" },
      { label: "Blog", href: "https://blog.miransas.com", external: true },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Miransas", href: "https://miransas.com", external: true },
      { label: "Support", href: "https://miransas.com/support", external: true },
      { label: "Terms", href: "https://miransas.com/terms", external: true },
      { label: "Privacy", href: "https://miransas.com/privacy", external: true },
      { label: "Contact", href: "mailto:contact@miransas.com", external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-black pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid min-[1200px]:grid-cols-3 gap-12 xl:gap-16">

          <div className="min-[1200px]:max-w-sm max-w-lg w-full">
            <Link href="https://miransas.com" target="_blank" rel="noopener noreferrer"
              className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 rounded">
              <img src="/miransas.png" alt="Miransas" className="w-10" />
            </Link>

            <p className="mt-4 text-sm text-neutral-400 leading-relaxed max-w-xs">
              Tunnel, inspect, and debug your HTTP traffic — from local to production.
            </p>

            <ul className="flex gap-4 mt-6">
              {[
                { href: "https://discord.com/invite/miransas", icon: <FaDiscord className="size-4" />, label: "Discord" },
                { href: "https://twitter.com/miransaas", icon: <FaXTwitter className="size-4" />, label: "X" },
                { href: "https://github.com/miransas", icon: <FaGithub className="size-4" />, label: "GitHub" },
                { href: "https://linkedin.com/company/miransas", icon: <FaLinkedin className="size-4" />, label: "LinkedIn" },
              ].map(({ href, icon, label }) => (
                <li key={label}>
                  <Link href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="flex items-center justify-center w-8 h-8 rounded-md bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500">
                    {icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-[1200px]:col-span-2 grid grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6 sm:gap-x-8">
            {columns.map((column, columnIndex) => (
              <div key={columnIndex} className="space-y-4">
                <h3 className="text-neutral-200 text-xs font-semibold uppercase tracking-wider">{column.title}</h3>
                <ul className="space-y-3 text-sm text-neutral-400">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="hover:text-neutral-100 transition-colors inline-flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 rounded"
                      >
                        {link.label}
                        {link.badge && (
                          <span className="text-[10px] bg-neutral-800 text-neutral-400 border border-neutral-700 px-1.5 py-0.5 rounded font-medium whitespace-nowrap">
                            {link.badge}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        <hr className="my-8 border-neutral-800" />

        <p className="text-neutral-500 text-sm">
          © 2024–{new Date().getFullYear()} Miransas. All rights reserved.
        </p>
      </div>
    </footer>
  );
}