import type { Metadata } from "next"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ScheduleSection from "@/components/schedule-section"
import TeamSection from "@/components/team-section"
import ContactSection from "@/components/contact-section"
import LocationSection from "@/components/location-section"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Fen Bilimleri Çalıştayı | Nevzat Ayaz Anadolu Lisesi",
  description: "Nevzat Ayaz Anadolu Lisesi tarafından düzenlenen Fen Bilimleri Çalıştayı. 8 farklı bilim dalında uzman komiteler, interaktif atölyeler ve öğrenci odaklı bilim etkinlikleri.",
  keywords: ["fen bilimleri", "çalıştay", "bilim", "teknoloji", "lise", "öğrenci", "fizik", "kimya", "biyoloji", "astronomi"],
  openGraph: {
    title: "Fen Bilimleri Çalıştayı | Nevzat Ayaz Anadolu Lisesi",
    description: "Nevzat Ayaz Anadolu Lisesi tarafından düzenlenen Fen Bilimleri Çalıştayı. 8 farklı bilim dalında uzman komiteler, interaktif atölyeler ve öğrenci odaklı bilim etkinlikleri.",
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fen Bilimleri Çalıştayı | Nevzat Ayaz Anadolu Lisesi",
    description: "Nevzat Ayaz Anadolu Lisesi tarafından düzenlenen Fen Bilimleri Çalıştayı. 8 farklı bilim dalında uzman komiteler, interaktif atölyeler ve öğrenci odaklı bilim etkinlikleri.",
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ScheduleSection />
        <TeamSection />
        <ContactSection />
        <LocationSection />
      </main>

      <Footer />
    </div>
  )
}
