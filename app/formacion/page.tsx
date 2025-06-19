"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GraduationCap, Users, Building, BookOpen, Award, Calendar, Clock, Target, Sparkles, PlayCircle, CheckCircle, TrendingUp, Star, ArrowRight, Brain, Globe } from "lucide-react"
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
    <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
    <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-75" />
    <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-pink-500/8 to-transparent rounded-full blur-2xl animate-pulse delay-150" />
    
    {/* Formas geométricas flotantes */}
    <div className="absolute top-32 left-1/4 w-6 h-6 bg-indigo-400/20 transform rotate-45 animate-bounce" />
    <div className="absolute bottom-40 right-1/3 w-8 h-3 bg-purple-400/25 animate-pulse" />
    <div className="absolute top-2/3 right-20 w-3 h-12 bg-pink-400/20 animate-bounce delay-100" />
    <div className="absolute bottom-1/3 left-32 w-10 h-10 bg-indigo-400/15 rounded-full animate-ping" />
    
    {/* Líneas decorativas */}
    <div className="absolute top-1/4 left-0 w-48 h-px bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent animate-pulse" />
    <div className="absolute top-2/3 right-0 w-32 h-px bg-gradient-to-l from-transparent via-purple-400/30 to-transparent animate-pulse delay-200" />
    <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-pink-400/25 to-transparent animate-pulse delay-300" />
  </div>
)

export default function Formacion() {
  const { FadeIn, SlideIn, ScaleIn } = useAnimation()

  const programas = [
    {
      icon: GraduationCap,
      title: "Gestión Deportiva Avanzada",
      description: "Programa completo para profesionales que buscan mejorar sus habilidades en la gestión de organizaciones deportivas.",
      duration: "60 horas",
      target: "Gestores deportivos y directores",
      gradient: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50",
      delay: 0.1
    },
    {
      icon: Building,
      title: "Dirección de Instalaciones Deportivas",
      description: "Formación especializada en la gestión eficiente de instalaciones y centros deportivos.",
      duration: "40 horas",
      target: "Directores y gerentes de instalaciones",
      gradient: "from-purple-500 to-indigo-600",
      bgGradient: "from-purple-50 to-indigo-50",
      delay: 0.2
    },
    {
      icon: BookOpen,
      title: "Marketing Deportivo",
      description: "Estrategias de marketing y comunicación específicas para el sector deportivo.",
      duration: "30 horas",
      target: "Profesionales de marketing y comunicación",
      gradient: "from-pink-500 to-rose-600",
      bgGradient: "from-pink-50 to-rose-50",
      delay: 0.3
    },
    {
      icon: Award,
      title: "Planificación de Eventos Deportivos",
      description: "Organización y gestión de eventos deportivos de diferentes escalas.",
      duration: "25 horas",
      target: "Organizadores de eventos y técnicos deportivos",
      gradient: "from-emerald-500 to-green-600",
      bgGradient: "from-emerald-50 to-green-50",
      delay: 0.4
    },
    {
      icon: Users,
      title: "Gestión de Recursos Humanos en el Deporte",
      description: "Estrategias para la gestión eficiente del personal en organizaciones deportivas.",
      duration: "20 horas",
      target: "Responsables de RRHH y directores",
      gradient: "from-orange-500 to-amber-600",
      bgGradient: "from-orange-50 to-amber-50",
      delay: 0.5
    },
    {
      icon: Brain,
      title: "Formación a Medida",
      description: "Programas personalizados adaptados a las necesidades específicas de tu organización.",
      duration: "Según necesidades",
      target: "Organizaciones deportivas",
      gradient: "from-violet-500 to-purple-600",
      bgGradient: "from-violet-50 to-purple-50",
      delay: 0.6
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section Ultra-Premium */}
      <section className="relative bg-gradient-to-br from-slate-800 via-indigo-900 to-purple-900 overflow-hidden">
        {/* Partículas flotantes */}
        <FloatingParticles count={35} />
        
        {/* Elementos geométricos */}
        <GeometricShapes />
        
        <div className="container relative z-10 py-24 md:py-32">
          <FadeIn className="text-center max-w-5xl mx-auto">
            {/* Badge premium */}
            <div className="inline-flex items-center gap-3 rounded-3xl bg-white/10 backdrop-blur-xl px-8 py-4 mb-8 border border-white/20 shadow-2xl">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center shadow-lg">
                <GraduationCap className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white">
                Formación Profesional
              </span>
            </div>
            
            {/* Título cinematográfico */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight mb-8">
              <span className="block bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent drop-shadow-2xl">
                Conocimiento
              </span>
              <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-xl">
                Transformador
              </span>
            </h1>
            
            {/* Descripción premium */}
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light mb-12">
              Transferimos nuestro <span className="font-bold text-purple-400">conocimiento y experiencia</span> en la 
              gestión del deporte para impulsar tu <span className="font-bold text-indigo-400">desarrollo profesional</span>.
            </p>
            
            {/* Estadísticas de formación */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              <ScaleIn delay={0.2}>
                <div className="text-center group">
                  <div className="text-4xl md:text-5xl font-black text-white group-hover:scale-110 transition-transform duration-300">6</div>
                  <div className="text-sm text-gray-300 uppercase tracking-wider">Programas</div>
                </div>
              </ScaleIn>
              <ScaleIn delay={0.4}>
                <div className="text-center group">
                  <div className="text-4xl md:text-5xl font-black text-indigo-400 group-hover:scale-110 transition-transform duration-300">200+</div>
                  <div className="text-sm text-gray-300 uppercase tracking-wider">Horas</div>
                </div>
              </ScaleIn>
              <ScaleIn delay={0.6}>
                <div className="text-center group">
                  <div className="text-4xl md:text-5xl font-black text-purple-400 group-hover:scale-110 transition-transform duration-300">100%</div>
                  <div className="text-sm text-gray-300 uppercase tracking-wider">Práctico</div>
                </div>
              </ScaleIn>
              <ScaleIn delay={0.8}>
                <div className="text-center group">
                  <div className="text-4xl md:text-5xl font-black text-pink-400 group-hover:scale-110 transition-transform duration-300">∞</div>
                  <div className="text-sm text-gray-300 uppercase tracking-wider">Personalización</div>
                </div>
              </ScaleIn>
          </div>
          </FadeIn>
        </div>
        
        {/* Línea decorativa inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
      </section>

      {/* Sección Introducción con Imagen */}
      <section className="relative bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 py-24 md:py-32 overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-indigo-400/5 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-purple-400/5 to-transparent rounded-full blur-3xl animate-pulse delay-75" />
        </div>
        
        <div className="container relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            
            {/* Imagen con efectos premium */}
            <ScaleIn delay={0.2}>
              <div className="group relative">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                
                {/* Container de imagen */}
                <div className="relative bg-white/80 backdrop-blur-2xl rounded-3xl p-4 border border-white/60 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
                  <div className="relative h-80 w-full overflow-hidden rounded-2xl">
              <Image
                src="/entrenador2.jpg"
                alt="Formación SPORTSPROFESSIONALS"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg"
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent group-hover:from-indigo-900/60 transition-all duration-500" />
                    
                    {/* Badge flotante */}
                    <div className="absolute top-4 left-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 border border-white/60">
                        <div className="flex items-center gap-3">
                          <Star className="w-6 h-6 text-indigo-600" />
                          <span className="font-bold text-gray-900">Experiencia Comprobada</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScaleIn>

            {/* Contenido descriptivo */}
            <SlideIn direction="right" delay={0.4}>
              <div className="space-y-8">
                {/* Header */}
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-3 rounded-2xl bg-white/60 backdrop-blur-xl px-6 py-3 border border-white/40 shadow-lg">
                    <Target className="w-5 h-5 text-indigo-600" />
                    <span className="font-bold text-indigo-600">Nuestra Metodología</span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                    <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Formación de
                    </span>
                    <br />
                    <span className="text-gray-900">
                      Vanguardia
                    </span>
                  </h2>
                </div>
                
                {/* Descripción principal */}
                <p className="text-xl text-gray-700 leading-relaxed font-medium">
                  Una de nuestras actividades es transferir nuestro <span className="font-bold text-indigo-600">conocimiento y experiencia</span> en 
                  el mundo de la gestión del deporte. Compartir nuestras respuestas a los profesionales, empresas e 
                  instituciones que quieran desarrollarse a través del ejercicio de la 
                  <span className="font-bold text-purple-600"> gestión deportiva</span>.
                </p>
                
                {/* Características destacadas */}
                <div className="space-y-4">
                  {[
                    {
                      icon: Users,
                      title: "Audiencia Especializada",
                      description: "Dirigido a gestores deportivos, directores de instalaciones, técnicos y estudiantes del sector.",
                      color: "indigo" as const
                    },
                    {
                      icon: Brain,
                      title: "Programas Adaptables",
                      description: "Formaciones con capacidad de adaptarse a las necesidades específicas de cada organización.",
                      color: "purple" as const
                    },
                    {
                      icon: Globe,
                      title: "Experiencia Comprobada",
                      description: "Compartimos conocimiento en jornadas, conferencias y ponencias en múltiples instituciones.",
                      color: "pink" as const
                    }
                  ].map((feature, index) => {
                    const Icon = feature.icon
                    const colorClasses: Record<"indigo" | "purple" | "pink", string> = {
                      indigo: "from-indigo-500 to-indigo-600 text-indigo-600",
                      purple: "from-purple-500 to-purple-600 text-purple-600",
                      pink: "from-pink-500 to-pink-600 text-pink-600"
                    }
                    
                    return (
                      <div 
                        key={feature.title}
                        className="flex items-start gap-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 hover:bg-white/80 transition-all duration-300"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${colorClasses[feature.color].split(' ')[0]} ${colorClasses[feature.color].split(' ')[1]} flex items-center justify-center shadow-lg flex-shrink-0`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className={`text-lg font-bold ${colorClasses[feature.color].split(' ')[2]} mb-1`}>
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Sección Programas de Formación */}
      <section className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 py-24 md:py-32 overflow-hidden">
        {/* Partículas flotantes */}
        <FloatingParticles count={25} />
        
        {/* Elementos decorativos */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-75" />
        </div>
        
        <div className="container relative z-10">
          {/* Header de sección */}
          <FadeIn className="text-center mb-20">
            <div className="inline-flex items-center gap-3 rounded-3xl bg-white/10 backdrop-blur-xl px-8 py-4 mb-8 border border-white/20 shadow-2xl">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center shadow-lg">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white">
                Programas Especializados
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-white">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Catálogo de
              </span>
              <br />
              <span className="text-white">
                Formaciones
              </span>
            </h2>
            
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Programas diseñados para potenciar tu desarrollo profesional en el 
              <span className="font-bold text-purple-400"> sector deportivo</span> con metodologías 
              <span className="font-bold text-indigo-400"> innovadoras</span>.
            </p>
          </FadeIn>

          {/* Grid de programas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programas.map((programa, index) => {
              const Icon = programa.icon
              return (
                <SlideIn key={programa.title} direction="up" delay={programa.delay}>
                  <div className="group relative h-full">
                    {/* Glow effect */}
                    <div className={`absolute -inset-2 bg-gradient-to-r ${programa.gradient} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-all duration-500`} />
                    
                    {/* Tarjeta principal */}
                    <div className="relative bg-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105 h-full flex flex-col">
                      
                      {/* Header con ícono */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${programa.gradient} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-black text-white group-hover:text-purple-400 transition-colors duration-300 leading-tight">
                            {programa.title}
                          </h3>
                        </div>
              </div>
                      
                      {/* Descripción */}
                      <p className="text-gray-300 leading-relaxed font-medium mb-6 flex-1">
                        {programa.description}
                      </p>
                      
                      {/* Detalles del programa */}
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10">
                          <Clock className="w-5 h-5 text-purple-400" />
                          <span className="text-sm text-gray-300">
                            <span className="font-semibold text-white">Duración:</span> {programa.duration}
                          </span>
              </div>
                        
                        <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-white/10">
                          <Users className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-300">
                            <span className="font-semibold text-white">Dirigido a:</span> {programa.target}
                          </span>
              </div>
              </div>
                      
                      {/* Botón de acción */}
                      <Button 
                        asChild 
                        className={`w-full bg-gradient-to-r ${programa.gradient} hover:shadow-2xl text-white shadow-xl rounded-2xl py-3 font-bold transition-all duration-300 transform hover:scale-105 border-0 group-hover:shadow-purple-500/25`}
                      >
                        <Link href="/contacto" className="flex items-center justify-center gap-2">
                          <span>Solicitar Información</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                </Button>
                      
                      {/* Línea decorativa */}
                      <div className={`mt-4 h-1 bg-gradient-to-r ${programa.gradient} rounded-full w-0 group-hover:w-full transition-all duration-500`} />
              </div>
              </div>
            </SlideIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* Sección Video y Experiencia */}
      <section className="relative bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 py-24 md:py-32 overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-purple-400/5 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-indigo-400/5 to-transparent rounded-full blur-3xl animate-pulse delay-75" />
        </div>
        
        <div className="container relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            
            {/* Contenido de experiencia */}
            <SlideIn direction="left" delay={0.2}>
              <div className="space-y-8">
                {/* Header */}
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-3 rounded-2xl bg-white/60 backdrop-blur-xl px-6 py-3 border border-white/40 shadow-lg">
                    <TrendingUp className="w-5 h-5 text-purple-600" />
                    <span className="font-bold text-purple-600">Trayectoria Comprobada</span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                    <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                      Experiencia que
                    </span>
                    <br />
                    <span className="text-gray-900">
                      Transforma
                    </span>
                  </h2>
                </div>
                
                {/* Logros y experiencia */}
              <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed font-medium">
                    Hemos compartido en <span className="font-bold text-purple-600">jornadas, conferencias y ponencias</span> en 
                    diferentes instituciones y entidades socioeconómicas, acumulando una vasta experiencia que nos 
                    permite ofrecer formación de <span className="font-bold text-indigo-600">alta calidad</span>.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed font-medium">
                    Nuestra metodología combina <span className="font-bold text-blue-600">conocimientos teóricos</span> con 
                    aplicaciones prácticas del mundo real, asegurando que cada participante obtenga herramientas 
                    inmediatamente aplicables.
                </p>
                  
                  {/* Características del equipo */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                    {[
                      { icon: CheckCircle, text: "Profesionales Certificados", color: "purple" as const },
                      { icon: Star, text: "Metodología Innovadora", color: "indigo" as const },
                      { icon: Award, text: "Casos Reales", color: "blue" as const },
                      { icon: TrendingUp, text: "Resultados Medibles", color: "cyan" as const }
                    ].map((item, index) => {
                      const Icon = item.icon
                      const colors: Record<"purple" | "indigo" | "blue" | "cyan", string> = {
                        purple: "text-purple-600 bg-purple-100",
                        indigo: "text-indigo-600 bg-indigo-100",
                        blue: "text-blue-600 bg-blue-100",
                        cyan: "text-cyan-600 bg-cyan-100"
                      }
                      
                      return (
                        <div 
                          key={item.text}
                          className="flex items-center gap-3 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 hover:bg-white/80 transition-all duration-300"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <div className={`w-10 h-10 rounded-xl ${colors[item.color].split(' ')[1]} flex items-center justify-center`}>
                            <Icon className={`w-5 h-5 ${colors[item.color].split(' ')[0]}`} />
                          </div>
                          <span className="font-semibold text-gray-700">{item.text}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
                
                {/* Call to action */}
                <div className="pt-6">
                  <Button 
                    asChild 
                    className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-xl hover:shadow-2xl rounded-2xl px-8 py-4 font-bold transition-all duration-300 transform hover:scale-105 border-0"
                  >
                    <Link href="/contacto" className="flex items-center gap-3">
                      <Sparkles className="w-5 h-5" />
                      <span>Solicitar Información</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </SlideIn>

            {/* Video con efectos premium */}
            <ScaleIn delay={0.4}>
              <div className="group relative">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                
                {/* Container del video */}
                <div className="relative bg-white/80 backdrop-blur-2xl rounded-3xl p-4 border border-white/60 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
                  <div className="relative rounded-2xl overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/BakoE2sMVjg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              width={600}
              height={400}
                      className="w-full h-80 rounded-2xl"
                    />
                    
                    {/* Overlay decorativo */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <PlayCircle className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Info del video */}
                  <div className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center">
                        <GraduationCap className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">Metodología en Acción</h3>
                        <p className="text-sm text-gray-600">Conoce nuestro enfoque formativo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* Sección Call to Action Final */}
      <section className="relative bg-gradient-to-br from-slate-800 via-purple-900 to-indigo-900 py-24 md:py-32 overflow-hidden">
        {/* Partículas flotantes */}
        <FloatingParticles count={20} />
        
        {/* Elementos decorativos */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-indigo-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-75" />
        </div>
        
        <div className="container relative z-10">
          <FadeIn className="text-center max-w-4xl mx-auto">
            {/* Badge final */}
            <div className="inline-flex items-center gap-3 rounded-3xl bg-white/10 backdrop-blur-xl px-8 py-4 mb-8 border border-white/20 shadow-2xl">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center shadow-lg">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white">
              Formación Personalizada
              </span>
            </div>
            
            {/* Título final */}
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8 text-white">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                ¿Necesitas un Programa
              </span>
              <br />
              <span className="text-white">
                a Medida?
              </span>
            </h2>
            
            {/* Descripción final */}
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light mb-12">
              Contáctanos para diseñar un <span className="font-bold text-purple-400">programa de formación</span> adaptado 
              a las necesidades específicas de tu <span className="font-bold text-pink-400">organización</span>.
            </p>
            
            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                asChild 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-2xl hover:shadow-3xl rounded-3xl px-10 py-5 text-lg font-bold transition-all duration-300 transform hover:scale-105 border-0"
              >
                <Link href="/contacto" className="flex items-center gap-3">
                  <Target className="w-6 h-6" />
                  <span>Contactar Ahora</span>
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
                <div className="text-3xl font-black text-purple-400">100%</div>
                <div className="text-sm text-gray-300 uppercase tracking-wider">Personalizado</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-pink-400">24h</div>
                <div className="text-sm text-gray-300 uppercase tracking-wider">Respuesta</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-indigo-400">∞</div>
                <div className="text-sm text-gray-300 uppercase tracking-wider">Posibilidades</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
