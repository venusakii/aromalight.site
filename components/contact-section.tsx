"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Instagram, Facebook, Mail } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-24 px-4 bg-warm">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl text-center text-warm-text mb-16"
        >
          Contact
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="font-serif text-2xl text-warm-text mb-4">Get in Touch</h3>
            <p className="text-warm-text/70 leading-relaxed">
              We're always happy to answer your questions and help you choose the perfect lamp for your home.
            </p>

            <div className="flex gap-4 pt-4">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Facebook, label: "Facebook" },
                { icon: Mail, label: "Email" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent-hover/30 transition-all duration-300 hover:shadow-glow"
                >
                  <social.icon className="w-5 h-5 text-accent" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-sand/50 backdrop-blur-sm rounded-3xl p-8 border border-accent/10"
          >
            <form className="space-y-4">
              <Input
                placeholder="Your name"
                className="bg-warm border-accent/30 focus:border-accent text-warm-text placeholder:text-warm-text/50"
              />
              <Input
                type="email"
                placeholder="Email"
                className="bg-warm border-accent/30 focus:border-accent text-warm-text placeholder:text-warm-text/50"
              />
              <Textarea
                placeholder="Your message"
                rows={4}
                className="bg-warm border-accent/30 focus:border-accent text-warm-text placeholder:text-warm-text/50 resize-none"
              />
              <Button className="w-full bg-accent hover:bg-accent-hover text-warm-text font-medium transition-all duration-300 hover:shadow-glow">
                Send
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
