"use client"

import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { 
  Cookie, 
  Settings, 
  Shield, 
  BarChart3, 
  Target, 
  X, 
  Check,
  ChevronDown,
  ChevronUp,
  Info
} from "lucide-react"
import Link from "next/link"

// Tipos de cookies según Google
interface CookiePreferences {
  necessary: boolean      // Siempre true (requeridas)
  analytics: boolean      // Google Analytics
  marketing: boolean      // Marketing/Publicidad
  functional: boolean     // Funcionalidad mejorada
}

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  functional: false
}

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Verificar si ya se ha guardado una preferencia en localStorage
    const savedPreferences = localStorage.getItem("cookiePreferences")
    const consentGiven = localStorage.getItem("cookieConsentDate")
    
    if (!savedPreferences || !consentGiven) {
      // Si no hay preferencias guardadas, mostrar banner
      setIsVisible(true)
    } else {
      // Si hay preferencias, verificar si han pasado más de 6 meses (requerimiento de Google)
      const consentDate = new Date(consentGiven)
      const sixMonthsAgo = new Date()
      sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6)
      
      if (consentDate < sixMonthsAgo) {
        // Si el consentimiento es muy antiguo, pedir de nuevo
        setIsVisible(true)
      } else {
        // Cargar preferencias guardadas
        try {
          const parsed = JSON.parse(savedPreferences)
          setPreferences(parsed)
        } catch (error) {
          setIsVisible(true)
        }
      }
    }
  }, [])

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem("cookiePreferences", JSON.stringify(prefs))
    localStorage.setItem("cookieConsentDate", new Date().toISOString())
    
    // Establecer cookies técnicas según las preferencias
    if (prefs.analytics) {
      // Habilitar Google Analytics
      console.log("Analytics cookies enabled")
    }
    if (prefs.marketing) {
      // Habilitar cookies de marketing
      console.log("Marketing cookies enabled")
    }
    if (prefs.functional) {
      // Habilitar cookies funcionales
      console.log("Functional cookies enabled")
    }
  }

  const handleAcceptAll = async () => {
    setIsLoading(true)
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    }
    
    await new Promise(resolve => setTimeout(resolve, 300)) // Simular loading
    
    savePreferences(allAccepted)
    setPreferences(allAccepted)
    setIsVisible(false)
    setIsLoading(false)
  }

  const handleAcceptSelected = async () => {
    setIsLoading(true)
    
    await new Promise(resolve => setTimeout(resolve, 300))
    
    savePreferences(preferences)
    setIsVisible(false)
    setIsLoading(false)
  }

     const handleRejectAll = async () => {
     setIsLoading(true)
     const onlyNecessary: CookiePreferences = {
       necessary: true,
       analytics: false,
       marketing: false,
       functional: false
     }
     
     await new Promise(resolve => setTimeout(resolve, 300))
     
     savePreferences(onlyNecessary)
     setPreferences(onlyNecessary)
     setIsVisible(false)
     setIsLoading(false)
   }

   const togglePreference = (key: keyof CookiePreferences) => {
     if (key === 'necessary') return // No se puede desactivar
     
     setPreferences(prev => ({
       ...prev,
       [key]: !prev[key]
     }))
   }

   if (!isVisible) return null

   const cookieTypes = [
     {
       key: 'necessary' as keyof CookiePreferences,
       icon: Shield,
       title: 'Cookies Necesarias',
       description: 'Esenciales para el funcionamiento básico del sitio web. No se pueden desactivar.',
       required: true,
       color: 'text-emerald-600 bg-emerald-100'
     },
     {
       key: 'functional' as keyof CookiePreferences,
       icon: Settings,
       title: 'Cookies Funcionales',
       description: 'Mejoran la funcionalidad y personalización del sitio (idioma, preferencias).',
       required: false,
       color: 'text-blue-600 bg-blue-100'
     },
     {
       key: 'analytics' as keyof CookiePreferences,
       icon: BarChart3,
       title: 'Cookies Analíticas',
       description: 'Nos ayudan a entender cómo interactúas con el sitio para mejorarlo.',
       required: false,
       color: 'text-purple-600 bg-purple-100'
     },
     {
       key: 'marketing' as keyof CookiePreferences,
       icon: Target,
       title: 'Cookies de Marketing',
       description: 'Utilizadas para mostrarte contenido y anuncios más relevantes.',
       required: false,
       color: 'text-orange-600 bg-orange-100'
     }
   ]

   return (
     <>
       {/* Overlay */}
       <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
       
       {/* Cookie Banner */}
       <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-6 lg:left-8 lg:right-8 z-50 max-w-4xl mx-auto">
         <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
           
           {/* Header */}
           <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-6 text-white">
             <div className="flex items-start gap-4">
               <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                 <Cookie className="w-6 h-6 text-white" />
               </div>
               <div className="flex-1">
                 <h3 className="text-xl md:text-2xl font-black mb-2">
                   Configuración de Cookies
                 </h3>
                 <p className="text-cyan-100 text-sm md:text-base leading-relaxed">
                   Utilizamos cookies para mejorar tu experiencia. Puedes aceptar todas o personalizar tus preferencias.
                 </p>
               </div>
             </div>
           </div>

           {/* Content */}
           <div className="p-6">
             {/* Basic Info */}
             <div className="mb-6">
               <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-2xl border border-blue-200/50">
                 <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                 <div className="text-sm text-blue-800">
                   <span className="font-semibold">Información importante:</span> Las cookies necesarias siempre están activas. 
                   Puedes revisar nuestra{" "}
                   <Link href="/politica-de-cookies" className="font-bold underline hover:text-blue-600">
                     política de cookies completa
                   </Link>{" "}
                   para más detalles.
                 </div>
               </div>
             </div>

             {/* Advanced Settings */}
             <div className="mb-6">
               <button
                 onClick={() => setShowAdvanced(!showAdvanced)}
                 className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
               >
                 <Settings className="w-4 h-4" />
                 <span>Configuración Avanzada</span>
                 {showAdvanced ? (
                   <ChevronUp className="w-4 h-4" />
                 ) : (
                   <ChevronDown className="w-4 h-4" />
                 )}
               </button>

               {showAdvanced && (
                 <div className="mt-4 space-y-3 animate-in slide-in-from-top duration-300">
                   {cookieTypes.map((cookieType) => {
                     const Icon = cookieType.icon
                     const isEnabled = preferences[cookieType.key]
                     
                     return (
                       <div
                         key={cookieType.key}
                         className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-200/50 hover:border-gray-300/50 transition-all duration-200"
                       >
                         <div className={`w-10 h-10 rounded-xl ${cookieType.color} flex items-center justify-center flex-shrink-0`}>
                           <Icon className="w-5 h-5" />
                         </div>
                         
                         <div className="flex-1">
                           <div className="flex items-center justify-between mb-1">
                             <h4 className="font-bold text-gray-900 text-sm">
                               {cookieType.title}
                             </h4>
                             {cookieType.required ? (
                               <span className="px-2 py-1 text-xs font-semibold bg-emerald-100 text-emerald-700 rounded-lg">
                                 Requerida
                               </span>
                             ) : (
                               <button
                                 onClick={() => togglePreference(cookieType.key)}
                                 className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                                   isEnabled ? 'bg-blue-600' : 'bg-gray-300'
                                 }`}
                               >
                                 <span
                                   className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                                     isEnabled ? 'translate-x-6' : 'translate-x-1'
                                   }`}
                                 />
                               </button>
                             )}
                           </div>
                           <p className="text-xs text-gray-600 leading-relaxed">
                             {cookieType.description}
                           </p>
                         </div>
                       </div>
                     )
                   })}
                 </div>
               )}
             </div>

             {/* Action Buttons */}
             <div className="flex flex-col sm:flex-row gap-3">
               <Button
                 onClick={handleAcceptAll}
                 disabled={isLoading}
                 className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-2xl py-3 font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
               >
                 {isLoading ? (
                   <div className="flex items-center gap-2">
                     <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                     <span>Guardando...</span>
                   </div>
                 ) : (
                   <div className="flex items-center gap-2">
                     <Check className="w-4 h-4" />
                     <span>Aceptar Todas</span>
                   </div>
                 )}
               </Button>

               <Button
                 onClick={handleAcceptSelected}
                 disabled={isLoading}
                 variant="outline"
                 className="flex-1 border-2 border-blue-300 text-blue-600 hover:bg-blue-50 rounded-2xl py-3 font-bold transition-all duration-300"
               >
                 <div className="flex items-center gap-2">
                   <Settings className="w-4 h-4" />
                   <span>Guardar Selección</span>
                 </div>
               </Button>

               <Button
                 onClick={handleRejectAll}
                 disabled={isLoading}
                 variant="ghost"
                 className="flex-1 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-2xl py-3 font-bold transition-all duration-300"
               >
                 <div className="flex items-center gap-2">
                   <X className="w-4 h-4" />
                   <span>Solo Necesarias</span>
                 </div>
               </Button>
             </div>

             {/* Footer */}
             <div className="mt-4 text-center">
               <p className="text-xs text-gray-500">
                 Puedes cambiar tus preferencias en cualquier momento en{" "}
                 <Link href="/politica-de-cookies" className="font-semibold underline hover:text-blue-600">
                   nuestra política de cookies
                 </Link>
               </p>
             </div>
           </div>
         </div>
       </div>
     </>
   )
}

export function PoliticaDeCookies() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
          <h1 className="text-3xl font-bold text-[#0B8CBF] mb-6 text-center">
            Política de Cookies
          </h1>
          <p className="text-gray-700 mb-4">
            En <strong>SPORTSPROFESSIONALS</strong>, utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Esta política explica qué son las cookies, cómo las usamos y cómo puedes gestionarlas.
          </p>

          <h2 className="text-2xl font-semibold text-[#0B8CBF] mt-8 mb-4">
            ¿Qué son las cookies?
          </h2>
          <p className="text-gray-700 mb-4">
            Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Estas permiten que el sitio recuerde tus preferencias y acciones (como inicio de sesión, idioma, etc.) durante un período de tiempo.
          </p>

          <h2 className="text-2xl font-semibold text-[#0B8CBF] mt-8 mb-4">
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

          <h2 className="text-2xl font-semibold text-[#0B8CBF] mt-8 mb-4">
            ¿Cómo puedes gestionar las cookies?
          </h2>
          <p className="text-gray-700 mb-4">
            Puedes gestionar o deshabilitar las cookies directamente desde la configuración de tu navegador. Ten en cuenta que deshabilitar ciertas cookies puede afectar la funcionalidad del sitio web.
          </p>
          <p className="text-gray-700 mb-4">
            Aquí tienes enlaces a las instrucciones para gestionar cookies en los navegadores más populares:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#0B8CBF] underline">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-[#0B8CBF] underline">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#0B8CBF] underline">Safari</a></li>
            <li><a href="https://support.microsoft.com/es-es/help/4027947/microsoft-edge-delete-cookies" target="_blank" rel="noopener noreferrer" className="text-[#0B8CBF] underline">Microsoft Edge</a></li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#0B8CBF] mt-8 mb-4">
            Cambios en nuestra política de cookies
          </h2>
          <p className="text-gray-700 mb-4">
            Nos reservamos el derecho de actualizar esta política de cookies en cualquier momento. Te recomendamos revisar esta página periódicamente para estar informado sobre cómo usamos las cookies.
          </p>

          <h2 className="text-2xl font-semibold text-[#0B8CBF] mt-8 mb-4">
            Contáctanos
          </h2>
          <p className="text-gray-700 mb-4">
            Si tienes alguna pregunta sobre nuestra política de cookies, puedes ponerte en contacto con nosotros a través de nuestro <a href="/contacto" className="text-[#0B8CBF] underline">formulario de contacto</a>.
          </p>
        </div>
      </div>
    </div>
  )
}