import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SoloPackers Bali Trips - Starting from ₹47,999',
  description: 'Explore Bali with SoloPackers&apos; exclusive tour packages. Starting from ₹47,999. Book your dream Bali vacation now!',
  keywords: 'Bali tour packages, Bali trips, SoloPackers, Indonesia travel, Bali vacation, Nusa Penida, Ubud, Gili Islands',
  authors: [{ name: 'SoloPackers' }],
  openGraph: {
    title: 'SoloPackers Bali Trips - Starting from ₹47,999',
    description: 'Explore Bali with SoloPackers&apos; exclusive tour packages. Starting from ₹47,999. Book your dream Bali vacation now!',
    images: ['https://images.solopackers.in/ad-campaign-files/2025/04/29/bali-2025/2%20(3).webp'],
    url: 'https://solopackers.com/campaign/ad/bali-2025',
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: 'https://res.cloudinary.com/dwcislsn6/image/upload/v1751631790/App_Icon-02_beicdl.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "SoloPackers",
              "description": "Premium travel experiences and tour packages",
              "url": "https://solopackers.com",
              "telephone": "+91-8105678808",
              "email": "info@solopackers.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Sierra Cartel, No.91, 17th cross, 14th Main Rd, Sector 4, HSR Layout",
                "addressLocality": "Bengaluru",
                "addressRegion": "Karnataka",
                "postalCode": "560102",
                "addressCountry": "IN"
              },
              "offers": {
                "@type": "Offer",
                "name": "Bali Tour Packages",
                "description": "Exclusive Bali tour packages starting from ₹47,999",
                "price": "47999",
                "priceCurrency": "INR"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
