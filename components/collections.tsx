"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

const collections = [
  {
    title: "Aromatic Lamps",
    emoji: "🪔",
    image: "/ceramic-aromatic-lamp-with-warm-glow.jpg",
  },
  {
    title: "Lighting",
    emoji: "🌙",
    image: "/modern-ambient-lamp-soft-lighting.jpg",
  },
  {
    title: "Diffusers",
    emoji: "🌸",
    image: "/elegant-reed-diffuser-with-flowers.jpg",
  },
  {
    title: "Gift Sets",
    emoji: "🎁",
    image: "/luxury-gift-set-with-candles-and-oils.jpg",
  },
  {
    title: "Mini Candles & Accessories",
    emoji: "🔮",
    image: "/small-candles-and-aromatherapy-accessories.jpg",
  },
]

export function Collections() {
  return (
    <section className="py-24 px-4 bg-sand">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl text-center text-warm-text mb-16"
        >
          Collections
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group cursor-pointer overflow-hidden border-none bg-warm hover:shadow-glow transition-all duration-300">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-warm-text/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 text-center">
                  <span className="text-4xl mb-3 block">{collection.emoji}</span>
                  <h3 className="font-serif text-2xl text-warm-text">{collection.title}</h3>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
