"use client"

import { motion } from "framer-motion"
<<<<<<< HEAD
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      content:
        "SaaSify has completely transformed how we manage our projects. The intuitive interface and powerful features have increased our team's productivity by 40%.",
    },
    {
      name: "Michael Chen",
      role: "Product Manager, InnovateCorp",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      content:
        "The analytics dashboard is incredible. We can now make data-driven decisions faster than ever before. The ROI has been outstanding.",
    },
    {
      name: "Emily Rodriguez",
      role: "CTO, ScaleUp",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      content:
        "Security and reliability are top-notch. We've had zero downtime since switching to SaaSify. Their support team is also exceptional.",
    },
    {
      name: "David Kim",
      role: "Founder, StartupXYZ",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      content:
        "The mobile app is fantastic. I can manage everything on the go. The real-time collaboration features have been a game-changer for our remote team.",
    },
    {
      name: "Lisa Thompson",
      role: "Operations Director, GrowthCo",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      content:
        "Implementation was seamless, and the onboarding process was smooth. The platform scales perfectly with our growing business needs.",
    },
    {
      name: "Alex Martinez",
      role: "VP Engineering, TechFlow",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      content:
        "The API integration capabilities are excellent. We were able to connect all our existing tools without any issues. Highly recommended!",
    },
  ]

=======
import { Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote:
      "SaaSify has transformed how we manage our projects. The automation features have saved us countless hours of manual work.",
    author: "Sarah Johnson",
    role: "Project Manager, TechCorp",
    rating: 5,
  },
  {
    quote:
      "The analytics dashboard provides insights we never had access to before. It's helped us make data-driven decisions that have improved our ROI.",
    author: "Michael Chen",
    role: "Marketing Director, GrowthLabs",
    rating: 5,
  },
  {
    quote:
      "Customer support is exceptional. Any time we've had an issue, the team has been quick to respond and resolve it. Couldn't ask for better service.",
    author: "Emily Rodriguez",
    role: "Operations Lead, StartupX",
    rating: 5,
  },
  {
    quote:
      "We've tried several similar solutions, but none compare to the ease of use and comprehensive features of SaaSify. It's been a game-changer.",
    author: "David Kim",
    role: "CEO, InnovateNow",
    rating: 5,
  },
  {
    quote:
      "The collaboration tools have made remote work so much easier for our team. We're more productive than ever despite being spread across different time zones.",
    author: "Lisa Patel",
    role: "HR Director, RemoteFirst",
    rating: 5,
  },
  {
    quote:
      "Implementation was seamless, and the ROI was almost immediate. We've reduced our operational costs by 30% since switching to SaaSify.",
    author: "James Wilson",
    role: "COO, ScaleUp Inc",
    rating: 5,
  },
]

export default function Testimonials() {
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

<<<<<<< HEAD
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
=======
  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
>>>>>>> cb47be20f51742e05a368a655026f2b6ec1cafe2
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
<<<<<<< HEAD
    <section id="testimonials" className="py-16 md:py-24 lg:py-32 xl:py-40 2xl:py-48 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 md:space-y-6 mb-12 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-foreground">
            What Our Customers Say
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who trust SaaSify
=======
    <section id="testimonials" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
              Testimonials
            </Badge>
          </motion.div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight px-4">
            Loved by Teams Worldwide
          </h2>
          <p className="max-w-[800px] text-muted-foreground text-sm sm:text-base md:text-lg px-4">
            Don't just take our word for it. See what our customers have to say about their experience.
>>>>>>> cb47be20f51742e05a368a655026f2b6ec1cafe2
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
<<<<<<< HEAD
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-border bg-card hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 md:p-8 space-y-4 md:space-y-6">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="size-4 md:size-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 size-6 md:size-8 text-muted-foreground/20" />
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed pl-4">
                      {testimonial.content}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 md:gap-4 pt-4 border-t border-border">
                    <Avatar className="size-10 md:size-12">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback className="bg-muted text-foreground">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-sm md:text-base text-foreground">{testimonial.name}</div>
                      <div className="text-xs md:text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
=======
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
        >
          {testimonials.map((testimonial, i) => (
            <motion.div key={i} variants={cardVariants}>
              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  rotateY: 5,
                }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-xl hover:border-primary/20">
                  <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                    <motion.div
                      className="flex mb-3 md:mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      {Array(testimonial.rating)
                        .fill(0)
                        .map((_, j) => (
                          <motion.div
                            key={j}
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            transition={{ delay: 0.4 + j * 0.1 }}
                          >
                            <Star className="size-3 md:size-4 text-yellow-500 fill-yellow-500" />
                          </motion.div>
                        ))}
                    </motion.div>
                    <p className="text-sm sm:text-base lg:text-lg mb-4 md:mb-6 flex-grow leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <motion.div
                      className="flex items-center gap-3 md:gap-4 mt-auto pt-3 md:pt-4 border-t border-border/40"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      <motion.div
                        className="size-8 md:size-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-foreground font-medium text-sm md:text-base"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        {testimonial.author.charAt(0)}
                      </motion.div>
                      <div>
                        <p className="font-medium text-sm md:text-base">{testimonial.author}</p>
                        <p className="text-xs md:text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
>>>>>>> cb47be20f51742e05a368a655026f2b6ec1cafe2
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
