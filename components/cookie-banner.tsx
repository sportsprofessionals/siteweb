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

export function PoliticaDeCookies() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
          <h1 className="text-3xl font-bold text-[#5E308C] mb-6 text-center">
            Política de Cookies
          </h1>
          <p className="text-gray-700 mb-4">
            En <strong>SPORTSPROFESSIONALS</strong>, utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Esta política explica qué son las cookies, cómo las usamos y cómo puedes gestionarlas.
          </p>

          <h2 className="text-2xl font-semibold text-[#5E308C] mt-8 mb-4">
            ¿Qué son las cookies?
          </h2>
          <p className="text-gray-700 mb-4">
            Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Estas permiten que el sitio recuerde tus preferencias y acciones (como inicio de sesión, idioma, etc.) durante un período de tiempo.
          </p>

          <h2 className="text-2xl font-semibold text-[#5E308C] mt-8 mb-4">
            ¿Cómo usamos las cookies?
          </h2>
          <p className="text-gray-700 mb-4">
            Utilizamos cookies para los siguientes propósitos:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li><strong>Cookies esenciales:</strong> Necesarias para el funcionamiento básico del sitio web.</li>
            <li><strong>Cookies de rendimiento:</strong> Nos ayudan a entender cómo los usuarios interactúan con nuestro sitio para mejorar su experiencia.</li>
            <li><strong>Cookies de funcionalidad:</strong> Permiten recordar tus preferencias, como el idioma o la región.</li>
            <li><strong>Cookies de marketing:</strong> Utilizadas para mostrar anuncios relevantes y personalizados.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#5E308C] mt-8 mb-4">
            ¿Cómo puedes gestionar las cookies?
          </h2>
          <p className="text-gray-700 mb-4">
            Puedes gestionar o deshabilitar las cookies directamente desde la configuración de tu navegador. Ten en cuenta que deshabilitar ciertas cookies puede afectar la funcionalidad del sitio web.
          </p>
          <p className="text-gray-700 mb-4">
            Aquí tienes enlaces a las instrucciones para gestionar cookies en los navegadores más populares:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#5E308C] underline">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-[#5E308C] underline">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#5E308C] underline">Safari</a></li>
            <li><a href="https://support.microsoft.com/es-es/help/4027947/microsoft-edge-delete-cookies" target="_blank" rel="noopener noreferrer" className="text-[#5E308C] underline">Microsoft Edge</a></li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#5E308C] mt-8 mb-4">
            Cambios en nuestra política de cookies
          </h2>
          <p className="text-gray-700 mb-4">
            Nos reservamos el derecho de actualizar esta política de cookies en cualquier momento. Te recomendamos revisar esta página periódicamente para estar informado sobre cómo usamos las cookies.
          </p>

          <h2 className="text-2xl font-semibold text-[#5E308C] mt-8 mb-4">
            Contáctanos
          </h2>
          <p className="text-gray-700 mb-4">
            Si tienes alguna pregunta sobre nuestra política de cookies, puedes ponerte en contacto con nosotros a través de nuestro <a href="/contacto" className="text-[#5E308C] underline">formulario de contacto</a>.
          </p>
        </div>
      </div>
    </div>
  )
}