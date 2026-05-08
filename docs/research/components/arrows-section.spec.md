# ArrowsSection Specification

## Overview
- **Target file:** `src/components/ArrowsSection.tsx`
- **Interaction model:** static (no interactivity, just visual)
- **Height:** 823px
- **Background:** transparent (white)

## DOM Structure
```
<section> (px-[75px], py-[80px])
  <!-- Large text at top -->
  <div class="text-block"> (text-center or left-aligned)
    <h2>
      <span class="dark">"This isn't just"</span>
      <br/>
      <span class="muted">"about real estate."</span>
    </h2>
  </div>

  <!-- Diamond/rhombus shaped agent images row -->
  <div class="diamond-row"> (flex, gap, justify-center, my-[48px])
    <div class="diamond"> <img src="/images/why-find-1.jpg" (clip-diamond) /></div>
    <div class="diamond"> <img src="/images/why-find-2.jpg" /></div>
    <div class="diamond"> <img src="/images/why-find-3.jpg" /></div>
    <div class="diamond"> <img src="/images/why-find-4.jpg" /></div>
  </div>

  <!-- Second text block (centered) -->
  <div class="text-block-2"> (text-center, max-width, mx-auto)
    <p>
      <strong>"It's about identity. Progress. Getting unstuck."</strong>
      <span class="muted">" You're not just looking for a place. You're looking for alignment. That's what we help you find."</span>
    </p>
  </div>
</section>
```

## Computed Styles

### Section
- background: transparent
- padding: 80px 75px

### Main heading "This isn't just about real estate."
- font-size: ~64px
- font-weight: 700
- line-height: 1.05
- color: rgb(0,0,0) for "This isn't just"
- color: rgb(180,180,180) for "about real estate." — muted
- text-align: center or left

### Diamond-shaped images
- Each diamond container:
  - width: ~160px
  - height: ~160px
  - clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)
  - overflow: hidden
- Image inside:
  - width: 100%
  - height: 100%
  - object-fit: cover
  - scale: 1.4 (to fill diamond without blank corners)

### Diamond row
- display: flex
- align-items: center
- justify-content: center
- gap: 12px
- margin: 48px auto

### Second paragraph text
- font-size: 24px
- font-weight: 400
- line-height: 1.5
- text-align: center
- max-width: 700px
- margin: 0 auto

### Strong part
- font-weight: 700
- color: rgb(0,0,0)

### Muted part
- color: rgb(150,150,150)

## Text Content (verbatim)
- Line 1: "This isn't just"
- Line 2 (muted): "about real estate."
- Diamond images: 4 agent/lifestyle photos
- Para strong: "It's about identity. Progress. Getting unstuck."
- Para muted: " You're not just looking for a place. You're looking for alignment. That's what we help you find."

## Assets
- Diamond 1: `/images/why-find-1.jpg`
- Diamond 2: `/images/why-find-2.jpg`
- Diamond 3: `/images/why-find-3.jpg`
- Diamond 4: `/images/why-find-4.jpg`

## Responsive Behavior
- **Desktop:** Diamonds in a row
- **Mobile:** Diamonds may hide or show fewer, text stacks
