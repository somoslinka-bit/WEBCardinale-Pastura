# Page Topology — findrealestate.com

## URL
https://findrealestate.com/

## Overall Structure
- Single-page scroll site
- `<header>` (sticky, z-index: 50, outside main)
- `<main>` with 10 child sections
- No `<footer>` element — footer is embedded in the last section (outro)

## Sections (top to bottom)

| # | Class | Height | Background | Interaction |
|---|-------|--------|------------|-------------|
| Fixed | Header/Navbar | 58.5px | transparent (over hero) | sticky |
| 0 | `hero_root__N0Loz` | 3490px | transparent | scroll-driven (sticky inner) |
| 1 | `why-us_root__aGsFp` | 1225px | #FFFFFF | scroll-driven (text reveal) |
| 2 | `arrows-section_root__yyPBl` | 823px | transparent | static + diamond images |
| 3 | (no class) | 645px | transparent | static |
| 4 | (no class) | 1247px | transparent | parallax float images |
| 5 | `testimonials_root__PiYLZ` | 870px | #F1F1F1 | click-driven (numbered 1-5) |
| 6 | `services_root__Ch_WM` | 1547px | #151717 (dark) | static rows |
| 7 | `features_root__CCic6` | 815px | #151717 (dark) | static cards |
| 8 | `latest-posts_root__W0OHF` | 1588px | #F1F1F1 | static list |
| 9 | `outro_root__stMHm` | 675px | transparent/dark | static (newsletter + footer) |

## Working Names
- Section 0: **HeroSection** — scroll-driven, sticky inner panel, FIND text clip reveal
- Section 1: **WhyFindSection** — scroll-driven text reveal (chars go black as you scroll)
- Section 2: **ArrowsSection** — "This isn't just about real estate", diamond agent photos
- Section 3: **StepsSection** — "Real Estate, Rewired" + numbered steps
- Section 4: **AgentsEquitySection** — floating parallax images + equity pitch
- Section 5: **TestimonialsSection** — "Don't Take Our Word for It" click carousel
- Section 6: **ServicesSection** — "How FIND Can Help You" dark rows (Buy/Sell/Rent)
- Section 7: **FeaturesSection** — "Support Beyond Buying" dark 3-card grid
- Section 8: **LatestPostsSection** — "Blog & Resources" list
- Section 9: **OutroSection** — newsletter form + footer info + big FIND logo

## Key Behaviors Discovered

### Hero Scroll Mechanism
- Section is 3490px tall (5× viewport height)
- Inner div `hero_top__WegWw` is `position: sticky; top: 0`
- As page scrolls, the sticky panel stays visible
- FIND Real Estate text acts as a clip mask revealing building image
- House/cloud/smoke PNGs layer above background, creating parallax depth

### Text Reveal Animation
- Throughout site, text appears in two phases: dark/black chars visible, light gray chars not yet "activated"
- Likely uses IntersectionObserver or scroll-driven CSS to toggle character color
- Seen in: "Why FIND" paragraph, "This isn't just about real estate", etc.

### Testimonials: Click-Driven
- 5 numbered buttons (1-5) each shows different testimonial content
- Photo changes + quote changes per selection
- INTERACTION MODEL: click-driven, NOT scroll-driven

### Services: Static Rows
- "Buy", "Sell", "Rent" rows are static — no click switching
- Each row has: number, description text, large word, arrow icon
- INTERACTION MODEL: static

## Z-Index Layers
1. Header (sticky, z-50)
2. Main content (flow)
3. Sticky hero inner (z-1 or auto within flow)
