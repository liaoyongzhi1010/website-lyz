# Site Visual Refresh Design (Modern Tech, Bright)

Date: 2026-01-28

## Goals
- Replace the current black/white look with a modern, bright tech aesthetic.
- Keep content structure and routes intact while improving visual hierarchy.
- Establish a reusable visual system that applies across all site pages.

## Non-goals
- No new routes, data models, or CMS changes.
- No major content rewrites or information architecture changes.
- No dark mode in this iteration.

## Design Direction
- Theme: modern tech, bright base, blue + cyan accents.
- Background: light blue-gray base with subtle radial gradients and soft texture.
- Surfaces: white and soft-blue panels with gentle glow and thin blue-gray borders.
- Contrast: cool gray text, deep blue-black for headings.

## Typography
- Headline/body: Sora (Latin), Noto Sans SC (CJK) via next/font.
- Sizing: slightly larger headings, relaxed body line-height.
- Tracking: subtle tightening for headlines, normal for body.

## Color Tokens (Conceptual)
- --bg: #f4f7fb (light blue-gray base)
- --surface: #ffffff
- --surface-soft: #f2f7ff
- --border: #dbe6f5
- --text: #0b1220
- --muted: #5b6b82
- --primary: #2563eb (cobalt)
- --accent: #22d3ee (cyan)
- --glow: rgba(37, 99, 235, 0.18)

## Layout + Section Rhythm

- Keep existing page structure (Header, main content, Footer).
- Add soft section panels behind key blocks to improve visual rhythm.
- Preserve grid layout for featured projects and metrics.

## Component Styling Updates

- Header: glass effect (semi-transparent white + blur) with thin gradient underline.
- Hero: wide panel, subtle radial glow, vertical accent line, gradient CTA.
- MetricBar: "data capsule" panels with soft glow and refined borders.
- ProjectCard: hover lift + glow, tags use soft-blue pills.
- TechStack: soft panel background with hover light-up tags.
- Footer: glass strip with muted text.

## Motion
- Staggered fade/slide-in for sections on load.
- Slow background gradient drift.
- Respect prefers-reduced-motion.

## Accessibility
- Preserve color contrast for text and buttons.
- Visible focus states on links and buttons.
- Maintain semantic headings and readable line-height.

## Implementation Notes

Key files to adjust:
- src/app/globals.css: global variables, backgrounds, base typography.
- src/app/layout.tsx: update font imports + body classes.
- src/components/site/Header.tsx: glass header styling.
- src/components/site/Hero.tsx: hero visual system.
- src/components/site/MetricBar.tsx
- src/components/site/ProjectCard.tsx
- src/components/site/TechStack.tsx
- src/components/site/Footer.tsx

## Verification
- Visual check on /zh and /en at sm/md/lg breakpoints.
- Confirm hover/focus visibility.
- Verify typography and spacing consistency.
