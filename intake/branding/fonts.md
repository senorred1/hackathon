# Brand Typography

## Font Families

### Display Font (Headings)
**Font:** Arial Black / Arial Bold
**Weights:** 900 (Black)
**Type:** System font — no Google Fonts import needed
**Usage:** All headings, nav links, buttons, labels, stats — essentially everything uppercase

### Body Font (Text)
**Font:** Georgia
**Weights:** 400 (Regular), italic
**Type:** System font — no Google Fonts import needed
**Usage:** Paragraph copy, testimonials, pricing feature lists, footer descriptions

## Font Style Notes

- Text is almost universally `text-transform: uppercase` with wide `letter-spacing` for display elements
- Body copy uses Georgia with `font-style: italic` and `line-height: 1.75–1.85`
- Font size scale is aggressive: hero heading uses `clamp(3.5rem, 11vw, 9rem)`
- Section labels use `.65rem` with `letter-spacing: 5px` in pink
- Both fonts are system fonts — no external font loading required

## Custom Fonts

No custom fonts or Google Fonts used. The design relies entirely on system fonts:
- `'Arial Black', 'Arial Bold', sans-serif` — display/UI
- `Georgia, serif` — body copy
