# Behaviors — findrealestate.com

## Scroll Behaviors

### 1. Hero Sticky Panel
- **Mechanism:** Inner div `hero_top__WegWw` is `position: sticky; top: 0`
- **Effect:** Panel stays visible as you scroll through 3490px section
- **Sub-effect:** FIND Real Estate text (outline → filled with building image) appears via clip-mask
- **Layers:** background sky JPG → house PNG → cloud PNG → smoke PNG → text overlay
- **Implementation:** `position: sticky` + CSS `background-clip: text` or SVG clip-path for FIND text reveal

### 2. Scroll-Driven Text Reveal
- **Sections:** WhyFind, ArrowsSection
- **Effect:** Text starts gray/muted, progressively turns black as user scrolls through it
- **Pattern:** Characters/words at start are dark, rest are light gray
- **Implementation:** Likely splits text into `<span>` per word/char, uses IntersectionObserver or `animation-timeline: scroll()` to activate color

### 3. Parallax Floating Images (AgentsEquity)
- **Effect:** Two images float at different rates than scroll
- **Images:** Left (office building), Right (aerial houses)
- **Implementation:** CSS `transform: translateY()` updated on scroll event

### 4. Navbar Scroll Behavior
- **At position 0:** Transparent background, overlays hero image
- **On scroll:** Appears to gain structure (inspect further needed)
- **Position:** `sticky; top: 0; z-index: 50`

## Click Behaviors

### Testimonials Carousel
- **Trigger:** Click on numbered buttons 1-5
- **Effect:** Quote text and agent photo change
- **Transition:** Likely fade (opacity)
- **States:** 5 testimonials, starting on #1

## Hover States
- **Nav links:** Color change on hover (likely opacity or darker)
- **CTA buttons:** Background color shift
- **Service rows (Buy/Sell/Rent):** Arrow icon may animate right
- **"Learn More" cards:** Image may scale or overlay appears

## Responsive Behavior

### Desktop (1440px)
- Nav: Logo left, links center, Sign In right — horizontal
- Hero: Full-width heading text (~105px), centered
- Service rows: 3-column layout (number | text | large word | arrow)

### Mobile (390px)
- Nav: Logo left, hamburger menu (≡) right — nav links hidden
- Hero: Heading stacks, text ~60-70px, CTA button full-width
- Service rows: Likely stack vertically

### Breakpoints
- Mobile → Desktop transition around 768px (estimated)
