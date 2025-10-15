"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function FeaturedProduct() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-accent/10 via-warm to-accent/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-4">
            Top Product of the Week
          </span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden">
              <img
                src="/infinity-aromatic-lamp-with-glowing-light-and-vapo.jpg"
                alt="AromaGlass Infinity Lamp"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/30 to-transparent" />

              {/* Pulsing glow effect */}
              <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="absolute inset-0 bg-accent-hover/20 blur-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-warm-text text-balance">AromaGlass Infinity Lamp</h2>
            <p className="text-lg text-warm-text/80 leading-relaxed">
              Infinite harmony of light and aroma. This lamp creates an atmosphere of calm and tranquility, filling your
              home with soft glow and gentle fragrances.
            </p>
            
            <Button
              size="lg"
              className="bg-accent hover:bg-accent-hover text-warm-text font-medium px-8 rounded-full transition-all duration-300 hover:shadow-glow"
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
