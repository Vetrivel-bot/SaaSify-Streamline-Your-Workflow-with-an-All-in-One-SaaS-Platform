"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Moon, Sun, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
<<<<<<< HEAD
  const { theme, setTheme, resolvedTheme } = useTheme()
=======
  const { theme, setTheme } = useTheme()
>>>>>>> cb47be20f51742e05a368a655026f2b6ec1cafe2
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
<<<<<<< HEAD
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
=======
    setTheme(theme === "dark" ? "light" : "dark")
>>>>>>> cb47be20f51742e05a368a655026f2b6ec1cafe2
  }

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
      },
    },
  }

  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
<<<<<<< HEAD
      className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${
        isScrolled ? "bg-background/80 shadow-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 max-w-[1600px] flex h-14 md:h-16 items-center justify-between">
=======
      className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"}`}
    >
      <div className="container flex h-14 md:h-16 items-center justify-between px-4 md:px-6">
>>>>>>> cb47be20f51742e05a368a655026f2b6ec1cafe2
        <motion.div
          className="flex items-center gap-2 font-bold"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
<<<<<<< HEAD
            className="size-7 md:size-8 rounded-lg bg-foreground flex items-center justify-center text-background text-sm md:text-base"
=======
            className="size-7 md:size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground text-sm md:text-base"
>>>>>>> cb47be20f51742e05a368a655026f2b6ec1cafe2
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            S
          </motion.div>
<<<<<<< HEAD
          <span className="text-sm md:text-base text-foreground">SaaSify</span>
=======
          <span className="text-sm md:text-base">SaaSify</span>
>>>>>>> cb47be20f51742e05a368a655026f2b6ec1cafe2
        </motion.div>

        <nav className="hidden lg:flex gap-6 xl:gap-8">
          {["Features", "Testimonials", "Pricing", "FAQ"].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground relative group"
              >
                {item}
                <motion.div
<<<<<<< HEAD
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground group-hover:w-full transition-all duration-300"
=======
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
>>>>>>> cb47be20f51742e05a368a655026f2b6ec1cafe2
                  whileHover={{ width: "100%" }}
                />
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="hidden md:flex gap-2 lg:gap-4 items-center">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full size-8 md:size-9">
              <motion.div
<<<<<<< HEAD
                key={mounted ? resolvedTheme : "loading"}
=======
                key={theme}
>>>>>>> cb47be20f51742e05a368a655026f2b6ec1cafe2
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
<<<<<<< HEAD
                {mounted ? (
                  resolvedTheme === "dark" ? (
                    <Sun className="size-4" />
                  ) : (
                    <Moon className="size-4" />
                  )
                ) : (
                  <div className="size-4" />
                )}
=======
                {mounted && theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
>>>>>>> cb47be20f51742e05a368a655026f2b6ec1cafe2
              </motion.div>
              <span className="sr-only">Toggle theme</span>
            </Button>
          </motion.div>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hidden lg:block"
          >
            Log in
          </Link>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
<<<<<<< HEAD
            <Button className="rounded-full text-sm px-4 lg:px-6 h-8 md:h-9 bg-foreground text-background hover:bg-foreground/90">
=======
            <Button className="rounded-full text-sm px-4 lg:px-6 h-8 md:h-9">
>>>>>>> cb47be20f51742e05a368a655026f2b6ec1cafe2
              Get Started
              <ChevronRight className="ml-1 size-3 md:size-4" />
            </Button>
          </motion.div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full size-8">
<<<<<<< HEAD
              {mounted ? (
                resolvedTheme === "dark" ? (
                  <Sun className="size-4" />
                ) : (
                  <Moon className="size-4" />
                )
              ) : (
                <div className="size-4" />
              )}
=======
              {mounted && theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
>>>>>>> cb47be20f51742e05a368a655026f2b6ec1cafe2
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="size-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={mobileMenuOpen ? "close" : "menu"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
                </motion.div>
              </AnimatePresence>
              <span className="sr-only">Toggle menu</span>
            </Button>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden absolute top-14 inset-x-0 bg-background/95 backdrop-blur-lg border-b shadow-lg"
          >
            <div className="container py-4 px-4 flex flex-col gap-1">
              {["Features", "Testimonials", "Pricing", "FAQ"].map((item) => (
                <motion.div key={item} variants={menuItemVariants}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="py-3 px-2 text-sm font-medium block hover:bg-muted/50 rounded-md transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={menuItemVariants} className="pt-2 border-t mt-2">
                <Link
                  href="#"
                  className="py-3 px-2 text-sm font-medium block hover:bg-muted/50 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Log in
                </Link>
              </motion.div>
              <motion.div variants={menuItemVariants} className="px-2">
<<<<<<< HEAD
                <Button
                  className="rounded-full w-full mt-2 bg-foreground text-background hover:bg-foreground/90"
                  onClick={() => setMobileMenuOpen(false)}
                >
=======
                <Button className="rounded-full w-full mt-2" onClick={() => setMobileMenuOpen(false)}>
>>>>>>> cb47be20f51742e05a368a655026f2b6ec1cafe2
                  Get Started
                  <ChevronRight className="ml-1 size-4" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
