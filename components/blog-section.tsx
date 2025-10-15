"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const posts = [
  {
    title: "How to Choose an Aromatic Lamp for Your Interior",
    excerpt: "Tips for selecting the perfect lamp for your home",
    image: "/interior-design-with-aromatic-lamp-watercolor-styl.jpg",
  },
  {
    title: "Top 5 Essential Oils for Sleep",
    excerpt: "Discover the secrets of deep and peaceful sleep",
    image: "/essential-oils-lavender-bottles-peaceful-sleep.jpg",
  },
  {
    title: "Combining Light and Scent for Meditation",
    excerpt: "Create the perfect atmosphere for your practice",
    image: "/meditation-candles-incense-peaceful-atmosphere.jpg",
  },
]

export function BlogSection() {
  return (
    <section className="py-24 px-4 bg-warm">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-warm-text mb-4">Tips & Blog</h2>
          <p className="text-warm-text/70 text-lg">Inspiration and knowledge for creating the perfect atmosphere</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group cursor-pointer border-none bg-sand hover:shadow-glow transition-all duration-300 overflow-hidden">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-warm-text mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-warm-text/70 mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-accent group-hover:gap-4 transition-all">
                    <span className="text-sm font-medium">Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
