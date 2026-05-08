# HeroSection Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Interaction model:** scroll-driven (sticky inner panel + FIND text clip reveal)
- **Screenshot:** docs/design-references/hero-desktop.png

## DOM Structure
```
<section> (class: hero_root, position: relative, height: 3490px)
  <div> (class: hero_top, position: sticky, top: 0, height: 100vh ~698px)
    <!-- Layer 1: sky background -->
    <img src="/images/hero-background.jpg" (absolute, inset-0, object-cover, w-full h-full, z-0)
    <!-- Layer 2: house building PNG -->
    <img src="/images/hero-house.png" (absolute, bottom-0, centered, z-10, object-contain)
    <!-- Layer 3: cloud PNG -->
    <img src="/images/hero-cloud.png" (absolute, z-5, bottom portion)
    <!-- Layer 4: smoke PNG -->
    <img src="/images/hero-smoke.png" (absolute, z-6)
    <!-- Text overlay -->
    <div> (absolute or relative, centered, z-20)
      <h1>"Find What Moves You"</h1>
      <p>
        <strong>"Expert agents. Real guidance."</strong>
        " A clear path to find what's next."
      </p>
      <a href="/search">"Find Properties" <ArrowRightIcon /></a>
    </div>
  </div>

  <!-- FIND text reveal — positioned below in the scroll space -->
  <div> (position: sticky, top: 0, or absolute, creates the clipped FIND text reveal)
    <div> (clip container — text "FIND Real Estate" acts as mask)
      <span class="big-find-text">"FIND"</span>
      <span class="big-real-estate-text">"Real Estate"</span>
    </div>
  </div>
</section>
```

## Computed Styles

### Section container
- position: relative
- height: 3490px (approx 5× viewport)
- overflow: visible

### Sticky inner panel `hero_top`
- position: sticky
- top: 0
- height: 100vh (698px at 1440 viewport)
- overflow: hidden
- display: flex / block (contains all layers)

### Background image (sky)
- position: absolute
- inset: 0
- width: 100%
- height: 100%
- object-fit: cover
- z-index: 0

### House PNG
- position: absolute
- bottom: 0
- left: 50%
- transform: translateX(-50%)
- z-index: 10
- max-height: ~80% of panel
- object-fit: contain

### Cloud PNG
- position: absolute
- z-index: 5
- bottom section of hero

### Smoke PNG
- position: absolute
- z-index: 6
- bottom or overlay

### Hero text container
- position: absolute (or relative with z-index: 20)
- top: ~120px (below nav)
- left: 0
- right: 0
- text-align: center
- display: flex
- flex-direction: column
- align-items: center
- gap: 16px

### h1 "Find What Moves You"
- font-size: 105px
- font-weight: 700
- line-height: 105px (1)
- letter-spacing: -2.1px
- color: rgb(0, 0, 0)
- font-family: "Instrument Sans"

### Subtitle `<p>`
- font-size: 24px
- font-weight: 500
- line-height: 31.2px
- color: rgb(0, 0, 0)
- Two-tone: "Expert agents. Real guidance." is bold/strong, " A clear path..." is regular gray/lighter

### CTA button "Find Properties"
- font-size: 13.5px
- font-weight: 500
- background-color: rgb(21, 23, 23)
- color: rgb(255, 255, 255)
- border-radius: 100px
- padding: 11.55px 22.5px
- display: inline-flex
- align-items: center
- gap: 8px

## States & Behaviors

### FIND Text Reveal (scroll-driven)
- **Trigger:** As user scrolls through the 3490px section
- **State A (top):** "FIND" text appears as outlined/stroke text over sky — building image is behind
- **State B (mid-scroll):** Building image appears to fill/clip through the "FIND Real Estate" text characters
- **State C (complete):** Full building image visible through letters — smoke/clouds blend around edges
- **Implementation:** 
  - The "FIND Real Estate" text uses either:
    - `background-clip: text` + `background-image: url(house.png)` as text fill
    - OR a separate sticky positioned element where the building image is clipped to text shape
  - The transition is driven purely by scroll position changing which layer is visible
  - The `hero_top` sticky div maintains position while outer section scrolls

### Responsive notes
- Mobile: h1 ~65-70px, full-width layout, button full-width on mobile
- The text overlay is centered on both

## Assets
- Background: `/images/hero-background.jpg` (sky gradient, warm sunset tones)
- House: `/images/hero-house.png` (modern building PNG with transparent background)
- Cloud: `/images/hero-cloud.png` (cloud/mist PNG)
- Smoke: `/images/hero-smoke.png` (smoke/haze PNG)
- Arrow icon: `<ArrowRightIcon />` from icons.tsx

## Text Content (verbatim)
- h1: "Find What Moves You"
- Subtitle strong: "Expert agents. Real guidance."
- Subtitle rest: " A clear path to find what's next."
- CTA: "Find Properties"

## Implementation Notes
The FIND text reveal is the hero's centerpiece animation. The simplest approach:
1. Create a sticky inner div at 100vh
2. Below it in the flow, add a second sticky section for the FIND text reveal
3. The reveal uses `position: sticky` and scroll-progress CSS:
   - Use a container with overflow: hidden
   - FIND/Real Estate text at ~30vw font-size
   - Behind the text: the house image
   - Text is outlined (stroke) initially, then the background bleeds through via clip-path or background-clip
4. The outer section is tall (3490px) to give scroll room for the animation
