/**
 * ─────────────────────────────────────────────────────────────────────────────
 * BRAND CONFIGURATION
 * ─────────────────────────────────────────────────────────────────────────────
 * Single file to edit when adapting the theme for a new client.
 *
 * Colors flow into  → src/styles/theme.css  (CSS custom properties)
 * Fonts flow into   → astro.config.mjs      (Astro 6 built-in font optimizer)
 * Meta flows into   → src/layouts/BaseLayout.astro
 *
 * Color format: use hex (#1a1a2e) or CSS color values.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const brand = {
  // ── Site Identity ──────────────────────────────────────────────────────────
  name: 'SAS Huqooqi',
  nameAr: 'مركز ساس الحقوقي',
  tagline: 'For Legal Training',
  taglineAr: 'للتدريب القانوني',
  description:
    'SAS Huqooqi for Legal Training Center is dedicated to strengthening the rule of law, promoting human rights and good governance, and enhancing access to justice in Sudan.',
  descriptionAr:
    'مركز ساس الحقوقي للتدريب القانوني مكرس لتعزيز سيادة القانون وتعزيز حقوق الإنسان والحكم الرشيد وتحسين الوصول إلى العدالة في السودان.',
  url: 'https://sashuqooqi.org',
  locale: 'en_US',

  // ── Fonts ──────────────────────────────────────────────────────────────────
  // To swap fonts: change the `name` values here AND update astro.config.mjs
  // to match (both must stay in sync so Astro can optimise the correct files).
  fonts: {
    body: 'Inter',
    bodyAr: 'Cairo',
    display: 'Playfair Display',
    displayAr: 'Cairo',
  },

  // ── Colour Palette ─────────────────────────────────────────────────────────
  // Gold/brown theme based on SAS Huqooqi logo
  // These values are written to CSS custom properties in theme.css.
  // Tailwind v4 @theme picks them up automatically.
  colors: {
    primary:      '#8B6914',
    primaryLight: '#A67C00',
    primaryFg:    '#ffffff',

    accent:       '#5C4A0E',
    accentFg:     '#ffffff',

    background:   '#FFFDF8',
    surface:      '#FBF7EF',
    border:       '#E8DFC8',

    text:         '#1F1A0F',
    textMuted:    '#6B5D45',

    dark:         '#1F1A0F',
    darkSurface:  '#2D2618',
  },

  // ── Border radius ──────────────────────────────────────────────────────────
  radius: {
    sm:   '0.375rem',
    md:   '0.625rem',
    lg:   '1rem',
    full: '9999px',
  },
} as const;

export type Brand = typeof brand;
