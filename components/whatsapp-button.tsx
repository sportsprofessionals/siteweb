"use client"

import { MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WhatsAppButton() {
  const openWhatsApp = () => {
    window.open("https://wa.me/573105627575", "_blank")
  }

  return (
    <Button
      onClick={openWhatsApp}
      className="rounded-full w-10 h-10 p-0 bg-[#41A650] hover:bg-[#41A650]/90 shadow-lg"
      aria-label="Contactar por WhatsApp"
    >
      <MessageSquare className="h-5 w-5 text-white" />
    </Button>
  )
}
