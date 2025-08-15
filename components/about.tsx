import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif font-black text-4xl md:text-5xl text-foreground mb-6">About Akshat</h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                With over a decade of experience in interior and exterior design, I believe that every space tells a
                story. My approach combines timeless elegance with contemporary functionality, creating environments
                that are both beautiful and livable.
              </p>
              <p>
                My design philosophy centers on understanding each client's unique lifestyle and translating their
                vision into reality. I specialize in creating sophisticated spaces that reflect personal style while
                maintaining the highest standards of quality and craftsmanship.
              </p>
              <p>
                From intimate residential projects to large-scale commercial developments, I bring the same level of
                attention to detail and commitment to excellence to every project.
              </p>
            </div>

            <Card className="mt-8">
              <CardContent className="p-6">
                <h3 className="font-serif font-bold text-xl mb-4">Design Philosophy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  "Great design is not just about aesthetics—it's about creating spaces that enhance the way people
                  live, work, and connect with their environment."
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <img
              src="/interior-designer-portrait.png"
              alt="Akshat - Interior Designer"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
