# Site Factory Project

A Claude-powered website generation system. The user provides a reference URL and Claude builds a better version of that site automatically.

## TRIGGER: When the User Provides a URL

**When the user's message contains a website URL, immediately begin the full pipeline below. Do NOT ask clarifying questions first. Do NOT stop between phases. Run Phase 1 → 2 → 3 → 4 end-to-end in a single session.**

The user may also provide additional context (brand notes, specific requests, content to prioritize). Factor that into every phase but don't wait for it — the URL alone is sufficient to start.

Read ALL agent instruction files in `.claude/agents/` before beginning work. These contain the detailed playbook for each phase.

### Sample Prompts

**Minimum (just the URL):**
```
https://example.com
```

**Recommended:**
```
Build a homepage for: https://example.com

Use the existing content from their site but make the design significantly better.
Focus on conversion — make sure the section ordering, CTAs, and visual hierarchy
are optimized to turn visitors into customers.
```

**With extra context:**
```
Build a homepage for: https://example.com

Context:
- This is a [type of business] serving [audience]
- Their strongest selling points are [X, Y, Z]
- The current site's hero messaging is weak — prioritize a stronger headline
- Keep their testimonials and stats, those are real
- They want to emphasize [specific service/product] more prominently
- Brand feel: [modern/corporate/warm/bold/minimal]

Make the design significantly better than what they have. Optimize for conversion.
```

## Commands

- `npm run dev` - Start development server (localhost:4321)
- `npm run build` - Build for production
- `npm run test` - Run Playwright tests
- `npm run deploy` - Deploy to Cloudflare Pages

## The Full Pipeline

### Phase 1: Analyze Reference Site

Use the **site-analyzer** agent instructions to:

1. Crawl the reference URL to discover all pages (max 100)
2. Take screenshots of key pages (homepage, main nav items)
3. **Extract the actual text content from the homepage** — every heading, paragraph, CTA, testimonial, stat, etc. This content will be reused and improved.
4. Extract design values:
   - **Colors**: Primary, secondary, accent, text, background, button colors (as hex)
   - **Typography**: Font families, weights, heading sizes, body size, line heights
   - **Spacing**: Section padding, container width, grid gaps, card padding
   - **Homepage section ordering**: Exact top-to-bottom list of all sections
5. Analyze design patterns (hero style, card layouts, CTA patterns, nav, footer)
6. Write `reference/analysis.md` with all findings (including extracted content)
7. Update `.site-factory/state.json` with discovered pages

If `intake/INTAKE.md` exists, read it for additional brand context, voice, and content.
If `intake/sitemap.md` exists, use it to determine planned pages. Otherwise, plan pages based on discovered nav items.
If `intake/branding/` has colors.md or fonts.md, use those instead of extracted values.

### Phase 2: Build Design System

Use the **color-system-generator** and **typography-system-generator** agent instructions to:

1. **Colors**: Take extracted/provided brand colors and generate:
   - Full palettes (50-950 shades) for primary, secondary, and neutral
   - Semantic tokens (background, foreground, muted, border, ring, accent, destructive, success)
   - Verify all text/background combos against WCAG 2.2 AA (4.5:1 body text, 3:1 large text)
   - Write `@theme` color block to `src/styles/global.css`

2. **Typography**: Take extracted/provided fonts and generate:
   - Font loading setup (Google Fonts preconnect or self-hosted @font-face with font-display: swap)
   - Fluid type scale using clamp() (xs through 5xl)
   - Heading hierarchy (h1-h6 with size, weight, line-height, letter-spacing)
   - Write typography tokens to `@theme` block
   - Update `src/layouts/BaseLayout.astro` with font loading

3. **Spacing & Patterns**: Define in `@theme`:
   - Section spacing (fluid 64-96px)
   - Container (max-w-7xl with responsive padding)
   - Border radius scale
   - Button styles (.btn-primary, .btn-secondary)

4. **Document everything** in `src/DESIGN.md`

### Phase 3: Generate Homepage

This is the most important phase. The goal is to create a homepage that captures the same brand feel as the reference site but is **significantly better** in design quality.

**IMPORTANT: Use the `compound-engineering:frontend-design` skill when building the homepage.** Invoke it via the Skill tool to ensure the output is distinctive, polished, and avoids generic AI aesthetics. The skill should be given:
- The reference site analysis (section ordering, design patterns, screenshots)
- The design system (colors, typography, spacing from DESIGN.md)
- The brand context (from INTAKE.md if available)
- Clear instruction: "Build a homepage inspired by [reference URL] but with significantly better design quality — better visual hierarchy, more refined spacing, more polished interactions, and stronger overall aesthetic."

**Homepage generation steps:**

1. **Create base layout** (`src/layouts/BaseLayout.astro`):
   - HTML structure with head, body
   - Import global.css
   - Font loading tags
   - SEOHead component integration
   - Slots for content

2. **Create shared components** using **component-builder** agent instructions:
   - `src/components/Header.astro` — Navigation from discovered/planned pages
   - `src/components/Footer.astro` — Contact info, links, social
   - Section components matching the reference site's section ordering

3. **Generate content** using **content-writer** agent instructions (homepage mode):
   - **Start from the existing reference site content** — reuse headings, copy, testimonials, stats, and CTAs extracted in Phase 1
   - Improve the content where needed: tighten headlines, strengthen CTAs, clarify value propositions
   - Think critically about which sections should be on the homepage for maximum conversion — don't just replicate the reference, optimize the section ordering and content hierarchy
   - Content hierarchy: most important message in hero, proof in middle, conversion at bottom
   - Hero: headline (5-10 words), subheadline, primary CTA, optional secondary CTA
   - Value propositions / features (3-4 items with icon concepts, titles, descriptions)
   - Social proof / testimonials (if reference has them)
   - About / story section
   - Secondary CTA at bottom

4. **Handle images** using **image-sourcer** agent instructions:
   - Audit what's needed (hero, icons, OG image, favicon)
   - Use intake/images/ if provided
   - Generate CSS/SVG alternatives for abstract backgrounds
   - Ensure hero image has fetchpriority="high" and loading="eager"
   - All images must have explicit width/height for CLS prevention

5. **Generate the homepage** (`src/pages/index.astro`):
   - Follow the reference site's section ordering as a starting point, but optimize for conversion
   - Use the design system tokens throughout
   - Make it responsive (mobile-first with sm/md/lg/xl breakpoints)
   - Ensure accessibility (semantic HTML, ARIA, focus states, contrast)
   - **All internal navigation links to other pages should point to /404** for now (only the homepage is being built)
   - The Header nav and Footer links should still show the correct labels but href to the 404 page

### Phase 4: Review & Present

1. **Start dev server**: `npm run dev`

2. **Run visual QA** using **visual-qa** agent instructions:
   - Screenshot at 375px, 768px, 1280px, 1440px
   - Check layout integrity, typography, images, spacing
   - Compare against reference screenshots

3. **Run design review** using **design-reviewer** agent instructions:
   - WCAG 2.2 AA compliance
   - Responsive breakpoints
   - Color contrast
   - Heading hierarchy
   - Image alt text

4. **Run SEO audit** using **seo-auditor** agent instructions:
   - Meta tags, OG tags, Twitter cards
   - Structured data (Organization, WebSite)
   - Core Web Vitals readiness

5. **Auto-finalize** (no user approval needed — this runs unattended):
   - Fix any critical issues found during review (broken layouts, contrast failures, missing alt text)
   - Run `npm run build` to verify the site builds cleanly
   - Update state to `homepage_approved`

### Phase 5: Commit & Push

After Phase 4 completes successfully:

1. Stop the dev server if running
2. Run `npm run build` one final time to ensure clean build
3. Commit all changes:
   ```
   git add -A
   git commit -m "Build homepage for <domain>"
   ```
4. Push to remote:
   ```
   git push origin main
   ```
5. Print a summary of what was built
6. Run `/exit` to end the session

## Page Lifecycle

```
Reference Site → Discovered → Planned → Built
                     ↓
              Not Planned → Redirect
```

### State Structure

`.site-factory/state.json` tracks:

```json
{
  "phase": "not_started | analyzing | design_system | homepage | homepage_pending_approval | homepage_approved | complete",
  "pages": {
    "discovered": [{ "path": "/old-page", "title": "Old", "in_nav": false }],
    "planned": ["/", "/about", "/services"],
    "built": ["/"],
    "redirects": [{ "from": "/old-page", "to": "/" }]
  }
}
```

### Redirect Handling

Pages discovered but not planned become redirects in `public/_redirects`:
```
/old-page / 301
```

## Conventions

- Components in `src/components/` use PascalCase
- Pages follow `state.pages.planned` (not just sitemap.md)
- Design system documented in `src/DESIGN.md`
- All images go through `public/images/`
- Redirects go in `public/_redirects`
- Use Tailwind CSS v4 `@theme` for all design tokens (no tailwind.config.js)
- Use the `compound-engineering:frontend-design` skill for all page generation

## Project Structure

```
intake/           # Client inputs (optional — branding, content, images, sitemap)
reference/        # Site analysis output (screenshots, analysis.md)
src/              # Astro site source
  components/     # Reusable UI components
  layouts/        # Page layouts
  pages/          # Route pages
  styles/         # Global CSS and Tailwind theme
  DESIGN.md       # Design system documentation
public/           # Static assets + _redirects
tests/            # Playwright functional tests
.site-factory/    # State management (state.json, screenshots/)
.claude/          # Claude agents
  agents/         # Agent instruction definitions
```

## Agents

Agent definitions in `.claude/agents/` provide detailed instructions for each specialized task:

- **site-analyzer** — Crawl reference site, discover pages, extract design values, capture screenshots
- **color-system-generator** — Brand colors → full Tailwind v4 palettes with WCAG AA contrast verification
- **typography-system-generator** — Fonts → fluid type scale, loading strategy, heading hierarchy
- **component-builder** — Generate responsive, accessible Astro components following the design system
- **content-writer** — Generate brand-aligned copy (with homepage-specific structured mode)
- **image-sourcer** — Source, optimize, and prepare images for web performance
- **visual-qa** — Screenshot all breakpoints, compare against reference, flag layout issues
- **design-reviewer** — WCAG 2.2 AA compliance, responsive design, visual consistency
- **seo-auditor** — Meta tags, structured data, Core Web Vitals, Lighthouse readiness

## Tech Stack

- Astro 5.x (static output)
- Tailwind CSS v4 (CSS-first with @theme)
- Playwright (functional testing)
- Cloudflare Pages (deployment with _redirects support)
