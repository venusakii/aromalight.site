"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

const aromas = [
  {
    emoji: "🌼",
    name: "Lavender",
    mood: "relaxation",
    color: "from-purple-200/20 to-purple-300/20",
  },
  {
    emoji: "🍊",
    name: "Citrus",
    mood: "energy",
    color: "from-orange-200/20 to-yellow-300/20",
  },
  {
    emoji: "🌹",
    name: "Rose",
    mood: "romance",
    color: "from-pink-200/20 to-rose-300/20",
  },
  {
    emoji: "🌲",
    name: "Pine",
    mood: "freshness",
    color: "from-green-200/20 to-emerald-300/20",
  },
]

export function AromasAndMood() {
  return (
    <section className="py-24 px-4 bg-sand">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl text-center text-warm-text mb-16"
        >
          Aromas & Mood
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aromas.map((aroma, index) => (
            <motion.div
              key={aroma.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className={`group cursor-pointer border-none bg-gradient-to-br ${aroma.color} hover:shadow-glow transition-all duration-300 p-8 text-center relative overflow-hidden`}
              >
                {/* Smoke effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-smoke rounded-full blur-2xl animate-float" />
                </div>

                <div className="relative z-10">
                  <span className="text-6xl mb-4 block group-hover:scale-110 transition-transform duration-300">
                    {aroma.emoji}
                  </span>
                  <h3 className="font-serif text-2xl text-warm-text mb-2">{aroma.name}</h3>
                  <p className="text-warm-text/70">{aroma.mood}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
