"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Slide {
  image: string
  title: string
  description: string
  buttonText: string
  buttonLink: string
}

const slides: Slide[] = [
  {
    image: "/Administracion-Deportiva.jpg",
    title: "Administración Deportiva",
    description: "Planeación estratégica y liderazgo para el éxito de su organización deportiva",
    buttonText: "Conocer más",
    buttonLink: "/servicios/administracion-deportiva",
  },
  {
    image: "/Servicios-Deportivos.jpg",
    title: "Servicios Deportivos",
    description: "Capacitación en entrenamiento deportivo y monitores especializados",
    buttonText: "Ver servicios",
    buttonLink: "/servicios/servicios-deportivos",
  },
  {
    image: "/Formacion-Profesional.jpg",
    title: "Formación Profesional",
    description: "Transferimos nuestro conocimiento y experiencia en el mundo de la gestión del deporte",
    buttonText: "Programas",
    buttonLink: "/formacion",
  },
]

export default function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)
  const sliderRef = useRef<HTMLDivElement>(null)

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
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none",
          )}
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="relative z-20 flex h-full items-center">
            <div className="container px-4 md:px-6">
              <div className="max-w-lg text-white">
                <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{slide.title}</h1>
                <p className="mb-6 text-lg text-gray-200">{slide.description}</p>
                <Button asChild className="bg-[#5E308C] hover:bg-[#5357A6] text-white">
                  <a href={slide.buttonLink}>{slide.buttonText}</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Botones de navegación - solo visibles en tablets/desktop */}
      <div className="hidden md:block">
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 z-30 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Anterior</span>
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 z-30 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm"
          onClick={nextSlide}
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Siguiente</span>
        </Button>
      </div>

      {/* Indicadores de diapositiva */}
      <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={cn(
              "h-2 w-2 rounded-full transition-colors",
              index === currentSlide ? "bg-white" : "bg-white/50",
            )}
            onClick={() => setCurrentSlide(index)}
          >
            <span className="sr-only">Diapositiva {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}