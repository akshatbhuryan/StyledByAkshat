import { Card, CardContent } from "@/components/ui/card"
import { Home, TreePine, Building, Palette } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Interior Design",
    description:
      "Complete interior transformations that reflect your personality and lifestyle, from concept to completion.",
  },
  {
    icon: TreePine,
    title: "Exterior Design",
    description: "Outdoor spaces that extend your living area, creating beautiful and functional environments.",
  },
  {
    icon: Building,
    title: "Commercial Spaces",
    description: "Professional environments designed to enhance productivity and create lasting impressions.",
  },
  {
    icon: Palette,
    title: "Design Consultation",
    description: "Expert guidance and personalized recommendations to help you achieve your design vision.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif font-black text-4xl md:text-5xl text-foreground mb-4">Design Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive design solutions tailored to your unique needs and vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-xl mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
