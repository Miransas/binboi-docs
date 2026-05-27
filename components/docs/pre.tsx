"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const LANG_LABELS: Record<string, string> = {
  bash: "bash",
  sh: "bash",
  shell: "bash",
  zsh: "bash",
  ts: "ts",
  tsx: "tsx",
  js: "js",
  jsx: "jsx",
  typescript: "ts",
  javascript: "js",
  json: "json",
  yaml: "yaml",
  yml: "yaml",
  toml: "toml",
  rust: "rs",
  rs: "rs",
  python: "py",
  py: "py",
  go: "go",
  css: "css",
  html: "html",
  sql: "sql",
  nginx: "nginx",
  dockerfile: "docker",
  powershell: "ps1",
  ps1: "ps1",
  xml: "xml",
  ini: "ini",
  http: "http",
};

function getLang(className?: string): string {
  if (!className) return "code";
  const match = className.match(/language-(\w+)/);
  if (!match) return "code";
  return LANG_LABELS[match[1]] ?? match[1];
}

function extractCodeText(node: unknown): string {
  if (typeof node === "string") return node;
  if (Array.isArray(node)) return node.map(extractCodeText).join("");
  if (node && typeof node === "object" && "props" in (node as object)) {
    const el = node as { props?: { children?: unknown } };
    return extractCodeText(el.props?.children);
  }
  return "";
}

interface PreProps extends React.HTMLAttributes<HTMLPreElement> {
  children?: React.ReactNode;
}

export function Pre({ children, className, ...props }: PreProps) {
  const [copied, setCopied] = useState(false);

  // children is the <code> element rendered by rehype-pretty-code
  const codeEl = children as React.ReactElement<{ className?: string; children?: React.ReactNode }> | null;
  const lang = getLang(codeEl?.props?.className);
  const codeText = extractCodeText(codeEl?.props?.children).trimEnd();

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(codeText);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard unavailable
    }
  }

  return (
    <div className="my-6 overflow-hidden rounded-xl border border-white/[0.08] bg-[#0a0a0a]">
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-white/[0.06] bg-white/[0.02] px-3 py-2 md:px-4">
        <span className="font-mono text-[0.7rem] font-medium uppercase tracking-widest text-white/40">
          {lang}
        </span>

        <button
          type="button"
          onClick={handleCopy}
          aria-label={copied ? "Copied" : "Copy code"}
          className="inline-flex items-center gap-1.5 text-[0.7rem] text-white/40 transition-colors hover:text-white/80"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-lime-400" strokeWidth={2.5} />
              <span className="text-lime-400">Copied</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code area */}
      <pre
        className={cn(
          "overflow-x-auto p-4 font-mono text-[0.875rem] leading-[1.7] text-white/85",
          className
        )}
        {...props}
      >
        {children}
      </pre>
    </div>
  );
}
