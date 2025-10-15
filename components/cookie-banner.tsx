"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasAccepted = localStorage.getItem("cookies-accepted")
    if (!hasAccepted) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookies-accepted", "true")
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50"
        >
          <div className="bg-sand/95 backdrop-blur-lg rounded-2xl p-6 shadow-glow border border-accent/20">
            <p className="text-warm-text/80 text-sm leading-relaxed mb-4">
              This website uses cookies to improve your experience and analyze site usage. By continuing, you consent to
              the use of cookies.
            </p>
            <Button
              onClick={handleAccept}
              className="w-full bg-accent hover:bg-accent-hover text-warm-text font-medium transition-all duration-300 hover:shadow-glow"
            >
              Accept 🌙
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
