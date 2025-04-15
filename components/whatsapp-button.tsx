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
      className="fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 p-0 bg-[#41A650] hover:bg-[#41A650]/90 shadow-lg"
      aria-label="Contactar por WhatsApp"
    >
      <MessageSquare className="h-6 w-6" />
    </Button>
  )
}
