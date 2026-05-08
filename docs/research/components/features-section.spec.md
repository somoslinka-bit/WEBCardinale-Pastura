# FeaturesSection Specification

## Overview
- **Target file:** `src/components/FeaturesSection.tsx`
- **Interaction model:** static
- **Height:** 815px
- **Background:** rgb(21, 23, 23) — #151717

## DOM Structure
```
<section> (bg-[#151717], text-white, px-[75px], py-[100px])
  <!-- Heading -->
  <div>
    <h2>
      "Support"
      <br/>
      "Beyond Buying"
      <br/>
      <span class="muted">"and Selling"</span>
    </h2>
    <p>"The real estate market never stands still — and neither do we. Our experts offer continued support beyond the sale, helping you maximize your investment."</p>
    <a>"Discover Our Services"</a>
  </div>

  <!-- 3 image cards (full-width images with text overlay) -->
  <div> (grid 3 cols, gap-4, mt-[60px])
    <!-- Card 1: Mortgage Services -->
    <div class="card"> (relative, overflow-hidden)
      <img src="/images/mortgage-services.jpg" (object-cover, w-full, h-full)
      <div class="card-overlay"> (absolute, bottom, left, right, p-6)
        <h3>"Mortgage Services"</h3>
        <p>"Helping you secure your dream home with flexible mortgage options."</p>
        <a>"Learn More" <ArrowRightIcon /></a>
      </div>
    </div>

    <!-- Card 2: Property Management -->
    <div class="card">
      <img src="/images/property-management.jpg"
      <div class="card-overlay">
        <h3>"Property Management"</h3>
        <p>"Let us handle the details so you can enjoy the rewards."</p>
        <a>"Learn More" <ArrowRightIcon /></a>
      </div>
    </div>

    <!-- Card 3: Construction -->
    <div class="card">
      <img src="/images/service-rent.jpg" (fallback — no specific construction image)
      <div class="card-overlay">
        <h3>"Construction and Real Estate Development"</h3>
        <p>"Guiding you through the intricacies of building and developing properties with expert insight and support."</p>
        <a>"Learn More" <ArrowRightIcon /></a>
      </div>
    </div>
  </div>
</section>
```

## Computed Styles

### Section
- background-color: rgb(21, 23, 23)
- color: rgb(255, 255, 255)
- padding: 100px 75px

### Heading "Support Beyond Buying and Selling"
- "Support Beyond Buying" — font-size: ~72px, font-weight: 700, color: white
- "and Selling" — same size but color: rgba(255,255,255,0.3) — very muted
- line-height: 1.0

### Description paragraph
- font-size: 16px
- line-height: 1.6
- color: rgba(255,255,255,0.7)
- max-width: 500px

### "Discover Our Services" link
- Same pill outline-white style: border 1px solid rgba(255,255,255,0.5), border-radius: 100px, padding: 11.55px 22.5px

### Cards grid
- display: grid
- grid-template-columns: repeat(3, 1fr)
- gap: 16px (or 24px)
- margin-top: 60px

### Individual card
- position: relative
- overflow: hidden
- height: ~400px (tall portrait or landscape)
- border-radius: 8px (small)

### Card image
- position: absolute
- inset: 0
- width: 100%
- height: 100%
- object-fit: cover
- transition: transform 0.4s ease (slight zoom on hover)

### Card overlay (text area at bottom)
- position: absolute
- bottom: 0; left: 0; right: 0
- padding: 24px
- background: linear-gradient(to top, rgba(0,0,0,0.7), transparent)
- display: flex
- flex-direction: column
- gap: 8px

### Card h3
- font-size: 18px
- font-weight: 600
- color: white

### Card description
- font-size: 13px
- color: rgba(255,255,255,0.8)
- line-height: 1.5

### "Learn More" link in card
- font-size: 13px
- color: white
- display: inline-flex
- align-items: center
- gap: 6px
- background: rgba(255,255,255,0.15)
- border-radius: 100px
- padding: 6px 16px
- backdrop-filter: blur(4px)

## Text Content (verbatim)
- Heading: "Support Beyond Buying and Selling"
- Desc: "The real estate market never stands still — and neither do we. Our experts offer continued support beyond the sale, helping you maximize your investment."
- CTA: "Discover Our Services"
- Card 1: "Mortgage Services" / "Helping you secure your dream home with flexible mortgage options."
- Card 2: "Property Management" / "Let us handle the details so you can enjoy the rewards."
- Card 3: "Construction and Real Estate Development" / "Guiding you through the intricacies of building and developing properties with expert insight and support."
- All cards: "Learn More →"

## Assets
- Card 1: `/images/mortgage-services.jpg`
- Card 2: `/images/property-management.jpg`
- Card 3: `/images/service-rent.jpg` (fallback for construction)
