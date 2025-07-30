"use client"

import { motion } from "framer-motion"
<<<<<<< HEAD
import { Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$9",
      period: "/month",
      description: "Perfect for small teams getting started",
      features: [
        "Up to 5 team members",
        "10GB storage",
        "Basic analytics",
        "Email support",
        "Mobile app access",
        "Basic integrations",
      ],
      popular: false,
      cta: "Start Free Trial",
    },
    {
      name: "Professional",
      price: "$29",
      period: "/month",
      description: "Best for growing businesses",
      features: [
        "Up to 25 team members",
        "100GB storage",
        "Advanced analytics",
        "Priority support",
        "Mobile app access",
        "All integrations",
        "Custom workflows",
        "API access",
      ],
      popular: true,
      cta: "Start Free Trial",
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited team members",
        "1TB storage",
        "Enterprise analytics",
        "24/7 phone support",
        "Mobile app access",
        "All integrations",
        "Custom workflows",
        "Full API access",
        "SSO integration",
        "Custom branding",
      ],
      popular: false,
      cta: "Contact Sales",
    },
  ]

=======
import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const monthlyPlans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for small teams and startups.",
    features: ["Up to 5 team members", "Basic analytics", "5GB storage", "Email support"],
    cta: "Start Free Trial",
  },
  {
    name: "Professional",
    price: "$79",
    description: "Ideal for growing businesses.",
    features: ["Up to 20 team members", "Advanced analytics", "25GB storage", "Priority email support", "API access"],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$199",
    description: "For large organizations with complex needs.",
    features: [
      "Unlimited team members",
      "Custom analytics",
      "Unlimited storage",
      "24/7 phone & email support",
      "Advanced API access",
      "Custom integrations",
    ],
    cta: "Contact Sales",
  },
]

const annualPlans = [
  {
    name: "Starter",
    price: "$23",
    description: "Perfect for small teams and startups.",
    features: ["Up to 5 team members", "Basic analytics", "5GB storage", "Email support"],
    cta: "Start Free Trial",
  },
  {
    name: "Professional",
    price: "$63",
    description: "Ideal for growing businesses.",
    features: ["Up to 20 team members", "Advanced analytics", "25GB storage", "Priority email support", "API access"],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$159",
    description: "For large organizations with complex needs.",
    features: [
      "Unlimited team members",
      "Custom analytics",
      "Unlimited storage",
      "24/7 phone & email support",
      "Advanced API access",
      "Custom integrations",
    ],
    cta: "Contact Sales",
  },
]

function PricingCards({ plans }) {
>>>>>>> cb47be20f51742e05a368a655026f2b6ec1cafe2
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
<<<<<<< HEAD
        staggerChildren: 0.1,
        delayChildren: 0.2,
=======
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
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
    <section id="pricing" className="py-16 md:py-24 lg:py-32 xl:py-40 2xl:py-48 bg-background">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 md:space-y-6 mb-12 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-foreground">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose the perfect plan for your team. No hidden fees, cancel anytime.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                className={`h-full relative border-border bg-card hover:shadow-lg transition-all duration-300 ${
                  plan.popular ? "ring-2 ring-foreground scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-foreground text-background px-3 py-1">
                      <Star className="size-3 mr-1 fill-current" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-sm md:text-base text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="p-6 md:p-8 pt-0">
                  <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="size-4 md:size-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm md:text-base text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full text-sm md:text-base py-2 md:py-3 ${
                      plan.popular
                        ? "bg-foreground text-background hover:bg-foreground/90"
                        : "bg-muted text-foreground hover:bg-muted/80"
                    }`}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
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
          className="text-center mt-12 md:mt-20"
        >
          <p className="text-sm md:text-base text-muted-foreground">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </motion.div>
=======
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    >
      {plans.map((plan, i) => (
        <motion.div key={i} variants={cardVariants}>
          <motion.div
            whileHover={{
              y: -10,
              scale: 1.02,
              rotateY: plan.popular ? 0 : 2,
            }}
            transition={{ duration: 0.3 }}
            className="h-full"
          >
            <Card
              className={`relative overflow-hidden h-full transition-all duration-300 ${
                plan.popular
                  ? "border-primary shadow-xl scale-105 bg-gradient-to-b from-primary/5 to-background"
                  : "border-border/40 shadow-md hover:shadow-lg bg-gradient-to-b from-background to-muted/10"
              } backdrop-blur`}
            >
              {plan.popular && (
                <motion.div
                  className="absolute top-0 right-0 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg"
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  Most Popular
                </motion.div>
              )}
              <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                <motion.h3
                  className="text-xl md:text-2xl font-bold"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {plan.name}
                </motion.h3>
                <motion.div
                  className="flex items-baseline mt-3 md:mt-4"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <span className="text-3xl md:text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-1 text-sm md:text-base">/month</span>
                </motion.div>
                <motion.p
                  className="text-muted-foreground mt-2 text-sm md:text-base"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {plan.description}
                </motion.p>
                <motion.ul
                  className="space-y-2 md:space-y-3 my-4 md:my-6 flex-grow"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {plan.features.map((feature, j) => (
                    <motion.li
                      key={j}
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + j * 0.1 }}
                    >
                      <Check className="mr-1 size-3 md:size-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base">{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    className={`w-full mt-auto rounded-full text-sm md:text-base h-10 md:h-11 ${
                      plan.popular ? "bg-primary hover:bg-primary/90 shadow-lg" : "bg-muted hover:bg-muted/80"
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="w-full py-16 md:py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12"
        >
          <motion.div
            initial={{ scale: 0, rotate: 180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
              Pricing
            </Badge>
          </motion.div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight px-4">
            Simple, Transparent Pricing
          </h2>
          <p className="max-w-[800px] text-muted-foreground text-sm sm:text-base md:text-lg px-4">
            Choose the plan that's right for your business. All plans include a 14-day free trial.
          </p>
        </motion.div>

        <div className="mx-auto max-w-6xl">
          <Tabs defaultValue="monthly" className="w-full">
            <motion.div
              className="flex justify-center mb-6 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <TabsList className="rounded-full p-1 bg-muted/50 backdrop-blur">
                <TabsTrigger value="monthly" className="rounded-full px-4 md:px-6 text-sm md:text-base">
                  Monthly
                </TabsTrigger>
                <TabsTrigger value="annually" className="rounded-full px-4 md:px-6 text-sm md:text-base">
                  Annually (Save 20%)
                </TabsTrigger>
              </TabsList>
            </motion.div>
            <TabsContent value="monthly">
              <PricingCards plans={monthlyPlans} />
            </TabsContent>
            <TabsContent value="annually">
              <PricingCards plans={annualPlans} />
            </TabsContent>
          </Tabs>
        </div>
>>>>>>> cb47be20f51742e05a368a655026f2b6ec1cafe2
      </div>
    </section>
  )
}
