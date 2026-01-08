"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"

export function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    // GSAP animation for subtle background movement
    gsap.to(containerRef.current, {
      backgroundPosition: "100% 50%",
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    })
  }, [])

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background dark:via-slate-900 opacity-50" />

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 1 }}
          className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl dark:opacity-5"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1.5 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-start order-2 md:order-1"
          >
            <div className="relative w-80 h-80">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-primary via-accent to-primary bg-clip-border opacity-20"
              />

              {/* Profile Image Container */}
              <div className="absolute inset-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden border border-primary/30 backdrop-blur-sm">
                <img src="/rasel.jpg" alt="MD. Rasel Islam" className="w-full h-full object-cover" />
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-lg blur-xl"
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 order-1 md:order-2"
          >
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }}>
              <p className="text-primary font-semibold text-lg tracking-wider uppercase">Welcome to my portfolio</p>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold tracking-tight text-balance leading-tight"
            >
              MD. Rasel Islam
            </motion.h1>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-2"
            >
              <p className="text-2xl font-semibold text-primary">AGM – Operations</p>
              <p className="text-lg text-muted-foreground">ScaleUp Ads Agency</p>
            </motion.div>

            {/* Professional Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-muted-foreground text-base leading-relaxed max-w-lg"
            >
              Operations leader with expertise in team management, process optimization, and driving scalable growth. I
              bridge strategy and execution to deliver measurable results and exceptional client satisfaction.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 30px rgba(45, 157, 120, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold transition-all hover:shadow-lg inline-block text-center"
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="#experience"
                whileHover={{ scale: 1.05, borderColor: "var(--primary)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-foreground/20 text-foreground rounded-lg font-semibold transition-all hover:bg-foreground/5 text-center dark:border-primary/50 dark:hover:bg-primary/10"
              >
                View My Work
              </motion.a>
            </motion.div>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex gap-6 text-sm text-muted-foreground pt-4"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Based in Bangladesh</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Global Operations</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1.2, duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
