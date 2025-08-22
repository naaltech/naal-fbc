import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Zehra Gürbüz",
      role: "Genel Koordinatör",
      photo: "/team/zehra.png",
    },
    {
      name: "Mehmet Akif Gelen",
      role: "Genel Koordinatör Yardımcısı",
      photo: "/team/akif.png",
    },
    {
      name: "Yağmur Canik",
      role: "Akademi Ekibi Eş Başkanı",
      photo: "/team/yagmur.png",
    },
    {
      name: "Beytullah Okutan",
      role: "Akademi Ekibi Eş Başkanı",
      photo: "/team/beytullah.png",
    },
    {
      name: "Yusuf Emre Kaplan",
      role: "Sponsorluk Ekibi Başkanı",
      photo: "/team/yusuf.png",
    },
    {
      name: "Cevat Miraç Aydoğan",
      role: "Lojistik Ekibi Başkanı",
      photo: "/team/mirac.png",
    },
    {
      name: "Eren Uysal",
      role: "BT Ekibi Başkanı",
      photo: "/team/eren.png",
    },
    {
      name: "Naz Pank",
      role: "Medya Ekibi Başkanı",
      photo: "/team/naz.png",
    },
    {
      name: "Ege Kaldı",
      role: "Halkla İlişkiler Ekibi Başkanı",
      photo: "/team/ege.png",
    },
  ]

  return (
    <section id="ekip" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">Ekibimiz</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Çalıştayımızı organize eden deneyimli organizatör ekibimiz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-24 h-24 mx-auto mb-4 relative">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover"
                  sizes="96px"
                />
              </div>
              <h3 className="font-serif font-semibold text-lg mb-1">{member.name}</h3>
              <p className="text-primary font-medium mb-2">{member.role}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
