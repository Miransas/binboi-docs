# Binboi Docs — Polish & Improvements

You are working in `~/binboi-docs`. The content is in place and builds cleanly. Now polish the visual layer to match Vercel/Linear/Clerk docs quality.

## Reference Style

- Vercel docs (vercel.com/docs)
- Linear docs (linear.app/docs)
- Clerk docs (clerk.com/docs)
- Resend docs (resend.com/docs)

Common traits:
- High text contrast (white/85 to white/95 on dark, not white/65)
- Code blocks with a header bar (language label left, Copy button right)
- Subtle borders, refined spacing, no aggressive colors
- Clean mobile experience (sidebar drawer, readable padding, scrollable code)

---

## STEP 1 — Text Contrast

In `mdx-components.tsx`, current text uses `text-white/65` for paragraphs and lists. This is too dim against the dark background.

Change these defaults:

| Element | From | To |
|---------|------|-----|
| `p` | `text-white/65` | `text-white/80` |
| `ul` / `ol` / `li` | `text-white/65` | `text-white/80` |
| `td` | `text-white/60` | `text-white/75` |
| `blockquote` | `text-white/50` | `text-white/65` |
| `h3` | `text-white/95` (keep) | `text-white` |
| Inline `code` text | `text-lime-300` (keep) | `text-lime-300` |

Verify by opening `/docs/introduction` and `/docs/cli` — text should feel readable without being harsh.

---

## STEP 2 — Code Block Header Bar (Vercel/Clerk Style)

Currently `components/docs/pre.tsx` renders a plain code block with a floating Copy button. Upgrade it to a header-bar pattern.

### Target Layout

```
┌────────────────────────────────────────┐
│ bash                          [📋 Copy] │  ← header bar (border-b)
├────────────────────────────────────────┤
│                                         │
│  binboi http 3000                       │  ← code area
│                                         │
└────────────────────────────────────────┘
```

### Specs

**Container** (the outer wrapper):
- `rounded-xl border border-white/[0.08]`
- `bg-[#0a0a0a]` or `bg-white/[0.02]`
- `overflow-hidden`
- `my-6`

**Header bar**:
- `flex items-center justify-between`
- `px-4 py-2.5`
- `border-b border-white/[0.06]`
- `bg-white/[0.02]` (subtle differentiation from code area)

**Language label** (left side of header):
- Read from `pre > code[className]` — e.g. `language-bash` → render `bash`
- `text-xs font-mono text-white/40 uppercase tracking-wider`
- If no language → show `code` as fallback

**Copy button** (right side of header):
- `inline-flex items-center gap-1.5`
- `text-xs text-white/40 hover:text-white/80`
- `transition-colors`
- Icon: `Copy` from `lucide-react` (size 14)
- On click: copy code text, swap icon to `Check` for 1.5s, then revert
- After copy, show "Copied" text briefly

**Code area** (the actual `pre`):
- `p-4`
- `overflow-x-auto`
- `text-[0.875rem]` (14px)
- `leading-[1.7]`
- `font-mono`
- Keep existing syntax highlighting (Shiki / Prism / whatever is set up)

### Implementation Notes

Look at the existing `pre.tsx`. It's likely a Client Component already (because of the copy button state). Rewrite the structure but keep:
- Existing syntax highlighting library
- Any existing className merging utility (`cn`)

If you need to refactor the children-extraction logic to grab both the language and the text, do that.

---

## STEP 3 — Inline Code Refinement

Inline `<code>` (used inside paragraphs) should feel lighter than block code:

In `mdx-components.tsx`, current:
```
"relative rounded-md border border-white/[0.08] bg-white/[0.06] px-[0.35em] py-[0.15em] font-mono text-[0.85em] text-lime-300"
```

Update to:
```
"rounded-[5px] border border-white/[0.06] bg-white/[0.04] px-[0.4em] py-[0.1em] font-mono text-[0.875em] text-lime-300 font-medium"
```

Removes the `relative` (not needed), slightly softer border/bg, more uniform font size.

---

## STEP 4 — Mobile Responsiveness

### Sidebar

`components/docs/docs-sidebar.tsx` — on small screens (`< md`), the sidebar should:
- Hide by default
- Open as a slide-in drawer when a menu button in the navbar is tapped
- Cover most of the screen (e.g. `w-[280px]`)
- Have an overlay that closes the drawer on tap

Use Radix UI Sheet or a simple custom solution with `useState` and a fixed-position panel. The navbar needs a hamburger button visible only on mobile.

### Code Blocks

Ensure long code lines scroll horizontally on mobile without breaking layout:
- `overflow-x-auto` (already there)
- `min-w-0` on the parent flex item if necessary

### Padding

Reduce horizontal padding on small screens:
- Docs container: `px-4 md:px-6 lg:px-8` (or similar)
- Code header bar: `px-3 md:px-4`

### Typography

Slightly smaller H1 on mobile:
- `text-[1.875rem] md:text-[2.25rem]`

### Test

Resize your dev browser to 375px and check:
- `/docs/introduction`
- `/docs/cli`
- `/docs/api`
- `/pricing`

Each should be readable without horizontal page-level scroll.

---

## STEP 5 — TOC (Table of Contents) Polish

`components/docs/docs-toc.tsx` — the right-side TOC:

- Active item: `text-lime-400` with a small left bar (`border-l-2 border-lime-400`)
- Inactive: `text-white/50 hover:text-white/80`
- Smooth scroll on click (`scroll-behavior: smooth` on html, or `behavior: 'smooth'` in scrollIntoView)
- Sticky position with `top-24` or whatever clears the navbar
- Hide on screens smaller than `xl`

---

## STEP 6 — Navbar Polish

`components/docs/navbar.tsx`:

- Backdrop blur: `bg-black/60 backdrop-blur-lg border-b border-white/[0.06]`
- Sticky top
- Logo on left → links to `/`
- Center nav: `Docs`, `Pricing`, `Changelog`
- Right: `Sign in` (subtle button) + `Go to dashboard` (lime accent button) → both link to `binboi.com`
- Mobile: hamburger icon (`Menu` from lucide-react) on the left, hides center nav, keeps the dashboard button

---

## STEP 7 — Footer

`components/docs/docs-footer.tsx`:

Keep simple. Three columns on desktop, stacked on mobile:

**Product**
- Binboi → binboi.com
- Vertox → vertox.com (label "Coming soon")
- Rabilt → rabilt.com (label "Coming soon")

**Docs**
- Quick Start
- CLI Reference
- API Reference
- Changelog

**Company**
- Miransas → miransas.com
- Support → /support
- Terms → /terms
- Contact → mailto:hello@miransas.com

Bottom bar:
- Left: `© 2026 Miransas. All rights reserved.`
- Right: GitHub + Twitter/X icons (small, white/40 → white/80 on hover)

---

## STEP 8 — Heading Anchors

`components/docs/heading-link.tsx`:

When hovering a heading (H2/H3), show a small `#` icon to the left or right. Clicking it copies the URL with the anchor.

Style:
- `opacity-0 group-hover:opacity-100 transition-opacity`
- `text-white/30 hover:text-lime-400`
- Use `Link2` or `Hash` icon from lucide-react (size 16)

The MDX heading components already generate IDs (via the existing `slugify` helper). Make sure the IDs match between the heading and the TOC links.

---

## STEP 9 — Edit on GitHub

`components/docs/edit-on-github.tsx`:

At the bottom of each docs page, after the content but before pagination, show:

```
✏️ Edit this page on GitHub
```

Link should compute from the current pathname:
```
https://github.com/Miransas/binboi-docs/edit/main/app/docs/<slug>/page.mdx
```

Style:
- `text-sm text-white/40 hover:text-lime-400`
- `inline-flex items-center gap-2`
- Pencil icon from lucide-react

---

## STEP 10 — Page Pagination

`components/docs/docs-pagination.tsx`:

At the bottom of every docs page, show Previous / Next links based on the sidebar order.

```
┌──────────────────┬──────────────────┐
│ ← Previous       │ Next →           │
│ Introduction     │ Installation     │
└──────────────────┴──────────────────┘
```

Style:
- Two cards side-by-side (`grid grid-cols-2 gap-4 mt-12`)
- Card: `rounded-xl border border-white/[0.08] p-4 hover:bg-white/[0.02] transition-colors`
- Caption: `text-xs text-white/40 uppercase tracking-wider`
- Title: `text-sm text-white font-medium`
- Empty cell (first/last page): show empty div, keep grid alignment

The sidebar order is defined somewhere (likely in a config or generated). Reuse that source.

---

## STEP 11 — Search (Optional Polish)

If `docs-search-modal.tsx` is functional, just polish the styling:

- Input: `bg-white/[0.04] border-white/[0.06] focus:border-lime-400/40`
- Results: subtle border, hover lime accent
- Cmd+K shortcut hint visible

If not functional, skip — leave it for later.

---

## STEP 12 — Verify and Push

```bash
cd ~/binboi-docs
npm run typecheck
npm run build
```

Both should pass.

Open the dev server and click through:

- `/`
- `/docs/introduction`
- `/docs/quick_start`
- `/docs/cli`
- `/docs/api`
- `/docs/authentication`
- `/pricing`
- `/changelog`

On both desktop (1440px+) and mobile (375px). Check:

- Text contrast comfortable, not dim
- Code blocks have language label + copy button in header
- Copy button works (shows "Copied" for 1.5s)
- Sidebar slides in on mobile
- TOC visible on xl screens, hidden below
- Navbar sticky and blurred
- Footer 3 columns desktop, stacked mobile
- Heading anchors appear on hover
- Edit on GitHub link at bottom of each doc page
- Pagination cards at bottom

Commit:

```bash
git add -A
git commit -m "feat: polish docs UI — Vercel/Clerk style code blocks, mobile drawer, contrast"
git push origin main
```

---

## STEP 13 — Report Back

When done, summarize:

1. Files changed (with byte counts)
2. Specific visual changes per component
3. `npm run build` output (success or any warnings)
4. Any item from this plan you chose to skip (with reason)

---

## Constraints

- TypeScript strict, no `any`
- No new dependencies — use what's in `package.json`
- Keep existing color tokens (lime-400 accent, dark background)
- Mobile breakpoint: `md` (768px) for sidebar/nav, `xl` (1280px) for TOC
- Test at 375px, 768px, 1024px, 1440px before declaring done