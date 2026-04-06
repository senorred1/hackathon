# Brand Typography

Define your font choices here. Claude will configure Google Fonts and Tailwind.

## Font Families

### Display Font (Headings)
**Font:** Inter
**Weights:** 600 (Semibold), 700 (Bold)
**Google Fonts URL:** https://fonts.googleapis.com/css2?family=Inter:wght@600;700&display=swap

### Body Font (Text)
**Font:** Inter
**Weights:** 400 (Regular), 500 (Medium)
**Google Fonts URL:** https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap

## Alternative Options

If you prefer different fonts, update above. Popular combinations:

### Professional
- Display: Playfair Display
- Body: Source Sans Pro

### Modern
- Display: Poppins
- Body: Inter

### Classic
- Display: Merriweather
- Body: Open Sans

### Tech
- Display: Space Grotesk
- Body: DM Sans

## Font Loading Strategy

Fonts are loaded via Google Fonts with `display=swap` to prevent layout shift.
The browser will show a system font fallback until the custom font loads.

## Custom Fonts

If using custom fonts (not Google Fonts):
1. Place font files in `public/fonts/`
2. Create @font-face rules in global.css
3. Update --font-display and --font-body in @theme
