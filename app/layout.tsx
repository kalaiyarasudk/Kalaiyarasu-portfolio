import type React from "react"
import type { Metadata } from "next"
import { Inter, Manrope } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "Kalaiyarasu D - Data Engineer Portfolio",
  description:
    "Portfolio of Kalaiyarasu D - SOX Analyst transitioning to Data Engineering, specializing in PySpark, SQL, Databricks, and cloud solutions",
  generator: "v0.app",
  keywords: ["data engineer", "portfolio", "pyspark", "sql", "databricks", "aws"],
  authors: [{ name: "Kalaiyarasu D" }],
  openGraph: {
    title: "Kalaiyarasu D - Data Engineer Portfolio",
    description: "Portfolio showcasing data engineering projects and expertise in cloud-based solutions",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} antialiased`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
