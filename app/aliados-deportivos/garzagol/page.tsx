"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Building, Users, ArrowLeft, Trophy, Target, CheckCircle, Sparkles, ArrowRight, ExternalLink, Zap, Award, Star } from "lucide-react"
import { useAnimation } from "@/components/animation-provider"

// Componente de partículas flotantes (chispas de fuego)
const FlameSparks = ({ count = 25 }: { count?: number }) => {
  const sparks = Array.from({ length: count }, (_, i) => {
    const delay = Math.random() * 10
    const duration = 15 + Math.random() * 20
    const size = 2 + Math.random() * 6
    const left = Math.random() * 100
    const opacity = 0.2 + Math.random() * 0.6
    
    return (
      <div
        key={i}
        className="absolute pointer-events-none"
        style={{
          left: `${left}%`,
          width: `${size}px`,
          height: `${size}px`,
          opacity,
          animation: `flame ${duration}s linear infinite`,
          animationDelay: `${delay}s`,
        }}
      >
        <div className="w-full h-full bg-gradient-to-t from-orange-500 via-amber-400 to-red-400 rounded-full blur-sm" />
      </div>
    )
  })
  
  return (
    <div className="absolute inset-0 overflow-hidden">
      {sparks}
      <style jsx>{`
        @keyframes flame {
          0% {
            transform: translateY(100vh) rotate(0deg) scale(0);
          }
          10% {
            transform: translateY(90vh) rotate(180deg) scale(1);
          }
          90% {
            transform: translateY(10vh) rotate(340deg) scale(1);
          }
          100% {
            transform: translateY(-10vh) rotate(360deg) scale(0);
          }
        }
      `}</style>
    </div>
  )
}

// Componente de elementos decorativos de fuego
const FireShapes = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Llamas de fondo */}
    <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
    <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tl from-red-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-75" />
    <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-amber-500/8 to-transparent rounded-full blur-2xl animate-pulse delay-150" />
    
    {/* Elementos deportivos flotantes */}
    <div className="absolute top-32 left-1/4 w-6 h-6 bg-orange-400/20 transform rotate-45 animate-bounce" />
    <div className="absolute bottom-40 right-1/3 w-8 h-8 bg-red-400/25 rounded-full animate-pulse" />
    <div className="absolute top-2/3 right-20 w-4 h-10 bg-amber-400/20 animate-bounce delay-100" />
    <div className="absolute bottom-1/3 left-32 w-10 h-4 bg-orange-400/15 rounded-full animate-ping" />
    
    {/* Líneas de energía */}
    <div className="absolute top-1/4 left-0 w-48 h-px bg-gradient-to-r from-transparent via-orange-400/30 to-transparent animate-pulse" />
    <div className="absolute top-2/3 right-0 w-32 h-px bg-gradient-to-l from-transparent via-red-400/30 to-transparent animate-pulse delay-200" />
    <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-amber-400/25 to-transparent animate-pulse delay-300" />
  </div>
)

export default function GarzagolDetail() {
  const { FadeIn, SlideIn, ScaleIn } = useAnimation()

  const instalaciones = [
    {
      tipo: "Sede 1 · La Floresta",
      cantidad: "Canchas sintéticas",
      descripcion: "Espacio principal de entrenamiento y formación deportiva",
      disponible: true,
      icono: Trophy,
      color: "orange"
    },
    {
      tipo: "Sede 2 · Zona Industrial El Papayo",
      cantidad: "Canchas sintéticas",
      descripcion: "Espacio adicional disponible para alquiler y prácticas deportivas",
      disponible: true,
      icono: Target,
      color: "red"
    }
  ] as const

  const servicios = [
    "Escuela de formación desde los 2 años hasta Categoría Libre",
    "Canchas sintéticas de alto desempeño",
    "Alquiler de instalaciones al público",
    "Torneos relámpago y prácticas recreativas",
    "Formación en valores humanos y disciplina deportiva"
  ]

  const ventajas = [
    {
      icono: Trophy,
      titulo: "Más de una Década de Trayectoria",
      descripcion: "Referente en la formación integral de futbolistas en Ibagué, la Capital Musical"
    },
    {
      icono: MapPin,
      titulo: "Dos Sedes en Ibagué",
      descripcion: "Instalaciones en el Barrio La Floresta y en la Zona Industrial El Papayo"
    },
    {
      icono: Clock,
      titulo: "Formación por Etapas",
      descripcion: "Entrenamientos adaptados desde los 2 años hasta la Categoría Libre"
    },
    {
      icono: Star,
      titulo: "Valores Humanos",
      descripcion: "Disciplina deportiva combinada con formación integral en un espacio seguro y profesional"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section Ultra-Premium con tema de fuego */}
      <section className="relative bg-gradient-to-br from-slate-900 via-orange-900 to-red-900 overflow-hidden">
        {/* Chispas flotantes */}
        <FlameSparks count={30} />
        
        {/* Elementos decorativos de fuego */}
        <FireShapes />
        
        <div className="container relative z-10 py-24 md:py-32">
          {/* Breadcrumb premium */}
          <FadeIn>
            <Link 
              href="/aliados-deportivos" 
              className="inline-flex items-center gap-3 rounded-2xl bg-white/10 backdrop-blur-xl px-6 py-3 border border-white/20 shadow-lg mb-8 text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-medium">Volver a Aliados Deportivos</span>
            </Link>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Contenido principal */}
            <div className="lg:col-span-2">
              <FadeIn>
                {/* Badge de especialidad */}
                <div className="inline-flex items-center gap-3 rounded-3xl bg-white/10 backdrop-blur-xl px-8 py-4 mb-8 border border-white/20 shadow-2xl">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center shadow-lg">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg font-bold text-white">
                    Escuela de Formación Deportiva
                  </span>
                </div>
                
                {/* Título cinematográfico */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-none tracking-tight mb-6">
                  <span className="block bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent drop-shadow-2xl">
                    Club Deportivo
                  </span>
                  <span className="block bg-gradient-to-r from-orange-400 via-amber-400 to-red-400 bg-clip-text text-transparent drop-shadow-xl">
                    GARZAGOL
                  </span>
                </h1>
                
                {/* Descripción premium */}
                <p className="text-xl md:text-2xl text-gray-200 max-w-3xl leading-relaxed font-light mb-8">
                  Con más de una <span className="font-bold text-orange-400">década de trayectoria</span> en la Capital Musical, un pilar fundamental en la 
                  <span className="font-bold text-amber-400"> formación integral de futbolistas</span> en Ibagué.
                </p>

                {/* Información de contacto rápida */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                    <MapPin className="w-5 h-5 text-amber-400" />
                    <div>
                      <div className="text-white font-medium">Barrio La Floresta</div>
                      <div className="text-gray-300 text-sm">Calle 60 N° 4-50</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                    <Phone className="w-5 h-5 text-orange-400" />
                    <div>
                      <div className="text-white font-medium">Contacto</div>
                      <div className="text-gray-300 text-sm">318 376 463</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
              </div>
              
            {/* Logo premium con glassmorphism */}
            <div className="lg:col-span-1">
              <ScaleIn delay={0.3}>
                <div className="relative group">
                  {/* Glow effect */}
                  <div className="absolute -inset-6 bg-gradient-to-r from-orange-500/30 to-red-500/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  {/* Logo container */}
                  <div className="relative bg-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
                    <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-white/90 backdrop-blur-sm">
                  <Image
                    src="/garzagol-logo.jpg"
                    alt="Logo Club Deportivo Garzagol"
                        fill
                        className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg"
                    }}
                  />
                    </div>
                    
                    {/* Badge flotante */}
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-xl">
                        Aliado Oficial
                      </div>
                    </div>
                </div>
              </div>
              </ScaleIn>
            </div>
          </div>
        </div>
        
        {/* Línea decorativa inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-red-500" />
      </section>

      {/* Sección de Instalaciones Premium */}
      <section className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 py-24 md:py-32 overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-orange-400/5 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-red-400/5 to-transparent rounded-full blur-3xl animate-pulse delay-75" />
        </div>
        
        <div className="container relative z-10">
          {/* Header de sección */}
          <FadeIn className="text-center mb-20">
            <div className="inline-flex items-center gap-3 rounded-3xl bg-white/60 backdrop-blur-xl px-8 py-4 mb-8 border border-white/40 shadow-2xl">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg">
                <Building className="w-4 h-4 text-white" />
                      </div>
              <span className="text-lg font-bold text-orange-600">
                Instalaciones Profesionales
              </span>
                    </div>
            
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
              <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-red-600 bg-clip-text text-transparent">
                Espacios
              </span>
              <br />
              <span className="text-gray-900">
                Deportivos
              </span>
            </h2>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
              Contamos con <span className="font-bold text-orange-600">canchas sintéticas modernas</span> y 
              <span className="font-bold text-red-600"> dos sedes en Ibagué</span> para la práctica del fútbol formativo y recreativo.
            </p>
          </FadeIn>

          {/* Grid de instalaciones ultra-premium */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {instalaciones.map((instalacion, index) => {
              const Icon = instalacion.icono
              const colorClasses = {
                orange: "from-orange-500 to-orange-600 text-orange-600 bg-orange-100 border-orange-200",
                red: "from-red-500 to-red-600 text-red-600 bg-red-100 border-red-200",
                amber: "from-amber-500 to-amber-600 text-amber-600 bg-amber-100 border-amber-200"
              } as const
              
              const colors = colorClasses[instalacion.color]
              
              return (
                <SlideIn key={instalacion.tipo} direction="up" delay={index * 0.2}>
                  <div className="group relative h-full">
                    {/* Glow effect */}
                    <div className={`absolute -inset-3 bg-gradient-to-r ${colors.split(' ')[0]} ${colors.split(' ')[1]} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-all duration-500`} />
                    
                    {/* Tarjeta principal glassmorphism */}
                    <div className={`relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/60 shadow-xl group-hover:shadow-2xl transition-all duration-500 h-full flex flex-col group-hover:scale-105 ${!instalacion.disponible ? 'opacity-75' : ''}`}>
                      
                      {/* Header con estado */}
                      <div className="flex items-center justify-between mb-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colors.split(' ')[0]} ${colors.split(' ')[1]} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        
                        <div className={`px-4 py-2 rounded-full text-sm font-bold ${
                          instalacion.disponible 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          {instalacion.disponible ? 'Disponible' : 'Próximamente'}
                        </div>
                      </div>
                      
                      {/* Contenido */}
                      <div className="flex-1">
                        <h3 className={`text-2xl font-bold ${colors.split(' ')[2]} mb-3 leading-tight`}>
                          {instalacion.tipo}
                        </h3>
                        
                        <p className={`text-lg font-semibold ${colors.split(' ')[2]} mb-4`}>
                          {instalacion.cantidad}
                        </p>
                        
                        <p className="text-gray-600 leading-relaxed font-medium">
                          {instalacion.descripcion}
                        </p>
                      </div>
                      
                      {/* Línea decorativa */}
                      <div className={`mt-6 h-1 bg-gradient-to-r ${colors.split(' ')[0]} ${colors.split(' ')[1]} rounded-full w-0 group-hover:w-full transition-all duration-700`} />
                    </div>
                  </div>
                </SlideIn>
              )
            })}
          </div>

          {/* Sección de servicios */}
          <SlideIn direction="up" delay={0.4}>
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/60 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Nuestros <span className="text-red-600">Servicios</span>
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {servicios.map((servicio, index) => (
                  <div 
                    key={servicio}
                    className="flex items-center gap-3 p-3 rounded-xl bg-gray-50/50 border border-gray-100 hover:bg-white/80 transition-all duration-300"
                  >
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium text-sm">
                      {servicio}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            </SlideIn>
        </div>
      </section>

      {/* Sección de Contacto e Información Premium */}
      <section className="relative bg-gradient-to-br from-slate-800 via-orange-900 to-red-900 py-24 md:py-32 overflow-hidden">
        {/* Chispas flotantes */}
        <FlameSparks count={20} />
        
        {/* Elementos decorativos */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tl from-red-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-75" />
        </div>
        
        <div className="container relative z-10">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            
            {/* Información del centro */}
            <SlideIn direction="left" delay={0.2}>
              <div className="space-y-8">
                {/* Header */}
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-3 rounded-2xl bg-white/10 backdrop-blur-xl px-6 py-3 border border-white/20 shadow-lg">
                    <Sparkles className="w-5 h-5 text-amber-400" />
                    <span className="font-bold text-white">Escuela de Formación</span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
                    <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-red-400 bg-clip-text text-transparent">
                      Acerca del
                    </span>
                    <br />
                    <span className="text-white">
                      Club Garzagol
                    </span>
                  </h2>
                </div>
                
                {/* Descripción principal */}
                <p className="text-xl text-gray-200 leading-relaxed font-medium">
                  Con más de una <span className="font-bold text-orange-400">década de trayectoria</span> en la "Capital Musical", el Club Deportivo Garzagol se ha consolidado como un pilar fundamental en la 
                  formación integral de futbolistas en Ibagué. Su enfoque combina la <span className="font-bold text-amber-400">disciplina deportiva</span> con valores humanos, brindando un espacio seguro y profesional para el desarrollo del talento local.
                </p>
                
                {/* Información de contacto premium */}
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-bold mb-2">Nuestras Sedes</h4>
                        <div className="space-y-1 text-gray-300">
                          <p>Sede 1: Calle 60 N° 4-50, Barrio La Floresta</p>
                          <p>Sede 2: Cra. 8 Sur N° 50-03, Zona Industrial El Papayo</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-bold mb-2">Teléfono de Contacto</h4>
                        <div className="space-y-1">
                          <a 
                            href="tel:318376463" 
                            className="block text-amber-400 hover:text-amber-300 font-medium transition-colors"
                          >
                            318 376 463
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center shadow-lg">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-bold mb-2">Correo Electrónico</h4>
                        <div className="space-y-1">
                          <a 
                            href="mailto:garzagolibague@gmail.com" 
                            className="block text-orange-400 hover:text-orange-300 font-medium transition-colors"
                          >
                            garzagolibague@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Call to action */}
                <div className="pt-6">
                  <Button 
                    asChild 
                    className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-2xl hover:shadow-3xl rounded-2xl px-8 py-4 font-bold transition-all duration-300 transform hover:scale-105 border-0"
                  >
                    <a href="tel:318376463" className="flex items-center gap-3">
                      <Phone className="w-5 h-5" />
                      <span>Contactar Ahora</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </Button>
                </div>
              </div>
            </SlideIn>

            {/* Ventajas del centro */}
            <SlideIn direction="right" delay={0.4}>
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    ¿Por qué <span className="text-amber-400">Elegirnos?</span>
                  </h3>
                  <p className="text-gray-300">
                    Características que nos distinguen como club deportivo
                  </p>
                </div>

                {ventajas.map((ventaja, index) => {
                  const Icon = ventaja.icono
                  return (
                    <div key={ventaja.titulo} className="group relative">
                      {/* Glow effect */}
                      <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      
                      {/* Tarjeta principal */}
                      <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-white font-bold mb-2">{ventaja.titulo}</h4>
                            <p className="text-gray-300 text-sm leading-relaxed">{ventaja.descripcion}</p>
          </div>
        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              </SlideIn>
          </div>
        </div>
      </section>
    </div>
  )
}
