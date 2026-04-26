# Design Brief: Olympia Lily Wellness

**Tone:** Premium medical authority paired with approachable warmth — trustworthy, not clinical.

**Differentiation:** Accessible healthcare design emphasizing preventive wellness and family-focused care. Emerald green represents natural wellness; sky blue conveys clinical trust.

## Color Palette

| Token              | OKLCH             | Purpose                          |
|:------------------|:------------------|:---------------------------------|
| Primary (Emerald)  | 0.52 0.16 145     | CTA buttons, active states       |
| Secondary (Sky)    | 0.65 0.18 253     | Links, accent elements           |
| Accent (Sage)      | 0.60 0.12 160     | Highlights, badges               |
| Muted              | 0.97 0.02 101     | Card backgrounds, inactive UI    |
| Foreground         | 0.20 0 0          | Body text, primary copy          |
| Background         | 0.99 0 0          | Page background                  |
| Border             | 0.92 0.01 101     | Dividers, input borders          |

## Typography

| Layer    | Font         | Usage                             |
|:---------|:-------------|:----------------------------------|
| Display  | Figtree      | H1–H2, hero headlines             |
| Body     | General Sans | P, form, product descriptions     |
| Mono     | JetBrains    | Code, technical specs (if needed) |

**Scale:** `--radius: 1rem` (16px) — generous rounding for cards, buttons, inputs.

## Structural Zones

| Zone   | Background   | Treatment                      |
|:-------|:-------------|:-------------------------------|
| Header | `card`       | Solid white w/ soft shadow-md  |
| Hero   | `background` | Gradient accent overlay        |
| Cards  | `muted`      | Alternating with `background`  |
| Footer | `muted`      | Soft divider, company branding |

## Motion

- **Entrance:** Fade-in on scroll (0.6s ease-out)
- **Hover:** Subtle scale (1.02) + color shift on cards/buttons
- **Transition default:** `transition-smooth` (0.3s cubic-bezier)

## Component Patterns

- Cards: `shadow-card`, rounded corners, `bg-card` or `bg-muted`
- Buttons: Primary (emerald bg) + secondary (border only)
- Inputs: Soft border, `bg-input`, focus ring via `ring-primary`
- Badges: `bg-accent/20`, `text-accent` for trustworthiness

## Constraints

- Fully responsive: `sm:` (640px), `md:` (768px), `lg:` (1024px), `xl:` (1280px)
- No dark mode; white-background-only aesthetic
- No gradients on text; use solid colors with semantic meaning
- Accessible WCAG AA+ contrast throughout
