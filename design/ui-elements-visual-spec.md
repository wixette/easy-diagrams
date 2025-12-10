# UI Elements and Visual Style Specification

## Color Palette

### Primary Colors

```css
--color-primary-orange: #FF8C42;      /* Primary brand, CTAs, headings */
--color-primary-cyan: #4ECDC4;        /* Links, borders, interactive elements */
--color-primary-yellow: #F4C430;      /* Logo background */
```

### Text Colors

```css
--color-text-primary: #1A1A1A;        /* Main body text, navigation */
--color-text-secondary: #4A4A4A;      /* Secondary text, descriptions */
--color-text-light: #757575;          /* Metadata, timestamps */
```

### Background Colors

```css
--color-bg-primary: #FFFFFF;          /* Main background */
--color-bg-secondary: #F8F9FA;        /* Alternate sections, cards */
--color-bg-tag: #E0F7F6;              /* Tag backgrounds */
--color-bg-hover: #F0F0F0;            /* Hover states */
```

### Border Colors

```css
--color-border-primary: #4ECDC4;      /* Card borders, primary dividers */
--color-border-secondary: #E5E5E5;    /* Subtle dividers */
--color-border-dotted: #CCCCCC;       /* Header separator */
```

### State Colors

```css
--color-success: #4CAF50;
--color-warning: #FFC107;
--color-error: #F44336;
--color-info: #2196F3;
```

## Typography

### Font Families

```css
--font-family-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                       'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
                       'Fira Sans', 'Droid Sans', 'Helvetica Neue',
                       sans-serif;
--font-family-monospace: 'Monaco', 'Courier New', monospace;
```

### Font Sizes

```css
--font-size-xs: 0.75rem;      /* 12px - Tiny labels, metadata */
--font-size-sm: 0.875rem;     /* 14px - Tags, small text */
--font-size-base: 1rem;       /* 16px - Body text */
--font-size-lg: 1.125rem;     /* 18px - Large body text */
--font-size-xl: 1.25rem;      /* 20px - Subheadings */
--font-size-2xl: 1.5rem;      /* 24px - H3 */
--font-size-3xl: 1.875rem;    /* 30px - H2, Section headers */
--font-size-4xl: 2.25rem;     /* 36px - H1, Hero text */
--font-size-5xl: 3rem;        /* 48px - Display text */
```

### Font Weights

```css
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
--font-weight-extrabold: 800;
```

### Line Heights

```css
--line-height-tight: 1.25;    /* Headings */
--line-height-normal: 1.5;    /* Body text */
--line-height-relaxed: 1.75;  /* Long-form content */
```

### Typography Scale

**Logo Text**
- Font size: `var(--font-size-lg)` (18px)
- Font weight: `var(--font-weight-bold)` (700)
- Color: `var(--color-primary-orange)`
- Text transform: uppercase
- Letter spacing: 0.05em

**Hero Tagline**
- Font size: `var(--font-size-3xl)` (30px) on mobile, `var(--font-size-4xl)` (36px) on desktop
- Font weight: `var(--font-weight-bold)` (700)
- Color: `var(--color-primary-cyan)`
- Line height: `var(--line-height-tight)` (1.25)

**Hero Description**
- Font size: `var(--font-size-base)` (16px) to `var(--font-size-lg)` (18px)
- Font weight: `var(--font-weight-normal)` (400)
- Color: `var(--color-text-primary)`
- Line height: `var(--line-height-normal)` (1.5)

**Section Headers** (Featured Posts, Recent Posts)
- Font size: `var(--font-size-3xl)` (30px)
- Font weight: `var(--font-weight-bold)` (700)
- Color: `var(--color-primary-orange)`
- Margin bottom: `var(--spacing-6)` (24px)

**Navigation Links**
- Font size: `var(--font-size-base)` (16px)
- Font weight: `var(--font-weight-medium)` (500)
- Color: `var(--color-text-primary)`

**Post Card Title**
- Font size: `var(--font-size-xl)` (20px)
- Font weight: `var(--font-weight-semibold)` (600)
- Color: `var(--color-text-primary)`
- Line height: `var(--line-height-tight)` (1.25)

**Footer Text**
- Font size: `var(--font-size-sm)` (14px)
- Font weight: `var(--font-weight-normal)` (400)
- Color: `var(--color-text-secondary)`

## Spacing Scale

### Base Spacing Units

```css
--spacing-1: 0.25rem;    /* 4px */
--spacing-2: 0.5rem;     /* 8px */
--spacing-3: 0.75rem;    /* 12px */
--spacing-4: 1rem;       /* 16px */
--spacing-5: 1.25rem;    /* 20px */
--spacing-6: 1.5rem;     /* 24px */
--spacing-8: 2rem;       /* 32px */
--spacing-10: 2.5rem;    /* 40px */
--spacing-12: 3rem;      /* 48px */
--spacing-16: 4rem;      /* 64px */
--spacing-20: 5rem;      /* 80px */
--spacing-24: 6rem;      /* 96px */
```

### Component Spacing

**Container/Layout**
- Max width: 1200px (desktop), 100% (mobile)
- Padding (mobile): `var(--spacing-4)` (16px)
- Padding (tablet): `var(--spacing-6)` (24px)
- Padding (desktop): `var(--spacing-8)` (32px)

**Section Spacing**
- Margin between sections: `var(--spacing-12)` to `var(--spacing-16)` (48-64px)
- Padding within sections: `var(--spacing-8)` (32px)

**Card Spacing**
- Padding: `var(--spacing-6)` (24px)
- Gap between cards: `var(--spacing-6)` (24px) on mobile, `var(--spacing-8)` (32px) on desktop
- Margin bottom: `var(--spacing-4)` (16px)

## Border Styles

### Border Radius

```css
--radius-sm: 4px;       /* Subtle rounding */
--radius-md: 8px;       /* Standard components */
--radius-lg: 12px;      /* Cards, larger elements */
--radius-xl: 16px;      /* Hero elements */
--radius-full: 9999px;  /* Pills, circular elements */
```

### Border Widths

```css
--border-width-thin: 1px;
--border-width-medium: 2px;
--border-width-thick: 3px;
```

### Border Styles

**Card Borders**
- Style: dashed
- Width: `var(--border-width-medium)` (2px)
- Color: `var(--color-border-primary)`
- Radius: `var(--radius-lg)` (12px)

**Header Separator**
- Style: dotted
- Width: `var(--border-width-thin)` (1px)
- Color: `var(--color-border-dotted)`

## Components

### Header

**Dimensions**
- Height: 64px (mobile), 80px (desktop)
- Padding: `var(--spacing-4)` horizontal, `var(--spacing-3)` vertical

**Logo**
- Icon size: 48px × 48px
- Icon background: `var(--color-primary-yellow)`
- Icon border radius: `var(--radius-full)` (circular)
- Text margin-left: `var(--spacing-3)` (12px)

**Navigation**
- Gap between items: `var(--spacing-6)` (24px) on desktop, `var(--spacing-4)` (16px) on mobile
- Hover effect: Opacity 0.7, transition 150ms

**Language Selector Button**
- Background: `var(--color-primary-orange)`
- Color: white
- Padding: `var(--spacing-2)` (8px) vertical, `var(--spacing-5)` (20px) horizontal
- Border radius: `var(--radius-md)` (8px)
- Font weight: `var(--font-weight-medium)` (500)
- Hover: Darken by 10%, transition 150ms

### Hero Section

**Spacing**
- Padding top/bottom: `var(--spacing-12)` (48px) on mobile, `var(--spacing-16)` (64px) on desktop
- Max width: 900px
- Text align: left

**Tagline + Description Layout**
- Display: Two-column on desktop (60/40 split), stacked on mobile
- Gap: `var(--spacing-6)` (24px)

### Post Cards

**Card Container**
- Background: `var(--color-bg-primary)`
- Border: 2px dashed `var(--color-border-primary)`
- Border radius: `var(--radius-lg)` (12px)
- Padding: `var(--spacing-6)` (24px)
- Transition: all 200ms ease
- Hover: Transform translateY(-4px), add subtle shadow

**Card Grid**
- Display: grid
- Columns: 1 (mobile), 2 (tablet ≥768px), 3 (desktop ≥1024px)
- Gap: `var(--spacing-6)` (24px) on mobile/tablet, `var(--spacing-8)` (32px) on desktop

**Card Title**
- Margin bottom: `var(--spacing-4)` (16px)

**Card Content**
- Margin bottom: `var(--spacing-4)` (16px)

**Tags Container**
- Display: flex
- Gap: `var(--spacing-2)` (8px)
- Flex wrap: wrap
- Margin top: auto (pushes to bottom of card)

### Tags

**Tag Pill**
- Background: `var(--color-bg-tag)`
- Color: `var(--color-text-primary)`
- Padding: `var(--spacing-1)` (4px) vertical, `var(--spacing-3)` (12px) horizontal
- Border radius: `var(--radius-full)` (pill shape)
- Font size: `var(--font-size-sm)` (14px)
- Font weight: `var(--font-weight-medium)` (500)
- Transition: background 150ms
- Hover: Darken background by 10%

### Buttons

**Primary Button** (Language selector style)
- Background: `var(--color-primary-orange)`
- Color: white
- Padding: `var(--spacing-3)` (12px) vertical, `var(--spacing-6)` (24px) horizontal
- Border radius: `var(--radius-md)` (8px)
- Font size: `var(--font-size-base)` (16px)
- Font weight: `var(--font-weight-medium)` (500)
- Border: none
- Cursor: pointer
- Transition: all 150ms
- Hover: Darken by 10%, transform scale(1.02)
- Active: Darken by 20%, transform scale(0.98)

**Secondary Button**
- Background: transparent
- Color: `var(--color-primary-cyan)`
- Border: 2px solid `var(--color-primary-cyan)`
- Other properties: Same as primary button
- Hover: Background `var(--color-bg-tag)`, no darken

**Minimum Touch Target**
- Minimum size: 44px × 44px (mobile)
- Minimum size: 36px × 36px (desktop with mouse)

### Links

**Text Links**
- Color: `var(--color-primary-cyan)`
- Text decoration: none
- Font weight: `var(--font-weight-medium)` (500)
- Transition: opacity 150ms
- Hover: Opacity 0.7, underline
- Arrow suffix: " →" (unicode U+2192)

**Navigation Links**
- Color: `var(--color-text-primary)`
- Hover: Color to `var(--color-primary-cyan)`, transition 150ms

### Section Headers

**Container**
- Margin bottom: `var(--spacing-8)` (32px)
- Text align: left or center (context dependent)

**Section Navigation Links**
- Display: flex
- Justify content: space-between or center
- Gap: `var(--spacing-8)` (32px)
- Margin top: `var(--spacing-6)` (24px)

### Footer

**Container**
- Padding: `var(--spacing-8)` (32px) vertical
- Border top: 1px solid `var(--color-border-secondary)`
- Background: `var(--color-bg-primary)`
- Text align: center

**Text**
- Font size: `var(--font-size-sm)` (14px)
- Color: `var(--color-text-secondary)`

## Shadows

```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
             0 2px 4px -1px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
             0 4px 6px -2px rgba(0, 0, 0, 0.05);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
             0 10px 10px -5px rgba(0, 0, 0, 0.04);
```

**Card Hover Shadow**
- Default: `var(--shadow-sm)`
- Hover: `var(--shadow-lg)`

## Transitions & Animations

### Timing Functions

```css
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
```

### Duration

```css
--duration-fast: 150ms;
--duration-normal: 200ms;
--duration-slow: 300ms;
```

### Common Transitions

**Hover Effects**
- Property: all or specific (color, background, transform, opacity)
- Duration: `var(--duration-fast)` (150ms)
- Timing: `var(--ease-in-out)`

**Card Hover**
- Transform: translateY(-4px)
- Shadow: `var(--shadow-sm)` → `var(--shadow-lg)`
- Duration: `var(--duration-normal)` (200ms)

## Responsive Breakpoints

```css
--breakpoint-sm: 640px;   /* Small tablets */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Small laptops */
--breakpoint-xl: 1280px;  /* Desktops */
--breakpoint-2xl: 1536px; /* Large desktops */
```

### Layout Behavior

**Mobile First** (< 640px)
- Single column layouts
- Full-width cards
- Stacked navigation
- Larger touch targets
- Reduced spacing

**Tablet** (640px - 1023px)
- 2-column card grids
- Horizontal navigation
- Moderate spacing
- Balanced typography

**Desktop** (≥ 1024px)
- 3-column card grids
- Full horizontal navigation
- Generous spacing
- Optimized typography for reading distance

## Accessibility

### Focus Indicators

```css
--focus-ring: 0 0 0 3px rgba(78, 205, 196, 0.4);
--focus-outline: 2px solid var(--color-primary-cyan);
--focus-offset: 2px;
```

**Interactive Elements Focus**
- Outline: `var(--focus-outline)`
- Outline offset: `var(--focus-offset)`
- Box shadow: `var(--focus-ring)` (optional, in addition to outline)

### Color Contrast

All color combinations must meet WCAG 2.1 AA standards:
- Normal text (< 18px): 4.5:1 contrast ratio minimum
- Large text (≥ 18px or ≥14px bold): 3:1 contrast ratio minimum
- Interactive elements: 3:1 against adjacent colors

### Motion

```css
@media (prefers-reduced-motion: reduce) {
  --duration-fast: 0ms;
  --duration-normal: 0ms;
  --duration-slow: 0ms;
}
```

## Z-Index Scale

```css
--z-index-base: 0;
--z-index-dropdown: 1000;
--z-index-sticky: 1100;
--z-index-fixed: 1200;
--z-index-modal-backdrop: 1300;
--z-index-modal: 1400;
--z-index-popover: 1500;
--z-index-tooltip: 1600;
```

## Implementation Notes

### CSS Custom Properties Setup

Create a root-level CSS file (e.g., `styles/design-tokens.css`) with all variables:

```css
:root {
  /* Colors */
  --color-primary-orange: #FF8C42;
  --color-primary-cyan: #4ECDC4;
  /* ... all other variables */
}
```

### Component Classes

Use a consistent naming convention (BEM, utility-first, or module-based):

```css
.card {
  border: var(--border-width-medium) dashed var(--color-border-primary);
  border-radius: var(--radius-lg);
  padding: var(--spacing-6);
  /* ... */
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}
```

### Responsive Implementation

Use mobile-first media queries:

```css
/* Mobile first (default) */
.card-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-6);
}

/* Tablet */
@media (min-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-8);
  }
}
```
