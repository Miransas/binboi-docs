/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { Pencil, GitBranch } from "lucide-react";
import { cn } from "@/lib/utils";

type Heading = {
  id: string;
  text: string;
  level: number;
};

const GITHUB_EDIT_BASE =
  "https://github.com/Miransas/binboi-docs/edit/main/app/docs";

export function TableOfContents() {
  const pathname = usePathname();
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState("");

  const editUrl = useMemo(() => {
    let docPath = pathname.replace(/^\/docs/, "");
    if (!docPath || docPath === "/") docPath = "/introduction";
    return `${GITHUB_EDIT_BASE}${docPath}/page.mdx`;
  }, [pathname]);

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll("article h2, article h3")
    ) as HTMLHeadingElement[];

    const items = elements
      .filter((el) => el.id && el.innerText.trim().length > 0)
      .map((el) => ({
        id: el.id,
        text: el.innerText.trim(),
        level: el.tagName === "H2" ? 2 : 3,
      }));

    setHeadings(items);
    if (items.length > 0) setActiveId(items[0].id);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              (a.target as HTMLElement).offsetTop -
              (b.target as HTMLElement).offsetTop
          );
        if (visible.length > 0) {
          setActiveId((visible[0].target as HTMLElement).id);
        }
      },
      { rootMargin: "0px 0px -70% 0px", threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <div className="space-y-6">
      {headings.length > 0 && (
        <div>
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
            On this page
          </p>

          <nav>
            <ul className="space-y-0.5">
              {headings.map((heading) => {
                const isActive = activeId === heading.id;
                return (
                  <li key={heading.id}>
                    <a
                      href={`#${heading.id}`}
                      className={cn(
                        "block border-l-2 py-1 text-[0.8125rem] transition-colors",
                        heading.level === 3 ? "pl-5" : "pl-3",
                        isActive
                          ? "border-lime-400 text-white"
                          : "border-transparent text-white/40 hover:border-white/20 hover:text-white/70"
                      )}
                    >
                      {heading.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}

      <div className="h-px bg-white/[0.06]" />

      <div className="space-y-3">
        <a
          href={editUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-[0.8rem] text-white/40 transition-colors hover:text-lime-400"
        >
          <Pencil className="h-3.5 w-3.5" />
          Edit this page on GitHub
        </a>

        <a
          href="https://github.com/Miransas/binboi"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-[0.8rem] text-white/40 transition-colors hover:text-white/70"
        >
          <GitBranch className="h-3.5 w-3.5" />
          GitHub
        </a>
      </div>
    </div>
  );
}
