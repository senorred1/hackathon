# CHOMPERZ™ — Reference Site Analysis

**Source:** Local HTML files (`intake/index (1).html`, `intake/schedule.html`)
**Analyzed:** 2026-04-10

---

## Design System

### Color Palette
- **Primary (Pink):** `#ff006e` — CTAs, nav, marquee bar, logo shimmer, eyebrow labels
- **Secondary (Cyan):** `#00b4d8` — stats bar borders, accents, dividers
- **Accent (Lime):** `#ccff00` — stat numbers, hover states, ghost button border, outline headings
- **Purple:** `#7b2d8b` — tier-1 pricing gradient, doctor avatar
- **Gold:** `#ffd700` — star ratings, bio emphasis
- **Background:** `#0d0d1a` (deep dark navy)
- **Surface Dark:** `#09091a` (section alternate)
- **Footer:** `#030308`
- **Text:** `#ffffff`
- **Muted Text:** `rgba(255,255,255,0.75)`
- **Border:** `rgba(255,255,255,0.08)`

### Typography
- **Display:** `'Arial Black', 'Arial Bold', sans-serif` — weight 900, ALL CAPS, wide letter-spacing
- **Body:** `Georgia, serif` — italic, `line-height: 1.75–1.85`, muted white
- **Hero H1:** `clamp(3.5rem, 11vw, 9rem)`, `line-height: 0.88`
- **Section H2:** `clamp(2rem, 5vw, 4rem)`, `line-height: 0.95`
- **Section Label:** `0.65rem`, `letter-spacing: 5px`, pink, uppercase
- No external fonts — all system fonts

### Animation Aesthetic
- **Floating background elements** — teeth/sparkle/diamond emojis float up from bottom, rotate 540°, 7–13s duration
- **Logo shimmer** — gradient slides across text continuously
- **Nav CTA pulse** — box-shadow expands/contracts (1.8s)
- **Hero eyebrow bounce** — translateY(-5px) alternate (0.6s)
- **Hero glow blob** — scale 1→1.4 alternate (4s)
- **Primary button hot** — box-shadow pulses (1.4s)
- **Doctor avatar color cycle** — border cycles lime→pink→blue (5s)
- **About blob float** — translateY + rotate (4s)
- **Spinning tooth** — full 360° on CTA background (20s)
- **Random sparkle pop** — random emoji appears anywhere on page every 2.8s
- **Custom cursor** — 🦷 tooth emoji follows mouse, scales on click

### Layout Patterns
- Max-width: `1200px` centered
- Section padding: `80px 48px` (mobile: `60px 20px`)
- Sticky header: `backdrop-filter: blur(12px)`, `border-bottom: 3px solid pink`
- Color-gradient dividers between sections
- Grid layouts: 2-col about, 2-col doctor card, 3-col auto-fit services/pricing/testimonials
- Footer: 4-col (2fr + 3×1fr), collapses to 2-col on tablet, 1-col on mobile

### Glow/Neon Effects
- Text shadows in brand colors on stats, doctor avatar
- Box shadows as neon glows on cards, buttons, nav
- `filter: drop-shadow` on outline text
- Radial gradient overlays on hero and doctor sections

---

## Site Structure & Section Order

### Home Page (`/`)

1. **Floating Background** — fixed teeth/sparkles floating upward
2. **Custom Cursor** — tooth emoji
3. **Marquee Bar** — pink bar, scrolling text (humorous disclaimers)
4. **Header/Nav** — logo left, "Home" + "Book Now 🦷" (CTA) right
5. **Gradient Divider**
6. **Hero** — fullscreen, centered; eyebrow pill, H1 (solid+outline mix), italic sub, 2 CTAs
7. **Stats Bar** — 5 stats: 47,000+ teeth, ∞ cleansings, 4.9★, 0 complaints, 1 dimension
8. **Gradient Divider**
9. **About Section** — 2-col grid: text left, animated blob right; dark bg
10. **Gradient Divider**
11. **Doctor Section** — dark patterned bg; 2-col card: avatar+name left, bio+creds right
12. **Gradient Divider**
13. **Services Section** — 3-col auto-fit grid, 6 cards with left accent bar
14. **Gradient Divider**
15. **Pricing Section** — 3 tiers: Initiate ($99), Devotee ($299 POPULAR), Transcendent ($999)
16. **Gradient Divider**
17. **Testimonials** — 3-col grid, 3 cards
18. **Gradient Divider**
19. **Schedule CTA** — full-width gradient, spinning tooth bg, large H2, white CTA button
20. **Footer** — 4-col grid, brand + navigate + services + contact; copyright bottom bar

### Schedule Page (`/schedule`)

- Same header/nav/marquee/cursor/floating elements
- Scheduling form with appointment selection
- Consistent branding

---

## Content Inventory

### Marquee Text
"🦷 TEETH ARE SACRED ✦ FREE TOOTH READING WITH EVERY CLEANING ✦ NOW ACCEPTING BITCOIN, VIBES & DENTAL INSURANCE (SPIRITUALLY) ✦ DR. MOLARSTONE HAS NEVER LOST A TOOTH* ✦ *THAT SHE WAS SUPPOSED TO KEEP ✦ OPEN 24/7 OR WHENEVER DR. MOLARSTONE WAKES UP ✦ MOUTH WHISPERING AVAILABLE TUESDAYS ✦ VOTED #1 DENTAL RAVE STUDIO IN THIS BUILDING ✦"

### Hero
- Eyebrow: "⚡ NOW ACCEPTING NEW MOUTHS — LIMITED SPOTS ⚡"
- H1: "YOUR TEETH / DESERVE / THE RAVE / ✦ A DENTAL EXPERIENCE™ ✦"
- Sub: "Where cutting-edge dentistry meets *chaotic spiritual energy.* We don't just clean teeth. We *liberate them.*"
- CTA 1: "CLAIM YOUR MOUTH DESTINY" → /schedule
- CTA 2: "VIEW SERVICES" → #services

### Stats
- 47,000+ Teeth Liberated
- ∞ Spiritual Cleansings
- 4.9★ Stars (Self-Reported)
- 0 Complaints (That We Know Of)
- 1 Dimension We Operate In

### About
- Label: "About the Practice"
- H2: "We Are Not Just a Dentist"
- Body: 4 paragraphs (founded 2019, laser tag arena, mouth-as-portal philosophy, radical tooth transparency)
- Visual: animated blob card — office info, address

### Doctor
- Label: "Meet Your Dental Guide"
- H2: "The One. The Only. The Legendary."
- Name: Dr. Crystal Molarstone
- Title: DDS · YOLO · BFF · PhD (Feelings)
- Bio: 4 paragraphs (humorous credentials, training, philosophy, hobbies)
- Credentials: DDS University of Places, Certified Mouth Whisperer, Reiki Level 2 (Teeth-Specific), Regional Flossing Champion '23, Crystal Healing (Dental Track), No Outstanding Warrants*, Good Vibes Certified™, Ordained Tooth Minister

### Services (6 cards)
1. ✨ The Illumination Cleaning
2. 💎 Diamond Whitening Ritual
3. 🔮 Deep Cavity Excavation
4. 👑 The Crown Coronation
5. 🚨 Emergency Tooth Liberation
6. 🌀 Orthodontic Alignment Journey

### Pricing (3 tiers)
- 🦷 **The Initiate** — $99/visit: 6 features
- 💎 **The Devotee** — $299/visit (MOST POPULAR): 7 features
- 🌟 **The Transcendent** — $999/quarterly (ASCENDANT): 8 features
- Disclaimer: "All prices in USD. Subject to change based on vibes. Insurance accepted spiritually..."

### Testimonials (3)
1. Karen T., Accountant & Now Tooth Enthusiast
2. Derek M., Software Engineer (Confused But Grateful)
3. Priya S., Marketing Manager (Still Processing, Still Recommending)

### Schedule CTA
- H2: "YOUR TEETH ARE WAITING"
- Body: "Don't make them wait any longer..."
- CTA: "SCHEDULE MY MOUTH DESTINY" → /schedule
- Nudge: "No judgment. All mouths welcome. 🦷 Results may vary. Feelings guaranteed."

### Footer
- Brand: logo + tagline + brief about
- Navigate: Home, About, Services, Schedule
- Services: Illumination Cleaning, Diamond Whitening, Crown Coronation, Emergency Liberation
- Contact: (555) TOOTH-ME, hello@chomperz.dental, 123 Enamel Ave Suite 🦷 LA, Hours: Whenever, Mostly
- Copyright: "© 2026 CHOMPERZ™ Dental Studio. All teeth reserved."

---

## Key UI Components to Build

- `MarqueeBar.astro` — animated pink marquee
- `Header.astro` — sticky, blur, pink border, logo shimmer, nav pulse CTA
- `FloatingBackground.astro` — fixed floating emoji elements
- `ToothCursor.astro` — custom cursor script
- `Hero.astro` — fullscreen hero with outline/solid H1 mix
- `StatsBar.astro` — 5-stat grid
- `GradientDivider.astro` — color gradient horizontal rule
- `About.astro` — 2-col grid with blob visual
- `Doctor.astro` — dark card, avatar, bio, credential pills
- `Services.astro` — 6-card grid with accent bars
- `Pricing.astro` — 3-tier cards
- `Testimonials.astro` — 3-card grid
- `ScheduleCTA.astro` — full-width CTA section
- `Footer.astro` — 4-col footer
- `BaseLayout.astro` — wraps all of the above

---

## Images
No actual image files in the reference — all visuals are CSS, emoji, and gradients. No images to download.
