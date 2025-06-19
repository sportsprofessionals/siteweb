"use client"

import { useAnimation } from "@/components/animation-provider"
import Image from "next/image"
import { Eye, Target, Zap, Users, Award, Sparkles, CheckCircle, TrendingUp, Globe, Heart } from "lucide-react"

// Componente de partículas flotantes
const FloatingParticles = ({ count = 30 }: { count?: number }) => {
  const particles = Array.from({ length: count }, (_, i) => {
    const delay = Math.random() * 15
    const duration = 20 + Math.random() * 30
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
    <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tl from-cyan-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-75" />
    <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/8 to-transparent rounded-full blur-2xl animate-pulse delay-150" />
    
    {/* Formas geométricas flotantes */}
    <div className="absolute top-32 left-1/4 w-6 h-6 bg-blue-400/20 transform rotate-45 animate-bounce" />
    <div className="absolute bottom-40 right-1/3 w-8 h-3 bg-cyan-400/25 animate-pulse" />
    <div className="absolute top-2/3 right-20 w-3 h-12 bg-purple-400/20 animate-bounce delay-100" />
    <div className="absolute bottom-1/3 left-32 w-10 h-10 bg-blue-400/15 rounded-full animate-ping" />
    
    {/* Líneas decorativas */}
    <div className="absolute top-1/4 left-0 w-48 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-pulse" />
    <div className="absolute top-2/3 right-0 w-32 h-px bg-gradient-to-l from-transparent via-cyan-400/30 to-transparent animate-pulse delay-200" />
    <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-purple-400/25 to-transparent animate-pulse delay-300" />
  </div>
)

export default function QuienesSomosPage() {
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
          <FadeIn className="text-center max-w-4xl mx-auto">
            {/* Badge premium */}
            <div className="inline-flex items-center gap-3 rounded-3xl bg-white/10 backdrop-blur-xl px-8 py-4 mb-8 border border-white/20 shadow-2xl">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center shadow-lg">
                <Users className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white">
                Quiénes Somos
              </span>
            </div>
            
            {/* Título cinematográfico */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight mb-8">
              <span className="block bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent drop-shadow-2xl">
                Nuestra
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent drop-shadow-xl">
                Identidad
              </span>
            </h1>
            
            {/* Descripción premium */}
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light mb-12">
              Descubre los <span className="font-bold text-cyan-400">valores fundamentales</span> que definen 
              nuestra misión, visión y compromiso con la <span className="font-bold text-blue-400">excelencia deportiva</span>.
            </p>
            
            {/* Estadísticas inspiradoras */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              <ScaleIn delay={0.2}>
                <div className="text-center group">
                  <div className="text-4xl md:text-5xl font-black text-white group-hover:scale-110 transition-transform duration-300">5+</div>
                  <div className="text-sm text-gray-300 uppercase tracking-wider">Años</div>
                </div>
              </ScaleIn>
              <ScaleIn delay={0.4}>
                <div className="text-center group">
                  <div className="text-4xl md:text-5xl font-black text-cyan-400 group-hover:scale-110 transition-transform duration-300">100+</div>
                  <div className="text-sm text-gray-300 uppercase tracking-wider">Clientes</div>
                </div>
              </ScaleIn>
              <ScaleIn delay={0.6}>
                <div className="text-center group">
                  <div className="text-4xl md:text-5xl font-black text-blue-400 group-hover:scale-110 transition-transform duration-300">5</div>
                  <div className="text-sm text-gray-300 uppercase tracking-wider">Servicios</div>
                </div>
              </ScaleIn>
              <ScaleIn delay={0.8}>
                <div className="text-center group">
                  <div className="text-4xl md:text-5xl font-black text-purple-400 group-hover:scale-110 transition-transform duration-300">24/7</div>
                  <div className="text-sm text-gray-300 uppercase tracking-wider">Soporte</div>
                </div>
              </ScaleIn>
            </div>
          </FadeIn>
        </div>
        
        {/* Línea decorativa inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500" />
      </section>

      {/* Sección Misión y Visión Ultra-Moderna */}
      <section className="relative bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 py-24 md:py-32 overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-400/5 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-cyan-400/5 to-transparent rounded-full blur-3xl animate-pulse delay-75" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/3 to-transparent rounded-full blur-2xl animate-pulse delay-150" />
        </div>
        
        <div className="container relative z-10">
          {/* Header de sección */}
          <FadeIn className="text-center mb-20">
            <div className="inline-flex items-center gap-3 rounded-3xl bg-white/60 backdrop-blur-xl px-8 py-4 mb-8 border border-white/40 shadow-xl">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-500 animate-pulse" />
                <div className="w-6 h-6 rounded-full bg-cyan-500 animate-pulse delay-75" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Fundamentos Organizacionales
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">
                Misión y Visión
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Los pilares fundamentales que guían nuestro compromiso con la 
              <span className="font-bold text-blue-600"> excelencia deportiva</span> y el 
              <span className="font-bold text-cyan-600"> desarrollo integral</span>.
            </p>
          </FadeIn>

          {/* Grid de Misión y Visión */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Tarjeta Misión Ultra-Premium */}
            <SlideIn direction="left" delay={0.2}>
              <div className="group relative">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                
                {/* Tarjeta principal */}
                <div className="relative bg-white/80 backdrop-blur-2xl rounded-3xl p-8 md:p-10 border border-white/60 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
                  
                  {/* Header con ícono */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-black text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        Misión
                      </h3>
                      <p className="text-gray-600 font-medium">Nuestro compromiso fundamental</p>
                    </div>
                  </div>
                  
                  {/* Contenido */}
                  <div className="space-y-6">
                    <p className="text-lg text-gray-700 leading-relaxed font-medium">
                      Brindar <span className="font-bold text-blue-600">soluciones integrales e innovadoras</span> a 
                      nuestros clientes por medio de servicios especializados en administración deportiva, 
                      educación física, actividad física, deporte y recreación, que contribuya efectivamente 
                      al <span className="font-bold text-cyan-600">desarrollo social y económico</span> del país.
                    </p>
                    
                    {/* Palabras clave */}
                    <div className="flex flex-wrap gap-3">
                      {['Innovación', 'Excelencia', 'Desarrollo Social', 'Especialización'].map((keyword, index) => (
                        <span 
                          key={keyword}
                          className="px-4 py-2 rounded-2xl bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 font-semibold text-sm border border-blue-200/50 group-hover:from-blue-200 group-hover:to-cyan-200 transition-all duration-300"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                    
                    {/* Imagen con overlay */}
                    <div className="relative h-64 w-full overflow-hidden rounded-2xl group-hover:rounded-3xl transition-all duration-500">
                      <Image
                        src="/mision.jpg"
                        alt="Nuestra Misión"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg"
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent group-hover:from-blue-900/60 transition-all duration-500" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 border border-white/60">
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-6 h-6 text-blue-600" />
                            <span className="font-bold text-gray-900">Compromiso Social</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Líneas decorativas */}
                  <div className="absolute top-4 right-4 w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full group-hover:w-16 transition-all duration-300" />
                  <div className="absolute bottom-4 left-4 w-8 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full group-hover:w-12 transition-all duration-300" />
                </div>
              </div>
            </SlideIn>

            {/* Tarjeta Visión Ultra-Premium */}
            <SlideIn direction="right" delay={0.4}>
              <div className="group relative">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                
                {/* Tarjeta principal */}
                <div className="relative bg-white/80 backdrop-blur-2xl rounded-3xl p-8 md:p-10 border border-white/60 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
                  
                  {/* Header con ícono */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-black text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                        Visión
                      </h3>
                      <p className="text-gray-600 font-medium">Nuestro futuro proyectado</p>
                    </div>
                  </div>
                  
                  {/* Contenido */}
                  <div className="space-y-6">
                    <p className="text-lg text-gray-700 leading-relaxed font-medium">
                      Posicionarnos, en el año <span className="font-bold text-purple-600">2029</span>, como una 
                      organización de excelencia, altamente competitiva y referente a 
                      <span className="font-bold text-pink-600"> nivel nacional e internacional</span>, reconocida 
                      por su liderazgo en servicios integrales e innovadores en los ámbitos de la gestión 
                      deportiva, la educación física, la actividad física, el deporte y la recreación.
                    </p>
                    
                    {/* Objetivos clave con iconos */}
                    <div className="space-y-3">
                      {[
                        { icon: TrendingUp, text: "Liderazgo Nacional", color: "purple" },
                        { icon: Globe, text: "Proyección Internacional", color: "pink" },
                        { icon: Award, text: "Excelencia Reconocida", color: "purple" },
                        { icon: Heart, text: "Impacto Social", color: "pink" }
                      ].map((item, index) => {
                        const Icon = item.icon
                        return (
                          <div 
                            key={item.text}
                            className="flex items-center gap-3 p-3 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 group-hover:from-purple-100 group-hover:to-pink-100 transition-all duration-300"
                            style={{ animationDelay: `${index * 100}ms` }}
                          >
                            <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${item.color === 'purple' ? 'from-purple-500 to-purple-600' : 'from-pink-500 to-pink-600'} flex items-center justify-center`}>
                              <Icon className="w-4 h-4 text-white" />
                            </div>
                            <span className="font-semibold text-gray-700">{item.text}</span>
                          </div>
                        )
                      })}
                    </div>
                    
                    {/* Imagen con overlay */}
                    <div className="relative h-64 w-full overflow-hidden rounded-2xl group-hover:rounded-3xl transition-all duration-500">
                      <Image
                        src="/vision.jpg"
                        alt="Nuestra Visión"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg"
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent group-hover:from-purple-900/60 transition-all duration-500" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 border border-white/60">
                          <div className="flex items-center gap-3">
                            <Sparkles className="w-6 h-6 text-purple-600" />
                            <span className="font-bold text-gray-900">Visión 2029</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Líneas decorativas */}
                  <div className="absolute top-4 right-4 w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full group-hover:w-16 transition-all duration-300" />
                  <div className="absolute bottom-4 left-4 w-8 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full group-hover:w-12 transition-all duration-300" />
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Sección de Valores Corporativos */}
      <section className="relative bg-gradient-to-br from-slate-800 via-indigo-900 to-purple-900 py-24 md:py-32 overflow-hidden">
        {/* Partículas flotantes */}
        <FloatingParticles count={25} />
        
        {/* Elementos decorativos */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-75" />
        </div>
        
        <div className="container relative z-10">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-3 rounded-3xl bg-white/10 backdrop-blur-xl px-8 py-4 mb-8 border border-white/20 shadow-2xl">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center shadow-lg">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white">
                Nuestros Valores
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-white">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Excelencia
              </span>
              <br />
              <span className="text-white">
                en Cada Acción
              </span>
            </h2>
            
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Los valores que definen nuestra cultura organizacional y guían cada decisión hacia la 
              <span className="font-bold text-cyan-400"> transformación deportiva</span>.
            </p>
          </FadeIn>

          {/* Grid de valores */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Excelencia",
                description: "Búsqueda constante de la más alta calidad en todos nuestros servicios y procesos.",
                gradient: "from-yellow-400 to-orange-500",
                delay: 0.1
              },
              {
                icon: Users,
                title: "Trabajo en Equipo",
                description: "Colaboración sinérgica para alcanzar objetivos comunes con eficiencia y armonía.",
                gradient: "from-blue-400 to-cyan-500",
                delay: 0.2
              },
              {
                icon: Heart,
                title: "Compromiso Social",
                description: "Responsabilidad activa con el desarrollo integral de nuestras comunidades.",
                gradient: "from-pink-400 to-red-500",
                delay: 0.3
              },
              {
                icon: Zap,
                title: "Innovación",
                description: "Adopción de nuevas tecnologías y metodologías para soluciones vanguardistas.",
                gradient: "from-purple-400 to-indigo-500",
                delay: 0.4
              },
              {
                icon: CheckCircle,
                title: "Integridad",
                description: "Transparencia y honestidad en todas nuestras relaciones y operaciones.",
                gradient: "from-green-400 to-emerald-500",
                delay: 0.5
              },
              {
                icon: TrendingUp,
                title: "Mejora Continua",
                description: "Evolución permanente de nuestros procesos y servicios hacia la perfección.",
                gradient: "from-cyan-400 to-blue-500",
                delay: 0.6
              }
            ].map((valor, index) => {
              const Icon = valor.icon
              return (
                <ScaleIn key={valor.title} delay={valor.delay}>
                  <div className="group relative">
                    {/* Glow effect */}
                    <div className={`absolute -inset-2 bg-gradient-to-r ${valor.gradient} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-all duration-500`} />
                    
                    {/* Tarjeta */}
                    <div className="relative bg-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105 h-full">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${valor.gradient} flex items-center justify-center shadow-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-black text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                        {valor.title}
                      </h3>
                      
                      <p className="text-gray-300 leading-relaxed font-medium">
                        {valor.description}
                      </p>
                      
                      {/* Línea decorativa */}
                      <div className={`mt-6 h-1 bg-gradient-to-r ${valor.gradient} rounded-full w-0 group-hover:w-full transition-all duration-500`} />
                    </div>
                  </div>
                </ScaleIn>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
