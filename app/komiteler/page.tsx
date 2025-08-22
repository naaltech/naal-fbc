"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

import { ChevronDown, ChevronUp, Users, Calendar } from "lucide-react"

export default function KomitelerPage() {
  const [activeCommittee, setActiveCommittee] = useState<number | null>(null)

  const committees = [
    {
      id: 1,
      name: "Modern Fizik Komitesi",
      description:
        "Fiziğin Sırlarını Keşfetmeye Hazır mısınız? Meraklı gençler için harika bir fırsat: Modern Fizik Komitesi! Fiziğe ilgi duyan gençleri bir araya getirerek, fiziğin derinliklerine inmeyi ve temel bilgilerini öğrenmeyi hedefliyor. Komite sürecinde, alanında uzman bir rehber eşliğinde kayağından yeni bilgiler edinecek ve merak ettiğiniz soruları direkt olarak uzmana sorabileceksiniz. Ayrıca, çeşitli oyunlar ve aktivitelerle hem eğlenceli tartışma ortamları yaratacağız hem de birbirimizle kaynaşacağız. Modern Fizik Komitesi, fiziğin gizemli dünyasına adım atmak isteyen herkesi bekliyor. Gel, bilimle dolu bir dünyanın kapılarını aralayalım ve birlikte keşfetmenin heyecanını birlikte yaşayalım!",
      topics: ["Kuantum Fiziği", "Relativite Teorisi", "Atom Fiziği", "Parçacık Fiziği", "Optik", "Modern Fizik Tarihi"],
      speakers: [
        {
          name: "Emeritus Prof. Mehmet Önder Pekcan",
          affiliation: "Kadir Has Üniversitesi",
          photo: "/speaker/mehmet-onder-pekcan.jpg",
        },
        {
          name: "Prof. Dr. Reyhan Kaya",
          affiliation: "Yıldız Teknik Üniversitesi",
          photo: "/speaker/reyhan-kaya.jpeg",
        },
      ],
    },
    {
      id: 2,
      name: "Ekoloji ve İklim Krizi Komitesi",
      description:
        "Dünya'yı yeniden tanımaya hazır olun! Yaşamın derinliklerini sizlere tanıtmak için sabırsızlanıyoruz! Ekoloji komitesi olarak farklı terim ve bilgileri gerçekleriyle birlikte sizlerle paylaşmak icin hazırlanıyoruz. Ekoloji hep bizlerle ve öyle de kalıcak. Peki biz bu yaşamı nasıl etkiliyoruz? Zarar mı veriyoruz, zarar mı görüyoruz? Ekoloji komitesi olarak sizlerle bir çok soru ve sorun üzerine konuşacak çözümler üretecek bolca eğleneceğiz. Sizlerle yeni deneyim, yeni bilgiler edileceğiz. Bu ortamı sizlere sunmak için çalışıyoruz. Sizde bizlerle oyunlar oynamak, yeni bilgiler paylaşmak, tartışmak istiyorsanız bize katılın! Sizlerle tanışmayı heyecanla bekliyoruz!",
      topics: ["Ekoloji", "İklim Değişikliği", "Biyoçeşitlilik", "Sürdürülebilirlik", "Çevre Koruma", "Ekosistemler"],
      speakers: [
        {
          name: "Prof. Dr. Elif Soyer",
          affiliation: "Marmara Üniversitesi",
          photo: "/speaker/elif-soyer.jpeg",
        },
        {
          name: "Prof. Dr. Mustafa Talha Gönüllü",
          affiliation: "Yıldız Teknik Üniversitesi",
          photo: "/speaker/mustafa-talha-gonullu.jpg",
        },
      ],
    },
    {
      id: 3,
      name: "Yapay Zeka ve Teknoloji Komitesi",
      description:
        "Teknoloji meraklıları kulak verin! Geçmişimize ışık tutan günümüze ve yarınlarımıza yön veren yapay zeka teknolojilerine yepyeni bir pencereden bakmaya hazır mısınız? Birlikte yapay zekanın inceliklerini keşfedeceğimiz, yeni ve etkileyici teknolojileri öğreneceğimiz sonsuz bir çalışma alanı oluşturuyoruz. Ayrıca sanal alem ile eğlenceyi birleştirdiğimiz etkinliklerle bu yeni dünyayı eğlenerek keşfediyoruz. Siz de bizimle birlikte bu heyecan verici yolculuğa katılmak ve geleceği birlikte şekillendirmek isterseniz, bize katılın!",
      topics: ["Yapay Zeka", "Makine Öğrenmesi", "Robotik", "Bilgisayar Bilimleri", "Algoritmalar", "Teknoloji Etiği"],
      speakers: [
        {
          name: "Doç. Dr. Caner Güney",
          affiliation: "İstanbul Teknik Üniversitesi",
          photo: "/speaker/caner-guney.jpg",
        },
        {
          name: "Bülent Kavaklı",
          affiliation: "Valentura Technology & Investment",
          photo: "/speaker/bulent-kavakli.jpeg",
        },
      ],
    },
    {
      id: 4,
      name: "Astronomi Ve Uzay Bilimleri Komitesi",
      description:
        "Evrenin sırlarını bizimle keşfetmeye var mısınız? Yeryüzündeki en eski bilimlerden biri olarak kabul edilen ve temel doğa bilimlerinden biri olan astronomi; evreni ve evreni oluşturan gökadaları, derin uzay cisimlerini, yıldızlar ve yıldızlar arası maddenin yapısını, evrimini ve hareketlerini araştıran ve inceleyen bir bilim dalıdır. Astronomi ve Uzay Bilimleri komitesi olarak; bizimle uzayın derinliklerine keşfe çıkacak, yeni bilgiler edinecek ve uzay çalışmalarını inceleyecek gökyüzüne meraklı herkesi ekibimize bekleriz.",
      topics: ["Astronomi", "Astrofizik", "Uzay Teknolojileri", "Gezegenler", "Yıldızlar", "Kozmoloji"],
      speakers: [
        {
          name: "Prof. Dr. Kazım Yavuz Ekşi",
          affiliation: "İstanbul Teknik Üniversitesi",
          photo: "/speaker/kazim-yavuz-eksi.jpg",
        },
        {
          name: "Murat Ünver",
          affiliation: "Baykar Teknoloji",
          photo: "/speaker/murat-unver.jpeg",
        },
      ],
    },
    {
      id: 5,
      name: "Biyoteknoloji ve Genetik Komitesi",
      description: " İnsanoğlunun var oluşundan beri hayatın içinde yer alan ve en önemli gelecek teknolojilerinden biri olan Biyoteknoloji , aslında yeni bir organizma elde etmek veya var olan bir organizmanın genetik yapısında istenilen yönde değişiklikler meydana getirmek için kullanılan yöntemlerin tamamıdır. Dünyanın ve insanlığın geleceği biyoteknoloji çalışmaları olmadan düşünülemeyeceği gibi yaşadığımız sürecede de hep gelişecektir. Bu komitede geçmişten günümüze insanların dna üzerindeki deneylerini, yaşanmış mutasyonları ve ilerde yapılabilecek birçok şeyi tartışıp öğreneceğiz.",
      topics: ["Biyoteknoloji", "Genetik", "DNA", "Mutasyonlar", "Gen Teknolojisi", "Biyomühendislik"],
      speakers: [
        {
          name: "Prof. Dr. Korkut Ulucan",
          affiliation: "Üsküdar Üniversitesi",
          photo: "/speaker/korkut-ulucan.jpeg",
        },
        {
          name: "Dr. Burcu Şirin Kaya",
          affiliation: "Yeditepe Üniversitesi",
          photo: "/speaker/burcu-sirin-kaya.jpeg",
        },
      ],
    },
    {
      id: 6,
      name: "Kanser Komitesi",
      description: "Kanser komitesi olarak kanserle ilgili en karmasigindan en gunceline her bir bilgiyi sizlerle paylasmak icin sabirsizlaniyoruz! Kanser yediden yetmişe, bir çok sebeple bazen genetik, bazense cevresel faktorlerler sebebiyle insanlari ziyaret edebilir. Peki nasıl kanser oluruz? Kanserden nasıl korunuruz? Bu sorulari siz de kendinize soruyorsaniz kanser komitesi dogru adres! Sizler icin en verimli sekilde tasarlanmis oturumlarda oyunlar oynayacak,tartisacak ve en guncel tedavi yontemlerini inceleyecegiz. Kanser hakkinda daha fazlasini ogrenmek isteyen herkesi aramizda gormeyi iple cekiyoruz! ",
      topics: ["Kanser Biyolojisi", "Onkoloji", "Tedavi Yöntemleri", "Genetik Faktörler", "Korunma Yolları", "İmmünoterapi"],
      speakers: [
        {
          name: "Prof. Dr. Beste Melek Atasoy",
          affiliation: "Marmara Üniversitesi",
          photo: "/speaker/beste-atasoy.jpg",
        },
        {
          name: "Dr. Mahir Bülent Özgen",
          affiliation: "Acıbadem Sağlık Grubu",
          photo: "/speaker/mahir-bulent-ozgen.jpg",
        },
      ],
    },
    {
      id: 7,
      name: "Psikoloji Komitesi",
      description: 'Doğa mı, yetişme mi? Hangi kişilik tipine sahipsiniz? Eğer bunlar ve daha fazla sorunun cevabını merak ediyorsanız psikoloji komitesi tam size göre. Hafızamız bize birçok oyun oynar. Her şey aklımızda kalmaz, bazen neyi nereden öğrendiğimizi bilemez bazen ise unutmak istediğimiz şeyleri unutamayız. Hepimiz, sürekli bu tür durumlarla karşı karşıya kalmışızdır. Daniel L. Schacter, bu durumu "Belleğin Yedi Günahı" olarak adlandırır. Biz de hafızamızın işlediği günahlar hakkında bilgi sahibi olacak, tartışacak ve bol bol konuşacağız. Hepimizin birer boş levha olarak doğduğunu ileri süren John Watson haklı mı? Davranışçılık kuramı ile ilgili tüm detaylar komitemizde. Bunun yanı sıra bu iki günde kişilik tipimizi bulacak,kısa filmler izleyecek, oyunlar oynayacak, çokça tartışacak ve çok eğlenceli verimli saatler geçireceğiz.',
      topics: ["Kişilik Psikolojisi", "Hafıza", "Davranışçılık", "Bilişsel Psikoloji", "Gelişim Psikolojisi", "Sosyal Psikoloji"],
      speakers: [
        {
          name: "Prof. Dr. Ulaş Başar Gezgin",
          affiliation: "İstanbul Galata Üniversitesi",
          photo: "/speaker/ulas-basar-gezgin.jpg",
        },
        {
          name: "Doç. Dr. Ayşe Akan",
          affiliation: "Boğaziçi Üniversitesi",
          photo: "/speaker/ayse-akan.jpeg",
        },
      ],
    },
    {
      id: 8,
      name: "Kimya Komitesi ",
      description: 'Kimya, doğanın derinliklerinde gizlenen sırları açığa çıkarmak için bir anahtardır. Kimya Komitesi ise bu sırları keşfetmek için yola çıkan bir ekip olarak bu çalıştayda önemli bir rol oynuyor. Kimya komitesi bilgi paylaşımı ve gelecek trendlerini tartışmanın yanı sıra, kimyanın günlük hayatımıza etkilerini anlamak için bir fırsat sunar. Profesyoneller ve genç araştırmacılar için bir buluşma noktası olan Komite, kimyanın sınırlarını keşfetmeye ve ileriye taşımaya yönelik bir platform sunar. Kimya Komitesi olarak, bilimin bu heyecan verici dalıyla ilgili herkesi bir araga getirerek bilgi ve deneyimlerimizi paylasmayı amaçlıyoruz. Bu heyecan verici keşif yolculuğuna katılmak için herkesi Kimya Komitesine davet ediyoruz.',
      topics: ["Organik Kimya", "İnorganik Kimya", "Analitik Kimya", "Fizikokimya", "Kimyasal Tepkimeler", "Moleküler Yapı"],
      speakers: [
        {
          name: "Prof. Dr. Bahattin Yalçın",
          affiliation: "Marmara Üniversitesi",
          photo: "/speaker/bahattin-yalcin.jpeg",
        },
        {
          name: "Doç. Dr. Çağatay Altınkök",
          affiliation: "İstanbul Teknik Üniversitesi",
          photo: "/speaker/cagatay-altinkok.jpg",
        },
      ],
    },
  ]

  const toggleCommittee = (id: number) => {
    setActiveCommittee(activeCommittee === id ? null : id)
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Komitelerimiz</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Fen Bilimleri Çalıştayımız 8 farklı bilim dalında uzman komitelerden oluşmaktadır. Her komite kendi
              alanında öncü araştırmaları ve yenilikleri paylaşmaktadır.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {committees.map((committee) => (
              <Card key={committee.id} className="overflow-hidden">
                <Button
                  variant="ghost"
                  className="w-full p-6 h-auto text-left hover:bg-muted/50"
                  onClick={() => toggleCommittee(committee.id)}
                >
                  <div className="flex w-full items-start gap-4">
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg sm:text-xl font-serif font-semibold mb-2 pr-2">{committee.name}</h3>
                      <p className="text-muted-foreground text-xs sm:text-sm line-clamp-2">
                        {committee.topics.slice(0, 2).join(", ")} ve daha fazlası...
                      </p>
                    </div>
                    <div className="flex-shrink-0 mt-2">
                      {activeCommittee === committee.id ? (
                        <ChevronUp className="h-5 w-5 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-muted-foreground" />
                      )}
                    </div>
                  </div>
                </Button>

                {activeCommittee === committee.id && (
                  <div className="px-6 pb-6 border-t">
                    <div className="pt-6 space-y-6">
                      {/* Committee Description */}
                      <div>
                        <h4 className="font-semibold mb-3">Komite Hakkında</h4>
                        <p className="text-muted-foreground leading-relaxed">{committee.description}</p>
                      </div>

                      {/* Topics */}
                      <div>
                        <h4 className="font-semibold mb-3">Konu Alanları</h4>
                        <div className="flex flex-wrap gap-2">
                          {committee.topics.map((topic, index) => (
                            <Badge key={index} variant="secondary">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Speakers */}
                      <div>
                        <h4 className="font-semibold mb-4 flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          Uzman Kişiler
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {committee.speakers.map((speaker, index) => (
                            <Card key={index} className="p-4">
                              <div className="flex items-start gap-3">
                                <div className="w-12 h-12 relative flex-shrink-0">
                                  <Image
                                    src={speaker.photo || "/placeholder-user.jpg"}
                                    alt={speaker.name}
                                    fill
                                    className="rounded-full object-cover"
                                    sizes="48px"
                                  />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <h5 className="font-semibold text-sm mb-1">{speaker.name}</h5>
                                  <p className="text-xs text-muted-foreground">{speaker.affiliation}</p>
                                </div>
                              </div>
                            </Card>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="p-6 sm:p-8 max-w-2xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-serif font-semibold mb-4">Komitelere Katılım</h3>
              <p className="text-muted-foreground mb-6 text-sm sm:text-base">
                İlgilendiğiniz komitelere katılabilir, eğlenceli aktivitelere dahil olabilir ve uzman kişilerle 
                etkileşimli tartışmalar gerçekleştirebilirsiniz. Bu iki günlük bilimsel keşif yolculuğunda sizleri bekliyoruz!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="w-full sm:w-auto"><a href="/#iletisim">Kayıt Ol</a></Button>
              </div>
            </Card>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}
