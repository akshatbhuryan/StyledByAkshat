"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/bright-modern-interior.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="font-serif font-black text-5xl md:text-7xl mb-6 leading-tight">
          Transforming Spaces,
          <br />
          <span className="text-primary">Creating Dreams</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed">
          Sophisticated interior and exterior design that reflects your unique style and elevates your living
          experience.
        </p>
        <Button
          onClick={scrollToProjects}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 text-lg"
        >
          View My Work
        </Button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-white" />
      </div>
    </section>
  )
}
