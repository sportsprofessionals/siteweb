"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Globe, Waves, Users, ArrowLeft, ExternalLink, Trophy, Clock } from "lucide-react"
import { useAnimation } from "@/components/animation-provider"

export default function MedusasDetail() {
  const { FadeIn, SlideIn, ScaleIn } = useAnimation()

  const actividades = [
    {
      titulo: "Buceo Recreativo",
      descripcion: "Inmersiones guiadas para todos los niveles",
      icono: Waves
    },
    {
      titulo: "Cursos de Certificación",
      descripcion: "Programas de certificación internacional",
      icono: Trophy
    },
    {
      titulo: "Actividades Grupales",
      descripcion: "Experiencias subacuáticas en grupo",
      icono: Users
    },
    {
      titulo: "Entrenamiento Técnico",
      descripcion: "Perfeccionamiento de técnicas de buceo",
      icono: Clock
    }
  ]

  const servicios = [
    "Cursos de buceo para principiantes",
    "Certificaciones internacionales",
    "Inmersiones recreativas",
    "Buceo nocturno",
    "Fotografía submarina",
    "Actividades familiares",
    "Equipos especializados",
    "Guías profesionales"
  ]

  const instalaciones = [
    {
      nombre: "Complejo Acuático Simón Bolívar",
      descripcion: "Modernas instalaciones acuáticas donde desarrollamos nuestras actividades",
      características: [
        "Piscinas profesionales",
        "Área de entrenamiento",
        "Vestuarios y duchas",
        "Zona de equipos",
        "Área de briefing"
      ]
    }
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
                  Club Medusas
                </h1>
                <p className="text-xl text-white/80">
                  Club especializado en actividades subacuáticas
                </p>
              </div>
              
              <div className="flex justify-center md:justify-end">
                <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-white rounded-lg flex items-center justify-center p-4">
                  <Image
                    src="/medusas-logo.jpg"
                    alt="Logo Club Medusas"
                    width={120}
                    height={160}
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
                        <h4 className="font-medium">Ubicación de Actividades</h4>
                        <p className="text-muted-foreground">Complejo Acuático Simón Bolívar</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Todas nuestras actividades se desarrollan en estas modernas instalaciones acuáticas
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Globe className="h-5 w-5 text-[#0B8CBF] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium">Sitio Web Oficial</h4>
                        <a 
                          href="http://www.medusas.com.co" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[#0B8CBF] hover:underline"
                        >
                          www.medusas.com.co
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">
                          Visita nuestro sitio web para más información y logotipo oficial
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <a href="http://www.medusas.com.co" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-[#0B8CBF] hover:bg-[#0B8CBF]/90">
                        <Globe className="h-4 w-4 mr-2" />
                        Visitar Sitio Web
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </SlideIn>

            {/* Descripción */}
            <SlideIn direction="right">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter mb-4">Acerca del Club</h2>
                  <p className="text-lg text-muted-foreground">
                    El Club Medusas es una organización especializada en actividades subacuáticas que ofrece 
                    experiencias únicas en el mundo submarino. Desarrollamos todas nuestras actividades en el 
                    prestigioso Complejo Acuático Simón Bolívar.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Nuestra Misión</h3>
                  <p className="text-muted-foreground">
                    Promover y desarrollar las actividades subacuáticas de manera segura y profesional, 
                    brindando experiencias inolvidables tanto para principiantes como para buceadores experimentados, 
                    siempre con los más altos estándares de seguridad y calidad.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">¿Por qué Elegirnos?</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#0B8CBF] rounded-full flex-shrink-0" />
                      Instructores certificados internacionalmente
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#0B8CBF] rounded-full flex-shrink-0" />
                      Instalaciones de primer nivel
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#0B8CBF] rounded-full flex-shrink-0" />
                      Equipos de seguridad profesionales
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#0B8CBF] rounded-full flex-shrink-0" />
                      Experiencias para todos los niveles
                    </li>
                  </ul>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Actividades Principales */}
      <section className="py-16 md:py-24 bg-[#F8F9FA]">
        <div className="container px-4 md:px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              Nuestras Actividades
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos una amplia variedad de actividades subacuáticas diseñadas para todos los niveles de experiencia
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {actividades.map((actividad, index) => (
              <ScaleIn key={index} delay={index * 0.1}>
                <Card className="text-center p-6 hover:shadow-lg transition-shadow h-full">
                  <div className="w-16 h-16 bg-[#0B8CBF]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <actividad.icono className="h-8 w-8 text-[#0B8CBF]" />
                  </div>
                  <h3 className="font-semibold mb-2">{actividad.titulo}</h3>
                  <p className="text-sm text-muted-foreground">{actividad.descripcion}</p>
                </Card>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Instalaciones */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              Nuestras Instalaciones
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Desarrollamos nuestras actividades en instalaciones de primer nivel
            </p>
          </FadeIn>

          {instalaciones.map((instalacion, index) => (
            <SlideIn key={index} direction="up">
              <Card className="max-w-4xl mx-auto">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#0B8CBF] text-center">
                    {instalacion.nombre}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground mb-6">{instalacion.descripcion}</p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {instalacion.características.map((caracteristica, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#0B8CBF] rounded-full flex-shrink-0" />
                        <span className="text-sm">{caracteristica}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </SlideIn>
          ))}
        </div>
      </section>

      {/* Servicios */}
      <section className="py-16 md:py-24 bg-[#F8F9FA]">
        <div className="container px-4 md:px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Una completa gama de servicios subacuáticos para satisfacer todas tus necesidades
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {servicios.map((servicio, index) => (
              <ScaleIn key={index} delay={index * 0.05}>
                <Card className="text-center p-4 hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 bg-[#0B8CBF]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Waves className="h-5 w-5 text-[#0B8CBF]" />
                  </div>
                  <h3 className="font-medium text-sm">{servicio}</h3>
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
              ¿Listo para Explorar el Mundo Subacuático?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Únete a Club Medusas y descubre las maravillas del mundo submarino con la seguridad 
              y profesionalismo que nos caracteriza.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="http://www.medusas.com.co" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary">
                  <Globe className="h-4 w-4 mr-2" />
                  Visitar Web Oficial
                </Button>
              </a>
              <Link href="/contacto">
                <Button size="lg" variant="outline" className=" border-white hover:bg-white text-[#0B8CBF]">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Más Información
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
} 