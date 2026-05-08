# Navbar Specification

## Overview
- **Target file:** `src/components/Navbar.tsx`
- **Interaction model:** sticky, transparent over hero, gains background on scroll
- **Screenshot:** docs/design-references/navbar-desktop.png

## DOM Structure
```
<header> (sticky, z-50, full-width)
  <div> (inner container, maxWidth 1920px, px-[75px], height 58.5px, flex, items-center, justify-between)
    <a href="/"> (logo link)
      <FindLogo /> (SVG, width ~80px, height auto, currentColor = #151717)
    </a>
    <nav> (flex, gap, items-center — desktop only)
      <a>Search</a>
      <a>Agents</a>
      <a>Join</a>
      <div> (dropdown trigger)
        <button>Paperwork <ChevronDownIcon/></button>
      </div>
      <div> (dropdown trigger)
        <button>Resources <ChevronDownIcon/></button>
      </div>
      <div> (dropdown trigger)
        <button>About <ChevronDownIcon/></button>
      </div>
    </nav>
    <div> (right side, flex, items-center, gap)
      <a href="/sign-in"> (Sign In button)
        Sign In
      </a>
      <button> (mobile hamburger, hidden on desktop)
        <MenuIcon />
      </button>
    </div>
  </div>
</header>
```

## Computed Styles (exact values)

### `<header>`
- position: sticky
- top: 0px
- z-index: 50
- width: 100%
- background: rgba(0, 0, 0, 0) — transparent, overlays hero
- display: block

### Inner container `<div>`
- display: flex
- align-items: center
- justify-content: space-between
- padding-left: 75px
- padding-right: 75px
- max-width: 1920px
- width: 100%
- height: 58.5px
- margin: 0 auto

### Logo `<FindLogo>`
- width: ~80px
- height: auto
- color: #151717 (black) — uses currentColor

### Nav links `<a>`, `<button>`
- font-size: 15px
- font-weight: 500
- color: rgb(21, 23, 23) — #151717
- font-family: "Instrument Sans"
- background: transparent
- border: none
- display: inline-flex
- align-items: center
- gap: 4px (for chevron)

### Sign In button `<a>`
- font-size: 15px
- font-weight: 500
- background-color: rgb(21, 23, 23) — #151717
- color: rgb(255, 255, 255)
- border-radius: 100px
- padding: 11.55px 22.5px
- display: inline-flex
- align-items: center

## States & Behaviors

### Transparent overlay at top
- At scroll position 0: header background is transparent → hero image shows through
- The header overlays the hero section visually

### Scroll behavior (observed)
- On scroll: may gain a subtle backdrop/background — needs `useScrollPosition` hook
- White background appears when scrolled past ~80px (approximate)

### Mobile hamburger
- At <768px: nav links hidden, hamburger (≡) shown top right
- Logo stays top left

## Text Content
- Nav links: Search | Agents | Join | Paperwork ▾ | Resources ▾ | About ▾
- CTA: "Sign In"

## Responsive Behavior
- **Desktop (1440px):** Full nav visible, Sign In right-aligned
- **Mobile (390px):** Logo left, hamburger (≡) right, no nav links
- **Breakpoint:** ~768px

## Assets
- Logo: `<FindLogo />` from `src/components/icons.tsx`
- Chevron: `<ChevronDownIcon />` from `src/components/icons.tsx`
- Hamburger: `<MenuIcon />` from `src/components/icons.tsx`
