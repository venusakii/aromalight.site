import { Hero } from "@/components/hero"
import { WhyAromaLight } from "@/components/why-aromalight"
import { Collections } from "@/components/collections"
import { FeaturedProduct } from "@/components/featured-product"
import { VideoSection } from "@/components/video-section"
import { AromasAndMood } from "@/components/aromas-and-mood"
import { Testimonials } from "@/components/testimonials"
import { InteriorGallery } from "@/components/interior-gallery"
import { BlogSection } from "@/components/blog-section"
import { Newsletter } from "@/components/newsletter"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhyAromaLight />
      <Collections />
      <FeaturedProduct />
      <VideoSection />
      <AromasAndMood />
      <Testimonials />
      <InteriorGallery />
      <BlogSection />
      <Newsletter />
      <ContactSection />
      <Footer />
      <CookieBanner />
    </main>
  )
}
