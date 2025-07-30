"use client"

import { motion } from "framer-motion"
<<<<<<< HEAD
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      question: "What is SaaSify and how does it work?",
      answer:
        "SaaSify is an all-in-one SaaS platform designed to streamline your workflow and boost productivity. It combines project management, team collaboration, analytics, and automation tools in one unified platform. Simply sign up, configure your workspace, and start collaborating with your team immediately.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes! We offer a 14-day free trial for all our plans. No credit card is required to start your trial. You'll have access to all features during the trial period, and you can upgrade to a paid plan at any time.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Absolutely. You can cancel your subscription at any time from your account settings. There are no cancellation fees or long-term contracts. If you cancel, you'll continue to have access to your account until the end of your current billing period.",
    },
    {
      question: "What integrations do you support?",
      answer:
        "We support over 100+ integrations including popular tools like Slack, Google Workspace, Microsoft 365, Salesforce, HubSpot, Zapier, and many more. Our API also allows for custom integrations if you need to connect with proprietary systems.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Security is our top priority. We use bank-grade encryption, are SOC 2 compliant, and implement advanced threat protection. Your data is stored in secure, redundant data centers with regular backups. We also offer SSO integration for enterprise customers.",
    },
    {
      question: "Do you offer customer support?",
      answer:
        "Yes! We provide email support for all plans, priority support for Professional plans, and 24/7 phone support for Enterprise customers. Our support team is highly trained and committed to helping you succeed with SaaSify.",
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer:
        "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at the end of your current billing cycle. We'll prorate any charges accordingly.",
    },
    {
      question: "Do you offer custom enterprise solutions?",
      answer:
        "Yes! We offer custom enterprise solutions including dedicated infrastructure, custom integrations, advanced security features, and personalized onboarding. Contact our sales team to discuss your specific requirements.",
    },
  ]

=======
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does the 14-day free trial work?",
    answer:
      "Our 14-day free trial gives you full access to all features of your selected plan. No credit card is required to sign up, and you can cancel at any time during the trial period with no obligation.",
  },
  {
    question: "Can I change plans later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the new pricing will be prorated for the remainder of your billing cycle. If you downgrade, the new pricing will take effect at the start of your next billing cycle.",
  },
  {
    question: "Is there a limit to how many users I can add?",
    answer:
      "The number of users depends on your plan. The Starter plan allows up to 5 team members, the Professional plan allows up to 20, and the Enterprise plan has no limit on team members.",
  },
  {
    question: "Do you offer discounts for nonprofits or educational institutions?",
    answer:
      "Yes, we offer special pricing for nonprofits, educational institutions, and open-source projects. Please contact our sales team for more information.",
  },
  {
    question: "How secure is my data?",
    answer:
      "We take security very seriously. All data is encrypted both in transit and at rest. We use industry-standard security practices and regularly undergo security audits. Our platform is compliant with GDPR, CCPA, and other relevant regulations.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "Support varies by plan. All plans include email support, with the Professional plan offering priority email support. The Enterprise plan includes 24/7 phone and email support. We also have an extensive knowledge base and community forum available to all users.",
  },
]

export default function FAQ() {
>>>>>>> cb47be20f51742e05a368a655026f2b6ec1cafe2
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
<<<<<<< HEAD
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
=======
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
>>>>>>> cb47be20f51742e05a368a655026f2b6ec1cafe2
      },
    },
  }

  return (
<<<<<<< HEAD
    <section id="faq" className="py-16 md:py-24 lg:py-32 xl:py-40 2xl:py-48 bg-background">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 md:space-y-6 mb-12 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about SaaSify
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem value={`item-${index}`} className="border border-border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-foreground hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
=======
    <section id="faq" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: 90 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
              FAQ
            </Badge>
          </motion.div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight px-4">
            Frequently Asked Questions
          </h2>
          <p className="max-w-[800px] text-muted-foreground text-sm sm:text-base md:text-lg px-4">
            Find answers to common questions about our platform.
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <Accordion type="single" collapsible className="w-full space-y-2">
              {faqs.map((faq, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <motion.div whileHover={{ scale: 1.01, x: 5 }} transition={{ duration: 0.2 }}>
                    <AccordionItem
                      value={`item-${i}`}
                      className="border border-border/40 rounded-lg px-4 md:px-6 py-2 bg-gradient-to-r from-background to-muted/5 hover:from-muted/10 hover:to-muted/20 transition-all duration-300"
                    >
                      <AccordionTrigger className="text-left font-medium hover:no-underline text-sm md:text-base py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
>>>>>>> cb47be20f51742e05a368a655026f2b6ec1cafe2
      </div>
    </section>
  )
}
