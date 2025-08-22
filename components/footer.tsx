export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif font-bold text-xl mb-4">
              Nevzat Ayaz Anadolu Lisesi<br/>Fen Bilimleri Çalıştayı
            </h3>
            <p className="text-background/80">
              Bilim ve teknolojinin geleceğini şekillendiren prestijli etkinlik.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="/#anasayfa" className="hover:text-background transition-colors">
                  Ana Sayfa
                </a>
              </li>
              <li>
                <a href="/#hakkinda" className="hover:text-background transition-colors">
                  Hakkında
                </a>
              </li>
              <li>
                <a href="/#takvim" className="hover:text-background transition-colors">
                  Program
                </a>
              </li>
              <li>
                <a href="/komiteler" className="hover:text-background transition-colors">
                  Komiteler
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">İletişim</h4>
            <ul className="space-y-2 text-background/80">
              <li>Nevzat Ayaz Anadolu Lisesi</li>
              <li>İnkılap Mah. Yelkenciler Sok. No: 1</li>
              <li>Ümraniye, İstanbul, Türkiye</li>
              <li>
                <a href="mailto:fbc@naal.org.tr" className="hover:text-background transition-colors">
                  fbc@naal.org.tr
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
          <p>&copy; {new Date().getFullYear()} Nevzat Ayaz Anadolu Lisesi Fen Bilimleri Çalıştayı. | Bu proje <a href="https://raw.githubusercontent.com/naaltech/naal-fbc/refs/heads/main/LICENSE">GPLv3</a> ile lisanslanmıştır.</p>
          <p>Açık Kaynak: <a href="https://github.com/naaltech/naal-fbc">GitHub</a></p>
        </div>
      </div>
    </footer>
  )
}
