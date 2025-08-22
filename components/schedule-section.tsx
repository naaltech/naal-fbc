import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin } from "lucide-react"

export default function ScheduleSection() {
  const schedule = [
    {
      day: "11 Mayıs 2024 - 1. Gün",
      events: [
        {
          time: "09.00 - 10.00",
          title: "Kayıt ve Girişler, Kahvaltı",
        },
        {
          time: "10.00 - 11.00",
          title: "Açılış Konuşması",
        },
        {
          time: "11.00 - 12.30",
          title: "1. Oturum",
        },
        {
          time: "12.30 - 14.00",
          title: "Öğle Yemeği",
        },
        {
          time: "14.00 - 15.30",
          title: "2. Oturum",
        },
        {
          time: "15.30 - 16.00",
          title: "Kahve Molası",
        },
        {
          time: "16.00 - 17.30",
          title: "3. Oturum",
        },
        {
          time: "17.30",
          title: "Sürpriz Etkinlik",
        },
      ],
    },
    {
      day: "12 Mayıs 2024 - 2. Gün",
      events: [
        {
          time: "09.30 - 10.30",
          title: "Toplanma ve Kahvaltı",
        },
        {
          time: "10.30 - 12.00",
          title: "4. Oturum",
        },
        {
          time: "12.00 - 12.30",
          title: "Kahve Molası",
        },
        {
          time: "12.30 - 14.00",
          title: "5. Oturum",
        },
        {
          time: "14.00 - 15.30",
          title: "Öğle Yemeği",
        },
        {
          time: "15.30 - 17.00",
          title: "6. Oturum",
        },
        {
          time: "17.00 - 18.00",
          title: "Kapanış Konuşması",
        },
      ],
    },
  ]


  return (
    <section id="takvim" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">Etkinlik Takvimi</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            İki gün boyunca sürecek çalıştayımızın detaylı programını inceleyin.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {schedule.map((day, dayIndex) => (
            <div key={dayIndex}>
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-6 text-center">{day.day}</h3>
              <div className="space-y-4">
                {day.events.map((event, eventIndex) => (
                  <Card key={eventIndex} className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex items-center gap-2 text-muted-foreground min-w-fit">
                        <Clock className="h-4 w-4" />
                        <span className="font-medium">{event.time}</span>
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                          <h4 className="font-serif font-semibold text-lg">{event.title}</h4>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
