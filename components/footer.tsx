export function Footer() {
  return (
    <footer className="py-12 px-4 bg-gradient-to-b from-sand to-accent/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-serif text-lg text-warm-text mb-4">About Us</h4>
            <ul className="space-y-2 text-warm-text/70">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Mission
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg text-warm-text mb-4">For Customers</h4>
            <ul className="space-y-2 text-warm-text/70">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Payment
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Returns
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg text-warm-text mb-4">Information</h4>
            <ul className="space-y-2 text-warm-text/70">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Reviews
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg text-warm-text mb-4">Legal</h4>
            <ul className="space-y-2 text-warm-text/70">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-accent/20 pt-8 text-center text-sm text-warm-text/60">
          <p className="mb-2">© 2025 AromaLight.site. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
