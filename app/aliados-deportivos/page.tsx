"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Globe, Eye, Users, Building, Star, ArrowRight, Sparkles, Trophy, Target, CheckCircle, ExternalLink } from "lucide-react"
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
    <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
    <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-75" />
    <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/8 to-transparent rounded-full blur-2xl animate-pulse delay-150" />
    
    {/* Formas geométricas flotantes */}
    <div className="absolute top-32 left-1/4 w-6 h-6 bg-blue-400/20 transform rotate-45 animate-bounce" />
    <div className="absolute bottom-40 right-1/3 w-8 h-3 bg-purple-400/25 animate-pulse" />
    <div className="absolute top-2/3 right-20 w-3 h-12 bg-cyan-400/20 animate-bounce delay-100" />
    <div className="absolute bottom-1/3 left-32 w-10 h-10 bg-blue-400/15 rounded-full animate-ping" />
    
    {/* Líneas decorativas */}
    <div className="absolute top-1/4 left-0 w-48 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-pulse" />
    <div className="absolute top-2/3 right-0 w-32 h-px bg-gradient-to-l from-transparent via-purple-400/30 to-transparent animate-pulse delay-200" />
    <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent animate-pulse delay-300" />
  </div>
)

const aliados: Aliado[] = [
  {
    id: "fenix",
    nombre: "Centro de Desarrollo Deportivo FENIX",
    descripcion: "Centro especializado en alquiler de espacios deportivos con canchas de voleibol y próximamente baloncesto",
    ubicacion: "Barrio Salazar Gómez, Carrera 60 #11-38",
    telefono: "3132141903",
    telefonoAdicional: "3116486446",
    website: undefined,
    logo: "/fenix-logo.jpg",
    servicios: ["4 canchas de voleibol reglamentarias", "Próximamente 2 canchas de baloncesto"],
    tipo: "Centro deportivo",
    gradient: "from-blue-500 to-cyan-600",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
    accent: "blue"
  },
  {
    id: "medusas",
    nombre: "Club Medusas",
    descripcion: "Club especializado en actividades subacuáticas que desarrolla sus actividades en el Complejo Acuático Simón Bolívar",
    ubicacion: "Complejo Acuático Simón Bolívar",
    telefono: undefined,
    telefonoAdicional: undefined,
    website: "http://www.medusas.com.co",
    logo: "/medusas-logo.jpg",
    servicios: ["Actividades subacuáticas", "Entrenamiento especializado", "Programas recreativos"],
    tipo: "Club acuático",
    gradient: "from-purple-500 to-indigo-600",
    bgGradient: "from-purple-500/10 to-indigo-500/10",
    accent: "purple"
  }
] as const

type Aliado = {
  id: string
  nombre: string
  descripcion: string
  ubicacion: string
  telefono?: string
  telefonoAdicional?: string
  website?: string
  logo: string
  servicios: string[]
  tipo: string
  gradient: string
  bgGradient: string
  accent: "blue" | "purple"
}

export default function AliadosDeportivos() {
  const { FadeIn, SlideIn, ScaleIn } = useAnimation()

  return (
    <div className="min-h-screen">
      {/* Hero Section Ultra-Premium */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        {/* Partículas flotantes */}
        <FloatingParticles count={40} />
        
        {/* Elementos geométricos */}
        <GeometricShapes />
        
        <div className="container relative z-10 py-24 md:py-32">
          <FadeIn className="text-center max-w-5xl mx-auto">
            {/* Badge premium */}
            <div className="inline-flex items-center gap-3 rounded-3xl bg-white/10 backdrop-blur-xl px-8 py-4 mb-8 border border-white/20 shadow-2xl">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center shadow-lg">
                <Users className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white">
                Aliados Estratégicos
              </span>
            </div>
            
            {/* Título cinematográfico */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight mb-8">
              <span className="block bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent drop-shadow-2xl">
                Red de
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent drop-shadow-xl">
                Aliados Deportivos
              </span>
              </h1>
            
            {/* Descripción premium */}
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light mb-12">
              Colaboramos con los <span className="font-bold text-cyan-400">mejores centros deportivos</span> y 
              clubes especializados para ofrecer <span className="font-bold text-blue-400">experiencias excepcionales</span>.
            </p>
            
            {/* Estadísticas de aliados */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              <ScaleIn delay={0.2}>
                <div className="text-center group">
                  <div className="text-4xl md:text-5xl font-black text-white group-hover:scale-110 transition-transform duration-300">2+</div>
                  <div className="text-sm text-gray-300 uppercase tracking-wider">Aliados</div>
                </div>
              </ScaleIn>
              <ScaleIn delay={0.4}>
                <div className="text-center group">
                  <div className="text-4xl md:text-5xl font-black text-blue-400 group-hover:scale-110 transition-transform duration-300">7+</div>
                  <div className="text-sm text-gray-300 uppercase tracking-wider">Instalaciones</div>
                </div>
              </ScaleIn>
              <ScaleIn delay={0.6}>
                <div className="text-center group">
                  <div className="text-4xl md:text-5xl font-black text-cyan-400 group-hover:scale-110 transition-transform duration-300">5+</div>
                  <div className="text-sm text-gray-300 uppercase tracking-wider">Años</div>
                </div>
              </ScaleIn>
              <ScaleIn delay={0.8}>
                <div className="text-center group">
                  <div className="text-4xl md:text-5xl font-black text-purple-400 group-hover:scale-110 transition-transform duration-300">100%</div>
                  <div className="text-sm text-gray-300 uppercase tracking-wider">Confianza</div>
                </div>
              </ScaleIn>
            </div>
            </FadeIn>
        </div>
        
        {/* Línea decorativa inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500" />
      </section>

      {/* Sección de Aliados Premium */}
      <section className="relative bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 py-24 md:py-32 overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-400/5 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-purple-400/5 to-transparent rounded-full blur-3xl animate-pulse delay-75" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/3 to-transparent rounded-full blur-3xl animate-pulse delay-150" />
        </div>
        
        <div className="container relative z-10">
          {/* Header de sección */}
          <FadeIn className="text-center mb-20">
            <div className="inline-flex items-center gap-3 rounded-3xl bg-white/60 backdrop-blur-xl px-8 py-4 mb-8 border border-white/40 shadow-2xl">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">
                <Building className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-blue-600">
                Nuestros Socios
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">
                Aliados de
              </span>
              <br />
              <span className="text-gray-900">
                Excelencia
              </span>
            </h2>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
              Trabajamos de la mano con <span className="font-bold text-blue-600">centros deportivos líderes</span> y 
              <span className="font-bold text-purple-600"> clubes especializados</span> para garantizar espacios de 
              calidad y experiencias deportivas excepcionales.
            </p>

            {/* Estadísticas de confianza */}
            <div className="grid grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto">
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-black text-blue-600 group-hover:scale-110 transition-transform duration-300">2+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">Aliados</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-black text-cyan-600 group-hover:scale-110 transition-transform duration-300">5+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">Años</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-black text-purple-600 group-hover:scale-110 transition-transform duration-300">100%</div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">Confianza</div>
              </div>
            </div>
          </FadeIn>

          {/* Grid de aliados ultra-premium */}
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {aliados.map((aliado, index) => {
              const accentColors = {
                blue: {
                  text: "text-blue-600",
                  bg: "bg-blue-100",
                  border: "border-blue-200",
                  gradient: "from-blue-500 to-cyan-600",
                  glow: "group-hover:shadow-blue-500/25"
                },
                purple: {
                  text: "text-purple-600", 
                  bg: "bg-purple-100",
                  border: "border-purple-200",
                  gradient: "from-purple-500 to-indigo-600",
                  glow: "group-hover:shadow-purple-500/25"
                }
              } as const
              
              const colors = accentColors[aliado.accent]
              
              return (
                <SlideIn key={aliado.id} direction="up" delay={index * 0.3}>
                  <div className="group relative h-full">
                    {/* Glow effect */}
                    <div className={`absolute -inset-4 bg-gradient-to-r ${aliado.gradient} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-all duration-500`} />
                    
                    {/* Tarjeta principal glassmorphism */}
                    <div className={`relative bg-white/80 backdrop-blur-2xl rounded-3xl p-8 border border-white/60 shadow-2xl group-hover:shadow-3xl ${colors.glow} transition-all duration-500 h-full flex flex-col ${index % 2 === 0 ? 'group-hover:rotate-1' : 'group-hover:-rotate-1'} group-hover:scale-105`}>
                      
                      {/* Header con logo y tipo */}
                      <div className="text-center mb-8">
                        {/* Container del logo con efectos */}
                        <div className="relative mx-auto mb-6 w-40 h-32 group-hover:scale-110 transition-transform duration-500">
                          <div className={`absolute -inset-2 bg-gradient-to-r ${aliado.gradient} opacity-20 rounded-2xl blur-lg group-hover:opacity-40 transition-all duration-500`} />
                          <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-4 border border-white/60 shadow-xl h-full flex items-center justify-center">
                      <Image
                        src={aliado.logo}
                        alt={`Logo ${aliado.nombre}`}
                        width={aliado.id === "fenix" ? 140 : 80}
                        height={aliado.id === "fenix" ? 70 : 100}
                              className="object-contain max-w-full max-h-full"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg"
                        }}
                      />
                    </div>
                        </div>
                        
                        {/* Badge de tipo */}
                        <div className={`inline-flex items-center gap-2 rounded-2xl ${colors.bg} ${colors.border} border px-4 py-2 mb-4 shadow-lg`}>
                          <Star className={`w-4 h-4 ${colors.text}`} />
                          <span className={`font-bold text-sm ${colors.text} uppercase tracking-wider`}>
                      {aliado.tipo}
                          </span>
                    </div>
                        
                        {/* Nombre del aliado */}
                        <h3 className={`text-2xl font-black ${colors.text} mb-4 leading-tight group-hover:text-gray-900 transition-colors duration-300`}>
                          {aliado.nombre}
                        </h3>
                      </div>
                      
                      {/* Descripción */}
                      <p className="text-gray-700 leading-relaxed font-medium mb-8 text-center flex-1">
                      {aliado.descripcion}
                    </p>
                    
                      {/* Información de contacto */}
                      <div className="space-y-4 mb-8">
                        <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40">
                          <div className={`w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                            <MapPin className={`w-5 h-5 ${colors.text}`} />
                          </div>
                          <div>
                            <span className="font-semibold text-gray-900 block mb-1">Ubicación</span>
                            <span className="text-gray-600">{aliado.ubicacion}</span>
                          </div>
                      </div>
                      
                      {aliado.telefono && (
                          <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40">
                            <div className={`w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                              <Phone className={`w-5 h-5 ${colors.text}`} />
                            </div>
                            <div>
                              <span className="font-semibold text-gray-900 block mb-1">Contacto</span>
                              <span className="text-gray-600">{aliado.telefono}</span>
                          {aliado.telefonoAdicional && (
                                <span className="text-gray-500 block">{aliado.telefonoAdicional}</span>
                          )}
                            </div>
                        </div>
                      )}
                      
                      {aliado.website && (
                          <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40">
                            <div className={`w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                              <Globe className={`w-5 h-5 ${colors.text}`} />
                            </div>
                            <div>
                              <span className="font-semibold text-gray-900 block mb-1">Sitio Web</span>
                          <a 
                            href={aliado.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                                className={`${colors.text} hover:underline flex items-center gap-1`}
                          >
                                Visitar sitio web
                                <ExternalLink className="w-3 h-3" />
                          </a>
                            </div>
                        </div>
                      )}
                    </div>
                    
                      {/* Servicios principales */}
                      <div className="mb-8">
                        <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <Trophy className={`w-5 h-5 ${colors.text}`} />
                          Servicios Principales
                        </h4>
                        <div className="space-y-3">
                        {aliado.servicios.map((servicio, i) => (
                            <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/40 backdrop-blur-sm border border-white/30">
                              <div className={`w-6 h-6 rounded-lg ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                                <CheckCircle className={`w-3 h-3 ${colors.text}`} />
                              </div>
                              <span className="text-gray-700 font-medium">{servicio}</span>
                            </div>
                        ))}
                        </div>
                    </div>
                    
                      {/* Botón de acción premium */}
                      <Button 
                        asChild 
                        className={`w-full bg-gradient-to-r ${aliado.gradient} hover:shadow-2xl text-white shadow-xl rounded-2xl py-4 font-bold transition-all duration-300 transform hover:scale-105 border-0 group-hover:shadow-${aliado.accent}-500/25`}
                      >
                        <Link href={`/aliados-deportivos/${aliado.id}`} className="flex items-center justify-center gap-3">
                          <Eye className="w-5 h-5" />
                          <span>Ver Más Información</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                        </Button>
                      
                      {/* Línea decorativa */}
                      <div className={`mt-6 h-1 bg-gradient-to-r ${aliado.gradient} rounded-full w-0 group-hover:w-full transition-all duration-700`} />
                    </div>
                  </div>
              </SlideIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* Sección Call to Action Ultra-Premium */}
      <section className="relative bg-gradient-to-br from-slate-800 via-indigo-900 to-purple-900 py-24 md:py-32 overflow-hidden">
        {/* Partículas flotantes */}
        <FloatingParticles count={25} />
        
        {/* Elementos decorativos */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-75" />
        </div>
        
        <div className="container relative z-10">
          <FadeIn className="text-center max-w-4xl mx-auto">
            {/* Badge premium */}
            <div className="inline-flex items-center gap-3 rounded-3xl bg-white/10 backdrop-blur-xl px-8 py-4 mb-8 border border-white/20 shadow-2xl">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg">
                <Target className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white">
                Únete a Nosotros
              </span>
            </div>
            
            {/* Título cinematográfico */}
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8 text-white">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                ¿Quieres ser nuestro
              </span>
              <br />
              <span className="text-white">
                Aliado Deportivo?
              </span>
            </h2>
            
            {/* Descripción premium */}
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light mb-12">
              Si tienes un <span className="font-bold text-cyan-400">centro deportivo</span>, club o instalación y quieres 
              formar parte de nuestra <span className="font-bold text-blue-400">red de aliados estratégicos</span>, 
              contáctanos para conocer más sobre nuestros programas de colaboración.
            </p>
            
            {/* Beneficios de ser aliado */}
            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              {[
                {
                  icon: Users,
                  title: "Red de Contactos",
                  description: "Acceso a nuestra amplia red de profesionales deportivos",
                  color: "cyan"
                },
                {
                  icon: Trophy,
                  title: "Visibilidad Premium",
                  description: "Promoción de tu centro en nuestra plataforma digital",
                  color: "blue"
                },
                {
                  icon: Sparkles,
                  title: "Programas Exclusivos",
                  description: "Participación en eventos y programas especializados",
                  color: "purple"
                }
              ].map((benefit, index) => {
                const Icon = benefit.icon
                const colorClasses: Record<"cyan" | "blue" | "purple", string> = {
                  cyan: "from-cyan-500 to-blue-600 text-cyan-400 bg-cyan-500/10",
                  blue: "from-blue-500 to-indigo-600 text-blue-400 bg-blue-500/10",
                  purple: "from-purple-500 to-indigo-600 text-purple-400 bg-purple-500/10"
                }
                
                return (
                  <ScaleIn key={benefit.title} delay={index * 0.2}>
                    <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorClasses[benefit.color as keyof typeof colorClasses].split(' ')[0]} ${colorClasses[benefit.color as keyof typeof colorClasses].split(' ')[1]} flex items-center justify-center shadow-lg mb-4 mx-auto`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className={`text-lg font-bold ${colorClasses[benefit.color as keyof typeof colorClasses].split(' ')[2]} mb-2`}>
                        {benefit.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </ScaleIn>
                )
              })}
            </div>
            
            {/* Botón de acción principal */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                asChild 
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white shadow-2xl hover:shadow-3xl rounded-3xl px-10 py-5 text-lg font-bold transition-all duration-300 transform hover:scale-105 border-0"
              >
                <Link href="/contacto" className="flex items-center gap-3">
                  <Target className="w-6 h-6" />
                  <span>Ser Aliado Estratégico</span>
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                className="border-2 border-white/40 text-white bg-white/10 backdrop-blur-lg hover:bg-white/20 hover:border-white/60 rounded-3xl px-10 py-5 text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Link href="/quienes-somos" className="flex items-center gap-3">
                  <Users className="w-6 h-6" />
                  <span>Conoce Más</span>
            </Link>
              </Button>
            </div>
            
            {/* Estadísticas finales */}
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-black text-cyan-400">0€</div>
                <div className="text-sm text-gray-300 uppercase tracking-wider">Costo Inicial</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-blue-400">24h</div>
                <div className="text-sm text-gray-300 uppercase tracking-wider">Respuesta</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-purple-400">∞</div>
                <div className="text-sm text-gray-300 uppercase tracking-wider">Oportunidades</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
} 