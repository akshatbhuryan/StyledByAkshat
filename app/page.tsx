import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { FeaturedProjects } from "@/components/featured-projects"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Gallery } from "@/components/gallery"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedProjects />
      <Services />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
