"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { docsConfig } from "@/lib/docs-config";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type SidebarProps = {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  isMobile?: boolean;
  onLinkClick?: () => void;
};

export function Sidebar({ collapsed, setCollapsed, isMobile, onLinkClick }: SidebarProps) {
  const pathname = usePathname();

  return (
    <TooltipProvider delayDuration={100}>
      {/* Kapsayıcıya genel bir transition ekledik */}
      <div className="h-full border-r border-white/[0.08] transition-all duration-300 ease-in-out">
        <div className="flex h-full flex-col">
          {/* Header — hidden on mobile */}
          {!isMobile && (
            <div
              className={cn(
                "flex h-14 items-center border-b border-white/[0.08] transition-all duration-300 ease-in-out",
                collapsed ? "justify-center px-2" : "justify-between px-4"
              )}
            >
              {!collapsed && (
                // Opaklık 35'ten 60'a çıkarıldı, okunabilirlik arttı
                <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60 transition-opacity duration-300">
                  Docs
                </div>
              )}

              <button
                type="button"
                onClick={() => setCollapsed((prev) => !prev)}
                // Butona hover ve active animasyonları eklendi (scale-105 ve scale-95)
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02] text-white/70 transition-all duration-200 ease-in-out hover:scale-105 hover:bg-white/[0.08] hover:text-white active:scale-95"
                aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
              >
                {collapsed ? (
                  <PanelLeftOpen className="h-4 w-4" />
                ) : (
                  <PanelLeftClose className="h-4 w-4" />
                )}
              </button>
            </div>
          )}

          <div className="flex-1 overflow-y-auto py-4">
            <nav className="space-y-7 px-2">
              {docsConfig.map((section) => (
                <div key={section.title}>
                  {!collapsed ? (
                    // Başlık opaklığı 30'dan 50'ye çıkarıldı
                    <h4 className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50 transition-opacity duration-300">
                      {section.title}
                    </h4>
                  ) : (
                    <div className="mb-2 flex justify-center">
                      <div className="h-px w-8 bg-white/[0.12] transition-all duration-300" />
                    </div>
                  )}

                  {/* Menü elemanları arasına çok ufak bir boşluk (space-y-1) */}
                  <div className="space-y-1">
                    {section.items.map((item) => {
                      const active =
                        pathname === item.href ||
                        (item.href !== "/docs" && pathname.startsWith(item.href + "/"));
                      const Icon = item.icon;

                      const link = (
                        <Link
                          href={item.href}
                          onClick={onLinkClick}
                          className={cn(
                            // ease-out eklendi, animasyon daha doğal duracak
                            "group flex items-center rounded-lg text-sm transition-all duration-200 ease-out",
                            collapsed
                              ? "justify-center px-2 py-2"
                              : "gap-2.5 px-3 py-2",
                            active
                              ? "bg-white/[0.08] text-white shadow-sm" // Aktif duruma hafif bir glow/gölge
                              : "text-white/60 hover:bg-white/[0.05] hover:text-white" // İnatçı karanlık metinler açıldı
                          )}
                        >
                          {Icon && (
                            <Icon
                              className={cn(
                                "h-4 w-4 shrink-0 transition-colors duration-200",
                                active ? "text-lime-400" : "text-white/50 group-hover:text-white/90"
                              )}
                            />
                          )}
                          {!collapsed && (
                            <span className="truncate transition-opacity duration-200">{item.title}</span>
                          )}
                        </Link>
                      );

                      if (!collapsed) return <div key={item.href}>{link}</div>;

                      return (
                        <Tooltip key={item.href}>
                          <TooltipTrigger asChild>{link}</TooltipTrigger>
                          <TooltipContent
                            side="right"
                            sideOffset={12}
                            // Tooltip de biraz canlandırıldı
                            className="border-white/10 bg-[#0b0b0b] text-white/90 shadow-xl"
                          >
                            {item.title}
                          </TooltipContent>
                        </Tooltip>
                      );
                    })}
                  </div>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}