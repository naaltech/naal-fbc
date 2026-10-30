"use client"
import dynamic from 'next/dynamic'
import { MapPinIcon } from '@heroicons/react/24/outline'

// Dynamically import Map component to avoid SSR issues
const Map = dynamic(() => import('./map'), { 
  ssr: false,
  loading: () => (
    <div className="aspect-video bg-muted flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
          <MapPinIcon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-lg font-semibold mb-2">Harita yükleniyor...</h3>
      </div>
    </div>
  )
})

export default function LocationSection() {
  // Coordinates for Nevzat Ayaz Anadolu Lisesi, Ümraniye, İstanbul
  const schoolCoordinates: [number, number] = [41.0300516, 29.1028925]
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">Lokasyon</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Çalıştayımız Nevzat Ayaz Anadolu Lisesi'nin yerleşkesinde gerçekleştirilecektir.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-video">
              <Map 
                center={schoolCoordinates}
                zoom={15}
                markerPosition={schoolCoordinates}
                popupText="Nevzat Ayaz Anadolu Lisesi<br/>İnkılap Mah. Yelkenciler Sok. No: 1<br/>Ümraniye, İstanbul"
              />
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Adres Detayları</h4>
                  <p className="text-muted-foreground">
                    Nevzat Ayaz Anadolu Lisesi
                    <br />
                    İnkılap Mah. Yelkenciler Sok. No: 1
                    <br />
                    Ümraniye, İstanbul, Türkiye
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Ulaşım</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Metro: M5 Hattı - Çarşı Durağı</li>
                    <li>Metrobüs hattının Altunizade durağından ve M8 metro hattının Dudullu durağından M5 metro hattına aktarma yapılabilmektedir.</li>
                    <li>• Otobüs: 11P, 131T, 131YS, 320, 522, 14YE, 139A, 11ÜS (Ümraniye Çarşı Metro Durağı)</li>
                    <li>• Otobüs: 11D, 11H, 14DK, 15TY (Ümraniye Telekom Durağı)</li>
                    <li>• Otobüs: 10, 10G, 11K, 11ÇB, 13H, 14K, 20, 20K (Ümraniye Devlet Hastanesi Durağı)</li>                  
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
