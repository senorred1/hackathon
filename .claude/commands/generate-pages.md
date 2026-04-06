---
name: project:generate-pages
description: Generate all remaining pages from planned list and create redirects. Run after homepage approved.
disable-model-invocation: true
---

# Generate Remaining Pages

## Prerequisites

1. Check state: must be `homepage_approved`
2. Read src/DESIGN.md for design system
3. Read `.site-factory/state.json` for:
   - `pages.planned[]` - pages to build
   - `pages.redirects[]` - redirects to create

## Generation Steps

### 1. Generate Each Planned Page

For each page in `state.pages.planned` (excluding home):

- Create page file in `src/pages/[path].astro`
- Use BaseLayout
- Follow design system from src/DESIGN.md
- Pull content from `intake/content/[page].md` if exists
- Generate content using Content Writer agent if needed
- Reference design from `reference/screenshots/` if available
- Update `state.pages.built[]` after each page

### 2. Handle Images for Each Page

For every page, follow image-sourcer agent guidelines:
- **Never hotlink** — all images must be saved locally in `public/images/`
- Download any additional images needed from the reference site
- Set explicit `width` and `height` on every `<img>` tag
- Use `loading="lazy"` on all images (only the homepage hero uses `eager`)
- Optimize formats: WebP/AVIF for photos, SVG for icons/logos
- Compress appropriately

### 3. Create Page-Specific Components

As needed for unique page layouts:
- Service cards
- Team member profiles
- Contact forms
- Gallery grids

### 4. Generate Redirects File

Create `public/_redirects` for Cloudflare Pages:

```
# Redirects from old pages
/old-page /  301
/legacy-service /services  301
/old-blog/* /  301
```

Format from `state.pages.redirects[]`:
```
{from} {to} 301
```

### 5. Run Playwright Tests

- All planned pages load (200 status)
- All internal links resolve
- Redirects work correctly
- Forms submit without JS errors
- Report failures but continue

### 6. Run SEO Auditor Agent

- Validate meta tags on all pages
- Check Open Graph tags
- Verify Lighthouse basics (Performance 80+, others 90+)
- Report issues found

### 7. Update State

```json
{
  "phase": "pages_pending_approval",
  "pages_generated_at": "[timestamp]",
  "pages": {
    "discovered": [...],
    "planned": ["/", "/about", "/services", "/contact"],
    "built": ["/", "/about", "/services", "/contact"],
    "redirects": [
      { "from": "/old-page", "to": "/" }
    ]
  },
  "test_results": { "passed": N, "failed": N },
  "seo_issues": [list]
}
```

### 8. Request Approval

Display to user:

```
All pages generated!

Pages built: [count]
  - / (Home) ✓
  - /about (About) ✓
  - /services (Services) ✓
  - /contact (Contact) ✓

Redirects created: [count]
  - /old-page → / (301)

Test results: [X passed, Y failed]
SEO audit: [issues or "all passed"]

Review at http://localhost:4321 (or correct port)
Say "approved" to finalize, or describe what needs to change.
```

## On Approval

When user approves:
1. Update state to `complete`
2. Confirm deployment instructions:

```
Site complete!

To deploy to Cloudflare:
  npm run deploy

Or push to git for CI/CD deployment.

Files ready:
  - dist/ (built site)
  - public/_redirects (redirect rules)
```
