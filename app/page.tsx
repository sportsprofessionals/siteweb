"use client"

import Image from "next/image"
import Link from "next/link"
import { Award, Briefcase, Dumbbell, GraduationCap, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import BannerSlider from "@/components/banner-slider"
import ServiceCard from "@/components/service-card"
import { useAnimation } from "@/components/animation-provider"
import CookieBanner from "@/components/cookie-banner"
import { ArticlesSection } from "@/components/ArticlesSection"
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel"
import { ArrowRight } from "lucide-react"


export default function Home() {
  const { FadeIn, SlideIn, ScaleIn } = useAnimation()

  return (
    <div>
      <CookieBanner/>
      <BannerSlider />

      {/* Servicios Principales - Rediseñado */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-600/20 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-indigo-600/20 to-transparent rounded-full blur-3xl animate-pulse delay-75" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-slate-600/10 to-blue-600/10 rounded-full blur-2xl animate-pulse delay-150" />
          
          {/* Partículas flotantes */}
          <div className="absolute top-20 right-1/4 w-3 h-3 bg-blue-400/30 rounded-full animate-bounce" />
          <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-indigo-400/30 rounded-full animate-bounce delay-100" />
          <div className="absolute top-1/3 left-20 w-1 h-6 bg-blue-400/20 animate-pulse delay-200" />
          <div className="absolute bottom-1/4 right-20 w-4 h-4 bg-indigo-400/20 transform rotate-45 animate-spin" style={{animationDuration: '8s'}} />
          <div className="absolute top-3/4 left-1/3 w-2 h-2 bg-slate-400/20 rounded-full animate-pulse delay-300" />
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          {/* Header rediseñado */}
          <FadeIn className="text-center mb-20">
            <div className="inline-flex items-center gap-3 rounded-3xl bg-white/10 backdrop-blur-xl px-8 py-4 mb-8 border border-white/20 shadow-2xl">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow-lg">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-lg font-bold text-white">
                  Servicios Especializados
                </span>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-blue-500 flex items-center justify-center shadow-lg">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-8 text-white">
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Soluciones Integrales
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                para el Deporte
              </span>
            </h2>
            
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light mb-12">
              Ofrecemos <span className="font-bold text-blue-400">servicios especializados</span> en administración deportiva, 
              educación física, actividad física, deporte y recreación con enfoque integral e innovador.
            </p>
            
            {/* Estadísticas de confianza */}
            <div className="flex items-center justify-center gap-12 mb-16">
              <div className="text-center">
                <div className="text-4xl font-black text-blue-400">5</div>
                <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">Servicios Especializados</div>
              </div>
              <div className="h-12 w-px bg-gradient-to-b from-transparent via-gray-500 to-transparent" />
              <div className="text-center">
                <div className="text-4xl font-black text-indigo-400">360°</div>
                <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">Soluciones Integrales</div>
              </div>
              <div className="h-12 w-px bg-gradient-to-b from-transparent via-gray-500 to-transparent" />
              <div className="text-center">
                <div className="text-4xl font-black text-purple-400">100%</div>
                <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">Enfoque Profesional</div>
              </div>
            </div>
          </FadeIn>

          {/* Grid de Servicios Rediseñado */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
            
            {/* Administración Deportiva */}
            <SlideIn direction="up" delay={0.1}>
              <div className="group relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-700 hover:transform hover:scale-105 hover:bg-white/15">
                {/* Efectos de fondo de la tarjeta */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full -translate-y-16 translate-x-16" />
                
                <div className="relative p-8">
                  {/* Icono único */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    Administración Deportiva
                  </h3>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Gestión y planeación estratégica para organizaciones deportivas con enfoque profesional
                  </p>
                  
                  <Button
                    asChild
                    className="w-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-400 hover:bg-blue-400 hover:text-white rounded-xl transition-all duration-300 shadow-lg group-hover:shadow-blue-500/25"
                  >
                    <Link href="/servicios/administracion-deportiva" className="flex items-center justify-center gap-2">
                      Conocer más
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </Button>
                </div>
                
                {/* Línea de expansión */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 w-0 group-hover:w-full transition-all duration-700" />
              </div>
            </SlideIn>

            {/* Educación Física */}
            <SlideIn direction="up" delay={0.2}>
              <div className="group relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-700 hover:transform hover:scale-105 hover:bg-white/15">
                {/* Efectos de fondo de la tarjeta */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-transparent rounded-full -translate-y-16 -translate-x-16" />
                
                <div className="relative p-8">
                  {/* Icono único */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                    Educación Física
                  </h3>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Formación y desarrollo de habilidades motoras con metodologías pedagógicas innovadoras
                  </p>
                  
                  <Button
                    asChild
                    className="w-full bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 text-purple-400 hover:bg-purple-400 hover:text-white rounded-xl transition-all duration-300 shadow-lg group-hover:shadow-purple-500/25"
                  >
                    <Link href="/servicios/educacion-fisica" className="flex items-center justify-center gap-2">
                      Conocer más
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </Button>
                </div>
                
                {/* Línea de expansión */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-purple-600 w-0 group-hover:w-full transition-all duration-700" />
              </div>
            </SlideIn>

            {/* Actividad Física */}
            <SlideIn direction="up" delay={0.3}>
              <div className="group relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-700 hover:transform hover:scale-105 hover:bg-white/15">
                {/* Efectos de fondo de la tarjeta */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-orange-400/20 to-transparent rounded-full translate-y-16 translate-x-16" />
                
                <div className="relative p-8">
                  {/* Icono único */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
                    Actividad Física
                  </h3>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Programas personalizados para todas las edades enfocados en bienestar y salud integral
                  </p>
                  
                  <Button
                    asChild
                    className="w-full bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 text-orange-400 hover:bg-orange-400 hover:text-white rounded-xl transition-all duration-300 shadow-lg group-hover:shadow-orange-500/25"
                  >
                    <Link href="/servicios/actividad-fisica" className="flex items-center justify-center gap-2">
                      Conocer más
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </Button>
                </div>
                
                {/* Línea de expansión */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600 w-0 group-hover:w-full transition-all duration-700" />
              </div>
            </SlideIn>

            {/* Deporte */}
            <SlideIn direction="up" delay={0.4}>
              <div className="group relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-700 hover:transform hover:scale-105 hover:bg-white/15 md:col-start-1 lg:col-start-auto">
                {/* Efectos de fondo de la tarjeta */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/20 to-transparent rounded-full -translate-y-16 translate-x-16" />
                
                <div className="relative p-8">
                  {/* Icono único */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                    Deporte
                  </h3>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Alto rendimiento, inclusión y desarrollo deportivo con metodologías de vanguardia
                  </p>
                  
                  <Button
                    asChild
                    className="w-full bg-green-500/20 backdrop-blur-sm border border-green-400/30 text-green-400 hover:bg-green-400 hover:text-white rounded-xl transition-all duration-300 shadow-lg group-hover:shadow-green-500/25"
                  >
                    <Link href="/servicios/deporte" className="flex items-center justify-center gap-2">
                      Conocer más
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </Button>
                </div>
                
                {/* Línea de expansión */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-500 to-green-600 w-0 group-hover:w-full transition-all duration-700" />
              </div>
            </SlideIn>

            {/* Recreación */}
            <SlideIn direction="up" delay={0.5}>
              <div className="group relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-700 hover:transform hover:scale-105 hover:bg-white/15 md:col-start-2 lg:col-start-auto">
                {/* Efectos de fondo de la tarjeta */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cyan-400/20 to-transparent rounded-full translate-y-16 -translate-x-16" />
                
                <div className="relative p-8">
                  {/* Icono único */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shadow-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M15 14h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    Recreación
                  </h3>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Experiencias activas y bienestar integral a través de actividades recreodeportivas
                  </p>
                  
                  <Button
                    asChild
                    className="w-full bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400 hover:text-white rounded-xl transition-all duration-300 shadow-lg group-hover:shadow-cyan-500/25"
                  >
                    <Link href="/servicios/recreacion" className="flex items-center justify-center gap-2">
                      Conocer más
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </Button>
                </div>
                
                {/* Línea de expansión */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-500 to-cyan-600 w-0 group-hover:w-full transition-all duration-700" />
              </div>
            </SlideIn>
          </div>

          {/* Call to Action Final */}
          <FadeIn className="text-center mt-20">
            <div className="inline-flex flex-col sm:flex-row items-center gap-6">
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 hover:from-blue-600 hover:via-indigo-700 hover:to-purple-700 text-white shadow-2xl hover:shadow-blue-500/25 rounded-2xl px-12 py-4 text-lg font-bold transition-all duration-300 border-0"
              >
                <Link href="/servicios" className="flex items-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Explorar todos los servicios
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-2 border-white/30 text-white bg-white/10 backdrop-blur-lg hover:bg-white/20 hover:border-white/50 rounded-2xl px-12 py-4 text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Link href="/contacto">
                  Solicitar cotización
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Artículos Deportivos */}
      <ArticlesSection />


      {/* Aliados Deportivos */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-200/30 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-purple-200/30 to-transparent rounded-full blur-3xl animate-pulse delay-75" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-200/20 to-indigo-200/20 rounded-full blur-2xl animate-pulse delay-150" />
          
          {/* Formas geométricas flotantes */}
          <div className="absolute top-20 right-1/4 w-4 h-4 bg-cyan-300/40 rotate-45 animate-bounce" />
          <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-purple-300/40 rounded-full animate-bounce delay-100" />
          <div className="absolute top-1/3 left-20 w-2 h-8 bg-blue-300/40 animate-pulse delay-200" />
                </div>

        <div className="container px-4 md:px-6 relative z-10">
          {/* Header rediseñado */}
          <FadeIn className="text-center mb-20">
            <div className="inline-flex items-center gap-3 rounded-3xl bg-white/60 backdrop-blur-xl px-8 py-4 mb-8 border border-white/40 shadow-2xl">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Nuestros Aliados
                </span>
              </div>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-8">
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Aliados
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Deportivos
              </span>
            </h2>
            
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
              Conoce los <span className="font-bold text-blue-600">centros deportivos y clubes especializados</span> con 
              los que colaboramos para ofrecer las mejores experiencias deportivas.
            </p>
            
            {/* Estadísticas de aliados */}
            <div className="flex items-center justify-center gap-12 mt-12">
              <div className="text-center group">
                <div className="text-4xl font-black bg-gradient-to-br from-cyan-500 to-blue-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">2+</div>
                <div className="text-sm font-medium text-gray-600 uppercase tracking-wider">Aliados Activos</div>
              </div>
              <div className="h-12 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
              <div className="text-center group">
                <div className="text-4xl font-black bg-gradient-to-br from-purple-500 to-blue-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">5+</div>
                <div className="text-sm font-medium text-gray-600 uppercase tracking-wider">Años Colaborando</div>
          </div>
              <div className="h-12 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
              <div className="text-center group">
                <div className="text-4xl font-black bg-gradient-to-br from-blue-500 to-cyan-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">100%</div>
                <div className="text-sm font-medium text-gray-600 uppercase tracking-wider">Confianza</div>
        </div>
            </div>
          </FadeIn>

          {/* Tarjetas de Aliados Ultra-Modernas */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-16">
            {/* Centro FENIX - Rediseñado */}
            <ScaleIn delay={0.1}>
              <div className="group relative">
                {/* Contenedor con efecto 3D */}
                <div className="relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-2xl border border-white/50 shadow-2xl hover:shadow-4xl transition-all duration-700 transform hover:-translate-y-4 hover:rotate-1 p-8 md:p-12">
                  {/* Efectos de fondo dinámicos */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/50 to-blue-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-cyan-300/20 to-transparent rounded-full -translate-y-24 translate-x-24 group-hover:scale-150 transition-transform duration-700" />
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-blue-300/20 to-transparent rounded-full translate-y-20 -translate-x-20 group-hover:scale-125 transition-transform duration-700" />
                  
                  <div className="relative z-10">
                    {/* Header con logo */}
                    <div className="flex items-start justify-between mb-8">
                      <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/60 group-hover:shadow-xl transition-all duration-500">
                  <Image
                    src="/fenix-logo.jpg"
                    alt="Centro FENIX"
                    width={160}
                    height={80}
                          className="object-contain w-36 h-18 group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg"
                    }}
                  />
                </div>
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl px-4 py-2 shadow-lg">
                        <span className="text-sm font-bold">Centro Deportivo</span>
                      </div>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight group-hover:text-cyan-600 transition-colors duration-500">
                      Centro de Desarrollo Deportivo FENIX
                    </h3>
                    
                    <p className="text-gray-600 text-lg leading-relaxed mb-8 font-medium">
                      Especializado en <span className="text-cyan-600 font-bold">canchas de voleibol y baloncesto reglamentarias</span> ubicado 
                      en Barrio Salazar Gómez, ofreciendo instalaciones de primer nivel.
                    </p>
                    
                    {/* Características con iconos */}
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center gap-4 text-gray-700">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="font-semibold">4 canchas de voleibol reglamentarias</span>
                      </div>
                      <div className="flex items-center gap-4 text-gray-700">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center shadow-lg">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span className="font-semibold">Próximamente canchas de baloncesto</span>
                      </div>
                    </div>
                    
                    <Button asChild className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-2xl hover:shadow-cyan-500/25 rounded-2xl py-4 text-lg font-bold transition-all duration-300 group-hover:scale-105">
                      <Link href="/aliados-deportivos/fenix" className="flex items-center justify-center gap-3">
                        <span>Conocer Centro FENIX</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                      </Link>
                </Button>
                  </div>
                  
                  {/* Línea decorativa animada */}
                  <div className="absolute bottom-0 left-0 h-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 w-0 group-hover:w-full transition-all duration-1000 rounded-b-3xl" />
                </div>
              </div>
            </ScaleIn>

            {/* Club Medusas - Rediseñado */}
            <ScaleIn delay={0.2}>
              <div className="group relative">
                {/* Contenedor con efecto 3D */}
                <div className="relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-2xl border border-white/50 shadow-2xl hover:shadow-4xl transition-all duration-700 transform hover:-translate-y-4 hover:-rotate-1 p-8 md:p-12">
                  {/* Efectos de fondo dinámicos */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-blue-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-purple-300/20 to-transparent rounded-full -translate-y-24 -translate-x-24 group-hover:scale-150 transition-transform duration-700" />
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-blue-300/20 to-transparent rounded-full translate-y-20 translate-x-20 group-hover:scale-125 transition-transform duration-700" />
                  
                  <div className="relative z-10">
                    {/* Header con logo */}
                    <div className="flex items-start justify-between mb-8">
                      <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/60 group-hover:shadow-xl transition-all duration-500">
                  <Image
                    src="/medusas-logo.jpg"
                    alt="Club Medusas"
                          width={100}
                          height={120}
                          className="object-contain w-24 h-28 group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg"
                    }}
                  />
                </div>
                      <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-2xl px-4 py-2 shadow-lg">
                        <span className="text-sm font-bold">Club Acuático</span>
                      </div>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight group-hover:text-purple-600 transition-colors duration-500">
                      Club Medusas
                    </h3>
                    
                    <p className="text-gray-600 text-lg leading-relaxed mb-8 font-medium">
                      Club especializado en <span className="text-purple-600 font-bold">actividades subacuáticas</span> que desarrolla 
                      sus actividades en el Complejo Acuático Simón Bolívar.
                    </p>
                    
                    {/* Características con iconos */}
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center gap-4 text-gray-700">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center shadow-lg">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="font-semibold">Actividades subacuáticas especializadas</span>
                      </div>
                      <div className="flex items-center gap-4 text-gray-700">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center shadow-lg">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <span className="font-semibold">Entrenamiento profesional</span>
                      </div>
                    </div>
                    
                    <Button asChild className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white shadow-2xl hover:shadow-purple-500/25 rounded-2xl py-4 text-lg font-bold transition-all duration-300 group-hover:scale-105">
                      <Link href="/aliados-deportivos/medusas" className="flex items-center justify-center gap-3">
                        <span>Conocer Club Medusas</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                      </Link>
                </Button>
                  </div>
                  
                  {/* Línea decorativa animada */}
                  <div className="absolute bottom-0 left-0 h-2 bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-600 w-0 group-hover:w-full transition-all duration-1000 rounded-b-3xl" />
                </div>
              </div>
            </ScaleIn>
          </div>

          {/* Call to Action Final */}
          <FadeIn className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-6">
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-600 hover:via-blue-700 hover:to-purple-700 text-white shadow-2xl hover:shadow-blue-500/25 rounded-2xl px-12 py-4 text-lg font-bold transition-all duration-300 border-0"
              >
                <Link href="/aliados-deportivos" className="flex items-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Ver todos los aliados deportivos
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-2 border-blue-300/60 text-blue-600 bg-white/60 backdrop-blur-lg hover:bg-white/80 hover:border-blue-400 rounded-2xl px-12 py-4 text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Link href="/contacto">
                  Convertirse en aliado
                </Link>
            </Button>
          </div>
          </FadeIn>
        </div>
      </section>

      {/* Formación */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-slate-800 via-indigo-900 to-purple-900 overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-500/20 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-full blur-3xl animate-pulse delay-75" />
          <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-gradient-to-r from-blue-500/15 to-transparent rounded-full blur-2xl animate-pulse delay-150" />
          
          {/* Patrones geométricos flotantes */}
          <div className="absolute top-20 left-1/4 w-6 h-6 bg-indigo-400/20 transform rotate-45 animate-spin" style={{animationDuration: '8s'}} />
          <div className="absolute bottom-32 right-1/4 w-4 h-12 bg-purple-400/30 animate-bounce" />
          <div className="absolute top-1/2 right-20 w-8 h-8 bg-blue-400/30 rounded-full animate-ping" />
          
          {/* Partículas flotantes adicionales */}
          <div className="absolute top-32 right-1/3 w-2 h-2 bg-white/20 rounded-full animate-ping delay-300" />
          <div className="absolute bottom-20 left-1/3 w-1 h-1 bg-indigo-400/40 rounded-full animate-pulse delay-500" />
          <div className="absolute top-2/3 left-20 w-1.5 h-1.5 bg-purple-400/30 rounded-full animate-ping delay-700" />
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Contenido de texto rediseñado */}
            <SlideIn direction="left">
              <div className="space-y-8">
                {/* Header moderno */}
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-3 rounded-2xl bg-white/10 backdrop-blur-lg px-6 py-3 border border-white/20">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center shadow-lg">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <span className="text-white font-bold text-lg">Educación Especializada</span>
                  </div>
                  
                  <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                    <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">
                      Formación
                    </span>
                    <br />
                    <span className="text-white">
                      Profesional
                    </span>
                  </h2>
                  
                  <p className="text-xl text-blue-100 leading-relaxed font-medium">
                    Una de nuestras actividades es <span className="font-bold text-indigo-300">transferir nuestro conocimiento y experiencia</span> en 
                    el mundo de la gestión del deporte. Compartir nuestras respuestas a los profesionales, empresas e instituciones que 
                    quieran desarrollarse a través del ejercicio de la gestión deportiva.
                  </p>
                </div>

                {/* Lista de audiencias con iconos modernos */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors duration-300">Gestores Deportivos</h3>
                      <p className="text-blue-100">Formaciones dirigidas a gestores deportivos de entidades públicas y privadas</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M9 7l3-3 3 3M4 10h16v11H4V10z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">Directores de Instalaciones</h3>
                      <p className="text-blue-100">Directores o gerentes de instalaciones deportivas</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">Técnicos Deportivos</h3>
                      <p className="text-blue-100">Técnicos deportivos y titulados universitarios</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">Estudiantes Universitarios</h3>
                      <p className="text-blue-100">Estudiantes de grados y máster del deporte</p>
                    </div>
                  </div>
                </div>

                {/* Call to Action mejorado */}
                <div className="pt-8">
                  <Button asChild className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-2xl hover:shadow-indigo-500/25 rounded-2xl px-8 py-4 text-lg font-bold transition-all duration-300 border-0 group">
                    <Link href="/formacion" className="flex items-center gap-3">
                      <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Ver todos los programas
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </Link>
                  </Button>
                </div>
              </div>
            </SlideIn>

            {/* Video rediseñado */}
            <ScaleIn delay={0.3}>
              <div className="relative group">
                {/* Contenedor del video con efectos modernos */}
                <div className="relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl group-hover:shadow-4xl transition-all duration-700 p-4">
                  {/* Efectos de fondo para el video */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-400/20 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-400/20 to-transparent rounded-full translate-y-12 -translate-x-12 group-hover:scale-125 transition-transform duration-700" />
                  
              {/* Responsive video wrapper */}
                  <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-2xl shadow-xl">
                <iframe
                  src="https://www.youtube.com/embed/BakoE2sMVjg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                      className="absolute top-0 left-0 w-full h-full rounded-2xl"
                    />
                  </div>
                  
                  {/* Badge de video */}
                  <div className="absolute top-8 left-8 bg-black/50 backdrop-blur-md rounded-xl px-4 py-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
                    <span className="text-white text-sm font-semibold">Video Formativo</span>
                  </div>
                </div>

                {/* Estadísticas de formación */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/50 min-w-max">
                  <div className="flex items-center gap-8">
                    <div className="text-center">
                      <div className="text-2xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">500+</div>
                      <div className="text-xs font-medium text-gray-600 uppercase tracking-wider">Profesionales Formados</div>
                    </div>
                    <div className="h-8 w-px bg-gray-300" />
                    <div className="text-center">
                      <div className="text-2xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">10+</div>
                      <div className="text-xs font-medium text-gray-600 uppercase tracking-wider">Programas Activos</div>
                    </div>
                    <div className="h-8 w-px bg-gray-300" />
                    <div className="text-center">
                      <div className="text-2xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">100%</div>
                      <div className="text-xs font-medium text-gray-600 uppercase tracking-wider">Satisfacción</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-200/30 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-purple-200/30 to-transparent rounded-full blur-3xl animate-pulse delay-75" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-200/20 to-indigo-200/20 rounded-full blur-2xl animate-pulse delay-150" />
          
          {/* Formas geométricas flotantes */}
          <div className="absolute top-20 right-1/4 w-4 h-4 bg-cyan-300/40 rotate-45 animate-bounce" />
          <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-purple-300/40 rounded-full animate-bounce delay-100" />
          <div className="absolute top-1/3 left-20 w-2 h-8 bg-blue-300/40 animate-pulse delay-200" />
          <div className="absolute bottom-1/4 right-20 w-6 h-6 bg-cyan-300/30 transform rotate-12 animate-spin" style={{animationDuration: '10s'}} />
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          {/* Header rediseñado */}
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-3 rounded-3xl bg-white/60 backdrop-blur-xl px-8 py-4 mb-8 border border-white/40 shadow-2xl">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Contáctanos
                </span>
              </div>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-8">
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                ¿Necesitas
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                nuestros servicios?
              </span>
            </h2>
            
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light mb-12">
              Nuestras propuestas dependen exclusivamente de <span className="font-bold text-blue-600">sus necesidades</span>. 
              Contáctanos para una consulta personalizada y descubre cómo podemos ayudarte.
            </p>
            
            {/* Estadísticas de confianza */}
            <div className="flex items-center justify-center gap-12 mb-16">
              <div className="text-center group">
                <div className="text-4xl font-black bg-gradient-to-br from-cyan-500 to-blue-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">24h</div>
                <div className="text-sm font-medium text-gray-600 uppercase tracking-wider">Respuesta Rápida</div>
              </div>
              <div className="h-12 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
              <div className="text-center group">
                <div className="text-4xl font-black bg-gradient-to-br from-purple-500 to-blue-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">100%</div>
                <div className="text-sm font-medium text-gray-600 uppercase tracking-wider">Personalizado</div>
              </div>
              <div className="h-12 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
              <div className="text-center group">
                <div className="text-4xl font-black bg-gradient-to-br from-blue-500 to-cyan-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">0€</div>
                <div className="text-sm font-medium text-gray-600 uppercase tracking-wider">Consulta Gratuita</div>
              </div>
            </div>
          </FadeIn>

          {/* Contenedor de botones rediseñado */}
          <FadeIn delay={0.2} className="flex flex-col items-center">
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl w-full mb-12">
              {/* Botón principal de contacto */}
              <div className="group relative">
                <div className="relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-2xl border border-white/50 shadow-2xl hover:shadow-4xl transition-all duration-700 transform hover:-translate-y-2 p-8">
                  {/* Efectos de fondo dinámicos */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/50 to-blue-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-300/20 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-300/20 to-transparent rounded-full translate-y-12 -translate-x-12 group-hover:scale-125 transition-transform duration-700" />
                  
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-cyan-600 transition-colors duration-300">
                      Consulta Inmediata
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Habla directamente con nuestro equipo de expertos y obtén una respuesta personalizada a tus necesidades.
                    </p>
                    
                    <Button asChild className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-2xl hover:shadow-cyan-500/25 rounded-2xl py-4 text-lg font-bold transition-all duration-300 group-hover:scale-105">
                      <Link href="/contacto" className="flex items-center justify-center gap-3">
                        <span>Contactar ahora</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                      </Link>
              </Button>
                  </div>
                  
                  {/* Línea decorativa animada */}
                  <div className="absolute bottom-0 left-0 h-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 w-0 group-hover:w-full transition-all duration-1000 rounded-b-3xl" />
                </div>
              </div>

              {/* Botón secundario de servicios */}
              <div className="group relative">
                <div className="relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-2xl border border-white/50 shadow-2xl hover:shadow-4xl transition-all duration-700 transform hover:-translate-y-2 p-8">
                  {/* Efectos de fondo dinámicos */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-blue-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-300/20 to-transparent rounded-full -translate-y-16 -translate-x-16 group-hover:scale-150 transition-transform duration-700" />
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-blue-300/20 to-transparent rounded-full translate-y-12 translate-x-12 group-hover:scale-125 transition-transform duration-700" />
                  
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    
                    <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                      Explorar Servicios
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Descubre toda nuestra gama de servicios especializados en gestión deportiva y encuentra el ideal para ti.
                    </p>
                    
                    <Button asChild variant="outline" className="w-full border-2 border-blue-300/60 text-blue-600 bg-white/60 backdrop-blur-lg hover:bg-white/80 hover:border-blue-400 rounded-2xl py-4 text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl group-hover:scale-105">
                      <Link href="/servicios" className="flex items-center justify-center gap-3">
                        <span>Ver todos los servicios</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                      </Link>
              </Button>
                  </div>
                  
                  {/* Línea decorativa animada */}
                  <div className="absolute bottom-0 left-0 h-2 bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-600 w-0 group-hover:w-full transition-all duration-1000 rounded-b-3xl" />
                </div>
              </div>
            </div>

            {/* Información adicional */}
            <div className="text-center bg-white/40 backdrop-blur-lg rounded-2xl p-6 border border-white/50 shadow-lg max-w-2xl">
              <div className="flex items-center justify-center gap-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-gray-700">Respuesta garantizada en 24h</span>
                </div>
                <div className="h-6 w-px bg-gray-300" />
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-gray-700">Datos 100% seguros</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}