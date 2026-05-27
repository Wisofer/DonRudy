import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ['latin'] })

// ─── SEO METADATA COMPLETA ─────────────────────────────────────────────────
const siteUrl = 'https://rudynegocios.com'
const siteName = 'RudyNegocios'
const title = 'Don Rudy | Plantillas y Cursos para Pulperías en Nicaragua'
const description =
  'Aprende a eliminar mermas, controlar tu bodega y ganar más Córdobas en tu pulpería. Descarga las plantillas del Sistema Nego Control de Don Rudy, el mentor #1 de pulperos en Nicaragua.'
const keywords =
  'pulpería Nicaragua, control de mermas, inventario pulpería, curso pulpero, nego control, plantillas bodega, fiado Nicaragua, Don Rudy, gestión pulpería, córdobas, mini súper Nicaragua'

export const metadata: Metadata = {
  // ── Básico ──────────────────────────────────────────────────────────────
  title: {
    default: title,
    template: `%s | ${siteName}`,
  },
  description,
  keywords,
  authors: [{ name: 'Don Rudy', url: siteUrl }],
  creator: 'Don Rudy',
  publisher: siteName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },

  // ── Open Graph (Facebook, WhatsApp, LinkedIn) ────────────────────────────
  openGraph: {
    type: 'website',
    locale: 'es_NI',
    url: siteUrl,
    siteName,
    title,
    description,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Don Rudy — Mentor de Pulperos en Nicaragua',
      },
    ],
  },

  // ── Twitter / X Cards ────────────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [`${siteUrl}/og-image.png`],
    creator: '@rua7404',
  },

  // ── Favicons e Íconos ────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: '/donrudy-removebg-preview.png', type: 'image/png', sizes: 'any' },
    ],
    apple: '/donrudy-removebg-preview.png',
    shortcut: '/donrudy-removebg-preview.png',
  },

  // ── Verificación de Search Console ──────────────────────────────────────
  // verification: {
  //   google: 'TU_CODIGO_AQUI',
  // },
}

// ─── STRUCTURED DATA: Schema.org Person + WebSite ──────────────────────────
const schemaOrg = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description,
      inLanguage: 'es',
      publisher: { '@id': `${siteUrl}/#person` },
    },
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Don Rudy',
      jobTitle: 'Mentor de Pulperos y Comerciantes en Nicaragua',
      url: siteUrl,
      sameAs: [
        'https://www.tiktok.com/@rua7404',
      ],
      knowsAbout: [
        'Administración de Pulperías',
        'Control de Inventario',
        'Reducción de Mermas',
        'Gestión de Bodega',
        'Negocios en Nicaragua',
        'Córdobas y Finanzas Locales',
      ],
    },
    {
      '@type': 'Course',
      name: 'Mini-Curso: El Pulpero Millonario',
      description:
        'Entrenamiento práctico en videos cortos de 5 minutos para dueños de pulperías ocupados. Aprende a negociar con distribuidores, acomodar estantes y auditar tu caja en Nicaragua.',
      provider: {
        '@type': 'Person',
        name: 'Don Rudy',
        '@id': `${siteUrl}/#person`,
      },
      inLanguage: 'es',
      offers: {
        '@type': 'Offer',
        price: '350',
        priceCurrency: 'NIO',
        availability: 'https://schema.org/InStock',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${geist.className} bg-background scroll-smooth`}>
      <head>
        {/* Schema.org Structured Data for Google Rich Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
        {/* Geo Tags for Nicaragua targeting */}
        <meta name="geo.region" content="NI" />
        <meta name="geo.placename" content="Nicaragua" />
        <meta name="language" content="Spanish" />
        <meta name="revisit-after" content="7 days" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
