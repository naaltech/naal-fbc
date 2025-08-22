import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Komiteler | Nevzat Ayaz Anadolu Lisesi Fen Bilimleri Çalıştayı",
  description: "Fen Bilimleri Çalıştayı komiteleri: Modern Fizik, Ekoloji ve İklim Krizi, Yapay Zeka ve Teknoloji, Astronomi ve Uzay Bilimleri, Biyoteknoloji ve Genetik, Kanser, Psikoloji ve Kimya komiteleri.",
  keywords: ["komiteler", "fizik", "ekoloji", "yapay zeka", "astronomi", "biyoteknoloji", "kanser", "psikoloji", "kimya"],
  openGraph: {
    title: "Komiteler | Nevzat Ayaz Anadolu Lisesi Fen Bilimleri Çalıştayı",
    description: "Fen Bilimleri Çalıştayı komiteleri: Modern Fizik, Ekoloji ve İklim Krizi, Yapay Zeka ve Teknoloji, Astronomi ve Uzay Bilimleri, Biyoteknoloji ve Genetik, Kanser, Psikoloji ve Kimya komiteleri.",
  },
  twitter: {
    title: "Komiteler | Nevzat Ayaz Anadolu Lisesi Fen Bilimleri Çalıştayı",
    description: "Fen Bilimleri Çalıştayı komiteleri: Modern Fizik, Ekoloji ve İklim Krizi, Yapay Zeka ve Teknoloji, Astronomi ve Uzay Bilimleri, Biyoteknoloji ve Genetik, Kanser, Psikoloji ve Kimya komiteleri.",
  },
}

export default function KomitelerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
