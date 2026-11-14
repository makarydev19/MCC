# MCC Design System: "Built Solid"

Figma: https://www.figma.com/design/b500KHhzIBBb7ariHcT7pP
(01 · Design System, 02 · Homepage, 03 · Inner pages)

## Tokens (src/styles/globals.css → tailwind.config.ts)
| Token | Light | Dark | Tailwind |
|---|---|---|---|
| bg | #F7F6F3 | #0B0F14 | `bg-bg` |
| surface | #FFFFFF | #131A22 | `bg-surface` |
| muted | #EFEDE8 | #1A222C | `bg-muted` |
| line | #E4E1DA | #243040 | `border-line` |
| fg | #0F172A | #EEF2F6 | `text-fg` |
| subtle | #475569 | #94A3B8 | `text-subtle` |
| brand (MCC red) | #C72124 | #E5383B | `bg-brand` / `text-brand` |
| ink | #0B0F14 | #070A0D | `bg-ink` |

Wrap a block in `.dark` or `.light` to force a theme locally.

## Type
- Display: **Archivo** 700–900, tight tracking (`font-display`, `.h-display`, `.h-section`)
- Body: **Inter** 400–600 (`font-body`, `.lead`)
- Eyebrow: `.eyebrow` (13px caps, +18% tracking, red bar)

## Layout
`.container-x` (1280px max, 16/24/32px gutters) · `.section-y` (80/112/128px) · radius 12 (buttons) / 16–20 (cards, media) / 28 (heroes)

## Components
`.btn-brand` `.btn-ink` `.btn-ghost` `.btn-ghost-light` · `.card` · `.field` + `.label`
React: `Reveal`, `WordsReveal` (src/components/ui/reveal.tsx), `PageHero`, `SectionHeading`

## Motion
Ease `cubic-bezier(.22,1,.36,1)`. Hover 150–250ms, reveals 700ms with 60–80ms stagger,
hero Ken Burns 8s + crossfade 1.2s, marquee 40s. Transform/opacity only.
`MotionConfig reducedMotion="user"` + a CSS `prefers-reduced-motion` override.
