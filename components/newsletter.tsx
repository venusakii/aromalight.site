"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function Newsletter() {
  const [email, setEmail] = useState("")

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-accent/10 via-sand to-smoke/10">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-serif text-4xl md:text-5xl text-warm-text mb-6 text-balance">
            Get Inspiration and New Collection Aromas 🌿
          </h2>
          <p className="text-warm-text/70 text-lg mb-8 leading-relaxed">
            Subscribe to our newsletter and stay updated on new arrivals, special offers, and tips for creating the
            perfect atmosphere
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-warm border-accent/30 focus:border-accent text-warm-text placeholder:text-warm-text/50 rounded-full px-6"
            />
            <Button className="bg-accent hover:bg-accent-hover text-warm-text font-medium px-8 rounded-full transition-all duration-300 hover:shadow-glow whitespace-nowrap">
              Subscribe to Harmony
            </Button>
          </div>

          {/* Smoke animation on input focus */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: email ? 0.3 : 0 }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-smoke rounded-full blur-3xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
