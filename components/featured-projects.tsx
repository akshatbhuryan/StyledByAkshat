import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const featuredProjects = [
  {
    id: 1,
    title: "Modern Minimalist Home",
    category: "Interior Design",
    image: "/minimalist-living-room.png",
    description: "A sophisticated approach to minimalism with warm textures and natural light.",
  },
  {
    id: 2,
    title: "Luxury Garden Retreat",
    category: "Exterior Design",
    image: "/luxury-garden-patio.png",
    description: "An outdoor sanctuary that seamlessly blends comfort with natural beauty.",
  },
  {
    id: 3,
    title: "Contemporary Office Space",
    category: "Commercial Design",
    image: "/contemporary-office.png",
    description: "A productive workspace designed to inspire creativity and collaboration.",
  },
]

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif font-black text-4xl md:text-5xl text-foreground mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover a selection of my most recent work, showcasing the perfect blend of functionality and aesthetic
            appeal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="group overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-primary font-semibold mb-2">{project.category}</div>
                <h3 className="font-serif font-bold text-xl mb-3">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="font-semibold bg-transparent">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
