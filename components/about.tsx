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
      <div className="container mx-auto">
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
              I am currently serving as a 
              <span className="text-primary font-semibold"> Project Manager at ScaleUp Ads Agency</span>, a sister concern of Betopia Group. I oversee end-to-end project execution, team coordination, delivery quality, and client satisfaction while implementing scalable systems to support long-term growth.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Alongside project management, I bring hands-on expertise in media buying and SEO. I manage and optimize paid advertising campaigns across platforms, develop data-driven SEO strategies, and ensure marketing efforts align with business goals. By bridging strategy, execution, and performance marketing, I help teams deliver measurable results on time and within scope
            </p>
          </motion.div>

          {/* Key areas */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8 pt-8">
            <div className="space-y-4 p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-semibold text-primary">Operations & Project Leadership</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Managing day & night shift operation teams</li>
                <li>• End-to-end project execution & on-time delivery</li>
                <li>• Quality control, revision handling & process improvement</li>
                <li>• KPI setting, performance tracking & team accountability</li>
                <li>• Cross-functional team coordination & workflow management</li>
              </ul>
            </div>

            <div className="space-y-4 p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-semibold text-primary">Growth, Media Buying & SEO</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Paid ads management (Meta & Tiktok Ads)</li>
                <li>• Media buying strategy, budget control & ROI optimization</li>
                <li>• SEO strategy, keyword research & on-page optimization</li>
                <li>• Organic & paid growth alignment for scalable results</li>
                <li>• Client retention, satisfaction & agency growth initiatives</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
