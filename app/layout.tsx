import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: {
    default: "Fen Bilimleri Çalıştayı | Nevzat Ayaz Anadolu Lisesi",
    template: "%s | Nevzat Ayaz Anadolu Lisesi Fen Bilimleri Çalıştayı"
  },
  description: "Nevzat Ayaz Anadolu Lisesi tarafından düzenlenen Fen Bilimleri Çalıştayı. 8 farklı bilim dalında uzman komiteler, interaktif atölyeler ve öğrenci odaklı bilim etkinlikleri.",
  keywords: ["fen bilimleri", "çalıştay", "bilim", "teknoloji", "lise", "öğrenci", "fizik", "kimya", "biyoloji", "astronomi", "yapay zeka", "psikoloji", "kanser", "ekoloji"],
  authors: [{ name: "Nevzat Ayaz Anadolu Lisesi" }],
  creator: "Nevzat Ayaz Anadolu Lisesi",
  publisher: "Nevzat Ayaz Anadolu Lisesi",
  icons: {
    icon: '/naalbilim.ico',
    shortcut: '/naalbilim.ico',
    apple: '/naalbilim.ico',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://fbc.naal.org.tr"),
  openGraph: {
    title: "Fen Bilimleri Çalıştayı | Nevzat Ayaz Anadolu Lisesi",
    description: "Nevzat Ayaz Anadolu Lisesi tarafından düzenlenen Fen Bilimleri Çalıştayı. 8 farklı bilim dalında uzman komiteler, interaktiv atölyeler ve öğrenci odaklı bilim etkinlikleri.",
    type: "website",
    locale: "tr_TR",
    siteName: "Fen Bilimleri Çalıştayı",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fen Bilimleri Çalıştayı | Nevzat Ayaz Anadolu Lisesi",
    description: "Nevzat Ayaz Anadolu Lisesi tarafından düzenlenen Fen Bilimleri Çalıştayı. 8 farklı bilim dalında uzman komiteler, interaktiv atölyeler ve öğrenci odaklı bilim etkinlikleri.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
