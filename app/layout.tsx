import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import SocialMediaButtons from "@/components/social-media-buttons"
import { AnimationProvider } from "@/components/animation-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SPORTSPROFESSIONALS - Servicios Deportivos y Gestión",
  description:
    "Somos una empresa conformada por profesionales, que trabajamos en el sector público y privado, ofreciendo servicios relacionados con la industria del deporte en los segmentos de la educación física, recreación, administración del deporte y actividad física.",
  keywords:
    "deporte, educación física, recreación, actividad física, administración deportiva, gimnasios, turismo deportivo, formación deportiva, SPORTSPROFESSIONALS, UNOFIT, gestión deportiva, instalaciones deportivas",
  authors: [{ name: "SPORTSPROFESSIONALS" }],
  creator: "SPORTSPROFESSIONALS",
  publisher: "SPORTSPROFESSIONALS",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://sportsprofessionals.com",
    title: "SPORTSPROFESSIONALS - Servicios Deportivos y Gestión",
    description:
      "Servicios relacionados con la industria del deporte en los segmentos de la educación física, recreación, administración del deporte y actividad física.",
    siteName: "SPORTSPROFESSIONALS",
  },
  twitter: {
    card: "summary_large_image",
    title: "SPORTSPROFESSIONALS - Servicios Deportivos y Gestión",
    description:
      "Servicios relacionados con la industria del deporte en los segmentos de la educación física, recreación, administración del deporte y actividad física.",
  },
  robots: {
    index: true,
    follow: true,
  },
    
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <AnimationProvider>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
              <SocialMediaButtons />
            </div>
          </AnimationProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

import './globals.css'