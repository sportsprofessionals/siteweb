"use client"

import { useState, useEffect } from "react"

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Verificar si ya se ha guardado una preferencia en localStorage
    const cookiesAccepted = localStorage.getItem("cookiesAccepted")
    if (!cookiesAccepted) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true")
    setIsVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem("cookiesAccepted", "false")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#5E308C] text-white p-4 z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm md:text-base">
          Usamos cookies para mejorar tu experiencia. Al continuar navegando, aceptas nuestra{" "}
          <a href="/politica-de-cookies" className="underline">
            política de cookies
          </a>.
        </p>
        <div className="flex gap-2">
          <button
            onClick={handleAccept}
            className="bg-white text-[#5E308C] px-4 py-2 rounded hover:bg-gray-200"
          >
            Aceptar
          </button>
          <button
            onClick={handleReject}
            className="bg-transparent border border-white px-4 py-2 rounded hover:bg-white/20"
          >
            Rechazar
          </button>
        </div>
      </div>
    </div>
  )
}