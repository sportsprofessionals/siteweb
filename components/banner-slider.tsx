"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface Slide {
  id: string
  title: string
  description: string
  image: string
  href?: string
  logo?: string
  type?: string
}

const slides: Slide[] = [
  {
    id: "aliado-fenix",
    title: "Nuevo Aliado Deportivo",
    description: "Centro de Desarrollo Deportivo FENIX - Especializado en canchas de voleibol y baloncesto reglamentarias. Ubicado en Barrio Salazar Gómez.",
    image: "/voley2.jpg",
    href: "/aliados-deportivos/fenix",
    logo: "/fenix-logo.jpg",
    type: "aliado"
  },
  {
    id: "aliado-medusas",
    title: "Nuevo Aliado Deportivo", 
    description: "Club Medusas - Club especializado en actividades subacuáticas que desarrolla sus actividades en el Complejo Acuático Simón Bolívar.",
    image: "/medusas2.jpeg",
    href: "/aliados-deportivos/medusas",
    logo: "/medusas-logo.jpg",
    type: "aliado"
  },
  {
    id: "admin-deportiva",
    title: "Administración Deportiva",
    description: "Planeación estratégica, liderazgo, marketing social del deporte y asesorías a empresas deportivas.",
    image: "/admin-deportiva-2.jpg",
    href: "/servicios/administracion-deportiva",
  },
  {
    id: "educacion-fisica",
    title: "Educación Física",
    description: "Administración y gestión de la educación física escolar y comunitaria, formación de habilidades motoras.",
    image: "/educacion-fisica-2.jpg",
    href: "/servicios/educacion-fisica",
  },
  {
    id: "actividad-fisica",
    title: "Actividad Física",
    description: "Pausas activas empresariales, actividad física para adultos y acondicionamiento físico.",
    image: "/actividad-fisica-2.jpg",
    href: "/servicios/actividad-fisica",
  },
  {
    id: "deporte",
    title: "Deporte",
    description: "Capacitación en entrenamiento deportivo, monitores deportivos, entrenadores y turismo deportivo.",
    image: "/deporte-2.jpg",
    href: "/servicios/deporte",
  },
  {
    id: "recreacion",
    title: "Recreación",
    description: "Experiencias activas y bienestar integral para empresas e instituciones",
    image: "/recreacion-2.jpg",
    href: "/servicios/recreacion",
  }
]

export default function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  // Check if device is mobile when component mounts and on window resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    // Set initial value
    checkIfMobile()
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile)
    
    // Cleanup event listener on component unmount
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
        prevSlide() // Swipe right, go to previous slide
      } else {
        nextSlide() // Swipe left, go to next slide
      }
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div 
      className="relative h-[500px] md:h-[600px] overflow-hidden" 
      ref={sliderRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none",
          )}
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white p-4">
            {slide.type === "aliado" ? (
              <div className="container mx-auto px-6 md:px-8 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                  <div className="text-white space-y-6">
                    <div className="inline-block bg-[#0B8CBF]/20 px-4 py-2 rounded-full text-sm font-medium text-white/90 mb-4">
                      {slide.title}
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                      {slide.id === "aliado-fenix" ? "Centro de Desarrollo Deportivo FENIX" : "Club Medusas"}
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl">
                      {slide.description}
                    </p>
                    <div className="pt-6">
                      <Button asChild size="lg" className="bg-[#0B8CBF] hover:bg-[#0B8CBF]/90 text-white px-8 py-4 text-lg">
                        <Link href={slide.href!}>
                          Conocer más
                        </Link>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex justify-center lg:justify-end">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-md w-full">
                      <div className="h-40 md:h-48 flex items-center justify-center mb-6">
                        <Image
                          src={slide.logo!}
                          alt={`Logo ${slide.id === "aliado-fenix" ? "FENIX" : "Medusas"}`}
                          width={slide.id === "aliado-fenix" ? 240 : 180}
                          height={slide.id === "aliado-fenix" ? 120 : 240}
                          className="object-contain max-h-full w-auto"
                          onError={(e) => {
                            e.currentTarget.src = "/placeholder.svg"
                          }}
                        />
                      </div>
                      <div className="text-center">
                        <h3 className="text-white font-semibold text-xl mb-3">
                          {slide.id === "aliado-fenix" ? "Centro FENIX" : "Club Medusas"}
                        </h3>
                        <p className="text-white/80 text-base leading-relaxed">
                          {slide.id === "aliado-fenix" 
                            ? "4 canchas de voleibol reglamentarias • 2 de baloncesto próximamente" 
                            : "Actividades subacuáticas especializadas • Complejo Acuático Simón Bolívar"
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-white space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed">
                  {slide.description}
                </p>
                {slide.href && (
                  <div className="pt-4">
                    <Button asChild size="lg" className="bg-[#0B8CBF] hover:bg-[#0B8CBF]/90 text-white">
                      <Link href={slide.href}>
                        Conocer más
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
      
      {/* Navigation buttons - only shown on non-mobile devices */}
      {!isMobile && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full hidden md:block"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full hidden md:block"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-colors",
              index === currentSlide ? "bg-white" : "bg-white/50"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}