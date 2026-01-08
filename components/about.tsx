"use client"

import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

export function About() {
  return (
    <section
      id="about"
      className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-background to-secondary/20"
    >
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
            <h2 className="text-4xl md:text-5xl font-bold">About</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
          </motion.div>

          {/* Bio */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am currently serving as{" "}
              <span className="text-primary font-semibold">AGM – Operations at ScaleUp Ads Agency</span>, a sister
              concern of Betopia Group. I oversee day-to-day operations, team performance, delivery quality, and client
              satisfaction while driving scalable systems for growth.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              With a strong background in Google Ads, SEO, and Team Management Process, I bridge the gap between
              strategy and execution—ensuring projects are delivered on time, teams stay aligned with KPIs, and clients
              receive measurable results.
            </p>
          </motion.div>

          {/* Key areas */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8 pt-8">
            <div className="space-y-4 p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-semibold text-primary">Operations Leadership</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Managing day & night shift operation teams</li>
                <li>• Ensuring on-time delivery & quality control</li>
                <li>• KPI target setting & achievement tracking</li>
                <li>• Revision handling & process improvement</li>
              </ul>
            </div>

            <div className="space-y-4 p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-semibold text-primary">Growth & Scale</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Team scaling & workflow optimization</li>
                <li>• Client retention & satisfaction management</li>
                <li>• Agency process standardization</li>
                <li>• Strategic growth initiatives</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
