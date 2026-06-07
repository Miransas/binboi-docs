/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Navbar } from "@/components/docs/navbar";
import { Sidebar } from "@/components/docs/docs-sidebar";
import { DocsPagination } from "@/components/docs/docs-pagination";
import { DocPageHeader } from "@/components/docs/doc-page-header";
import { EditOnGithub } from "@/components/docs/edit-on-github";
import { TableOfContents } from "./docs-toc";

import { cn } from "@/lib/utils";
import Footer from "./docs-footer";

export function DocsShell({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = window.localStorage.getItem("binboi-docs-sidebar-collapsed");
    if (saved === "true") setCollapsed(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    window.localStorage.setItem(
      "binboi-docs-sidebar-collapsed",
      String(collapsed)
    );
  }, [collapsed, mounted]);

  // Close mobile sidebar on route change
  useEffect(() => {
    setMobileOpen(false);
  }, []);

  // Lock body scroll when mobile sidebar is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar onMenuClick={() => setMobileOpen((v) => !v)} />

      {/* Mobile sidebar overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          aria-modal="true"
          role="dialog"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />

          {/* Drawer panel */}
          <div className="absolute inset-y-0 left-0 flex w-[280px] flex-col bg-black shadow-2xl shadow-black/50">
            {/* Drawer header */}
            <div className="flex h-14 items-center justify-between border-b border-white/[0.06] px-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/35">
                Docs
              </span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close navigation"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-white/40 transition-colors hover:bg-white/[0.06] hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Sidebar content (always expanded on mobile) */}
            <div className="flex-1 overflow-y-auto">
              <Sidebar
                collapsed={false}
                setCollapsed={() => {}}
                isMobile
                onLinkClick={() => setMobileOpen(false)}
              />
            </div>
          </div>
        </div>
      )}

      <div
        className={cn(
          "mx-auto grid max-w-[1600px] gap-10 px-4 transition-all duration-300 md:px-6",
          collapsed
            ? "md:grid-cols-[88px_minmax(0,1fr)] xl:grid-cols-[88px_minmax(0,1fr)_240px]"
            : "md:grid-cols-[280px_minmax(0,1fr)] xl:grid-cols-[280px_minmax(0,1fr)_240px]"
        )}
      >
        {/* Desktop sidebar */}
        <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] overflow-hidden md:block">
          <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        </aside>

        <main className="min-w-0 py-8">
          <article className="max-w-4xl min-w-0">
            <DocPageHeader />
            {children}
          </article>

          <div className="mt-8 max-w-4xl">
            <EditOnGithub />
          </div>

          <div className="max-w-4xl">
            <DocsPagination />
          </div>
        </main>

        <aside className="hidden xl:block">
          <div className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto py-8">
            <TableOfContents />
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  );
}
