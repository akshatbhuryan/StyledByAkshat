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
                Akshat is an emerging interior designer who has recently embarked on an exciting career in the world of
                spatial design. Armed with an Advanced Diploma in Interior Design, Akshat combines creativity with
                technical expertise to bring concepts to life.
              </p>
              <p>
                Skilled in industry-standard tools such as AutoCAD, 2D/3D design software, V-Ray, 3ds Max, SketchUp, and
                Enscape, Akshat delivers visually compelling and functional spaces that reflect each client's unique
                style.
              </p>
              <p>
                With a fresh perspective and a passion for innovation, Akshat is ready to transform ideas into stunning,
                livable realities.
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
