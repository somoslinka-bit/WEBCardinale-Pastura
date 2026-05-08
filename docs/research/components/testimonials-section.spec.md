# TestimonialsSection Specification

## Overview
- **Target file:** `src/components/TestimonialsSection.tsx`
- **Interaction model:** click-driven (numbered buttons 1-5 switch testimonials)
- **Height:** 870px
- **Background:** rgb(241, 241, 241) — #F1F1F1

## DOM Structure
```
<section> (bg-[#F1F1F1])
  <div> (px-[75px], py-[100px])
    <!-- Heading -->
    <h2>"Don't Take Our Word for It."</h2>

    <!-- Content: image left, quote right -->
    <div> (grid 2 columns or flex)
      <!-- Left: agent photo -->
      <div>
        <img src="/images/testimonial-1.jpg" (current testimonial photo)
      </div>

      <!-- Right: pagination + quote + name/stars -->
      <div>
        <hr /> (top line)
        <!-- Numbered pagination -->
        <div class="pagination"> (flex, gap-8)
          <button class="active">1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <span class="quote-icon"><QuoteIcon /></span>
        </div>

        <blockquote>
          "[quote text]"
        </blockquote>

        <div class="attribution">
          <span class="name">[NAME]</span>
          <span class="divider">/</span>
          <span class="stars">★★★★★</span>
        </div>
      </div>
    </div>
  </div>
</section>
```

## Computed Styles

### Section
- background-color: rgb(241, 241, 241)
- padding: 100px 75px

### Heading "Don't Take Our Word for It."
- font-size: ~56px
- font-weight: 700
- line-height: 1.1
- color: rgb(0, 0, 0)
- Same text-reveal pattern: "Don't Take" dark, "Our Word for It." lighter gray
- margin-bottom: 60px

### Photo
- width: ~320px
- height: ~400px
- object-fit: cover
- aspect-ratio: 4/5 portrait
- border-radius: 0 (no radius)

### Pagination container
- display: flex
- align-items: center
- gap: 8px
- margin-bottom: 24px

### Pagination buttons (numbered)
- width: 36px
- height: 36px
- border-radius: 50%
- border: 1px solid rgb(200, 200, 200)
- background: transparent
- font-size: 13px
- font-weight: 500
- color: rgb(100, 100, 100)
- cursor: pointer

### Active pagination button
- background: rgb(21, 23, 23) — #151717
- color: white
- border: 1px solid #151717

### Quote icon (top right of right panel)
- color: rgb(21, 23, 23)
- width: 24px
- positioned at top-right

### Blockquote text
- font-size: 18px (or larger ~22px)
- font-weight: 400
- line-height: 1.6
- color: rgb(21, 23, 23)
- font-family: "Instrument Sans"
- quotes: none (text includes literal quotes)
- max-width: 600px

### Attribution name
- font-size: 12px
- font-weight: 600
- letter-spacing: 0.1em
- text-transform: uppercase
- color: rgb(21, 23, 23)

### Attribution divider "/"
- color: rgb(150, 150, 150)
- margin: 0 8px

### Stars
- color: rgb(21, 23, 23)
- ★★★★★ (5 unicode stars or star icons)

## Per-State Content (all 5 testimonials)

### State 1 — Active by default
- Photo: `/images/testimonial-1.jpg` (man in dark suit, city background)
- Quote: "Michael was a great realtor. Such a hard worker, dedicated to helping us find the perfect neighborhood, price point and home. He's a workaholic so he was available morning, noon and night. Tireless and dedicated. Would recommend him 100%!"
- Name: "BERNADETTE HOGAN"

### State 2
- Photo: (no separate image downloaded — reuse testimonial-1.jpg or use placeholder)
- Quote: "Shirin was truly a blessing to work with. She helped us find our perfect condo in a great area. She was patient and very understanding. I would recommend working with her if you are in need of someone who will go out of their way to make sure you find the home of your dreams. She is honest and has a pure heart."
- Name: "TYLEEN"

### State 3
- Quote: "Working with Mathew was an absolute pleasure, and I highly recommend him to any serious homebuyer—especially first-time buyers like myself who may feel overwhelmed by the process. From the start, Mathew's problem-solving skills stood out. Thank you, Mathew, for making this happen—we are truly happy in our new home!"
- Name: "JOHANNA NIETO"

### State 4
- Quote: "Shirin was an invaluable resource, consultant, and general guide through the home-buying process from the initial search to closing. She immediately understood what we were looking for in a home and helped tailor our search in the right direction. Shirin was quickly responsive and proactive in pushing the agenda forward through all stages with a steady, reassuring hand."
- Name: "MATTMPOWERS"

### State 5
- Quote: "After 12 years in NYC, I have had my best broker experience by far with Fay Blau. Fay helped me find a beautiful apartment on the Upper West Side that fit my needs like a glove. As an Upper West Side local, she knows the neighborhood like the back of her hand. She was an excellent communicator throughout the entire process."
- Name: "GIAVRIDIS THEODORE"

## Transition Between States
- Clicking a number button: active testimonial fades out, new one fades in
- opacity transition: 0.3s ease
- Photo changes to match testimonial (use same photo for all states if only one is available)

## Responsive Behavior
- **Desktop:** 2-column (photo left, content right)
- **Mobile:** Stack — heading, photo, content below
