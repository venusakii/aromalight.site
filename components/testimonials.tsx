"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Anna M.",
    text: "These lamps have transformed the atmosphere in my home. Now every evening is a ritual of calm.",
    rating: 5,
  },
  {
    name: "Dmitry K.",
    text: "Excellent quality, elegant design. The perfect gift for loved ones.",
    rating: 5,
  },
  {
    name: "Elena V.",
    text: "Soft light and gentle aromas help me relax after a long day.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-24 px-4 bg-warm">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl text-center text-warm-text mb-16"
        >
          Customer Reviews
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group cursor-pointer border-2 border-accent/20 bg-sand hover:border-accent-hover hover:shadow-glow transition-all duration-300 p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-warm-text/80 leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                <p className="font-serif text-lg text-warm-text">— {testimonial.name}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
