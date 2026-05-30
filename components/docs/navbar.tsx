"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Search } from "lucide-react";
import { DocsSearchModal } from "@/components/docs/docs-search-modal";
import Image from "next/image";

interface NavbarProps {
  onMenuClick?: () => void;
}

const centerNav = [
  { label: "Docs", href: "/docs" },
  { label: "Pricing", href: "https://binboi.com/pricing" },
  { label: "Changelog", href: "/changelog" },
];

export function Navbar({ onMenuClick }: NavbarProps) {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      {/* Border opacity 0.06'dan 0.08'e çıkarıldı ki Sidebar ile uyumlu olsun */}
      <header className="sticky top-0 z-50 h-14 border-b border-white/[0.08] bg-black/60 backdrop-blur-lg transition-colors duration-300">
        <div className="mx-auto flex h-full max-w-[1600px] items-center justify-between px-4 md:px-6">

          {/* Left — hamburger (mobile) + brand */}
          <div className="flex items-center gap-3">
            {/* Mobile hamburger */}
            {onMenuClick && (
              <button
                type="button"
                onClick={onMenuClick}
                aria-label="Open navigation"
                // Opaklık artırıldı, scale animasyonları eklendi
                className="flex h-8 w-8 items-center justify-center rounded-lg text-white/70 transition-all duration-200 ease-in-out hover:scale-105 hover:bg-white/[0.08] hover:text-white active:scale-95 md:hidden"
              >
                <Menu className="h-5 w-5" />
              </button>
            )}

            <Link href="https://binboi.com" className="flex items-center gap-2.5 transition-transform duration-200 hover:scale-105 active:scale-95">
              <Image src="/logo.png" alt="Binboi Logo" width={40} height={40} />
            </Link>

            <div className="hidden items-center gap-1.5 sm:flex">
              <span className="font-semibold tracking-tight text-white">
                binboi
              </span>
              {/* Text opacity 40'tan 60'a çıkarıldı */}
              <span className="rounded-md border border-white/[0.1] bg-white/[0.04] px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white/60">
                docs
              </span>
            </div>

            {/* Divider */}
            <span className="hidden h-4 w-px bg-white/[0.15] md:block" aria-hidden="true" />

            {/* Miransas attribution */}
            <a
              href="https://miransas.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden items-center gap-1.5 md:flex"
            >
              {/* Metinler belirginleştirildi, group-hover eklendi */}
              <span className="text-xs text-white/50 transition-colors duration-200 group-hover:text-white/80">
                by{" "}
                <span className="font-medium text-white/70 transition-colors duration-200 group-hover:text-white">
                  Miransas
                </span>
              </span>
            </a>
          </div>

          {/* Center — nav links (desktop) */}
          <nav className="hidden items-center gap-1 md:flex">
            {centerNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                // Ease-out ve daha canlı hover renkleri
                className="rounded-lg px-3 py-1.5 text-sm text-white/60 transition-all duration-200 ease-out hover:bg-white/[0.06] hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://github.com/Miransas/binboi-docs"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-3 py-1.5 text-sm text-white/50 transition-all duration-200 ease-out hover:bg-white/[0.06] hover:text-white"
            >
              GitHub
            </a>
          </nav>

          {/* Right — search + actions */}
          <div className="flex items-center gap-2">
            {/* Search — desktop */}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              // Hover'da hafif büyüme (1.02), daha belirgin background ve border
              className="hidden h-8 items-center gap-2 rounded-lg border border-white/[0.1] bg-white/[0.04] pl-3 pr-2 text-sm text-white/60 transition-all duration-200 ease-out hover:scale-[1.02] hover:border-white/[0.15] hover:bg-white/[0.08] hover:text-white active:scale-[0.98] md:flex"
            >
              <Search className="h-3.5 w-3.5" />
              <span className="mr-1">Search</span>
              {/* Cmd+K okunabilirliği artırıldı */}
              <kbd className="inline-flex h-5 items-center gap-0.5 rounded border border-white/[0.15] bg-white/[0.06] px-1.5 font-mono text-[10px] text-white/60">
                <span className="text-[11px]">⌘</span>K
              </kbd>
            </button>

            {/* Search — mobile */}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search docs"
              // Mobile butonuna da basma efekti eklendi
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.1] bg-white/[0.04] text-white/70 transition-all duration-200 ease-out hover:scale-105 hover:bg-white/[0.08] hover:text-white active:scale-95 md:hidden"
            >
              <Search className="h-4 w-4" />
            </button>

            {/* Sign in — desktop */}
            <Link
              href="https://binboi.com/login"
              // Okunabilirlik 55'ten 70'e çıkarıldı
              className="hidden h-8 items-center rounded-lg px-3 text-sm text-white/70 transition-colors duration-200 hover:text-white md:inline-flex"
            >
              Sign in
            </Link>

            {/* Dashboard */}
            <Link
              href="https://binboi.com/dashboard"
              // Ana buton olduğu için shadow-sm, hover glow ve scale eklendi
              className="inline-flex h-8 items-center rounded-lg bg-lime-400 px-3 text-sm font-medium text-black shadow-sm transition-all duration-200 ease-out hover:scale-105 hover:bg-lime-300 hover:shadow-lime-400/20 active:scale-95"
            >
              Dashboard
            </Link>

            {/* Version bilgisi 25'ten 40'a çıkarıldı */}
            <div className="hidden pl-2 text-[11px] text-white/40 transition-colors duration-200 hover:text-white/60 xl:block cursor-default">
              v1.0.4-beta
            </div>
          </div>
        </div>
      </header>

      <DocsSearchModal open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
}