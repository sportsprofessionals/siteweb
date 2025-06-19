"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send, MessageCircle, Clock, Shield, CheckCircle, Sparkles, Target, Users, ArrowRight, Star, Globe, Calendar } from "lucide-react"
import { useAnimation } from "@/components/animation-provider"

// Componente de partículas flotantes
const FloatingParticles = ({ count = 30 }: { count?: number }) => {
  const particles = Array.from({ length: count }, (_, i) => {
    const delay = Math.random() * 20
    const duration = 25 + Math.random() * 35
    const size = 1 + Math.random() * 3
    const left = Math.random() * 100
    const opacity = 0.1 + Math.random() * 0.3
    
    return (
      <div
        key={i}
        className="absolute rounded-full bg-white pointer-events-none"
        style={{
          left: `${left}%`,
          width: `${size}px`,
          height: `${size}px`,
          opacity,
          animation: `float ${duration}s linear infinite`,
          animationDelay: `${delay}s`,
        }}
      />
    )
  })
  
  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(100vh) rotate(0deg);
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}

// Componente de elementos geométricos decorativos
const GeometricShapes = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Círculos grandes con gradientes */}
    <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
    <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-75" />
    <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/8 to-transparent rounded-full blur-2xl animate-pulse delay-150" />
    
    {/* Formas geométricas flotantes */}
    <div className="absolute top-32 left-1/4 w-6 h-6 bg-cyan-400/20 transform rotate-45 animate-bounce" />
    <div className="absolute bottom-40 right-1/3 w-8 h-3 bg-blue-400/25 animate-pulse" />
    <div className="absolute top-2/3 right-20 w-3 h-12 bg-purple-400/20 animate-bounce delay-100" />
    <div className="absolute bottom-1/3 left-32 w-10 h-10 bg-cyan-400/15 rounded-full animate-ping" />
    
    {/* Líneas decorativas */}
    <div className="absolute top-1/4 left-0 w-48 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-pulse" />
    <div className="absolute top-2/3 right-0 w-32 h-px bg-gradient-to-l from-transparent via-blue-400/30 to-transparent animate-pulse delay-200" />
    <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-purple-400/25 to-transparent animate-pulse delay-300" />
  </div>
)

export default function Contacto() {
  const { FadeIn, SlideIn, ScaleIn } = useAnimation()
  
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulación de envío de formulario
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitSuccess(true)
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      asunto: "",
      mensaje: "",
    })

    // Resetear mensaje de éxito después de 5 segundos
    setTimeout(() => {
      setSubmitSuccess(false)
    }, 5000)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section Ultra-Premium */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        {/* Partículas flotantes */}
        <FloatingParticles count={35} />
        
        {/* Elementos geométricos */}
        <GeometricShapes />
        
        <div className="container relative z-10 py-16 md:py-24 lg:py-32 px-4 md:px-6">
          <FadeIn className="text-center max-w-5xl mx-auto">
            {/* Badge premium */}
            <div className="inline-flex items-center gap-2 md:gap-3 rounded-2xl md:rounded-3xl bg-white/10 backdrop-blur-xl px-4 md:px-8 py-3 md:py-4 mb-6 md:mb-8 border border-white/20 shadow-2xl">
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg">
                <MessageCircle className="w-3 h-3 md:w-4 md:h-4 text-white" />
              </div>
              <span className="text-sm md:text-lg font-bold text-white">
                Contacto Directo
              </span>
            </div>
            
            {/* Título cinematográfico */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-none tracking-tight mb-6 md:mb-8">
              <span className="block bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent drop-shadow-2xl">
                Hablemos de tu
              </span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-xl">
                Proyecto Deportivo
              </span>
            </h1>
            
            {/* Descripción premium */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light mb-8 md:mb-12 px-4">
              Estamos aquí para <span className="font-bold text-cyan-400">transformar tus ideas</span> en 
              <span className="font-bold text-blue-400"> resultados extraordinarios</span>. Contáctanos hoy mismo.
            </p>
            
            {/* Garantías de servicio */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12 md:mt-16">
              <ScaleIn delay={0.2}>
                <div className="text-center group">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white group-hover:scale-110 transition-transform duration-300">24h</div>
                  <div className="text-xs sm:text-sm text-gray-300 uppercase tracking-wider">Respuesta</div>
                </div>
              </ScaleIn>
              <ScaleIn delay={0.4}>
                <div className="text-center group">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-cyan-400 group-hover:scale-110 transition-transform duration-300">100%</div>
                  <div className="text-xs sm:text-sm text-gray-300 uppercase tracking-wider">Personalizado</div>
                </div>
              </ScaleIn>
              <ScaleIn delay={0.6}>
                <div className="text-center group">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-blue-400 group-hover:scale-110 transition-transform duration-300">$0</div>
                  <div className="text-xs sm:text-sm text-gray-300 uppercase tracking-wider">Consulta</div>
                </div>
              </ScaleIn>
              <ScaleIn delay={0.8}>
                <div className="text-center group">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-purple-400 group-hover:scale-110 transition-transform duration-300">∞</div>
                  <div className="text-xs sm:text-sm text-gray-300 uppercase tracking-wider">Seguimiento</div>
                </div>
              </ScaleIn>
          </div>
          </FadeIn>
        </div>
        
        {/* Línea decorativa inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />
      </section>

      {/* Sección Principal de Contacto */}
      <section className="relative bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-cyan-400/5 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-blue-400/5 to-transparent rounded-full blur-3xl animate-pulse delay-75" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/3 to-transparent rounded-full blur-3xl animate-pulse delay-150" />
        </div>
        
        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid gap-12 md:gap-16 lg:grid-cols-2">
            
            {/* Formulario Premium */}
            <SlideIn direction="left" delay={0.2}>
              <div className="group relative">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                
                {/* Container principal glassmorphism */}
                <div className="relative bg-white/80 backdrop-blur-2xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/60 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                  
                  {/* Header del formulario */}
                  <div className="text-center mb-6 md:mb-8">
                    <div className="inline-flex items-center gap-2 md:gap-3 rounded-xl md:rounded-2xl bg-cyan-100/60 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 border border-cyan-200/40 shadow-lg mb-4 md:mb-6">
                      <Send className="w-4 h-4 md:w-5 md:h-5 text-cyan-600" />
                      <span className="text-sm md:text-base font-bold text-cyan-600">Formulario de Contacto</span>
                    </div>
                    
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight mb-3 md:mb-4">
                      <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Envíanos tu
                      </span>
                      <br />
                      <span className="text-gray-900">
                        Mensaje
                      </span>
                    </h2>
                    
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed font-medium px-2">
                      Comparte tu <span className="font-bold text-cyan-600">visión deportiva</span> con nosotros y 
                      descubre cómo podemos <span className="font-bold text-blue-600">transformarla en realidad</span>.
                    </p>
                  </div>

                  {/* Mensaje de éxito premium */}
              {submitSuccess && (
                    <ScaleIn>
                      <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-200 text-emerald-700 p-6 rounded-2xl mb-8 shadow-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                            <CheckCircle className="w-5 h-5 text-emerald-600" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg">¡Mensaje Enviado!</h3>
                            <p className="text-emerald-600">Te responderemos en las próximas 24 horas.</p>
                          </div>
                        </div>
                </div>
                    </ScaleIn>
              )}

                  {/* Formulario rediseñado */}
              <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Nombre y Email */}
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-3">
                        <Label htmlFor="nombre" className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                          Nombre Completo
                        </Label>
                        <div className="relative">
                    <Input
                      id="nombre"
                      name="nombre"
                      placeholder="Tu nombre"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                            className="bg-white/70 backdrop-blur-sm border-2 border-cyan-200/40 rounded-2xl px-6 py-4 text-gray-900 placeholder-gray-500 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20 transition-all duration-300 shadow-lg hover:shadow-xl"
                    />
                  </div>
                      </div>
                      
                      <div className="space-y-3">
                        <Label htmlFor="email" className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                          Correo Electrónico
                        </Label>
                        <div className="relative">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                            className="bg-white/70 backdrop-blur-sm border-2 border-blue-200/40 rounded-2xl px-6 py-4 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 shadow-lg hover:shadow-xl"
                    />
                        </div>
                  </div>
                </div>

                    {/* Teléfono */}
                    <div className="space-y-3">
                      <Label htmlFor="telefono" className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                        Teléfono
                      </Label>
                      <div className="relative">
                  <Input
                    id="telefono"
                    name="telefono"
                    placeholder="Tu número de teléfono"
                    value={formData.telefono}
                    onChange={handleChange}
                          className="bg-white/70 backdrop-blur-sm border-2 border-purple-200/40 rounded-2xl px-6 py-4 text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all duration-300 shadow-lg hover:shadow-xl"
                  />
                      </div>
                </div>

                    {/* Asunto */}
                    <div className="space-y-3">
                      <Label htmlFor="asunto" className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                        Asunto
                      </Label>
                      <div className="relative">
                  <Input
                    id="asunto"
                    name="asunto"
                    placeholder="Asunto de tu mensaje"
                    required
                    value={formData.asunto}
                    onChange={handleChange}
                          className="bg-white/70 backdrop-blur-sm border-2 border-cyan-200/40 rounded-2xl px-6 py-4 text-gray-900 placeholder-gray-500 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20 transition-all duration-300 shadow-lg hover:shadow-xl"
                  />
                      </div>
                </div>

                    {/* Mensaje */}
                    <div className="space-y-3">
                      <Label htmlFor="mensaje" className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                        Mensaje
                      </Label>
                      <div className="relative">
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                          placeholder="Cuéntanos sobre tu proyecto deportivo, necesidades o cualquier consulta que tengas..."
                          rows={6}
                    required
                    value={formData.mensaje}
                    onChange={handleChange}
                          className="bg-white/70 backdrop-blur-sm border-2 border-blue-200/40 rounded-2xl px-6 py-4 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 shadow-lg hover:shadow-xl resize-none"
                        />
                      </div>
                    </div>

                    {/* Botón de envío premium */}
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white shadow-2xl hover:shadow-3xl rounded-2xl px-8 py-6 text-lg font-bold transition-all duration-300 transform hover:scale-105 border-0 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <div className="flex items-center justify-center gap-3">
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Enviando Mensaje...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            <span>Enviar Mensaje</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                          </>
                        )}
                      </div>
                    </Button>

                    {/* Badge de seguridad */}
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600 pt-4">
                      <Shield className="w-4 h-4 text-cyan-600" />
                      <span>Tus datos están protegidos y nunca serán compartidos</span>
                    </div>
                  </form>
                </div>
              </div>
            </SlideIn>

            {/* Información de Contacto Premium */}
            <SlideIn direction="right" delay={0.4}>
              <div className="space-y-8">
                
                {/* Header */}
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 md:gap-3 rounded-xl md:rounded-2xl bg-blue-100/60 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 border border-blue-200/40 shadow-lg mb-4 md:mb-6">
                    <Target className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                    <span className="text-sm md:text-base font-bold text-blue-600">Información de Contacto</span>
            </div>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight mb-3 md:mb-4">
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                      Múltiples Formas
                    </span>
                    <br />
                    <span className="text-gray-900">
                      de Conectar
                    </span>
                  </h2>
                  
                  <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed font-medium mb-6 md:mb-8 px-2 lg:px-0">
                    Elige la <span className="font-bold text-blue-600">opción más cómoda</span> para ti y 
                    comencemos a <span className="font-bold text-purple-600">crear algo extraordinario</span> juntos.
                  </p>
                </div>

                {/* Tarjetas de contacto premium */}
              <div className="space-y-6">
                  {[
                    {
                      icon: MapPin,
                      title: "Dirección",
                      content: "Calle 152B #72-91, Bogotá D.C",
                      subtitle: "Colombia",
                      color: "cyan",
                      action: () => window.open("https://maps.google.com/?q=Calle+152B+72-91+Bogota+DC", "_blank")
                    },
                    {
                      icon: Phone,
                      title: "Teléfono",
                      content: "+57 310 5627575",
                      subtitle: "Disponible 24/7",
                      color: "blue",
                      action: () => window.open("tel:+573105627575", "_blank")
                    },
                    {
                      icon: Mail,
                      title: "Correo Electrónico",
                      content: "infosportsprofessionals@gmail.com",
                      subtitle: "Respuesta en 24h",
                      color: "purple",
                      action: () => window.open("mailto:infosportsprofessionals@gmail.com", "_blank")
                    }
                  ].map((contact, index) => {
                    const Icon = contact.icon
                    const colorClasses = {
                      cyan: {
                        bg: "bg-cyan-100",
                        text: "text-cyan-600",
                        border: "border-cyan-200",
                        gradient: "from-cyan-500 to-cyan-600",
                        glow: "group-hover:shadow-cyan-500/25"
                      },
                      blue: {
                        bg: "bg-blue-100",
                        text: "text-blue-600", 
                        border: "border-blue-200",
                        gradient: "from-blue-500 to-blue-600",
                        glow: "group-hover:shadow-blue-500/25"
                      },
                      purple: {
                        bg: "bg-purple-100",
                        text: "text-purple-600",
                        border: "border-purple-200", 
                        gradient: "from-purple-500 to-purple-600",
                        glow: "group-hover:shadow-purple-500/25"
                      }
                    } as const
                    
                    const colors = colorClasses[contact.color as keyof typeof colorClasses]
                    
                    return (
                      <div 
                        key={contact.title}
                        className={`group relative cursor-pointer`}
                        onClick={contact.action}
                      >
                        {/* Glow effect */}
                        <div className={`absolute -inset-2 bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-lg transition-all duration-500`} />
                        
                        {/* Tarjeta principal */}
                        <div className={`relative bg-white/80 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 border ${colors.border} border-opacity-40 shadow-xl ${colors.glow} group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105`}>
                <div className="flex items-start gap-3 md:gap-4">
                            <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl ${colors.bg} ${colors.border} border flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                              <Icon className={`w-6 h-6 md:w-8 md:h-8 ${colors.text}`} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className={`font-bold text-base md:text-lg ${colors.text} mb-1`}>
                                {contact.title}
                              </h3>
                              <p className="text-gray-900 font-semibold text-sm md:text-base lg:text-lg leading-tight mb-1 break-words">
                                {contact.content}
                              </p>
                              <p className="text-gray-600 text-xs md:text-sm">
                                {contact.subtitle}
                              </p>
                            </div>
                            <div className={`w-6 h-6 md:w-8 md:h-8 rounded-lg ${colors.bg} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 flex-shrink-0`}>
                              <ArrowRight className={`w-3 h-3 md:w-4 md:h-4 ${colors.text}`} />
                            </div>
                          </div>
                  </div>
                  </div>
                    )
                  })}
                </div>

                {/* Horario de atención */}
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-lg opacity-50" />
                  <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-blue-200/40 shadow-xl">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center">
                        <Clock className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="font-bold text-lg text-blue-600">Horario de Atención</h3>
                    </div>
                    <div className="space-y-2 text-gray-700">
                      <div className="flex justify-between items-center p-2 rounded-lg bg-blue-50/50">
                        <span className="font-medium">Lunes a Viernes:</span>
                        <span className="font-bold text-blue-600">9:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded-lg bg-blue-50/50">
                        <span className="font-medium">Sábados:</span>
                        <span className="font-bold text-blue-600">9:00 - 13:00</span>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded-lg bg-gray-50/50">
                        <span className="font-medium">Domingos:</span>
                        <span className="font-bold text-gray-500">Cerrado</span>
                      </div>
                  </div>
                  </div>
                </div>

                {/* WhatsApp premium */}
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="relative bg-gradient-to-r from-emerald-50 to-green-50 backdrop-blur-xl rounded-2xl p-6 border-2 border-emerald-200/60 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <div>
                        <h3 className="font-bold text-xl text-emerald-700">¿Necesitas Respuesta Inmediata?</h3>
                        <p className="text-emerald-600 font-medium">Contáctanos por WhatsApp</p>
                      </div>
                    </div>
                    <p className="text-emerald-700 mb-6 leading-relaxed">
                      Para consultas urgentes o si prefieres una <span className="font-bold">comunicación más directa</span>, 
                      nuestro equipo está disponible en WhatsApp para ofrecerte atención personalizada.
                    </p>
                    <Button
                      onClick={() => window.open("https://wa.me/573105627575", "_blank")}
                      className="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white shadow-xl hover:shadow-2xl rounded-2xl py-4 font-bold transition-all duration-300 transform hover:scale-105 border-0"
                    >
                      <div className="flex items-center justify-center gap-3">
                        <MessageCircle className="w-5 h-5" />
                        <span>Abrir WhatsApp</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Sección de Garantías */}
      <section className="relative bg-gradient-to-br from-slate-800 via-indigo-900 to-purple-900 py-24 md:py-32 overflow-hidden">
        {/* Partículas flotantes */}
        <FloatingParticles count={20} />
        
        {/* Elementos decorativos */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-75" />
                </div>
        
        <div className="container relative z-10">
          <FadeIn className="text-center max-w-4xl mx-auto">
            {/* Badge de garantías */}
            <div className="inline-flex items-center gap-3 rounded-3xl bg-white/10 backdrop-blur-xl px-8 py-4 mb-8 border border-white/20 shadow-2xl">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center shadow-lg">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white">
                Nuestras Garantías
              </span>
            </div>
            
            {/* Título de garantías */}
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8 text-white">
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Compromiso Total
              </span>
              <br />
              <span className="text-white">
                Contigo
              </span>
            </h2>
            
            {/* Descripción de garantías */}
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light mb-12">
              Tu <span className="font-bold text-emerald-400">confianza</span> es nuestra prioridad. 
              Estos son nuestros <span className="font-bold text-cyan-400">compromisos contigo</span>.
            </p>
            
            {/* Grid de garantías */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: Clock,
                  title: "Respuesta en 24h",
                  description: "Garantizamos respuesta a tu consulta en máximo 24 horas",
                  color: "emerald"
                },
                {
                  icon: Shield,
                  title: "Datos Protegidos",
                  description: "Tu información está completamente segura y protegida",
                  color: "cyan"
                },
                {
                  icon: Star,
                  title: "Atención Personalizada",
                  description: "Cada proyecto recibe nuestra atención individual y especializada",
                  color: "blue"
                }
              ].map((guarantee, index) => {
                const Icon = guarantee.icon
                const colorClasses = {
                  emerald: "from-emerald-500 to-green-600 text-emerald-400",
                  cyan: "from-cyan-500 to-blue-600 text-cyan-400", 
                  blue: "from-blue-500 to-indigo-600 text-blue-400"
                } as const
                
                return (
                  <ScaleIn key={guarantee.title} delay={index * 0.2}>
                    <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorClasses[guarantee.color as keyof typeof colorClasses].split(' ')[0]} ${colorClasses[guarantee.color as keyof typeof colorClasses].split(' ')[1]} flex items-center justify-center shadow-lg mb-4 mx-auto`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className={`text-lg font-bold ${colorClasses[guarantee.color as keyof typeof colorClasses].split(' ')[2]} mb-2`}>
                        {guarantee.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {guarantee.description}
                      </p>
                    </div>
                  </ScaleIn>
                )
              })}
            </div>
            
            {/* Estadísticas finales */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-black text-emerald-400">24h</div>
                <div className="text-xs md:text-sm text-gray-300 uppercase tracking-wider">Respuesta</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-black text-cyan-400">100%</div>
                <div className="text-xs md:text-sm text-gray-300 uppercase tracking-wider">Personalizado</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-black text-blue-400">$0</div>
                <div className="text-xs md:text-sm text-gray-300 uppercase tracking-wider">Consulta</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-black text-purple-400">100%</div>
                <div className="text-xs md:text-sm text-gray-300 uppercase tracking-wider">Protección</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
