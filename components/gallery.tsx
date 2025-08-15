"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const galleryImages = [
  {
    id: 1,
    src: "/modern-kitchen-marble.png",
    alt: "Modern Kitchen Design",
    category: "Interior",
  },
  {
    id: 2,
    src: "/luxury-marble-gold-bathroom.png",
    alt: "Luxury Bathroom",
    category: "Interior",
  },
  {
    id: 3,
    src: "/modern-patio-design.png",
    alt: "Outdoor Patio",
    category: "Exterior",
  },
  {
    id: 4,
    src: "/contemporary-neutral-bedroom.png",
    alt: "Contemporary Bedroom",
    category: "Interior",
  },
  {
    id: 5,
    src: "/placeholder-i9hb0.png",
    alt: "Office Reception",
    category: "Commercial",
  },
  {
    id: 6,
    src: "/placeholder.svg?height=400&width=400",
    alt: "Garden Landscape",
    category: "Exterior",
  },
]

const categories = ["All", "Interior", "Exterior", "Commercial"]

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredImages =
    activeCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif font-black text-4xl md:text-5xl text-foreground mb-4">Project Gallery</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            Explore a curated collection of completed projects showcasing diverse design styles and solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="font-semibold"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <Card key={image.id} className="group overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.alt}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
