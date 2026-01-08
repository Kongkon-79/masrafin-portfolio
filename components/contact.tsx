"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })

  const contactLinks = [
    {
      label: "Email",
      value: "raselbdcallingit@gmail.com",
      href: "mailto:raselbdcallingit@gmail.com",
      icon: "✉️",
    },
    {
      label: "WhatsApp",
      value: "+8801760976571",
      href: "https://wa.me/8801760976571",
      icon: "💬",
    },
    {
      label: "Location",
      value: "Bangladesh | Global Operations",
      icon: "📍",
    },
  ]

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {/* Section title */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Get In Touch</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
          </motion.div>

          {/* Contact info */}
          <motion.div className="grid md:grid-cols-3 gap-6">
            {contactLinks.map((link, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all ${
                  link.href ? "cursor-pointer" : ""
                }`}
                onClick={() => link.href && window.open(link.href)}
              >
                <p className="text-2xl mb-2">{link.icon}</p>
                <p className="text-sm text-muted-foreground mb-2">{link.label}</p>
                <p className={`font-semibold ${link.href ? "text-primary hover:underline" : "text-foreground"}`}>
                  {link.value}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to action */}
          <motion.div variants={itemVariants} className="text-center space-y-6 pt-12">
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you'd
              like to discuss how I can help your organization grow and scale.
            </p>
            <motion.a
              href="mailto:raselbdcallingit@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-primary/50"
            >
              Send me an email
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
