export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif font-black text-2xl mb-4">StyledByAkshat</h3>
            <p className="text-secondary-foreground/80 leading-relaxed">
              Creating sophisticated spaces that reflect your unique style and enhance your living experience.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>Interior Design</li>
              <li>Exterior Design</li>
              <li>Commercial Spaces</li>
              <li>Design Consultation</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Connect</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>hello@styledbyakshat.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Design District, NY</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-secondary-foreground/60">
          <p>&copy; 2024 StyledByAkshat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
