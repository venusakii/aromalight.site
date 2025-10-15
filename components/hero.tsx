"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-warm px-4">
      {/* Animated smoke/vapor effect */}
      <motion.div
        className="absolute inset-0 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-smoke rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-smoke rounded-full blur-3xl animate-float-delayed" />
      </motion.div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-6 z-10">
        <div className="flex gap-8 text-sm text-warm-text">
          <a href="#shop" className="hover:text-accent transition-colors">
            SHOP
          </a>
          <a href="#explore" className="hover:text-accent transition-colors">
            EXPLORE
          </a>
          <a href="#about" className="hover:text-accent transition-colors">
            ABOUT
          </a>
        </div>
        <div className="flex gap-6 text-sm text-warm-text">
          <a href="#newsletter" className="hover:text-accent transition-colors">
            Sign up for our newsletter
          </a>
          <a href="#cart" className="hover:text-accent transition-colors">
            CART
          </a>
        </div>
      </nav>

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-16 z-10"
      >
        <h1 className="font-serif text-6xl md:text-7xl text-warm-text">
          Aroma<span className="italic">Light</span>
        </h1>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="relative w-full max-w-4xl aspect-[16/10] rounded-3xl overflow-hidden mb-12 z-10"
      >
        <img
          src="/aromatic-lamp-with-soft-vapor-rising-in-warm-light.jpg"
          alt="Aromatic lamp with gentle vapor"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-warm/20 to-transparent" />
      </motion.div>

      {/* Hero Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="text-center max-w-3xl z-10"
      >
        <h2 className="font-serif text-4xl md:text-5xl text-warm-text mb-6 text-balance">Light. Aroma. Tranquility.</h2>
        <p className="text-lg text-warm-text/80 mb-8 leading-relaxed">
          Create an atmosphere of harmony with aromatic lamps and lighting from AromaLight.store.
        </p>
        <Button
          size="lg"
          className="bg-accent hover:bg-accent-hover text-warm-text font-medium px-8 py-6 text-lg rounded-full transition-all duration-300 hover:shadow-glow"
        >
          View Collection ✨
        </Button>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-accent rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="w-1.5 h-1.5 bg-accent rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}
