"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ArrowRight, Play, Sparkles, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface Slide {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  href?: string
  accent: string
  icon: any
}

const slides: Slide[] = [
  {
    id: "admin-deportiva",
    title: "Administración",
    subtitle: "Deportiva",
    description: "Planeación estratégica, liderazgo y marketing social del deporte con enfoque profesional e innovador.",
    image: "/admin-deportiva-2.jpg",
    href: "/servicios/administracion-deportiva",
    accent: "from-blue-400 to-cyan-500",
    icon: ChevronRight,
  },
  {
    id: "educacion-fisica",
    title: "Educación",
    subtitle: "Física",
    description: "Administración y gestión educativa escolar y comunitaria, formación integral de habilidades motoras.",
    image: "/educacion-fisica-2.jpg",
    href: "/servicios/educacion-fisica",
    accent: "from-purple-400 to-pink-500",
    icon: Sparkles,
  },
  {
    id: "actividad-fisica",
    title: "Actividad",
    subtitle: "Física",
    description: "Pausas activas empresariales, programas de bienestar y acondicionamiento físico personalizado.",
    image: "/actividad-fisica-2.jpg",
    href: "/servicios/actividad-fisica",
    accent: "from-orange-400 to-red-500",
    icon: Zap,
  },
  {
    id: "deporte",
    title: "Deporte",
    subtitle: "Competitivo",
    description: "Capacitación en entrenamiento deportivo, formación de monitores y turismo deportivo especializado.",
    image: "/deporte-2.jpg",
    href: "/servicios/deporte",
    accent: "from-green-400 to-emerald-500",
    icon: Play,
  },
  {
    id: "recreacion",
    title: "Recreación",
    subtitle: "Integral",
    description: "Experiencias activas y bienestar integral para empresas, instituciones y comunidades.",
    image: "/recreacion-2.jpg",
    href: "/servicios/recreacion",
    accent: "from-indigo-400 to-blue-500",
    icon: ArrowRight,
  }
]

// Componente de partículas flotantes
const FloatingParticles = ({ count = 50 }: { count?: number }) => {
  const particles = Array.from({ length: count }, (_, i) => {
    const delay = Math.random() * 20
    const duration = 15 + Math.random() * 25
    const size = 2 + Math.random() * 4
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

// Componente de geometrías decorativas
const GeometricShapes = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Círculos grandes con gradientes */}
    <div className="absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse" />
    <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-full blur-3xl animate-pulse delay-75" />
    <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-cyan-500/15 to-transparent rounded-full blur-2xl animate-pulse delay-150" />
    
    {/* Formas geométricas flotantes */}
    <div className="absolute top-20 left-1/4 w-4 h-4 bg-white/20 transform rotate-45 animate-bounce" />
    <div className="absolute bottom-32 right-1/4 w-6 h-2 bg-cyan-400/30 animate-pulse" />
    <div className="absolute top-1/3 right-20 w-2 h-8 bg-purple-400/25 animate-bounce delay-100" />
    <div className="absolute bottom-1/4 left-20 w-8 h-8 bg-blue-400/20 rounded-full animate-ping" />
    
    {/* Líneas decorativas */}
    <div className="absolute top-1/2 left-0 w-32 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
    <div className="absolute top-1/3 right-0 w-24 h-px bg-gradient-to-l from-transparent via-cyan-400/40 to-transparent animate-pulse delay-200" />
  </div>
)

export default function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  // Handle touch events for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const minSwipeDistance = 50
    const swipeDistance = touchEndX.current - touchStartX.current
    
    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        prevSlide()
      } else {
        nextSlide()
      }
    }
  }

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      nextSlide()
    }, 7000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const currentSlideData = slides[currentSlide]
  const Icon = currentSlideData.icon

  return (
    <div 
      className="relative h-[70vh] md:h-[85vh] overflow-hidden" 
      ref={sliderRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Partículas flotantes */}
      <FloatingParticles count={40} />
      
      {/* Geometrías decorativas */}
      <GeometricShapes />

      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-all duration-1500 ease-in-out",
            index === currentSlide 
              ? "opacity-100 scale-100" 
              : "opacity-0 scale-110 pointer-events-none",
          )}
        >
          {/* Imagen de fondo con parallax */}
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className={cn(
                "object-cover transition-transform duration-[3000ms] ease-out",
                index === currentSlide ? "scale-105" : "scale-100"
              )}
              priority={index === 0}
            />
            {/* Overlay gradiente dinámico */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40" />
            <div className={cn(
              "absolute inset-0 bg-gradient-to-r opacity-30",
              slide.accent.replace('from-', 'from-').replace('to-', 'to-') + '/20'
            )} />
          </div>

          {/* Contenido principal */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white p-4">
            <div className="max-w-6xl mx-auto space-y-8">
              
              {/* Badge dinámico */}
              <div className={cn(
                "inline-flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-xl px-6 py-3 border border-white/20 shadow-2xl opacity-0 animate-in slide-in-from-top-4 duration-1000",
                index === currentSlide && "opacity-100"
              )}
              style={{
                animationDelay: index === currentSlide ? "0.2s" : "0s"
              }}>
                <div className={cn(
                  "w-8 h-8 rounded-full bg-gradient-to-br flex items-center justify-center shadow-lg",
                  slide.accent
                )}>
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-bold">
                  Servicios Especializados
                </span>
              </div>

              {/* Título principal animado */}
              <div className="space-y-4">
                <h1 className={cn(
                  "text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight opacity-0 animate-in slide-in-from-bottom-8 duration-1000",
                  index === currentSlide && "opacity-100"
                )}
                style={{
                  animationDelay: index === currentSlide ? "0.4s" : "0s"
                }}>
                  <span className="block bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent drop-shadow-2xl">
                    {slide.title}
                  </span>
                  <span className={cn(
                    "block bg-gradient-to-r bg-clip-text text-transparent drop-shadow-xl",
                    slide.accent
                  )}>
                    {slide.subtitle}
                  </span>
                </h1>
              </div>

              {/* Descripción con efectos */}
              <p className={cn(
                "text-xl md:text-2xl lg:text-3xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light opacity-0 animate-in slide-in-from-bottom-4 duration-1000",
                index === currentSlide && "opacity-100"
              )}
              style={{
                animationDelay: index === currentSlide ? "0.6s" : "0s"
              }}>
                {slide.description}
              </p>

              {/* Botones de acción */}
              {slide.href && (
                <div className={cn(
                  "flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 opacity-0 animate-in slide-in-from-bottom-4 duration-1000",
                  index === currentSlide && "opacity-100"
                )}
                style={{
                  animationDelay: index === currentSlide ? "0.8s" : "0s"
                }}>
                  <Button 
                    asChild 
                    size="lg" 
                    className={cn(
                      "bg-gradient-to-r hover:shadow-2xl text-white shadow-xl rounded-2xl px-8 py-4 text-lg font-bold transition-all duration-500 border-0 group transform hover:scale-105",
                      slide.accent,
                      "hover:from-white hover:to-gray-100 hover:text-gray-900"
                    )}
                  >
                    <Link href={slide.href} className="flex items-center gap-3">
                      <span>Explorar Servicio</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </Link>
                  </Button>
                  
                  <Button 
                    asChild 
                    variant="outline" 
                    size="lg"
                    className="border-2 border-white/40 text-white bg-white/10 backdrop-blur-lg hover:bg-white/20 hover:border-white/60 rounded-2xl px-8 py-4 text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Link href="/contacto" className="flex items-center gap-2">
                      <span>Contactar</span>
                    </Link>
                  </Button>
                </div>
              )}

              {/* Estadísticas rápidas */}
              <div className={cn(
                "flex items-center justify-center gap-4 md:gap-8 mt-8 md:mt-12 mb-16 md:mb-8 opacity-0 animate-in fade-in duration-1000",
                index === currentSlide && "opacity-100"
              )}
              style={{
                animationDelay: index === currentSlide ? "1s" : "0s"
              }}>
                <div className="text-center group">
                  <div className="text-lg md:text-2xl lg:text-3xl font-black text-white group-hover:scale-110 transition-transform duration-300">5+</div>
                  <div className="text-xs md:text-sm text-gray-300 uppercase tracking-wider">Servicios</div>
                </div>
                <div className="h-6 md:h-8 w-px bg-white/30" />
                <div className="text-center group">
                  <div className="text-lg md:text-2xl lg:text-3xl font-black text-white group-hover:scale-110 transition-transform duration-300">100+</div>
                  <div className="text-xs md:text-sm text-gray-300 uppercase tracking-wider">Clientes</div>
                </div>
                <div className="h-6 md:h-8 w-px bg-white/30" />
                <div className="text-center group">
                  <div className="text-lg md:text-2xl lg:text-3xl font-black text-white group-hover:scale-110 transition-transform duration-300">24/7</div>
                  <div className="text-xs md:text-sm text-gray-300 uppercase tracking-wider">Soporte</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Controles de navegación rediseñados */}
      {!isMobile && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-4 rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 group transform hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 group-hover:-translate-x-1 transition-transform duration-300" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-4 rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 group transform hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </>
      )}
      
      {/* Indicadores rediseñados */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 md:gap-3">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "relative overflow-hidden rounded-full transition-all duration-500 group",
              index === currentSlide 
                ? "w-8 md:w-12 h-3 md:h-4 bg-white" 
                : "w-3 md:w-4 h-3 md:h-4 bg-white/40 hover:bg-white/60"
            )}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentSlide && (
              <div className={cn(
                "absolute inset-0 bg-gradient-to-r rounded-full animate-pulse",
                slide.accent
              )} />
            )}
          </button>
        ))}
        
        {/* Indicador de auto-play */}
        <div className="ml-2 md:ml-4 hidden md:flex items-center gap-2 bg-black/20 backdrop-blur-md rounded-full px-3 py-1 border border-white/20">
          <div className={cn(
            "w-2 h-2 rounded-full transition-colors duration-300",
            isAutoPlaying ? "bg-green-400 animate-pulse" : "bg-gray-400"
          )} />
          <span className="text-xs text-white/80 font-medium">
            {isAutoPlaying ? "AUTO" : "MANUAL"}
          </span>
        </div>
      </div>

      {/* Línea de progreso del slide */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-30">
        <div 
          className={cn(
            "h-full bg-gradient-to-r transition-all duration-300",
            currentSlideData.accent
          )}
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`
          }}
        />
      </div>
    </div>
  )
}