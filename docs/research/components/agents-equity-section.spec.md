# AgentsEquitySection Specification

## Overview
- **Target file:** `src/components/AgentsEquitySection.tsx`
- **Interaction model:** static with floating parallax images
- **Height:** 1247px
- **Background:** transparent (white)

## DOM Structure
```
<section> (px-[75px], py-[100px], overflow-hidden, relative)
  <!-- "For Agents" label (top) -->
  <span class="label">"For Agents"</span>

  <!-- Floating images + text layout -->
  <div class="content"> (relative, min-height: 800px)
    <!-- Left floating image: office/glass building with hand -->
    <div class="float-left"> (absolute or float, left-[0], top-[80px], w-[180px])
      <img src="/images/agent-1.jpg" (portrait, tall narrow image) />
    </div>

    <!-- Center text block -->
    <div class="center-text"> (max-width: 700px, mx-auto, text-center, pt-[200px])
      <h2>"Don't Rent Your Career. Own It."</h2>
      <p>
        "At FIND, our agents don't just work for the brand—they own a part of it."
        <span class="muted">"We give top performers real equity, so they're invested in more than just your transaction—they're invested in your outcome."</span>
      </p>
      <p>"Agents are certified, supported, and equipped to deliver five-star service—because their success is tied to yours."</p>
      <p class="muted">"You're not just here to close deals — you're building a career, a life, a legacy. We help agents find the company that gives them the support, tools, and leadership to thrive."</p>
      <a>"Join The Movement" <ArrowRightIcon /></a>
    </div>

    <!-- Right floating image: aerial houses -->
    <div class="float-right"> (absolute, right-[0], top-[0], w-[350px])
      <img src="/images/agent-2.jpg" (aerial view of houses in trees) />
    </div>
  </div>
</section>
```

## Computed Styles

### Section
- background: transparent
- padding: 100px 75px
- overflow: hidden (to hide partially off-screen images)
- position: relative

### "For Agents" label
- font-size: 13px
- font-weight: 500
- color: rgb(120, 120, 120)
- display: block
- margin-bottom: 80px

### Left floating image
- position: absolute
- left: 0 or left: -40px (slightly off-screen)
- top: 80px
- width: 180px
- height: ~500px (tall portrait)
- object-fit: cover
- border-radius: 4px

### Right floating image
- position: absolute
- right: 0 or right: -40px (slightly off-screen)
- top: 0
- width: 350px
- height: ~600px (large landscape aerial)
- object-fit: cover
- border-radius: 4px

### Center text block
- max-width: 700px
- margin: 0 auto
- text-align: center
- padding-top: 120px (to clear floating images)

### "Don't Rent Your Career. Own It." heading
- font-size: ~56px
- font-weight: 700
- line-height: 1.1
- color: rgb(0,0,0)
- margin-bottom: 32px

### Description paragraphs
- font-size: 18px
- line-height: 1.7
- margin-bottom: 16px
- max-width: 600px

### Strong/dark text
- color: rgb(0,0,0)
- font-weight: 500

### Muted text
- color: rgb(150,150,150)
- font-weight: 400

### "Join The Movement" button
- Same pill dark: bg #151717, white text, border-radius 100px
- margin-top: 40px

## Text Content (verbatim)
- Label: "For Agents"
- Heading: "Don't Rent Your Career. Own It."
- Para 1: "At FIND, our agents don't just work for the brand—they own a part of it. We give top performers real equity, so they're invested in more than just your transaction—they're invested in your outcome."
- Para 2: "Agents are certified, supported, and equipped to deliver five-star service—because their success is tied to yours."
- Para 3: "You're not just here to close deals — you're building a career, a life, a legacy. We help agents find the company that gives them the support, tools, and leadership to thrive."
- CTA: "Join The Movement"

## Assets
- Left image: `/images/agent-1.jpg` (glass building with arm reaching up)
- Right image: `/images/agent-2.jpg` (aerial view of tree-lined residential street)

## Responsive Behavior
- **Desktop:** Floating images on left/right sides, text centered between them
- **Mobile:** Images hidden or stacked above text, text full-width
