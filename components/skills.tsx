"use client"

import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export function Skills() {
  const skillCategories = [
    {
      title: "Operations",
      skills: ["Team Management", "Process Optimization", "KPI Management", "Quality Control", "Workflow Efficiency"],
    },
    {
      title: "Digital Marketing",
      skills: ["Google Ads", "SEO", "Campaign Management", "Conversion Tracking", "Analytics"],
    },
    {
      title: "Leadership",
      skills: ["Team Leadership", "Client Relations", "Strategic Planning", "Problem Solving", "Decision Making"],
    },
  ]

  return (
    <section id="skills" className="relative py-20 md:py-32 bg-gradient-to-b from-background to-secondary/20">
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
            <h2 className="text-4xl md:text-5xl font-bold">Skills & Expertise</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
          </motion.div>

          {/* Skills Grid */}
          <motion.div variants={containerVariants} className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all group"
              >
                <h3 className="text-xl font-semibold text-primary mb-4 group-hover:text-accent transition-colors">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.li
                      key={skillIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.05 }}
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <span className="w-2 h-2 bg-accent rounded-full" />
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
