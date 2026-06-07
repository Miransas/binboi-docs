/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { FaDiscord, FaGithub, FaTwitter } from 'react-icons/fa';

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
      { label: "Courerx", href: "/", external: true, badge: "Coming soon" },
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
      { label: "Changelog", href: "/changelog" },
      
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Miransas", href: "https://miransas.com", external: true },
      { label: "Support", href: "https://miransas.com/support", external: true },
      { label: "Terms", href: "https://miransas.com/terms", external: true },
      { label: "Contact", href: "mailto:contact@miransas.com", external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-black via-black to-purple-700 pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid min-[1200px]:grid-cols-3 gap-12 xl:gap-16">

          {/* Sol Bölüm: Logo ve Sosyal Medya */}
          <div className="min-[1200px]:max-w-sm max-w-lg w-full">
            <Link href="https://miransas.com" target="_blank" rel="noopener noreferrer"
              className="min-h-12 inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
              <img src="/miransas.png" alt="logo" className="w-12" />
            </Link>

            <ul className="flex flex-wrap gap-6 mt-6">
              <li>
                <Link href="https://discord.com/invite/miransas" target="_blank" rel="noopener noreferrer"
                  className="flex items-center bg-neutral-900 w-8 h-8 p-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  aria-label="Discord">
                  <FaDiscord />
                </Link>
              </li>
              <li>
                <Link href="https://miransas.com" target="_blank" rel="noopener noreferrer"
                  className="flex items-center bg-neutral-900 w-8 h-8 p-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-full fill-slate-50" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/miransaas" target="_blank" rel="noopener noreferrer"
                  className="flex items-center bg-neutral-900 w-8 h-8 p-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  aria-label="X">
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link href="https://github.com/miransas"
                  className="flex items-center bg-neutral-900 w-8 h-8 p-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  aria-label="Github">
                  <FaGithub />
                </Link>
              </li>
            </ul>
          </div>

          {/* Dinamik Dizi İle Render Edilen Kolonlar */}
          <div className="min-[1200px]:col-span-2 grid grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6 sm:gap-x-8">
            {columns.map((column, columnIndex) => (
              <div key={columnIndex} className="space-y-6">
                <h3 className="text-slate-50 text-sm font-semibold">{column.title}</h3>
                <ul className="space-y-4 text-sm text-slate-400 font-normal">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="hover:text-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all inline-flex items-center gap-2"
                      >
                        {link.label}
                        {/* Eğer nesnede badge varsa ekrana bas */}
                        {link.badge && (
                          <span className="text-[10px] bg-purple-600 text-white px-1.5 py-0.5 rounded font-medium whitespace-nowrap">
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

        <hr className="my-8 border-neutral-700" />

        <div className="flex flex-wrap gap-4 flex-col md:flex-row">
          {/* <ul className="flex flex-wrap gap-4 text-sm text-slate-400 font-normal">
            <li><a href="#" className="hover:text-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all">Terms of Service</a></li>
            <li><a href="#" className="hover:text-slate-50 transition-all">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-slate-50 transition-all">Security</a></li>
          </ul> */}

          <p className="text-slate-200 text-md font-bold md:ml-auto">© 2025-{new Date().getFullYear()} Miransas. All rights reserved..</p>
        </div>
      </div>
    </footer>
  );
}
