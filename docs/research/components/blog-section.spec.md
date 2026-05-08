# LatestPostsSection Specification

## Overview
- **Target file:** `src/components/LatestPostsSection.tsx`
- **Interaction model:** static list
- **Height:** 1588px
- **Background:** rgb(241, 241, 241) — #F1F1F1

## DOM Structure
```
<section> (bg-[#F1F1F1], px-[75px], py-[100px])
  <!-- Header row: title left, CTA right -->
  <div> (flex, justify-between, align-items: flex-start, mb-[80px])
    <div>
      <h2>
        "Blog &"
        <br />
        <span class="muted">"Resources"</span>
      </h2>
    </div>
    <div>
      <p>"See how we've helped clients achieve their real estate dreams, one successful move at a time."</p>
      <a>"Visit Our Blog" <ArrowRightIcon /></a>
    </div>
  </div>

  <!-- Blog posts list (3 posts, divided by horizontal lines) -->
  <div class="posts-list">
    <!-- Post 1 -->
    <div class="post-item"> (border-top, py-[48px])
      <span class="date">"2026-04-13"</span>
      <div class="post-content"> (flex or grid)
        <h3>"Q1 2026 NYC Market Report"</h3>
        <p>"Q1 2026 saw strong rental demand, active sales, and shifting pricing across NYC. Here's what it means heading into the spring market."</p>
        <a>"Read More" <ArrowRightIcon /></a>
      </div>
      <div class="post-image">
        <img src="/images/blog-nyc-market.png" />
      </div>
    </div>

    <!-- Post 2 -->
    <div class="post-item"> (border-top)
      <span class="date">"2026-04-01"</span>
      <h3>"Philly Real Estate: A Winter Chill or a Spring Opportunity?"</h3>
      <p>"Record-low listings and steady price growth define a unique February for the Philadelphia Metro."</p>
      <a>"Read More"</a>
      <img src="/images/blog-philly.jpg" />
    </div>

    <!-- Post 3 -->
    <div class="post-item"> (border-top, border-bottom)
      <span class="date">"2026-03-09"</span>
      <h3>"What $1M Buys in Different NYC Neighborhoods"</h3>
      <p>"Curious what $1M can still buy in today's NYC market? Explore a snapshot of available listings across Manhattan and discover the surprising range of options at this key price point."</p>
      <a>"Read More"</a>
      <img src="/images/blog-nyc-1m.jpg" />
    </div>
  </div>
</section>
```

## Computed Styles

### Section
- background-color: rgb(241, 241, 241)
- padding: 100px 75px

### "Blog & Resources" heading
- "Blog &" — font-size: ~80px, font-weight: 700, color: rgb(0,0,0)
- "Resources" — same size, color: rgb(180,180,180) — muted
- line-height: 1.0

### Right description
- font-size: 18px
- line-height: 1.6
- color: rgb(0, 0, 0)
- max-width: 500px

### "Visit Our Blog" button
- pill dark: bg #151717, white text, border-radius 100px, padding 11.55px 22.5px

### Post list item
- display: grid
- grid-template-columns: 140px 1fr 280px (date | content | image) approximate
- gap: 40px
- padding: 48px 0
- border-top: 1px solid rgba(0,0,0,0.15)
- align-items: center

### Date
- font-size: 13px
- font-weight: 400
- color: rgb(120, 120, 120)
- font-family: "Instrument Sans"
- white-space: nowrap

### Post title h3
- font-size: 28px
- font-weight: 600
- line-height: 1.2
- color: rgb(0, 0, 0)
- margin-bottom: 12px

### Post description
- font-size: 15px
- line-height: 1.6
- color: rgb(80, 80, 80)
- margin-bottom: 20px

### "Read More" link
- font-size: 13px
- display: inline-flex
- align-items: center
- gap: 6px
- color: rgb(21, 23, 23)
- font-weight: 500

### Post image
- width: ~280px (or 30% of row)
- height: ~180px
- object-fit: cover
- border-radius: 6px

## Text Content (verbatim)
- Section heading: "Blog & Resources"
- Section desc: "See how we've helped clients achieve their real estate dreams, one successful move at a time."
- CTA: "Visit Our Blog"
- Post 1: date 2026-04-13, title/desc as above
- Post 2: date 2026-04-01, title/desc as above
- Post 3: date 2026-03-09, title/desc as above
- All posts: "Read More →"

## Assets
- Post 1: `/images/blog-nyc-market.png`
- Post 2: `/images/blog-philly.jpg`
- Post 3: `/images/blog-nyc-1m.jpg`

## Responsive Behavior
- **Desktop:** 3-column row (date | content | image)
- **Mobile:** Stacked — date, title, desc, button, image
