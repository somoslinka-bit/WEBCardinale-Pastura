# ServicesSection Specification

## Overview
- **Target file:** `src/components/ServicesSection.tsx`
- **Interaction model:** static rows
- **Height:** 1547px
- **Background:** rgb(21, 23, 23) — #151717 dark charcoal

## DOM Structure
```
<section> (bg-[#151717], text-white)
  <!-- Header -->
  <div> (px-[75px], pt-[100px], pb-[60px])
    <span class="label">"Services"</span>
    <h2>"How FIND Can Help You"</h2>
  </div>

  <!-- Service rows — divided by horizontal lines -->
  <!-- Row 1: Buy -->
  <div class="service-row"> (border-top, px-[75px], py-[60px])
    <span class="number">"01"</span>
    <p class="description">
      "Buy smarter with expert agents backed by mortgage, legal, and appraisal pros—dialed in to get you the best deal, fast. We've done this over 10,000 times, and we know what wins."
    </p>
    <span class="large-word">"Buy"</span>
    <a class="arrow-link"><ArrowRightServicesIcon /></a>
  </div>

  <!-- Row 2: Sell -->
  <div class="service-row"> (border-top)
    <span class="number">"02"</span>
    <p>"Sell fast, sell high. Your listing gets pro staging, strategic pricing, constant open houses, and agents who never stop working until the right buyer signs."</p>
    <span class="large-word">"Sell"</span>
    <a><ArrowRightServicesIcon /></a>
  </div>

  <!-- Row 3: Rent -->
  <div class="service-row"> (border-top, border-bottom)
    <span class="number">"03"</span>
    <p>"Access hidden rentals before they hit the market through agents who know every landlord in town. With decades of NYC experience, we unlock the best deals you won't find online."</p>
    <span class="large-word">"Rent"</span>
    <a><ArrowRightServicesIcon /></a>
  </div>

  <!-- Bottom CTA text + button -->
  <div> (px-[75px], pb-[100px])
    <p>"Our certified agents guide you through every stage of real estate with expert knowledge and reliable support."</p>
    <a>"Get Started with FIND" <ArrowRightIcon /></a>
  </div>
</section>
```

## Computed Styles

### Section
- background-color: rgb(21, 23, 23)
- color: rgb(255, 255, 255)
- padding: 100px 75px

### "Services" label (top-left)
- font-size: 13px
- font-weight: 500
- color: rgba(255, 255, 255, 0.5) — muted white
- text-transform: uppercase or normal
- letter-spacing: 0.05em

### "How FIND Can Help You" heading
- font-size: 72px (estimated from screenshot — large)
- font-weight: 700
- line-height: 1.0
- color: rgb(255, 255, 255)
- Mixed: "How" appears white, "FIND Can Help You" in a lighter/muted white
- The text reveal pattern: partial text muted (~rgb(100,100,100)) and partial white

### Service row
- display: grid (4 columns: number | description | large-word | arrow)
- grid-template-columns: 60px 1fr 1fr 60px (approximate)
- align-items: center
- padding: 48px 0
- border-top: 1px solid rgba(255,255,255,0.2)
- gap: 40px

### Row number (.number)
- font-size: 13px
- font-weight: 400
- color: rgba(255, 255, 255, 0.5)
- font-family: "Instrument Sans"
- border: 1px solid rgba(255,255,255,0.3)
- border-radius: 50%
- width: 36px
- height: 36px
- display: flex
- align-items: center
- justify-content: center

### Row description text
- font-size: 15px
- font-weight: 400
- line-height: 1.6
- color: rgb(255, 255, 255)
- max-width: 380px

### Large word ("Buy" / "Sell" / "Rent")
- font-size: 120px (very large, takes center of row)
- font-weight: 700
- line-height: 1
- color: rgb(255, 255, 255)
- font-family: "Instrument Sans"
- text-align: center

### Arrow link
- color: rgba(255, 255, 255, 0.5)
- width: 48px
- height: 48px
- display: flex
- align-items: center
- justify-content: center

### CTA paragraph (bottom)
- font-size: 32px
- font-weight: 600
- line-height: 1.3
- color: rgb(255, 255, 255)
- max-width: 700px

### "Get Started with FIND" button
- Same pill style but outline-white variant
- background: transparent
- color: white
- border: 1px solid rgba(255, 255, 255, 0.5)
- border-radius: 100px
- padding: 11.55px 22.5px
- font-size: 13.5px

## Text Content (verbatim)
- Label: "Services"
- Heading: "How FIND Can Help You"
- Row 1: number "01", description as above, word "Buy"
- Row 2: number "02", description as above, word "Sell"
- Row 3: number "03", description as above, word "Rent"
- CTA para: "Our certified agents guide you through every stage of real estate with expert knowledge and reliable support."
- CTA button: "Get Started with FIND"

## Responsive Behavior
- **Desktop:** 4-column grid per row
- **Mobile:** Stacked — number/description above, large word below
- Large word reduces to ~60-80px on mobile
