"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Globe, Waves, Users, ArrowLeft, Trophy, Clock, Mail, Phone, CheckCircle, Sparkles, ArrowRight, ExternalLink, Building, Target, Award, Star } from "lucide-react"
import { useAnimation } from "@/components/animation-provider"

// Componente de partículas flotantes (burbujas)
const FloatingBubbles = ({ count = 25 }: { count?: number }) => {
  const bubbles = Array.from({ length: count }, (_, i) => {
    const delay = Math.random() * 15
    const duration = 20 + Math.random() * 25
    const size = 3 + Math.random() * 8
    const left = Math.random() * 100
    const opacity = 0.1 + Math.random() * 0.4
    
    return (
      <div
        key={i}
        className="absolute rounded-full bg-white pointer-events-none"
        style={{
          left: `${left}%`,
          width: `${size}px`,
          height: `${size}px`,
          opacity,
          animation: `bubble ${duration}s linear infinite`,
          animationDelay: `${delay}s`,
        }}
      />
    )
  })
  
  return (
    <div className="absolute inset-0 overflow-hidden">
      {bubbles}
      <style jsx>{`
        @keyframes bubble {
          0% {
            transform: translateY(100vh) scale(0);
          }
          10% {
            transform: translateY(90vh) scale(1);
          }
          90% {
            transform: translateY(10vh) scale(1);
          }
          100% {
            transform: translateY(-10vh) scale(0);
          }
        }
      `}</style>
    </div>
  )
}

// Componente de elementos decorativos acuáticos
const AquaticShapes = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Ondas acuáticas */}
    <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
    <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tl from-cyan-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-75" />
    <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-teal-500/8 to-transparent rounded-full blur-2xl animate-pulse delay-150" />
    
    {/* Elementos flotantes marinos */}
    <div className="absolute top-32 left-1/4 w-8 h-2 bg-blue-400/20 rounded-full animate-bounce" />
    <div className="absolute bottom-40 right-1/3 w-6 h-6 bg-cyan-400/25 rounded-full animate-pulse" />
    <div className="absolute top-2/3 right-20 w-4 h-8 bg-teal-400/20 rounded-full animate-bounce delay-100" />
    <div className="absolute bottom-1/3 left-32 w-12 h-3 bg-blue-400/15 rounded-full animate-ping" />
    
    {/* Líneas de corriente */}
    <div className="absolute top-1/4 left-0 w-48 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-pulse" />
    <div className="absolute top-2/3 right-0 w-32 h-px bg-gradient-to-l from-transparent via-cyan-400/30 to-transparent animate-pulse delay-200" />
    <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-teal-400/25 to-transparent animate-pulse delay-300" />
  </div>
)

export default function MedusasDetail() {
  const { FadeIn, SlideIn, ScaleIn } = useAnimation()

  const actividades = [
    {
      titulo: "Buceo Recreativo",
      descripcion: "Inmersiones guiadas para todos los niveles",
      icono: Waves,
      color: "blue"
    },
    {
      titulo: "Cursos de Certificación",
      descripcion: "Programas de certificación internacional",
      icono: Trophy,
      color: "cyan"
    },
    {
      titulo: "Actividades Grupales",
      descripcion: "Experiencias subacuáticas en grupo",
      icono: Users,
      color: "teal"
    },
    {
      titulo: "Entrenamiento Técnico",
      descripcion: "Perfeccionamiento de técnicas de buceo",
      icono: Clock,
      color: "blue"
    }
  ] as const

  const servicios = [
    "Cursos de buceo para principiantes",
    "Certificaciones internacionales",
    "Inmersiones recreativas",
    "Buceo nocturno",
    "Fotografía submarina",
    "Actividades familiares",
    "Equipos especializados",
    "Guías profesionales"
  ]

  const ventajas = [
    {
      icono: Award,
      titulo: "Instructores Certificados",
      descripcion: "Profesionales con certificación internacional y años de experiencia"
    },
    {
      icono: Building,
      titulo: "Instalaciones de Elite",
      descripcion: "Complejo Acuático Simón Bolívar con tecnología de vanguardia"
    },
    {
      icono: Target,
      titulo: "Seguridad Total",
      descripcion: "Equipos profesionales y protocolos de seguridad certificados"
    },
    {
      icono: Star,
      titulo: "Experiencias Únicas",
      descripcion: "Programas diseñados para todos los niveles de experiencia"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section Ultra-Premium con tema acuático */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 overflow-hidden">
        {/* Burbujas flotantes */}
        <FloatingBubbles count={30} />
        
        {/* Elementos decorativos acuáticos */}
        <AquaticShapes />
        
        <div className="container relative z-10 py-24 md:py-32">
          {/* Breadcrumb premium */}
          <FadeIn>
            <Link 
              href="/aliados-deportivos" 
              className="inline-flex items-center gap-3 rounded-2xl bg-white/10 backdrop-blur-xl px-6 py-3 border border-white/20 shadow-lg mb-8 text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-medium">Volver a Aliados Deportivos</span>
            </Link>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Contenido principal */}
            <div className="lg:col-span-2">
              <FadeIn>
                {/* Badge de especialidad */}
                <div className="inline-flex items-center gap-3 rounded-3xl bg-white/10 backdrop-blur-xl px-8 py-4 mb-8 border border-white/20 shadow-2xl">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center shadow-lg">
                    <Waves className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg font-bold text-white">
                    Actividades Subacuáticas
                  </span>
                </div>
                
                {/* Título cinematográfico */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight mb-6">
                  <span className="block bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent drop-shadow-2xl">
                    Club
                  </span>
                  <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent drop-shadow-xl">
                    Medusas
                  </span>
                </h1>
                
                {/* Descripción premium */}
                <p className="text-xl md:text-2xl text-gray-200 max-w-3xl leading-relaxed font-light mb-8">
                  Club especializado en <span className="font-bold text-blue-400">actividades subacuáticas</span> con 
                  <span className="font-bold text-cyan-400"> experiencias únicas</span> en el mundo submarino.
                </p>

                {/* Información de contacto rápida */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                    <div>
                      <div className="text-white font-medium">Complejo Acuático</div>
                      <div className="text-gray-300 text-sm">Simón Bolívar</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                    <Globe className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="text-white font-medium">Sitio Web</div>
                      <div className="text-gray-300 text-sm">medusas.com.co</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
            
            {/* Logo premium con glassmorphism */}
            <div className="lg:col-span-1">
              <ScaleIn delay={0.3}>
                <div className="relative group">
                  {/* Glow effect */}
                  <div className="absolute -inset-6 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  {/* Logo container */}
                  <div className="relative bg-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
                    <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-white/90 backdrop-blur-sm">
                      <Image
                        src="/medusas-logo.jpg"
                        alt="Logo Club Medusas"
                        fill
                        className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg"
                        }}
                      />
                    </div>
                    
                    {/* Badge flotante */}
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-xl">
                        Aliado Oficial
                      </div>
                    </div>
                  </div>
                </div>
              </ScaleIn>
            </div>
          </div>
        </div>
        
        {/* Línea decorativa inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500" />
      </section>

      {/* Sección de Actividades Premium */}
      <section className="relative bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 py-24 md:py-32 overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-400/5 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-cyan-400/5 to-transparent rounded-full blur-3xl animate-pulse delay-75" />
        </div>
        
        <div className="container relative z-10">
          {/* Header de sección */}
          <FadeIn className="text-center mb-20">
            <div className="inline-flex items-center gap-3 rounded-3xl bg-white/60 backdrop-blur-xl px-8 py-4 mb-8 border border-white/40 shadow-2xl">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-lg">
                <Waves className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-blue-600">
                Actividades Especializadas
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                Mundo
              </span>
              <br />
              <span className="text-gray-900">
                Submarino
              </span>
            </h2>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
              Ofrecemos <span className="font-bold text-blue-600">experiencias únicas</span> en el mundo submarino 
              con <span className="font-bold text-cyan-600">instructores certificados</span> internacionalmente.
            </p>
          </FadeIn>

          {/* Grid de actividades ultra-premium */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {actividades.map((actividad, index) => {
              const Icon = actividad.icono
              const colorClasses = {
                blue: "from-blue-500 to-blue-600 text-blue-600 bg-blue-100 border-blue-200",
                cyan: "from-cyan-500 to-cyan-600 text-cyan-600 bg-cyan-100 border-cyan-200",
                teal: "from-teal-500 to-teal-600 text-teal-600 bg-teal-100 border-teal-200"
              } as const
              
              const colors = colorClasses[actividad.color]
              
              return (
                <ScaleIn key={actividad.titulo} delay={index * 0.1}>
                  <div className="group relative h-full">
                    {/* Glow effect */}
                    <div className={`absolute -inset-2 bg-gradient-to-r ${colors.split(' ')[0]} ${colors.split(' ')[1]} opacity-0 group-hover:opacity-20 rounded-2xl blur-lg transition-all duration-500`} />
                    
                    {/* Tarjeta principal glassmorphism */}
                    <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/60 shadow-xl group-hover:shadow-2xl transition-all duration-500 h-full flex flex-col group-hover:scale-105">
                      
                      {/* Icono */}
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colors.split(' ')[0]} ${colors.split(' ')[1]} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto mb-4`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* Contenido */}
                      <div className="text-center flex-1">
                        <h3 className={`text-lg font-bold ${colors.split(' ')[2]} mb-3 leading-tight`}>
                          {actividad.titulo}
                        </h3>
                        
                        <p className="text-gray-600 leading-relaxed font-medium text-sm">
                          {actividad.descripcion}
                        </p>
                      </div>
                      
                      {/* Línea decorativa */}
                      <div className={`mt-4 h-1 bg-gradient-to-r ${colors.split(' ')[0]} ${colors.split(' ')[1]} rounded-full w-0 group-hover:w-full transition-all duration-500 mx-auto`} />
                    </div>
                  </div>
                </ScaleIn>
              )
            })}
          </div>

          {/* Sección de servicios */}
          <SlideIn direction="up" delay={0.4}>
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/60 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Nuestros <span className="text-cyan-600">Servicios</span>
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {servicios.map((servicio, index) => (
                  <div 
                    key={servicio}
                    className="flex items-center gap-3 p-3 rounded-xl bg-gray-50/50 border border-gray-100 hover:bg-white/80 transition-all duration-300"
                  >
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium text-sm">
                      {servicio}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </SlideIn>
        </div>
      </section>

      {/* Sección de Contacto e Información Premium */}
      <section className="relative bg-gradient-to-br from-slate-800 via-blue-900 to-cyan-900 py-24 md:py-32 overflow-hidden">
        {/* Burbujas flotantes */}
        <FloatingBubbles count={20} />
        
        {/* Elementos decorativos */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tl from-cyan-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-75" />
        </div>
        
        <div className="container relative z-10">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            
            {/* Información del club */}
            <SlideIn direction="left" delay={0.2}>
              <div className="space-y-8">
                {/* Header */}
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-3 rounded-2xl bg-white/10 backdrop-blur-xl px-6 py-3 border border-white/20 shadow-lg">
                    <Sparkles className="w-5 h-5 text-cyan-400" />
                    <span className="font-bold text-white">Club de Elite</span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
                    <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                      Acerca del
                    </span>
                    <br />
                    <span className="text-white">
                      Club Medusas
                    </span>
                  </h2>
                </div>
                
                {/* Descripción principal */}
                <p className="text-xl text-gray-200 leading-relaxed font-medium">
                  El Club Medusas es una <span className="font-bold text-blue-400">organización especializada</span> en 
                  actividades subacuáticas que ofrece experiencias únicas en el mundo submarino, desarrollando todas 
                  nuestras actividades en el prestigioso <span className="font-bold text-cyan-400">Complejo Acuático Simón Bolívar</span>.
                </p>
                
                {/* Información de contacto premium */}
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-lg">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-bold mb-2">Ubicación de Actividades</h4>
                        <p className="text-gray-300">Complejo Acuático Simón Bolívar</p>
                        <p className="text-gray-400 text-sm mt-1">
                          Modernas instalaciones acuáticas donde desarrollamos nuestras actividades
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center shadow-lg">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-bold mb-2">Sitio Web Oficial</h4>
                        <a 
                          href="http://www.medusas.com.co" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                        >
                          www.medusas.com.co
                        </a>
                        <p className="text-gray-400 text-sm mt-1">
                          Visita nuestro sitio web para más información
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Call to action */}
                <div className="pt-6">
                  <Button 
                    asChild 
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-2xl hover:shadow-3xl rounded-2xl px-8 py-4 font-bold transition-all duration-300 transform hover:scale-105 border-0"
                  >
                    <a href="http://www.medusas.com.co" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                      <Globe className="w-5 h-5" />
                      <span>Visitar Sitio Web</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </Button>
                </div>
              </div>
            </SlideIn>

            {/* Ventajas del club */}
            <SlideIn direction="right" delay={0.4}>
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    ¿Por qué <span className="text-cyan-400">Elegirnos?</span>
                  </h3>
                  <p className="text-gray-300">
                    Características que nos distinguen como club líder
                  </p>
                </div>

                {ventajas.map((ventaja, index) => {
                  const Icon = ventaja.icono
                  return (
                    <div key={ventaja.titulo} className="group relative">
                      {/* Glow effect */}
                      <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      
                      {/* Tarjeta principal */}
                      <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-white font-bold mb-2">{ventaja.titulo}</h4>
                            <p className="text-gray-300 text-sm leading-relaxed">{ventaja.descripcion}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </SlideIn>
          </div>
        </div>
      </section>
    </div>
  )
} 