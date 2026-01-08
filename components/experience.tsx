"use client"

import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export function Experience() {
  const experiences = [
    {
      title: "Project Manager | Social Media Marketing",
      company: "ScaleUp Ads Agency",
      period: "Current",
      description:
        "Leading end-to-end social media marketing projects, overseeing team performance, timelines, and delivery quality. Setting KPIs, tracking campaign performance, and ensuring alignment between strategy and execution. Managing client communication, revisions, and process optimization to deliver measurable results and high client satisfaction.",
    },
    {
      title: "Team Leader | Social Media Marketing",
      company: "ScaleUp Ads Agency",
      period: "Previous",
      description:
        "Led SMM execution teams responsible for content planning, campaign setup, and daily optimization. Coordinated between media buyers, designers, and clients to ensure on-time delivery and quality control. Monitored team performance, handled revisions, and supported workflow improvements.",
    },
    {
      title: "Digital Marketing Executive",
      company: "ScaleUp Ads Agency",
      period: "Early Career",
      description:
        "Executed and managed social media marketing campaigns while handling core SEO activities with hands-on responsibility. Conducted in-depth audience and keyword research, optimized ad creatives and targeting, and performed on-page SEO improvements to drive both paid and organic growth. Analyzed campaign and SEO performance through regular reporting, insights, and optimization working closely with senior team members to deliver conversion-focused and scalable results.",
    },
  ]

  return (
    <section id="experience" className="relative py-20 md:py-32 bg-background">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {/* Section title */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Experience</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
          </motion.div>

          {/* Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-8 border-l-2 border-primary/30 hover:border-primary transition-colors"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="absolute -left-3 top-0 w-6 h-6 bg-primary rounded-full border-4 border-background"
                />

                {/* Content */}
                <motion.div className="space-y-2 group" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h3 className="text-2xl font-bold text-primary">{exp.title}</h3>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-lg text-muted-foreground font-medium">{exp.company}</p>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
