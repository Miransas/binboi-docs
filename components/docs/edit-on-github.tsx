"use client";

import { usePathname } from "next/navigation";
import { Pencil } from "lucide-react";

export function EditOnGithub() {
  const pathname = usePathname();
  const repoBase = "https://github.com/Miransas/binboi-docs/edit/main/app";
  const editUrl = `${repoBase}${pathname}/page.mdx`;

  return (
    <a
      href={editUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-lime-400"
    >
      <Pencil className="h-3.5 w-3.5" />
      <span>Edit this page on GitHub</span>
    </a>
  );
}
