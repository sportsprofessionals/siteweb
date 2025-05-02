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
    image: "/admin-deportiva.jpg",
    title: "Administración Deportiva",
    description: "Planeación estratégica y liderazgo para el éxito de su organización deportiva",
    buttonText: "Conocer más",
    buttonLink: "/servicios/administracion-deportiva",
  },
  {
    image: "/educacion-fisica.jpg",
    title: "Educación Física",
    description: "Formación y desarrollo de habilidades motoras para todas las edades",
    buttonText: "Ver servicios",
    buttonLink: "/servicios/educacion-fisica",
  },
  {
    image: "/actividad-fisica.png",
    title: "Actividad Física",
    description: "Programas personalizados para mejorar la salud y el bienestar",
    buttonText: "Explorar",
    buttonLink: "/servicios/actividad-fisica",
  },
  {
    image: "/Deporte.png",
    title: "Deporte",
    description: "Alto rendimiento, inclusión y desarrollo deportivo integral",
    buttonText: "Descubrir",
    buttonLink: "/servicios/deporte",
  },
  {
    image: "/recreacion.jpg",
    title: "Recreación",
    description: "Experiencias activas y bienestar integral para empresas e instituciones",
    buttonText: "Conocer más",
    buttonLink: "/servicios/recreacion",
  },
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
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white p-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h1>
            <p className="text-lg md:text-xl max-w-2xl mb-8">{slide.description}</p>
            <Button asChild className="bg-[#0B8CBF] hover:bg-[#5357A6]">
              <a href={slide.buttonLink}>{slide.buttonText}</a>
            </Button>
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
            onClick={() => setCurrentSlide(index)}
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