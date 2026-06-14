/**
 * ─────────────────────────────────────────────────────────────────────────────
 * CLIENT DATA - SAS Huqooqi for Legal Training Center
 * ─────────────────────────────────────────────────────────────────────────────
 * Organization-specific data: name, contact info, address, socials.
 * Imported by Header, Footer, Contact page, and Head/SEO components.
 *
 * No component should hardcode organization name or contact info —
 * everything comes from this file or brand.ts.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const client = {
  name: 'SAS Huqooqi for Legal Training Center',
  nameAr: 'مركز ساس الحقوقي للتدريب القانوني',
  email: 'saslawyers85@gmail.com',
  whatsapp: '+249122798539',
  whatsappLink: 'https://wa.me/249122798539',
  phoneForTel: '+249122798539',
  phoneFormatted: '+249 122 798 539',
  /** Registration info. Set to an empty string to hide it. */
  license: 'Registered 2021',
  licenseAr: 'مسجل 2021',
  address: {
    city: 'Khartoum',
    cityAr: 'الخرطوم',
    country: 'Sudan',
    countryAr: 'السودان',
  },
  socials: {
    whatsapp: 'https://wa.me/249122798539',
  },
  domain: 'https://sashuqooqi.org',
  
  // Organization founding info
  founded: '2021',
  conceptualized: '2018',
} as const;

export type Client = typeof client;
