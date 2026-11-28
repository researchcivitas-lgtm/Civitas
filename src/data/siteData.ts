/**
 * ─────────────────────────────────────────────────────────────────────────────
 * SITE DATA — the single file every template user edits
 * ─────────────────────────────────────────────────────────────────────────────
 * Business name, contact info, services, reviews, team, hours, and navigation
 * all live here. Components and pages import from this file so you never need
 * to hunt through markup to update your business details.
 *
 * IMPORTANT: also update the `site` field in astro.config.mjs to match your
 * production domain.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const siteData = {
  // ── Business identity ────────────────────────────────────────────────────
  name: 'Civitas',
  tagline: 'A Student-Led, Civic Research Initiative',
  description:'Yap yap yap yap',
  url: 'https://example.com',
  locale: 'en_US',

  /** Business / contractor license number. Displayed in the header and footer
   *  as a trust signal. Set to an empty string to hide it. */
  license: '',

  // ── Contact ──────────────────────────────────────────────────────────────
  email: 'researchcivitas@gmail.com',
  phoneForTel: '503-449-3584',
  phoneFormatted: '(503) 449-3584',
  address: {
    lineOne: '123 Main Street',
    lineTwo: 'Suite 100',
    city: 'Denver',
    state: 'CO',
    zip: '80206',
    country: 'US',
    mapLink: 'https://maps.app.goo.gl/example',
  },
  hours: [
    { days: 'Monday - Friday', time: '7:00 AM - 6:00 PM' },
    { days: 'Saturday', time: '8:00 AM - 2:00 PM' },
    { days: 'Sunday', time: 'Closed' },
  ],

  emergencyService: '24/7 Emergency Service Available',

  // ── Social media (set to empty string to hide a link) ────────────────────
  socials: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/civitas.dnhs/',
    google: 'https://www.google.com/maps',
  },

  // ── Navigation (add, remove, or reorder as needed) ───────────────────────
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],

  // ── Services ─────────────────────────────────────────────────────────────
  services: [
    {
      title: 'General Repairs',
      description:
        'From leaky faucets to broken drywall, our team handles everyday repairs quickly and professionally. We diagnose the issue, explain your options, and get it fixed — no surprises on the bill.',
    },
    {
      title: 'Installations',
      description:
        'New fixtures, appliances, water heaters, ceiling fans, and more. We ensure every installation is up to code, properly tested, and backed by our workmanship guarantee.',
    },
    {
      title: 'Inspections',
      description:
        'Comprehensive property inspections for homebuyers, sellers, and proactive homeowners. We identify potential issues before they become expensive emergencies.',
    },
    {
      title: 'Remodeling',
      description:
        'Kitchen and bathroom remodels, basement finishing, and whole-home renovations. We manage the project from design through final walkthrough so you can enjoy the transformation.',
    },
    {
      title: 'Emergency Service',
      description:
        "Burst pipes, electrical outages, and other urgent problems don't wait — and neither do we. Our emergency line is staffed 24/7 for rapid response when you need it most.",
    },
    {
      title: 'Maintenance Plans',
      description:
        'Regular preventive maintenance keeps your systems running efficiently and extends their lifespan. Ask about our seasonal service packages for year-round peace of mind.',
    },
  ],

  // ── About page ───────────────────────────────────────────────────────────
  about: {
    story: [
      'What started as a one-person operation has grown into a trusted local team. For over 15 years, we\'ve served homeowners and businesses with reliable, high-quality work — and we plan to keep doing just that for decades to come.',
      'Every member of our crew is licensed, insured, and background-checked. We treat your property with the same care we\'d give our own, and we stand behind every job with a satisfaction guarantee.',
    ],
    team: [
      { name: 'Jayaj Bhatnagar', role: 'Founder & President', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80' },
      { name: 'Sumedh Kotturi', role: 'Co-Founder & Vice-President', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80' },
      { name: 'David Chen', role: 'Senior Technician', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80' },
    ],
  },

  // ── Trust bar items (homepage strip) ─────────────────────────────────────
  trustItems: [
    { label: 'Licensed' },
    { label: 'Fully Insured' },
    { label: 'Years Experience', value: '15+' },
    { label: 'Jobs Completed', value: '2,500+' },
  ],

  // ── Footer nav columns ──────────────────────────────────────────────────
  footerNav: [
    {
      title: 'Organization',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Contact', href: '/contact' },
        { label: 'Privacy', href: '/privacy' },
        { label: 'Terms', href: '/terms' },
      ],
    },
  ],
} as const;

export type SiteData = typeof siteData;
