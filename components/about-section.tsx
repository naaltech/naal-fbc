import { Card } from "@/components/ui/card"

export default function AboutSection() {
  return (
    <section id="hakkinda" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">Etkinlik Hakkında</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
               Nevzat Ayaz Anadolu Lisesi öğrencileri tarafından düzenlenen Fen Bilimleri Çalıştayı, bilimsel, sosyal ve kültürel açıdan kapsamlı bir organizasyondur. 2 gün sürecek bu etkinlikte farklı bilim dallarında çalışacak komiteler, uzman kişilerle teorik bilgi paylaşımı, simülasyonlar, deneyler ve atölye etkinlikleri gerçekleştirilecektir.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-serif font-semibold mb-3">Misyonumuz</h3>
                <p className="text-muted-foreground">
                  Lise öğrencilerine analitik düşünme, takım çalışması yetenekleri kazandırmak ve araştırma, tartışma, 
                  bilgi alışverişi sağlayabilecek ortamlar sunmak. Gençleri bir araya getirerek kayda değer sonuçlar elde etmek.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-semibold mb-3">Hedeflerimiz</h3>
                <p className="text-muted-foreground">
                  Her biri farklı bilim dalında çalışacak komiteler oluşturmak, uzman kişilerle teorik bilgi paylaşımı sağlamak 
                  ve çeşitli simülasyonlar, deneyler ve atölye etkinlikleriyle unutulmaz deneyimler gerçekleştirmek.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-semibold mb-3">Katılım</h3>
                <p className="text-muted-foreground">
                  Lise öğrencileri ve fen bilimleri alanında ilgili tüm gençler katılabilir. 
                  Donanımlı üniversitelerden mezunlar komite başkanlığı yaparken, okulumuzdan alanında bilgili öğrenciler asistanlık yapacak.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <Card className="overflow-hidden p-0">
                <img src="/big.jpg" alt="Örnek Komite  Fotoğrafı" className="w-full h-48 object-cover" />
              </Card>
              <div className="grid grid-cols-2 gap-4">
                <Card className="overflow-hidden p-0">
                  <img src="/kucuksol.jpg" alt="Etkinlik" className="w-full h-32 object-cover" />
                </Card>
                <Card className="overflow-hidden p-0">
                  <img src="/kucuksag.jpg" alt="Uygulamalı Deneyim" className="w-full h-32 object-cover" />
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
