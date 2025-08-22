import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, Users, UserCheck } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="anasayfa" className="py-20 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">Nevzat Ayaz Anadolu Lisesi Fen Bilimleri Çalıştayı</h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Geleceğin bilim insanları olacak lise öğrencileri, bilimsel araştırma ve proje geliştirme süreçlerini 
            keşfetmek için bir araya geliyor.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
            <Card className="p-4 text-center">
              <Calendar className="h-6 w-6 text-primary mx-auto mb-3" />
              <h3 className="font-serif font-semibold text-base mb-1">Tarih</h3>
              <p className="text-muted-foreground text-sm">11-12 Mayıs 2024</p>
            </Card>

            <Card className="p-4 text-center">
              <Users className="h-6 w-6 text-primary mx-auto mb-3" />
              <h3 className="font-serif font-semibold text-base mb-1">Katılımcı</h3>
              <p className="text-muted-foreground text-sm">160 Katılımcı</p>
            </Card>

            <Card className="p-4 text-center">
              <UserCheck className="h-6 w-6 text-primary mx-auto mb-3" />
              <h3 className="font-serif font-semibold text-base mb-1">Komite</h3>
              <p className="text-muted-foreground text-sm">8 Bilim Komitesi</p>
            </Card>
          </div>

          <Button size="lg" className="text-lg px-8 py-3" asChild>
            <a href="#iletisim">Kayıt Ol</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
