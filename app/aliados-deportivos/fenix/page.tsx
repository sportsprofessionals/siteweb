"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Clock, Building, Users, ArrowLeft, ExternalLink } from "lucide-react"
import { useAnimation } from "@/components/animation-provider"

export default function FenixDetail() {
  const { FadeIn, SlideIn, ScaleIn } = useAnimation()

  const instalaciones = [
    {
      tipo: "Canchas de Voleibol",
      cantidad: "4 canchas reglamentarias",
      descripcion: "Canchas profesionales equipadas para entrenamiento y competencia",
      disponible: true
    },
    {
      tipo: "Canchas de Baloncesto",
      cantidad: "2 canchas reglamentarias",
      descripcion: "Próximamente disponibles para alquiler",
      disponible: false
    }
  ]

  const servicios = [
    "Alquiler de canchas por horas",
    "Entrenamiento de equipos",
    "Torneos y competencias",
    "Espacios para eventos deportivos",
    "Asesoría deportiva"
  ]

  return (
    <div>
      {/* Breadcrumb y Header */}
      <section className="bg-[#0B8CBF] py-8 text-white">
        <div className="container px-4 md:px-6">
          <Link href="/aliados-deportivos" className="inline-flex items-center text-white/80 hover:text-white mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a Aliados Deportivos
          </Link>
          <FadeIn>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
              <div className="md:col-span-2 lg:col-span-3">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                  Centro de Desarrollo Deportivo FENIX
                </h1>
                <p className="text-xl text-white/80">
                  Centro deportivo especializado en voleibol y baloncesto
                </p>
              </div>
              
              <div className="flex justify-center md:justify-end">
                <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 flex items-center justify-center">
                  <Image
                    src="/fenix-logo.jpg"
                    alt="Logo Centro FENIX"
                    width={400}
                    height={300}
                    className="object-contain max-w-full max-h-full"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg"
                    }}
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Información Principal */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Información de Contacto */}
            <SlideIn direction="left">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#0B8CBF]">Información de Contacto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-[#0B8CBF] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium">Ubicación</h4>
                        <p className="text-muted-foreground">Barrio Salazar Gómez</p>
                        <p className="text-muted-foreground">Carrera 60 #11-38</p>
                        <p className="text-muted-foreground">Outlets de las Américas</p>
                        <p className="text-muted-foreground">Cerca Centro Comercial Plaza Central</p>
                        <p className="text-muted-foreground">Entre Américas y Calle 13</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-[#0B8CBF] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium">Teléfonos de Contacto</h4>
                        <p className="text-muted-foreground">
                          <a href="tel:3132141903" className="hover:text-[#0B8CBF]">313 214 1903</a>
                        </p>
                        <p className="text-muted-foreground">
                          <a href="tel:3116486446" className="hover:text-[#0B8CBF]">311 648 6446</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <Button className="w-full bg-[#0B8CBF] hover:bg-[#0B8CBF]/90">
                      <Phone className="h-4 w-4 mr-2" />
                      Contactar Ahora
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </SlideIn>

            {/* Descripción */}
            <SlideIn direction="right">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter mb-4">Acerca del Centro</h2>
                  <p className="text-lg text-muted-foreground">
                    El Centro de Desarrollo Deportivo FENIX es un moderno centro deportivo ubicado estratégicamente 
                    en el Barrio Salazar Gómez, especializado en brindar espacios de alta calidad para la práctica 
                    del voleibol y próximamente baloncesto.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Nuestra Misión</h3>
                  <p className="text-muted-foreground">
                    Proporcionar espacios deportivos de excelencia que permitan el desarrollo y entrenamiento 
                    de equipos deportivos, ofreciendo instalaciones reglamentarias y servicios profesionales 
                    para la comunidad deportiva.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">¿Por qué Elegirnos?</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#0B8CBF] rounded-full flex-shrink-0" />
                      Canchas reglamentarias profesionales
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#0B8CBF] rounded-full flex-shrink-0" />
                      Ubicación estratégica y de fácil acceso
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#0B8CBF] rounded-full flex-shrink-0" />
                      Horarios flexibles de alquiler
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#0B8CBF] rounded-full flex-shrink-0" />
                      Excelente atención al cliente
                    </li>
                  </ul>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Instalaciones */}
      <section className="py-16 md:py-24 bg-[#F8F9FA]">
        <div className="container px-4 md:px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              Nuestras Instalaciones
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Contamos con instalaciones modernas y reglamentarias para la práctica deportiva profesional
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {instalaciones.map((instalacion, index) => (
              <SlideIn key={index} direction="up" delay={index * 0.1}>
                <Card className={`h-full ${!instalacion.disponible ? 'opacity-75' : ''}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{instalacion.tipo}</CardTitle>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        instalacion.disponible 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-orange-100 text-orange-800'
                      }`}>
                        {instalacion.disponible ? 'Disponible' : 'Próximamente'}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-medium text-[#0B8CBF] mb-2">{instalacion.cantidad}</p>
                    <p className="text-muted-foreground">{instalacion.descripcion}</p>
                  </CardContent>
                </Card>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos una variedad de servicios para satisfacer las necesidades de equipos y deportistas
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicios.map((servicio, index) => (
              <ScaleIn key={index} delay={index * 0.1}>
                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-[#0B8CBF]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Building className="h-6 w-6 text-[#0B8CBF]" />
                  </div>
                  <h3 className="font-medium">{servicio}</h3>
                </Card>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#0B8CBF] text-white">
        <div className="container px-4 md:px-6">
          <FadeIn className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              ¿Listo para Entrenar en FENIX?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Contáctanos y te daremos toda la información para el entrenamiento de tus equipos. 
              ¡Reserva tu cancha hoy mismo!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Phone className="h-4 w-4 mr-2" />
                Llamar Ahora
              </Button>
              <Link href="/contacto">
                <Button size="lg" variant="outline" className="border-white hover:bg-white text-[#0B8CBF]">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Contactar
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
} 