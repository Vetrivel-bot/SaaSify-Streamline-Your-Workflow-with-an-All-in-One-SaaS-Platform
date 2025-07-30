"use client"

import { motion } from "framer-motion"
<<<<<<< HEAD
import { Zap, Shield, BarChart3, Users, Clock, Smartphone, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Experience blazing fast performance with our optimized infrastructure and cutting-edge technology.",
      benefits: ["99.9% uptime", "Global CDN", "Auto-scaling"],
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption, SOC 2 compliance, and advanced threat protection.",
      benefits: ["256-bit encryption", "SOC 2 certified", "GDPR compliant"],
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Get deep insights with real-time analytics, custom dashboards, and predictive intelligence.",
      benefits: ["Real-time data", "Custom reports", "AI insights"],
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamless collaboration tools with real-time editing, comments, and project management features.",
      benefits: ["Real-time editing", "Team chat", "Project tracking"],
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock expert support with live chat, phone support, and comprehensive documentation.",
      benefits: ["Live chat", "Phone support", "Knowledge base"],
    },
    {
      icon: Smartphone,
      title: "Mobile Ready",
      description: "Native mobile apps for iOS and Android with offline sync and push notifications.",
      benefits: ["Native apps", "Offline sync", "Push notifications"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
=======
import { Zap, BarChart, Users, Shield, Layers, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    title: "Smart Automation",
    description: "Automate repetitive tasks and workflows to save time and reduce errors.",
    icon: <Zap className="size-4 md:size-5" />,
  },
  {
    title: "Advanced Analytics",
    description: "Gain valuable insights with real-time data visualization and reporting.",
    icon: <BarChart className="size-4 md:size-5" />,
  },
  {
    title: "Team Collaboration",
    description: "Work together seamlessly with integrated communication tools.",
    icon: <Users className="size-4 md:size-5" />,
  },
  {
    title: "Enterprise Security",
    description: "Keep your data safe with end-to-end encryption and compliance features.",
    icon: <Shield className="size-4 md:size-5" />,
  },
  {
    title: "Seamless Integration",
    description: "Connect with your favorite tools through our extensive API ecosystem.",
    icon: <Layers className="size-4 md:size-5" />,
  },
  {
    title: "24/7 Support",
    description: "Get help whenever you need it with our dedicated support team.",
    icon: <Star className="size-4 md:size-5" />,
  },
]

export default function Features() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
>>>>>>> cb47be20f51742e05a368a655026f2b6ec1cafe2
        delayChildren: 0.2,
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
  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    show: {
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

<<<<<<< HEAD
  return (
    <section id="features" className="py-16 md:py-24 lg:py-32 xl:py-40 2xl:py-48 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 md:space-y-6 mb-12 md:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-tight">
            Powerful Features
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need to streamline your workflow and boost productivity in one comprehensive platform.
=======
  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="features" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
              Features
            </Badge>
          </motion.div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight px-4">
            Everything You Need to Succeed
          </h2>
          <p className="max-w-[800px] text-muted-foreground text-sm sm:text-base md:text-lg px-4">
            Our comprehensive platform provides all the tools you need to streamline your workflow, boost productivity,
            and achieve your goals.
>>>>>>> cb47be20f51742e05a368a655026f2b6ec1cafe2
          </p>
        </motion.div>

        <motion.div
<<<<<<< HEAD
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-border">
                <CardHeader className="space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                  >
                    <feature.icon className="size-6 md:size-7 text-foreground" />
                  </motion.div>
                  <div>
                    <CardTitle className="text-xl md:text-2xl mb-2">{feature.title}</CardTitle>
                    <CardDescription className="text-base md:text-lg leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2 text-sm md:text-base">
                        <CheckCircle className="size-4 text-green-500 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Button variant="ghost" className="p-0 h-auto text-foreground hover:text-foreground/80">
                      Learn more
                      <ArrowRight className="ml-1 size-4" />
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16 lg:mt-20"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" className="text-base md:text-lg px-8 md:px-12 py-3 md:py-4 h-auto rounded-full">
              Explore All Features
              <ArrowRight className="ml-2 size-4 md:size-5" />
            </Button>
          </motion.div>
        </motion.div>
=======
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
        >
          {features.map((feature, i) => (
            <motion.div key={i} variants={item}>
              <motion.div whileHover={{ y: -5, scale: 1.02 }} transition={{ duration: 0.3 }}>
                <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-lg hover:border-primary/20">
                  <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                    <motion.div
                      className="size-8 md:size-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-3 md:mb-4"
                      variants={iconVariants}
                      whileHover="hover"
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-lg md:text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
>>>>>>> cb47be20f51742e05a368a655026f2b6ec1cafe2
      </div>
    </section>
  )
}
