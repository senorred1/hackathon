# CHOMPERZ™ Design System

## Brand Overview

Dark neon aesthetic — maximalist, irreverent, spiritual-dental. Heavy animation, glow effects, emoji-forward.

---

## Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Pink | `#ff006e` | Primary CTAs, marquee bar, nav border, section labels, hover glows |
| Cyan | `#00b4d8` | Stats bar borders, accent dividers, logo shimmer |
| Lime | `#ccff00` | Stat numbers, ghost button, outline headings, hover color, credential pills |
| Purple | `#7b2d8b` | Tier-1 pricing, doctor avatar gradient |
| Gold | `#ffd700` | Star ratings, doctor bio emphasis |
| Deep | `#0d0d1a` | Page background |
| Surface | `#09091a` | Alternate section background (about, etc.) |
| Footer | `#030308` | Footer background |
| Text | `#ffffff` | All display text |
| Muted | `rgba(255,255,255,0.75)` | Body copy |
| Border | `rgba(255,255,255,0.08)` | Card borders |

All colors are designed for dark backgrounds. Glow effects (box-shadow, text-shadow, filter: drop-shadow) are core to the aesthetic.

---

## Typography

### Display Font
`'Arial Black', 'Arial Bold', Arial, sans-serif`

- Weight: 900
- Transform: `uppercase` on essentially everything
- Letter-spacing: wide (`2px`–`5px` on labels, `3px` on buttons)
- Used for: headings, nav, buttons, stat numbers, labels, credentials

### Body Font
`Georgia, serif`

- Style: italic
- Line-height: `1.75`–`1.85`
- Color: `rgba(255,255,255,0.75)`
- Used for: paragraph copy, testimonials, pricing feature lists, footer descriptions, form labels

### Type Scale

| Role | Size | Notes |
|------|------|-------|
| Hero H1 | `clamp(3.5rem, 11vw, 9rem)` | `line-height: 0.88` |
| CTA H2 | `clamp(2.8rem, 7vw, 5.5rem)` | `line-height: 0.92` |
| Section H2 | `clamp(2rem, 5vw, 4rem)` | `line-height: 0.95` |
| Section Label | `0.65rem` | `letter-spacing: 5px`, pink, uppercase |
| Nav Links | `0.8rem` | `letter-spacing: 2px`, uppercase |
| Body | `0.92rem`–`0.95rem` | Georgia, italic |
| Small | `0.65rem`–`0.72rem` | Labels, badges, disclaimers |

---

## Animations

All animations are CSS keyframe-based — no JS animation libraries.

| Name | Element | Duration | Effect |
|------|---------|----------|--------|
| `logoShimmer` | Logo text gradient | 3s linear infinite | Gradient slides across |
| `navPulse` | Nav CTA button | 1.8s ease-in-out | Box-shadow expands |
| `eyebrowBounce` | Hero eyebrow / badges | 0.6s ease alternate | translateY(-5px) |
| `pulseGlow` | Hero glow blob | 4s ease-in-out alternate | scale 1→1.4 |
| `btnHot` | Primary button | 1.4s ease-in-out | Pink box-shadow pulses |
| `bigBtnBreath` | CTA big button | 1.5s ease-in-out | White box-shadow pulses |
| `avatarPulse` | Doctor avatar border | 5s linear | Cycles lime→pink→cyan |
| `blobFloat` | About visual card | 4s ease-in-out | translateY + rotate |
| `floatUp` | Background emojis | 7–13s linear | Float from bottom, spin 540° |
| `toothSpin` | CTA section tooth | 20s linear | Full 360° rotation |
| `marquee` | Marquee text | 22s linear | Scrolls right to left |

JS-driven: random emoji pops every 2.8s (in BaseLayout), tooth cursor follows mouse.

---

## Layout

- Max content width: `1200px`, centered
- Section padding: `80px 48px` → `60px 20px` on mobile
- Header: sticky, `backdrop-filter: blur(12px)`, `border-bottom: 3px solid #ff006e`
- Gradient dividers between all major sections

### Grid Patterns

| Section | Layout |
|---------|--------|
| About | `grid-template-columns: 1fr 1fr` (1-col ≤900px) |
| Doctor card | `grid-template-columns: 240px 1fr` (1-col ≤900px) |
| Services | `repeat(auto-fit, minmax(300px, 1fr))` |
| Pricing | `repeat(auto-fit, minmax(280px, 1fr))` |
| Testimonials | `repeat(auto-fit, minmax(300px, 1fr))` |
| Footer | `2fr 1fr 1fr 1fr` → 2-col → 1-col |

---

## Component Patterns

### Service Cards
- Left accent bar (3px wide) cycling through brand colors by `:nth-child`
- Hover: `translateY(-6px)`, border lightens, box-shadow deepens

### Pricing Cards
- Tier 1 (purple gradient) / Tier 2 (pink glow, 2px border) / Tier 3 (lime glow, 2px border)
- Badge: absolute top-right, bounces
- Feature list: `::before` content `'🦷 '`

### Gradient Divider
`linear-gradient(90deg, transparent, #ff006e, #00b4d8, #ccff00, transparent)` — 2px height

### Credential Pills
`background: rgba(204,255,0,.08)`, `border: 1px solid rgba(204,255,0,.3)`, lime text, uppercase, 20px border-radius

---

## Responsive Breakpoints

- `≤900px` — About collapses to 1-col, Doctor card collapses, header padding reduces
- `≤600px` — Section padding reduces to 20px sides, footer becomes 1-col
- `≤480px` — Logo subtitle hidden, non-CTA nav links hidden

---

## Accessibility Notes

- Custom cursor hidden for screen readers (pointer-events: none)
- Floating background elements have `aria-hidden="true"`
- Decorative emoji elements have `aria-hidden="true"`
- Navigation uses `aria-label="Main navigation"`
- Stats section uses `aria-label="Practice statistics"`
- Star ratings use `aria-label="5 out of 5 stars"` on `.stars` spans
- Color contrast: white text on dark backgrounds passes WCAG AA
- Lime (`#ccff00`) on dark (`#0d0d1a`) ≈ 12.5:1 contrast ratio ✓
- Pink (`#ff006e`) on dark — used for decorative labels only, not body text
