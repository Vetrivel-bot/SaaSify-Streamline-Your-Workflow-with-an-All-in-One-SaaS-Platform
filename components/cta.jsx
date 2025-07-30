"use client"

import { motion } from "framer-motion"
<<<<<<< HEAD
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CTA() {
  const benefits = ["14-day free trial", "No setup fees", "Cancel anytime"]

  return (
    <section className="py-16 md:py-24 lg:py-32 xl:py-40 2xl:py-48 bg-gradient-to-br from-foreground to-foreground/90">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-6 md:space-y-8 lg:space-y-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-background">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-background/80 max-w-3xl mx-auto leading-relaxed">
            Join thousands of teams already using SaaSify to streamline their workflow and boost productivity.
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 text-sm md:text-base text-background/90"
              >
                <CheckCircle className="size-4 md:size-5 text-green-400" />
                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center pt-4 md:pt-8"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="text-base md:text-lg px-8 md:px-12 py-3 md:py-4 h-auto bg-background text-foreground hover:bg-background/90"
              >
                Start Free Trial
                <ArrowRight className="ml-2 size-4 md:size-5" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="text-base md:text-lg px-8 md:px-12 py-3 md:py-4 h-auto border-background/20 text-background hover:bg-background/10 bg-transparent"
              >
                Schedule Demo
              </Button>
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-sm md:text-base text-background/70 pt-4"
          >
            No credit card required • Setup in minutes • Cancel anytime
=======
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CTA() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      <motion.div
        className="absolute -top-24 -left-24 w-48 md:w-64 h-48 md:h-64 bg-white/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-24 -right-24 w-48 md:w-64 h-48 md:h-64 bg-white/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.1, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="container px-4 md:px-6 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center justify-center space-y-4 md:space-y-6 text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight px-4"
          >
            Ready to Transform Your Workflow?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mx-auto max-w-[700px] text-primary-foreground/80 text-sm sm:text-base md:text-xl px-4"
          >
            Join thousands of satisfied customers who have streamlined their processes and boosted productivity with our
            platform.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-4 px-4">
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="secondary"
                className="rounded-full h-11 md:h-12 px-6 md:px-8 text-sm md:text-base w-full sm:w-auto shadow-lg"
              >
                Start Free Trial
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full h-11 md:h-12 px-6 md:px-8 text-sm md:text-base bg-transparent border-white text-white hover:bg-white/10 w-full sm:w-auto"
              >
                Schedule a Demo
              </Button>
            </motion.div>
          </motion.div>
          <motion.p variants={itemVariants} className="text-xs md:text-sm text-primary-foreground/80 mt-4 px-4">
            No credit card required. 14-day free trial. Cancel anytime.
>>>>>>> cb47be20f51742e05a368a655026f2b6ec1cafe2
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
