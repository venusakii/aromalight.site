"use client"

import { motion } from "framer-motion"
import { Leaf, Lightbulb, Flower2, Flame } from "lucide-react"

const features = [
  {
    icon: Leaf,
    title: "Natural Materials",
    description: "Only eco-friendly and safe components",
  },
  {
    icon: Lightbulb,
    title: "Soft Light Without Glare",
    description: "Comfortable lighting for your eyes",
  },
  {
    icon: Flower2,
    title: "High-Quality Essential Oils",
    description: "Pure aromas for your well-being",
  },
  {
    icon: Flame,
    title: "Modern Design",
    description: "Elegance in every detail",
  },
]

export function WhyAromaLight() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-warm to-sand">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl text-center text-warm-text mb-16"
        >
          Why AromaLight
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent-hover/30 transition-all duration-300 group-hover:shadow-glow">
                <feature.icon className="w-10 h-10 text-accent group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="font-serif text-xl text-warm-text mb-3">{feature.title}</h3>
              <p className="text-warm-text/70 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
