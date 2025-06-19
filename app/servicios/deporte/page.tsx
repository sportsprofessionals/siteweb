"use client"

import { useAnimation } from "@/components/animation-provider"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Trophy, Zap, Users, Target, CheckCircle, Sparkles, ArrowRight, Medal, Dumbbell, Brain, Globe, Cpu, MessageCircle, TrendingUp, Award, Star } from "lucide-react"

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
    <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
    <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tl from-emerald-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-75" />
    <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-teal-500/8 to-transparent rounded-full blur-2xl animate-pulse delay-150" />
    
    {/* Formas geométricas flotantes */}
    <div className="absolute top-32 left-1/4 w-6 h-6 bg-green-400/20 transform rotate-45 animate-bounce" />
    <div className="absolute bottom-40 right-1/3 w-8 h-3 bg-emerald-400/25 animate-pulse" />
    <div className="absolute top-2/3 right-20 w-3 h-12 bg-teal-400/20 animate-bounce delay-100" />
    <div className="absolute bottom-1/3 left-32 w-10 h-10 bg-green-400/15 rounded-full animate-ping" />
    
    {/* Líneas decorativas */}
    <div className="absolute top-1/4 left-0 w-48 h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent animate-pulse" />
    <div className="absolute top-2/3 right-0 w-32 h-px bg-gradient-to-l from-transparent via-emerald-400/30 to-transparent animate-pulse delay-200" />
    <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-teal-400/25 to-transparent animate-pulse delay-300" />
  </div>
)

export default function DeportePage() {
  const { FadeIn, SlideIn, ScaleIn } = useAnimation()

  const areasDeServicio = [
    {
      icon: Trophy,
      title: "Alto Rendimiento",
      description: "Deporte y rendimiento de élite",
      servicios: [
        "Deporte y rendimiento",
        "Metodología del entrenamiento deportivo",
        "Preparación física especializada por disciplina",
        "Evaluaciones físicas y control del rendimiento"
      ],
      color: "green"
    },
    {
      icon: Users,
      title: "Inclusión Deportiva",
      description: "Deporte adaptado y accesible",
      servicios: [
        "Deporte adaptado y rendimiento deportivo",
        "Asesoramiento en inclusión deportiva"
      ],
      color: "emerald"
    },
    {
      icon: Brain,
      title: "Formación y Desarrollo",
      description: "Coaching y capacitación profesional",
      servicios: [
        "Coaching deportivo y desarrollo de entrenadores",
        "Capacitación profesional continua"
      ],
      color: "teal"
    },
    {
      icon: Globe,
      title: "Tendencias Deportivas",
      description: "Experiencias innovadoras",
      servicios: [
        "Deportes de nuevas tendencias y aventura",
        "Turismo deportivo y experiencias activas"
      ],
      color: "green"
    },
    {
      icon: Cpu,
      title: "Ciencia y Tecnología",
      description: "Investigación y gestión deportiva",
      servicios: [
        "Investigación deportiva aplicada",
        "Tecnología para el rendimiento",
        "Consultoría y gestión de programas deportivos"
      ],
      color: "emerald"
    }
  ] as const

  const beneficios = [
    {
      icon: Medal,
      title: "Especialización Elite",
      description: "Expertos en diferentes áreas del deporte y el rendimiento de alto nivel.",
      color: "green"
    },
    {
      icon: Zap,
      title: "Innovación Tecnológica",
      description: "Tecnología y metodologías de vanguardia para el deporte moderno.",
      color: "emerald"
    },
    {
      icon: Users,
      title: "Inclusión Total",
      description: "Programas adaptados para todas las personas y capacidades deportivas.",
      color: "teal"
    }
  ] as const

  return (
    <div className="min-h-screen">
      {/* Hero Section Ultra-Premium */}
      <section className="relative bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900 overflow-hidden">
        {/* Partículas flotantes */}
        <FloatingParticles count={40} />
        
        {/* Elementos geométricos */}
        <GeometricShapes />
        
        <div className="container relative z-10 py-24 md:py-32">
          <FadeIn className="text-center max-w-5xl mx-auto">
            {/* Badge premium */}
            <div className="inline-flex items-center gap-3 rounded-3xl bg-white/10 backdrop-blur-xl px-8 py-4 mb-8 border border-white/20 shadow-2xl">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg">
                <Trophy className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white">
                Servicios Deportivos
              </span>
        </div>
            
            {/* Título cinematográfico */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight mb-8">
              <span className="block bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent drop-shadow-2xl">
                Excelencia
              </span>
              <span className="block bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent drop-shadow-xl">
                Deportiva Total
              </span>
        </h1>
            
            {/* Descripción premium */}
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light mb-12">
              Ofrecemos servicios <span className="font-bold text-green-400">especializados en deporte</span> para 
              <span className="font-bold text-emerald-400"> diferentes niveles</span> y necesidades competitivas.
        </p>
            
            {/* Estadísticas de servicio */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              <ScaleIn delay={0.2}>
                <div className="text-center group">
                  <div className="text-4xl md:text-5xl font-black text-white group-hover:scale-110 transition-transform duration-300">5+</div>
                  <div className="text-sm text-gray-300 uppercase tracking-wider">Áreas</div>
                </div>
              </ScaleIn>
              <ScaleIn delay={0.4}>
                <div className="text-center group">
                  <div className="text-4xl md:text-5xl font-black text-green-400 group-hover:scale-110 transition-transform duration-300">15+</div>
                  <div className="text-sm text-gray-300 uppercase tracking-wider">Servicios</div>
                </div>
              </ScaleIn>
              <ScaleIn delay={0.6}>
                <div className="text-center group">
                  <div className="text-4xl md:text-5xl font-black text-emerald-400 group-hover:scale-110 transition-transform duration-300">200+</div>
                  <div className="text-sm text-gray-300 uppercase tracking-wider">Atletas</div>
                </div>
              </ScaleIn>
              <ScaleIn delay={0.8}>
                <div className="text-center group">
                  <div className="text-4xl md:text-5xl font-black text-teal-400 group-hover:scale-110 transition-transform duration-300">100%</div>
                  <div className="text-sm text-gray-300 uppercase tracking-wider">Rendimiento</div>
                </div>
              </ScaleIn>
            </div>
          </FadeIn>
        </div>
        
        {/* Línea decorativa inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500" />
      </section>

      {/* Sección Áreas de Servicio */}
      <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-24 md:py-32 overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-green-400/5 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-emerald-400/5 to-transparent rounded-full blur-3xl animate-pulse delay-75" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-teal-400/3 to-transparent rounded-full blur-3xl animate-pulse delay-150" />
                </div>
        
        <div className="container relative z-10">
          {/* Header de sección */}
          <FadeIn className="text-center mb-20">
            <div className="inline-flex items-center gap-3 rounded-3xl bg-white/60 backdrop-blur-xl px-8 py-4 mb-8 border border-white/40 shadow-2xl">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
                <Target className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-green-600">
                Áreas Especializadas
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
              <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Servicios
              </span>
              <br />
              <span className="text-gray-900">
                Integrales
              </span>
            </h2>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
              Ofrecemos <span className="font-bold text-green-600">áreas especializadas</span> en deporte 
              para <span className="font-bold text-emerald-600">diferentes niveles</span> y necesidades competitivas.
            </p>
          </FadeIn>

          {/* Grid de áreas de servicio ultra-premium */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {areasDeServicio.map((area, index) => {
              const Icon = area.icon
              const colorClasses = {
                green: {
                  bg: "bg-green-100",
                  text: "text-green-600",
                  border: "border-green-200",
                  gradient: "from-green-500 to-green-600",
                  glow: "group-hover:shadow-green-500/25"
                },
                emerald: {
                  bg: "bg-emerald-100", 
                  text: "text-emerald-600",
                  border: "border-emerald-200",
                  gradient: "from-emerald-500 to-emerald-600",
                  glow: "group-hover:shadow-emerald-500/25"
                },
                teal: {
                  bg: "bg-teal-100",
                  text: "text-teal-600",
                  border: "border-teal-200",
                  gradient: "from-teal-500 to-teal-600", 
                  glow: "group-hover:shadow-teal-500/25"
                }
              } as const
              
              const colors = colorClasses[area.color]
              
              return (
                <SlideIn key={area.title} direction="up" delay={index * 0.1}>
                  <div className="group relative h-full">
                    {/* Glow effect */}
                    <div className={`absolute -inset-2 bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-lg transition-all duration-500`} />
                    
                    {/* Tarjeta principal glassmorphism */}
                    <div className={`relative bg-white/80 backdrop-blur-xl rounded-2xl p-8 border ${colors.border} border-opacity-40 shadow-xl ${colors.glow} group-hover:shadow-2xl transition-all duration-500 h-full flex flex-col group-hover:scale-105`}>
                      
                      {/* Header del área */}
                      <div className="flex items-start gap-6 mb-6">
                        <div className={`w-20 h-20 rounded-2xl ${colors.bg} ${colors.border} border flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                          <Icon className={`w-10 h-10 ${colors.text}`} />
                        </div>
                        <div>
                          <h3 className={`text-2xl font-bold ${colors.text} mb-2 leading-tight group-hover:text-gray-900 transition-colors duration-300`}>
                            {area.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed font-medium">
                            {area.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Lista de servicios */}
                      <div className="space-y-3 flex-1">
                        {area.servicios.map((servicio, servicioIndex) => (
                          <div 
                            key={servicio}
                            className="flex items-center gap-3 p-3 rounded-xl bg-gray-50/50 border border-gray-100 group-hover:bg-white/60 transition-all duration-300"
                          >
                            <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${colors.gradient} flex items-center justify-center flex-shrink-0`}>
                              <CheckCircle className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-gray-700 font-medium text-sm">
                              {servicio}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Línea decorativa */}
                      <div className={`mt-6 h-1 bg-gradient-to-r ${colors.gradient} rounded-full w-0 group-hover:w-full transition-all duration-700`} />
            </div>
          </div>
        </SlideIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* Sección Imágenes Showcase */}
      <section className="relative bg-gradient-to-br from-slate-800 via-green-900 to-emerald-900 py-24 md:py-32 overflow-hidden">
        {/* Partículas flotantes */}
        <FloatingParticles count={25} />
        
        {/* Elementos decorativos */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-green-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tl from-emerald-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-75" />
        </div>
        
        <div className="container relative z-10">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            
            {/* Contenido descriptivo */}
            <SlideIn direction="left" delay={0.2}>
              <div className="space-y-8">
                {/* Header */}
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-3 rounded-2xl bg-white/10 backdrop-blur-xl px-6 py-3 border border-white/20 shadow-lg">
                    <Sparkles className="w-5 h-5 text-emerald-400" />
                    <span className="font-bold text-white">Excelencia Deportiva</span>
      </div>

                  <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
                    <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                      Potenciamos
                    </span>
                    <br />
                    <span className="text-white">
                      Campeones
                    </span>
                  </h2>
                </div>
                
                {/* Descripción principal */}
                <p className="text-xl text-gray-200 leading-relaxed font-medium">
                  Nuestra experiencia en <span className="font-bold text-green-400">ciencias del deporte</span> nos permite 
                  desarrollar atletas de alto rendimiento, implementando 
                  <span className="font-bold text-emerald-400"> tecnología de vanguardia</span> y 
                  <span className="font-bold text-teal-400"> metodologías innovadoras</span>.
                </p>
                
                {/* Características destacadas */}
                <div className="space-y-4">
                  {[
                    "Metodologías científicas de entrenamiento deportivo",
                    "Tecnología avanzada para análisis de rendimiento",
                    "Programas de inclusión y deporte adaptado",
                    "Desarrollo integral de talentos deportivos"
                  ].map((feature, index) => (
                    <div 
                      key={feature}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
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
                    className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-2xl hover:shadow-3xl rounded-2xl px-8 py-4 font-bold transition-all duration-300 transform hover:scale-105 border-0"
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
                  { src: "/deporte.jpg", alt: "Deporte de Alto Rendimiento" },
                  { src: "/deporte-2.jpg", alt: "Deporte Adaptado e Inclusivo" }
                ].map((image, index) => (
                  <div key={image.alt} className="group relative">
                    {/* Glow effect */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                    
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
                        <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent group-hover:from-green-900/60 transition-all duration-500" />
                        
                        {/* Badge flotante */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-3 border border-white/60">
                            <div className="flex items-center gap-3">
                              <Trophy className="w-5 h-5 text-green-600" />
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
      <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-24 md:py-32 overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-green-400/5 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-emerald-400/5 to-transparent rounded-full blur-3xl animate-pulse delay-75" />
        </div>
        
        <div className="container relative z-10">
          {/* Header de sección */}
          <FadeIn className="text-center mb-20">
            <div className="inline-flex items-center gap-3 rounded-3xl bg-white/60 backdrop-blur-xl px-8 py-4 mb-8 border border-white/40 shadow-2xl">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
                <Star className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-green-600">
                Ventajas Competitivas
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
              <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                ¿Por qué
              </span>
              <br />
              <span className="text-gray-900">
                Elegirnos?
              </span>
            </h2>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
              Nuestros <span className="font-bold text-green-600">servicios deportivos</span> ofrecen 
              <span className="font-bold text-emerald-600"> metodologías avanzadas</span> y resultados excepcionales.
            </p>
          </FadeIn>

          {/* Grid de beneficios */}
          <div className="grid md:grid-cols-3 gap-8">
            {beneficios.map((beneficio, index) => {
              const Icon = beneficio.icon
              const colorClasses = {
                green: "from-green-500 to-green-600 text-green-600 bg-green-100 border-green-200",
                emerald: "from-emerald-500 to-emerald-600 text-emerald-600 bg-emerald-100 border-emerald-200",
                teal: "from-teal-500 to-teal-600 text-teal-600 bg-teal-100 border-teal-200"
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
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-2xl hover:shadow-3xl rounded-3xl px-12 py-6 text-lg font-bold transition-all duration-300 transform hover:scale-105 border-0"
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