<div align="center">
  <a href="https://binboi.com">
    <img src="./public/miransas-logo.png" alt="Miransas" width="64" height="64" />
  </a>

  <h1>Binboi Docs</h1>

  <p>
    Public documentation for <a href="https://binboi.com">Binboi</a> — self-hosted tunnels for developers.<br />
    Live at <a href="https://docs.binboi.com"><strong>docs.binboi.com</strong></a>
  </p>

  <p>
    <a href="https://binboi.com">Website</a>
    ·
    <a href="https://docs.binboi.com">Docs</a>
    ·
    <a href="https://github.com/Miransas/binboi">Binboi (core)</a>
    ·
    <a href="https://miransas.com">Miransas</a>
  </p>
</div>

---

## About

This repository hosts the public documentation site for [Binboi](https://binboi.com), built with Next.js 16 + MDX. It is part of the [Miransas](https://miransas.com) software family.

Sister repositories:

| Repo | Description |
|------|-------------|
| [`Miransas/binboi`](https://github.com/Miransas/binboi) | Binboi control plane, CLI, and web dashboard |
| [`Miransas/binboi-docs`](https://github.com/Miransas/binboi-docs) | This repo — public docs site |

## Stack

- **Framework**: Next.js 16 (App Router) + React 19
- **Content**: MDX via `@next/mdx`
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion + Lenis smooth scroll
- **Theme**: Dark, lime-400 accent
- **Hosting**: Vercel

## Project Structure

```
binboi-docs/
├── app/
│   ├── docs/              # Documentation pages (MDX)
│   │   ├── introduction/
│   │   ├── quick_start/
│   │   ├── installation/
│   │   ├── cli/
│   │   ├── api/
│   │   └── ...
│   ├── blog/              # Blog posts
│   ├── changelog/         # Release notes
│   ├── pricing/           # Pricing page
│   ├── showcase/          # Customer showcase
│   ├── support/           # Support page
│   ├── terms/             # Terms and policies
│   ├── layout.tsx
│   ├── page.tsx           # Home
│   └── globals.css
├── components/
│   ├── docs/              # Docs-specific components
│   │   ├── docs-shell.tsx
│   │   ├── docs-sidebar.tsx
│   │   ├── docs-toc.tsx
│   │   ├── navbar.tsx
│   │   ├── pre.tsx
│   │   └── ...
│   └── ui/                # Shared UI primitives
├── lib/                   # Utilities
├── hooks/                 # React hooks
├── public/                # Static assets
├── mdx-components.tsx     # MDX → React component map
├── next.config.ts
└── package.json
```

## Local Development

### Prerequisites

- Node.js 20+
- npm 10+

### Setup

```bash
git clone https://github.com/Miransas/binboi-docs.git
cd binboi-docs
npm install
```

### Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the dev server with HMR |
| `npm run build` | Production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript without emitting |

## Writing Content

All documentation lives under `app/docs/<slug>/page.mdx`. Each file is rendered through the App Router, so the URL `/docs/quick_start` maps to `app/docs/quick_start/page.mdx`.

### Page Template

```mdx
# Page Title

One or two sentence introduction.

## Section

Content with `inline code` and:

```bash
binboi http 3000
```

## Next Steps

- [Related Page](/docs/related)
- [Another Page](/docs/another)
```

### Available MDX Components

All standard markdown elements (`h1`–`h4`, `p`, `ul`, `ol`, `a`, `code`, `pre`, `table`, `blockquote`, `hr`) are styled in [`mdx-components.tsx`](./mdx-components.tsx). Use plain markdown — no imports required.

For code blocks, always include a language tag:

```mdx
```bash
binboi tcp 5432
```
```

Supported languages: `bash`, `typescript`, `tsx`, `javascript`, `jsx`, `python`, `rust`, `go`, `json`, `yaml`, `http`, `powershell`, `ini`, `sql`.

### Adding a New Page

1. Create the folder: `app/docs/<your-slug>/`
2. Add `page.mdx` with the template above
3. Update the sidebar in `components/docs/docs-sidebar.tsx` (or the navigation config file)
4. Run `npm run build` to verify

### Style Guide

- **Tone**: Direct, technical, dev-friendly. Reference: Resend, Linear, Vercel docs.
- **No marketing fluff** — every section should teach or unblock the reader.
- **Short paragraphs**, code-first.
- **One H1 per page.**
- **Every page ends with "Next Steps"** linking to 2–3 related pages.
- **Use real URLs**: `binboi.com`, `api.binboi.com`. Never use example placeholders without explanation.
- **External links open in the same tab** unless they're outside the docs (use `https://`).

### Adding Images

Place static images in `public/` and reference them with absolute paths:

```mdx
![Dashboard](/screenshots/dashboard.png)
```

## Deployment

The site auto-deploys to Vercel on every push to `main`.

| Environment | Branch | URL |
|-------------|--------|-----|
| Production  | `main` | [docs.binboi.com](https://docs.binboi.com) |
| Preview     | PR branches | `<pr>.binboi-docs.vercel.app` |

### Environment Variables

This site has no required environment variables. Optional analytics keys can be set in the Vercel dashboard.

## Conventions

- **Branching**: short-lived feature branches off `main`, squash on merge.
- **Commits**: conventional commits (`docs:`, `feat:`, `fix:`, `chore:`).
- **PRs**: include a screenshot of the changed page in the description.

## Contributing

Found a typo, broken link, or outdated example? Two ways to help:

### Quick fix

Click the **Edit on GitHub** link at the bottom of any docs page. It opens the source file in GitHub's editor — propose a change directly.

### Pull request

```bash
git checkout -b docs/fix-cli-example
# edit files
git commit -m "docs: fix --subdomain example in cli page"
git push origin docs/fix-cli-example
```

Open a PR against `main`. A preview deployment is built automatically.

For larger changes (new sections, restructured nav), open an issue first so we can align on direction.

## Roadmap

Items planned for the next minor versions:

- [ ] Algolia search integration
- [ ] Versioned docs (v1, v2)
- [ ] Interactive API explorer
- [ ] Multi-language (English first, Turkish next)
- [ ] Embedded REPL for CLI snippets
- [ ] Light mode toggle

Track progress on the [project board](https://github.com/orgs/Miransas/projects).

## License

Documentation content is licensed under [Creative Commons Attribution 4.0](./LICENSE). Code samples are MIT.

## Maintained By

[Miransas](https://miransas.com) — building tools developers love.

- [Binboi](https://binboi.com) — self-hosted tunnels
- [Vertox](https://vertox.com) — coming soon
- [Rabilt](https://rabilt.com) — coming soon

Questions? Email [hello@miransas.com](mailto:hello@miransas.com).