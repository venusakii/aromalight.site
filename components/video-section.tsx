"use client"

import { motion } from "framer-motion"
import { Play } from "lucide-react"

export function VideoSection() {
  return (
    <section className="py-24 px-4 bg-warm">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative aspect-video rounded-3xl overflow-hidden group cursor-pointer"
        >
          <img
            src="/aromatic-lamp-with-vapor-and-essential-oil-drop-cl.jpg"
            alt="How aromatic lamps work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-warm-text/30 group-hover:bg-warm-text/20 transition-colors duration-300" />

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-20 h-20 rounded-full bg-accent/90 flex items-center justify-center group-hover:bg-accent-hover transition-colors duration-300 shadow-glow"
            >
              <Play className="w-8 h-8 text-warm-text ml-1" fill="currentColor" />
            </motion.div>
          </div>

          <div className="absolute bottom-8 left-8 right-8">
            <h3 className="font-serif text-2xl md:text-3xl text-white mb-2">How Aromatic Lamps Work</h3>
            <p className="text-white/90">Vapor, light, a drop of oil — magic in action</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
