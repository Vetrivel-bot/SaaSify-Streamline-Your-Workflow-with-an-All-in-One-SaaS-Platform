"use client"

import { motion } from "framer-motion"
<<<<<<< HEAD
import { UserPlus, Settings, Rocket, BarChart } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: UserPlus,
      title: "Sign Up",
      description: "Create your account in seconds with our simple onboarding process.",
    },
    {
      icon: Settings,
      title: "Configure",
      description: "Customize your workspace and integrate with your existing tools.",
    },
    {
      icon: Rocket,
      title: "Launch",
      description: "Start collaborating with your team and boost productivity immediately.",
    },
    {
      icon: BarChart,
      title: "Analyze",
      description: "Track progress with detailed analytics and optimize your workflow.",
    },
  ]

=======
import { Badge } from "@/components/ui/badge"

const steps = [
  {
    step: "01",
    title: "Create Account",
    description: "Sign up in seconds with just your email. No credit card required to get started.",
  },
  {
    step: "02",
    title: "Configure Workspace",
    description: "Customize your workspace to match your team's unique workflow and requirements.",
  },
  {
    step: "03",
    title: "Boost Productivity",
    description: "Start using our powerful features to streamline processes and achieve your goals.",
  },
]

export default function HowItWorks() {
>>>>>>> cb47be20f51742e05a368a655026f2b6ec1cafe2
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
<<<<<<< HEAD
        staggerChildren: 0.2,
        delayChildren: 0.3,
=======
        staggerChildren: 0.3,
        delayChildren: 0.2,
>>>>>>> cb47be20f51742e05a368a655026f2b6ec1cafe2
      },
    },
  }

<<<<<<< HEAD
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
=======
  const stepVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
>>>>>>> cb47be20f51742e05a368a655026f2b6ec1cafe2
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
<<<<<<< HEAD
    <section className="py-16 md:py-24 lg:py-32 xl:py-40 2xl:py-48 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 md:space-y-6 mb-12 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-foreground">
            How It Works
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get started in minutes with our simple 4-step process
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={itemVariants} className="text-center">
              <div className="relative mb-6 md:mb-8">
                <div className="flex items-center justify-center size-16 md:size-20 lg:size-24 rounded-full bg-foreground text-background mx-auto mb-4">
                  <step.icon className="size-8 md:size-10 lg:size-12" />
                </div>
                <div className="absolute -top-2 -right-2 size-8 md:size-10 rounded-full bg-muted border-2 border-background flex items-center justify-center">
                  <span className="text-sm md:text-base font-bold text-foreground">{index + 1}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-border transform translate-x-4"></div>
                )}
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-foreground mb-3 md:mb-4">
                {step.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
=======
    <section className="w-full py-16 md:py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -90 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
              How It Works
            </Badge>
          </motion.div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight px-4">
            Simple Process, Powerful Results
          </h2>
          <p className="max-w-[800px] text-muted-foreground text-sm sm:text-base md:text-lg px-4">
            Get started in minutes and see the difference our platform can make for your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          <motion.div
            className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 z-0"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="contents"
          >
            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={stepVariants}
                className="relative z-10 flex flex-col items-center text-center space-y-3 md:space-y-4"
              >
                <motion.div
                  className="flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground text-lg md:text-xl font-bold shadow-lg"
                  whileHover={{
                    scale: 1.1,
                    rotate: 360,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {step.step}
                </motion.div>
                <h3 className="text-lg md:text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base px-4">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
>>>>>>> cb47be20f51742e05a368a655026f2b6ec1cafe2
      </div>
    </section>
  )
}
