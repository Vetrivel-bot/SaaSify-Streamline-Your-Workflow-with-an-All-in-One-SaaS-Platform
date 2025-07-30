<<<<<<< HEAD
import { Inter } from "next/font/google"
import "./globals.css"
=======
import "@/styles/globals.css"
import { Inter } from "next/font/google"
>>>>>>> cb47be20f51742e05a368a655026f2b6ec1cafe2
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "SaaSify - Streamline Your Workflow",
<<<<<<< HEAD
  description: "Transform your workflow with our all-in-one SaaS platform",
=======
  description: "Boost productivity, reduce costs, and scale your business with our all-in-one SaaS platform.",
>>>>>>> cb47be20f51742e05a368a655026f2b6ec1cafe2
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
<<<<<<< HEAD
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
=======
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
>>>>>>> cb47be20f51742e05a368a655026f2b6ec1cafe2
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
