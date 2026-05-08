# OutroSection / Footer Specification

## Overview
- **Target file:** `src/components/OutroSection.tsx`
- **Interaction model:** static
- **Height:** 675px
- **Background:** rgb(21, 23, 23) — #151717 dark

## DOM Structure
```
<section> (bg-[#151717], text-white)
  <!-- Final CTA block (optional — "Find You. We'll Help You Get There.") -->
  <div class="cta-block"> (px-[75px], py-[80px], border-bottom or separate)
    <h2>"Find You. We'll Help You Get There."</h2>
    <a>"Let's Get Started" <ArrowRightIcon /></a>
  </div>

  <!-- Newsletter + Nav + Contact row -->
  <div class="footer-main"> (px-[75px], py-[60px])
    <!-- Left: newsletter -->
    <div>
      <h3>"Subscribe to our Newsletter!"</h3>
      <form> (input + submit arrow button)
        <input type="email" placeholder="Enter address" />
        <button type="submit"><ArrowRightIcon /></button>
      </form>
    </div>

    <!-- Contact info -->
    <div class="contact-cols"> (3 cols: Head Office, Email Us, Call Us)
      <div>
        <span class="label">"Head Office"</span>
        <p>"5 West 37th Street, 12th Floor, New York, NY 10018"</p>
      </div>
      <div>
        <span class="label">"Email Us"</span>
        <p>"hello@findrealestate.com"</p>
      </div>
      <div>
        <span class="label">"Call Us"</span>
        <p>"+1 212 994 9965"</p>
      </div>
    </div>

    <!-- Nav links (right column) -->
    <nav>
      <a>"Search"</a>
      <a>"Agents"</a>
      <a>"Join"</a>
      <a>"About Us"</a>
      <a>"Agent Portal"</a>
    </nav>

    <!-- Social links (far right) -->
    <div>
      <a>"Facebook"</a>
      <a>"Instagram"</a>
      <a>"Youtube"</a>
      <a>"Linkedin"</a>
    </div>
  </div>

  <!-- Big FIND logo -->
  <div> (px-[75px], pb-[40px])
    <FindWordmark /> (large, white, fills width)
  </div>

  <!-- Bottom bar -->
  <div class="footer-bottom"> (px-[75px], py-[16px], border-top, flex, justify-between, text-xs)
    <div> (left: legal links)
      <a>"Terms"</a>
      <a>"Privacy policy"</a>
      <a>"Fair Housing Notice"</a>
      <a>"Operating Procedure"</a>
      <a>"Press"</a>
      <a>"Housing Choice Vouchers Welcome"</a>
      <a>"Se Aceptan Vales de Elección de Vivienda"</a>
    </div>
    <span>"FIND Real Estate"</span>
    <span>"Copyright © 2026"</span>
  </div>
</section>
```

## Computed Styles

### Section
- background-color: rgb(21, 23, 23)
- color: rgb(255, 255, 255)

### "Find You. We'll Help You Get There." (if present as CTA)
- font-size: ~48px
- font-weight: 700
- color: white

### "Let's Get Started" button
- pill dark on dark: outline white variant
- border: 1px solid rgba(255,255,255,0.5), border-radius: 100px

### Newsletter heading
- font-size: 20px
- font-weight: 600
- color: white
- margin-bottom: 16px

### Newsletter form
- display: flex
- align-items: center
- border-bottom: 1px solid rgba(255,255,255,0.4)
- padding-bottom: 8px
- width: 100%

### Newsletter input
- background: transparent
- border: none
- color: white
- font-size: 15px
- flex: 1
- outline: none
- placeholder color: rgba(255,255,255,0.4)

### Newsletter submit button
- background: transparent
- border: none
- color: white
- cursor: pointer

### Contact labels ("Head Office", "Email Us", "Call Us")
- font-size: 11px
- font-weight: 500
- color: rgba(255,255,255,0.5)
- text-transform: uppercase
- letter-spacing: 0.08em
- margin-bottom: 8px

### Contact values
- font-size: 14px
- color: rgba(255,255,255,0.9)
- line-height: 1.5

### Nav links (footer)
- font-size: 18px
- font-weight: 500
- color: rgb(255,255,255)
- display: block (stacked vertically)
- line-height: 2.0

### Social links
- font-size: 14px
- color: rgba(255,255,255,0.7)
- display: block (stacked)
- line-height: 2.0

### Big FIND wordmark
- color: white
- width: 100% (fills available width)
- max-width: 800px
- display: block

### Bottom bar
- display: flex
- justify-content: space-between
- align-items: center
- border-top: 1px solid rgba(255,255,255,0.15)
- padding: 16px 0
- font-size: 11px
- color: rgba(255,255,255,0.5)
- gap: 24px (between links)

## Text Content (verbatim)
- Final CTA heading: "Find You. We'll Help You Get There."
- Final CTA button: "Let's Get Started"
- Newsletter: "Subscribe to our Newsletter!"
- Input placeholder: "Enter address"
- Head Office: "5 West 37th Street, 12th Floor, New York, NY 10018"
- Email: "hello@findrealestate.com"
- Phone: "+1 212 994 9965"
- Nav: Search | Agents | Join | About Us | Agent Portal
- Social: Facebook | Instagram | Youtube | Linkedin
- Bottom bar: Terms | Privacy policy | Fair Housing Notice | Operating Procedure | Press | Housing Choice Vouchers Welcome | Se Aceptan Vales de Elección de Vivienda | FIND Real Estate | Copyright © 2026

## Assets
- FindWordmark SVG from `src/components/icons.tsx`
