"use client"

import { useAnimation } from "@/components/animation-provider"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { GraduationCap, Brain, Heart, Users, BookOpen, Target, CheckCircle, Sparkles, ArrowRight, Activity, Award, Zap, Dumbbell, Trophy, MessageCircle, Clock } from "lucide-react"

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
    <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
    <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tl from-pink-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-75" />
    <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-indigo-500/8 to-transparent rounded-full blur-2xl animate-pulse delay-150" />
    
    {/* Formas geométricas flotantes */}
    <div className="absolute top-32 left-1/4 w-6 h-6 bg-purple-400/20 transform rotate-45 animate-bounce" />
    <div className="absolute bottom-40 right-1/3 w-8 h-3 bg-pink-400/25 animate-pulse" />
    <div className="absolute top-2/3 right-20 w-3 h-12 bg-indigo-400/20 animate-bounce delay-100" />
    <div className="absolute bottom-1/3 left-32 w-10 h-10 bg-purple-400/15 rounded-full animate-ping" />
    
    {/* Líneas decorativas */}
    <div className="absolute top-1/4 left-0 w-48 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent animate-pulse" />
    <div className="absolute top-2/3 right-0 w-32 h-px bg-gradient-to-l from-transparent via-pink-400/30 to-transparent animate-pulse delay-200" />
    <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-indigo-400/25 to-transparent animate-pulse delay-300" />
  </div>
)

export default function EducacionFisicaPage() {
  const { FadeIn, SlideIn, ScaleIn } = useAnimation()

  const serviciosPrincipales = [
    {
      icon: GraduationCap,
      title: "Metodología de Enseñanza",
      description: "Metodología de la enseñanza de la educación física",
      color: "purple"
    },
    {
      icon: BookOpen,
      title: "Historia y Epistemología",
      description: "Historia y epistemología de la educación física",
      color: "pink"
    },
    {
      icon: Trophy,
      title: "Desarrollo del Talento",
      description: "Desarrollo del talento deportivo",
      color: "indigo"
    },
    {
      icon: Brain,
      title: "Psicología del Deporte",
      description: "Psicología del deporte y la actividad física",
      color: "purple"
    },
    {
      icon: Heart,
      title: "Fisiología del Ejercicio",
      description: "Fisiología del ejercicio",
      color: "pink"
    },
    {
      icon: Activity,
      title: "Biomecánica",
      description: "Biomecánica del movimiento humano",
      color: "indigo"
    },
    {
      icon: Target,
      title: "Nutrición Deportiva",
      description: "Nutrición deportiva",
      color: "purple"
    },
    {
      icon: Zap,
      title: "Primeros Auxilios",
      description: "Primeros auxilios y prevención de lesiones",
      color: "pink"
    },
    {
      icon: Dumbbell,
      title: "Actividad Física y Salud",
      description: "Actividad física y salud",
      color: "indigo"
    },
    {
      icon: Users,
      title: "Deporte Escolar",
      description: "Deporte escolar y recreativo",
      color: "purple"
    },
    {
      icon: Award,
      title: "Evaluación y Medición",
      description: "Evaluación y medición en educación física",
      color: "pink"
    },
    {
      icon: Clock,
      title: "Didáctica",
      description: "Didáctica de la educación física",
      color: "indigo"
    }
  ] as const

  const beneficios = [
    {
      icon: GraduationCap,
      title: "Expertise Educativo",
      description: "Profesionales altamente capacitados en educación física y deportes.",
      color: "purple"
    },
    {
      icon: BookOpen,
      title: "Metodología Innovadora",
      description: "Enfoques pedagógicos innovadores y efectivos para el aprendizaje.",
      color: "pink"
    },
    {
      icon: Target,
      title: "Impacto Medible",
      description: "Resultados medibles en el desarrollo físico y deportivo de los estudiantes.",
      color: "indigo"
    }
  ] as const

  return (
    <div className="min-h-screen">
      {/* Hero Section Ultra-Premium */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900 overflow-hidden">
        {/* Partículas flotantes */}
        <FloatingParticles count={40} />
        
        {/* Elementos geométricos */}
        <GeometricShapes />
        
        <div className="container relative z-10 py-24 md:py-32">
          <FadeIn className="text-center max-w-5xl mx-auto">
            {/* Badge premium */}
            <div className="inline-flex items-center gap-3 rounded-3xl bg-white/10 backdrop-blur-xl px-8 py-4 mb-8 border border-white/20 shadow-2xl">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center shadow-lg">
                <GraduationCap className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white">
                Educación Física
              </span>
            </div>
            
            {/* Título cinematográfico */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight mb-8">
              <span className="block bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent drop-shadow-2xl">
                Enseñanza
              </span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-xl">
                Física Integral
              </span>
            </h1>
            
            {/* Descripción premium */}
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light mb-12">
              Ofrecemos servicios <span className="font-bold text-purple-400">especializados en educación física</span> para 
              <span className="font-bold text-pink-400"> instituciones educativas</span> y organizaciones.
            </p>
            
            {/* Estadísticas de servicio */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              <ScaleIn delay={0.2}>
                <div className="text-center group">
                  <div className="text-4xl md:text-5xl font-black text-white group-hover:scale-110 transition-transform duration-300">12+</div>
                  <div className="text-sm text-gray-300 uppercase tracking-wider">Servicios</div>
                </div>
              </ScaleIn>
              <ScaleIn delay={0.4}>
                <div className="text-center group">
                  <div className="text-4xl md:text-5xl font-black text-purple-400 group-hover:scale-110 transition-transform duration-300">500+</div>
                  <div className="text-sm text-gray-300 uppercase tracking-wider">Estudiantes</div>
                </div>
              </ScaleIn>
              <ScaleIn delay={0.6}>
                <div className="text-center group">
                  <div className="text-4xl md:text-5xl font-black text-pink-400 group-hover:scale-110 transition-transform duration-300">10+</div>
                  <div className="text-sm text-gray-300 uppercase tracking-wider">Instituciones</div>
                </div>
              </ScaleIn>
              <ScaleIn delay={0.8}>
                <div className="text-center group">
                  <div className="text-4xl md:text-5xl font-black text-indigo-400 group-hover:scale-110 transition-transform duration-300">100%</div>
                  <div className="text-sm text-gray-300 uppercase tracking-wider">Efectividad</div>
                </div>
              </ScaleIn>
            </div>
          </FadeIn>
        </div>
        
        {/* Línea decorativa inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500" />
      </section>

      {/* Sección Servicios Principales */}
      <section className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 py-24 md:py-32 overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-purple-400/5 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-pink-400/5 to-transparent rounded-full blur-3xl animate-pulse delay-75" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/3 to-transparent rounded-full blur-3xl animate-pulse delay-150" />
        </div>
        
        <div className="container relative z-10">
          {/* Header de sección */}
          <FadeIn className="text-center mb-20">
            <div className="inline-flex items-center gap-3 rounded-3xl bg-white/60 backdrop-blur-xl px-8 py-4 mb-8 border border-white/40 shadow-2xl">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-purple-600">
                Servicios Educativos
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
                Formación
              </span>
              <br />
              <span className="text-gray-900">
                Especializada
              </span>
            </h2>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
              Ofrecemos <span className="font-bold text-purple-600">servicios especializados</span> en educación física 
              para <span className="font-bold text-pink-600">instituciones educativas</span> y organizaciones.
            </p>
          </FadeIn>

          {/* Grid de servicios ultra-premium */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {serviciosPrincipales.map((servicio, index) => {
              const Icon = servicio.icon
              const colorClasses = {
                purple: {
                  bg: "bg-purple-100",
                  text: "text-purple-600",
                  border: "border-purple-200",
                  gradient: "from-purple-500 to-purple-600",
                  glow: "group-hover:shadow-purple-500/25"
                },
                pink: {
                  bg: "bg-pink-100", 
                  text: "text-pink-600",
                  border: "border-pink-200",
                  gradient: "from-pink-500 to-pink-600",
                  glow: "group-hover:shadow-pink-500/25"
                },
                indigo: {
                  bg: "bg-indigo-100",
                  text: "text-indigo-600",
                  border: "border-indigo-200",
                  gradient: "from-indigo-500 to-indigo-600", 
                  glow: "group-hover:shadow-indigo-500/25"
                }
              } as const
              
              const colors = colorClasses[servicio.color]
              
              return (
                <SlideIn key={servicio.title} direction="up" delay={index * 0.1}>
                  <div className="group relative h-full">
                    {/* Glow effect */}
                    <div className={`absolute -inset-2 bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-lg transition-all duration-500`} />
                    
                    {/* Tarjeta principal glassmorphism */}
                    <div className={`relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 border ${colors.border} border-opacity-40 shadow-xl ${colors.glow} group-hover:shadow-2xl transition-all duration-500 h-full flex flex-col group-hover:scale-105`}>
                      
                      {/* Icono */}
                      <div className={`w-16 h-16 rounded-2xl ${colors.bg} ${colors.border} border flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mb-4`}>
                        <Icon className={`w-8 h-8 ${colors.text}`} />
                      </div>
                      
                      {/* Contenido */}
                      <h3 className={`text-lg font-bold ${colors.text} mb-3 leading-tight group-hover:text-gray-900 transition-colors duration-300`}>
                        {servicio.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed font-medium flex-1">
                        {servicio.description}
                      </p>
                      
                      {/* Línea decorativa */}
                      <div className={`mt-4 h-1 bg-gradient-to-r ${colors.gradient} rounded-full w-0 group-hover:w-full transition-all duration-500`} />
                    </div>
                  </div>
                </SlideIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* Sección Imágenes Showcase */}
      <section className="relative bg-gradient-to-br from-slate-800 via-purple-900 to-pink-900 py-24 md:py-32 overflow-hidden">
        {/* Partículas flotantes */}
        <FloatingParticles count={25} />
        
        {/* Elementos decorativos */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tl from-pink-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-75" />
        </div>
        
        <div className="container relative z-10">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            
            {/* Contenido descriptivo */}
            <SlideIn direction="left" delay={0.2}>
              <div className="space-y-8">
                {/* Header */}
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-3 rounded-2xl bg-white/10 backdrop-blur-xl px-6 py-3 border border-white/20 shadow-lg">
                    <Sparkles className="w-5 h-5 text-pink-400" />
                    <span className="font-bold text-white">Excelencia Educativa</span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                      Formamos
                    </span>
                    <br />
                    <span className="text-white">
                      Profesionales
                    </span>
                  </h2>
                </div>
                
                {/* Descripción principal */}
                <p className="text-xl text-gray-200 leading-relaxed font-medium">
                  Nuestra experiencia en <span className="font-bold text-purple-400">educación física</span> nos permite 
                  formar profesionales capacitados que transforman la 
                  <span className="font-bold text-pink-400"> enseñanza deportiva</span> y el 
                  <span className="font-bold text-indigo-400"> desarrollo humano</span>.
                </p>
                
                {/* Características destacadas */}
                <div className="space-y-4">
                  {[
                    "Metodologías pedagógicas innovadoras y efectivas",
                    "Enfoque integral en desarrollo físico y mental",
                    "Capacitación continua de nuestros profesionales",
                    "Resultados medibles en el aprendizaje estudiantil"
                  ].map((feature, index) => (
                    <div 
                      key={feature}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-200 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Call to action */}
                <div className="pt-6">
                  <Button 
                    asChild 
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-2xl hover:shadow-3xl rounded-2xl px-8 py-4 font-bold transition-all duration-300 transform hover:scale-105 border-0"
                  >
                    <Link href="/contacto" className="flex items-center gap-3">
                      <MessageCircle className="w-5 h-5" />
                      <span>Solicitar Consulta</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </div>
              </div>
            </SlideIn>

            {/* Imágenes premium */}
            <SlideIn direction="right" delay={0.4}>
              <div className="space-y-8">
                {[
                  { src: "/educacion-fisica.jpg", alt: "Educación Física" },
                  { src: "/educacion-fisica-2.jpg", alt: "Enseñanza Deportiva" }
                ].map((image, index) => (
                  <div key={image.alt} className="group relative">
                    {/* Glow effect */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                    
                    {/* Container de imagen */}
                    <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-4 border border-white/20 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
                      <div className="relative h-64 w-full overflow-hidden rounded-2xl">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                          onError={(e) => {
                            e.currentTarget.src = "/placeholder.svg"
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent group-hover:from-purple-900/60 transition-all duration-500" />
                        
                        {/* Badge flotante */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-3 border border-white/60">
                            <div className="flex items-center gap-3">
                              <GraduationCap className="w-5 h-5 text-purple-600" />
                              <span className="font-bold text-gray-900">{image.alt}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Sección Beneficios Premium */}
      <section className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 py-24 md:py-32 overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-purple-400/5 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-pink-400/5 to-transparent rounded-full blur-3xl animate-pulse delay-75" />
        </div>
        
        <div className="container relative z-10">
          {/* Header de sección */}
          <FadeIn className="text-center mb-20">
            <div className="inline-flex items-center gap-3 rounded-3xl bg-white/60 backdrop-blur-xl px-8 py-4 mb-8 border border-white/40 shadow-2xl">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg">
                <Trophy className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-purple-600">
                Ventajas Educativas
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
                ¿Por qué
              </span>
              <br />
              <span className="text-gray-900">
                Elegirnos?
              </span>
            </h2>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
              Nuestros <span className="font-bold text-purple-600">servicios de educación física</span> ofrecen 
              <span className="font-bold text-pink-600"> metodologías únicas</span> y resultados comprobados.
            </p>
          </FadeIn>

          {/* Grid de beneficios */}
          <div className="grid md:grid-cols-3 gap-8">
            {beneficios.map((beneficio, index) => {
              const Icon = beneficio.icon
              const colorClasses = {
                purple: "from-purple-500 to-purple-600 text-purple-600 bg-purple-100 border-purple-200",
                pink: "from-pink-500 to-pink-600 text-pink-600 bg-pink-100 border-pink-200",
                indigo: "from-indigo-500 to-indigo-600 text-indigo-600 bg-indigo-100 border-indigo-200"
              } as const
              
              const colors = colorClasses[beneficio.color]
              
              return (
                <ScaleIn key={beneficio.title} delay={index * 0.2}>
                  <div className="group relative h-full">
                    {/* Glow effect */}
                    <div className={`absolute -inset-4 bg-gradient-to-r ${colors.split(' ')[0]} ${colors.split(' ')[1]} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-all duration-500`} />
                    
                    {/* Tarjeta principal */}
                    <div className="relative bg-white/80 backdrop-blur-2xl rounded-3xl p-8 border border-white/60 shadow-2xl group-hover:shadow-3xl transition-all duration-500 h-full flex flex-col group-hover:scale-105">
                      
                      {/* Icono central */}
                      <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${colors.split(' ')[0]} ${colors.split(' ')[1]} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 mx-auto mb-6`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      
                      {/* Contenido */}
                      <div className="text-center flex-1">
                        <h3 className={`text-2xl font-bold ${colors.split(' ')[2]} mb-4 leading-tight`}>
                          {beneficio.title}
                        </h3>
                        
                        <p className="text-gray-700 leading-relaxed font-medium">
                          {beneficio.description}
                        </p>
                      </div>
                      
                      {/* Línea decorativa */}
                      <div className={`mt-6 h-1 bg-gradient-to-r ${colors.split(' ')[0]} ${colors.split(' ')[1]} rounded-full w-0 group-hover:w-full transition-all duration-700 mx-auto`} />
                    </div>
                  </div>
                </ScaleIn>
              )
            })}
          </div>

          {/* Call to action final */}
          <FadeIn className="text-center mt-16">
            <Button 
              asChild 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-2xl hover:shadow-3xl rounded-3xl px-12 py-6 text-lg font-bold transition-all duration-300 transform hover:scale-105 border-0"
            >
              <Link href="/contacto" className="flex items-center gap-3">
                <MessageCircle className="w-6 h-6" />
                <span>Solicitar Información</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  )
} 