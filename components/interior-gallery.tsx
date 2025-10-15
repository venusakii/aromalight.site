"use client"

import { motion } from "framer-motion"

const interiors = [
  "/cozy-bedroom-with-aromatic-lamp-on-nightstand.jpg",
  "/living-room-with-candles-and-soft-lighting.jpg",
  "/meditation-space-with-diffuser-and-plants.jpg",
  "/bathroom-with-aromatic-candles-and-spa-atmosphere.jpg",
  "/home-office-with-ambient-lamp-and-calm-atmosphere.jpg",
  "/dining-room-with-centerpiece-candles-warm-glow.jpg",
]

export function InteriorGallery() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-sand to-warm">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl text-center text-warm-text mb-16"
        >
          Interior Gallery
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {interiors.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`Interior ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-text/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <span className="text-white font-medium">Just Like Your Home</span>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-glow-inset" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
