import { buttonVariants } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CalendarIcon, Squares2X2Icon, UsersIcon } from "@heroicons/react/24/outline"
import { cn } from "@/lib/utils"

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

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 mb-12 max-w-2xl mx-auto">
            <Card className="p-2 sm:p-3 text-center">
              <CalendarIcon className="h-5 w-5 sm:h-6 sm:w-6 text-primary mx-auto mb-0" />
              <h3 className="font-serif font-semibold text-sm sm:text-base mb-0">Tarih</h3>
              <p className="text-muted-foreground text-xs sm:text-sm">11-12 Mayıs 2024</p>
            </Card>

            <Card className="p-2 sm:p-3 text-center">
              <UsersIcon className="h-5 w-5 sm:h-6 sm:w-6 text-primary mx-auto mb-0" />
              <h3 className="font-serif font-semibold text-sm sm:text-base mb-0">Katılımcı</h3>
              <p className="text-muted-foreground text-xs sm:text-sm">160 Katılımcı</p>
            </Card>

            <Card className="p-2 sm:p-3 text-center">
              <Squares2X2Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary mx-auto mb-0" />
              <h3 className="font-serif font-semibold text-sm sm:text-base mb-0">Komite</h3>
              <p className="text-muted-foreground text-xs sm:text-sm">8 Bilim Komitesi</p>
            </Card>
          </div>

          <a href="#iletisim" className={cn(buttonVariants({ size: "lg" }), "text-lg px-8 py-3")}>
            Kayıt Ol
          </a>
        </div>
      </div>
    </section>
  )
}
