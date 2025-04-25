"use client"

import { Instagram, Facebook, Linkedin, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SocialMediaButtons() {
  const openInstagram = () => {
    window.open("https://www.instagram.com/sports_professionals_col?igsh=cG5scWJyYWlxamN4&utm_source=qr", "_blank")
  }

  const openFacebook = () => {
    window.open("https://www.facebook.com/sportsprofessionals", "_blank")
  }

  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/company/sportsprofessionals", "_blank")
  }

  const openWhatsApp = () => {
    window.open("https://wa.me/573105627575", "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex flex-col gap-3">
        <Button
          onClick={openInstagram}
          className="rounded-full w-12 h-12 p-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:opacity-90 shadow-lg"
          aria-label="Síguenos en Instagram"
        >
          <Instagram className="h-6 w-6 text-white" />
        </Button>
        <Button
          onClick={openFacebook}
          className="rounded-full w-12 h-12 p-0 bg-[#1877F2] hover:bg-[#1877F2]/90 shadow-lg"
          aria-label="Síguenos en Facebook"
        >
          <Facebook className="h-6 w-6 text-white" />
        </Button>
        <Button
          onClick={openLinkedIn}
          className="rounded-full w-12 h-12 p-0 bg-[#0A66C2] hover:bg-[#0A66C2]/90 shadow-lg"
          aria-label="Síguenos en LinkedIn"
        >
          <Linkedin className="h-6 w-6 text-white" />
        </Button>
        <Button
          onClick={openWhatsApp}
          className="rounded-full w-12 h-12 p-0 bg-[#41A650] hover:bg-[#41A650]/90 shadow-lg"
          aria-label="Contactar por WhatsApp"
        >
          <MessageSquare className="h-6 w-6 text-white" />
        </Button>
      </div>
    </div>
  )
} 