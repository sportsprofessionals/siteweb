"use client"

import { Instagram, Facebook, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SocialButtons() {
  const openInstagram = () => {
    window.open("https://www.instagram.com/sportsprofessionals", "_blank")
  }

  const openFacebook = () => {
    window.open("https://www.facebook.com/sportsprofessionals", "_blank")
  }

  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/company/sportsprofessionals", "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
      <div className="flex gap-2">
        <Button
          onClick={openInstagram}
          className="rounded-full w-10 h-10 p-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:opacity-90 shadow-lg"
          aria-label="Síguenos en Instagram"
        >
          <Instagram className="h-5 w-5 text-white" />
        </Button>
        <Button
          onClick={openFacebook}
          className="rounded-full w-10 h-10 p-0 bg-[#1877F2] hover:bg-[#1877F2]/90 shadow-lg"
          aria-label="Síguenos en Facebook"
        >
          <Facebook className="h-5 w-5 text-white" />
        </Button>
        <Button
          onClick={openLinkedIn}
          className="rounded-full w-10 h-10 p-0 bg-[#0A66C2] hover:bg-[#0A66C2]/90 shadow-lg"
          aria-label="Síguenos en LinkedIn"
        >
          <Linkedin className="h-5 w-5 text-white" />
        </Button>
      </div>
    </div>
  )
} 