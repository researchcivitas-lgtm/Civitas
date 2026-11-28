/**
 * ─────────────────────────────────────────────────────────────────────────────
 * BRAND CONFIGURATION
 * ─────────────────────────────────────────────────────────────────────────────
 * Site identity and font names used by layouts, components, and SEO metadata.
 *
 * Fonts flow into   → astro.config.mjs  (Astro 7 built-in font optimizer)
 * Meta flows into   → src/layouts/BaseLayout.astro
 *
 * Colors & radius live in ONE place: src/styles/theme.css (@theme block).
 * Edit theme.css directly — do not duplicate values here.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const brand = {
  // ── Site Identity ──────────────────────────────────────────────────────────
  name: 'Civitas',
  tagline: 'A Student-Led, Civic Research Initiative',
  description:'A nonpartisan, student-led civic research project focused on homelessness. The goal is to build a mini think tank model at the high school level, where students learn how to create structured, evidence-based based on real social problems.',
  url: 'https://example.com',
  locale: 'en_US',

  // ── Fonts ──────────────────────────────────────────────────────────────────
  // To swap fonts: change the `name` values here AND update astro.config.mjs
  // to match (both must stay in sync so Astro can optimise the correct files).
  fonts: {
    body: 'Inter',
    display: 'Oswald',
  },
} as const;

export type Brand = typeof brand;
