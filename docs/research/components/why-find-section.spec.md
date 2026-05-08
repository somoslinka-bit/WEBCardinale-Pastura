# WhyFindSection Specification

## Overview
- **Target file:** `src/components/WhyFindSection.tsx`
- **Interaction model:** scroll-driven text reveal (words turn black as you scroll through)
- **Height:** 1225px
- **Background:** #FFFFFF

## DOM Structure
```
<section> (why-us_root, bg-white, py-[100px] px-[75px])
  <div> (grid or flex layout)
    <!-- Left column: label -->
    <div>
      <span>"Why FIND"</span>
    </div>
    <!-- Right/main column: large text block with scroll reveal -->
    <div>
      <p class="text-reveal"> (large paragraph, words split into spans)
        "Your life's changing. Don't just find a place — find what's next."
        <span class="text-muted">"We help you move forward with clarity, confidence, and the right agent by your side."</span>
      </p>
    </div>
  </div>

  <!-- Full-width image below text -->
  <div> (w-full, mt-[80px] or similar)
    <img src="/images/why-find-1.jpg" (full-width, object-cover, height ~500-600px) />
  </div>
</section>
```

## Computed Styles

### Section container
- background-color: rgb(255, 255, 255)
- padding: 100px 75px
- position: relative

### "Why FIND" label
- font-size: 13px (small, uppercase or normal)
- font-weight: 500
- color: rgb(21, 23, 23)
- letter-spacing: 0.1em (small caps style)
- position: probably top-left of the section

### Main text paragraph
- font-size: ~48-56px (large editorial text)
- font-weight: 600 or 700
- line-height: 1.1
- color: rgb(0, 0, 0) for active words
- color: rgb(180, 180, 180) for inactive/not-yet-revealed words
- font-family: "Instrument Sans"

### Text reveal behavior
- The paragraph "Your life's changing. Don't just find a place — find what's next." starts black (already visible)
- "We help you move forward with clarity, confidence, and the right agent by your side." fades in as gray
- As user scrolls, more words become black (rgb(0,0,0)) from gray (rgb(180,180,180))
- Likely implemented by splitting text into word spans, each with IntersectionObserver

### Full-width image
- width: 100%
- height: ~500px (landscape)
- object-fit: cover
- margin-top: 80px
- border-radius: 0 or small radius

## States & Behaviors

### Scroll text reveal
- **Trigger:** IntersectionObserver on each word span, threshold ~0.5
- **State A:** color: rgb(180, 180, 180) — muted
- **State B:** color: rgb(0, 0, 0) — active/dark
- **Transition:** color 0.3s ease
- Words reveal sequentially as section enters viewport

## Assets
- Image: `/images/why-find-1.jpg` (snowy landscape / property scene)

## Text Content (verbatim)
- Label: "Why FIND"
- Paragraph part 1 (always dark): "Your life's changing. Don't just find a place — find what's next."
- Paragraph part 2 (reveals on scroll): "We help you move forward with clarity, confidence, and the right agent by your side."

## Responsive Behavior
- **Desktop:** Two-column — label left, text right
- **Mobile:** Single column, stacked
- **Text size mobile:** ~32-36px
