# StepsSection Specification

## Overview
- **Target file:** `src/components/StepsSection.tsx`
- **Interaction model:** static
- **Height:** 645px
- **Background:** transparent (white)

## DOM Structure
```
<section> (px-[75px], py-[100px])
  <div> (grid 2 cols, gap-[100px])
    <!-- Left: heading + CTA -->
    <div>
      <h2>
        "Real Estate,"
        <br/>
        <span class="muted">"Rewired."</span>
      </h2>
      <a href="/search">"Start Your Search" <ArrowRightIcon /></a>
    </div>

    <!-- Right: steps list -->
    <div>
      <span class="label">"Steps:"</span>
      <div class="steps-list"> (flex col, gap-[32px], mt-[24px])
        <!-- Step 1 -->
        <div class="step"> (flex, gap, border-bottom, pb-[32px])
          <span class="step-number">"01"</span>
          <div>
            <p>
              <strong>"Talk to a Real Human."</strong>
              " We match you with an expert who actually listens."
            </p>
          </div>
        </div>
        <!-- Step 2 -->
        <div class="step">
          <span>"02"</span>
          <p><strong>"Get Clarity."</strong> " We define what you really need, not just what's available."</p>
        </div>
        <!-- Step 3 -->
        <div class="step">
          <span>"03"</span>
          <p><strong>"Move Forward."</strong> " We find what fits — and make it happen."</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

## Computed Styles

### Section
- background: transparent (white body)
- padding: 100px 75px

### Layout
- display: grid
- grid-template-columns: 1fr 1fr
- gap: 80px
- align-items: start

### "Real Estate, Rewired." heading
- "Real Estate," — font-size: ~72px, font-weight: 700, color: rgb(0,0,0)
- "Rewired." — same size, color: rgb(180,180,180) — muted
- line-height: 1.0
- letter-spacing: -1px

### "Start Your Search" button
- Same pill dark: bg #151717, white text, border-radius 100px
- margin-top: 32px

### "Steps:" label
- font-size: 13px
- font-weight: 500
- color: rgb(120, 120, 120)
- text-transform: none

### Step item
- display: flex
- align-items: flex-start
- gap: 20px
- padding-bottom: 32px
- border-bottom: 1px solid rgba(0,0,0,0.1)

### Step number
- font-size: 12px
- font-weight: 400
- color: rgba(0,0,0,0.4)
- min-width: 24px
- margin-top: 4px

### Step text
- font-size: 16px
- line-height: 1.6
- color: rgb(0, 0, 0)

### Step text strong part
- font-weight: 700
- color: rgb(0, 0, 0)

### Step text rest
- font-weight: 400
- color: rgb(80, 80, 80)

## Text Content (verbatim)
- Heading: "Real Estate, Rewired."
- CTA: "Start Your Search"
- Label: "Steps:"
- Step 1: "Talk to a Real Human." + " We match you with an expert who actually listens."
- Step 2: "Get Clarity." + " We define what you really need, not just what's available."
- Step 3: "Move Forward." + " We find what fits — and make it happen."

## Responsive Behavior
- **Desktop:** 2-column grid
- **Mobile:** Stacked — heading above, steps below
