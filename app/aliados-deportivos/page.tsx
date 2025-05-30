"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Globe, Eye } from "lucide-react"
import { useAnimation } from "@/components/animation-provider"

const aliados = [
  {
    id: "fenix",
    nombre: "Centro de Desarrollo Deportivo FENIX",
    descripcion: "Centro especializado en alquiler de espacios deportivos con canchas de voleibol y próximamente baloncesto",
    ubicacion: "Barrio Salazar Gómez, Carrera 60 #11-38",
    telefono: "3132141903",
    telefonoAdicional: "3116486446",
    logo: "/fenix-logo.jpg",
    servicios: ["4 canchas de voleibol reglamentarias", "Próximamente 2 canchas de baloncesto"],
    tipo: "Centro deportivo"
  },
  {
    id: "medusas",
    nombre: "Club Medusas",
    descripcion: "Club especializado en actividades subacuáticas que desarrolla sus actividades en el Complejo Acuático Simón Bolívar",
    ubicacion: "Complejo Acuático Simón Bolívar",
    website: "http://www.medusas.com.co",
    logo: "/medusas-logo.jpg",
    servicios: ["Actividades subacuáticas", "Entrenamiento especializado", "Programas recreativos"],
    tipo: "Club acuático"
  }
]

export default function AliadosDeportivos() {
  const { FadeIn, SlideIn, ScaleIn } = useAnimation()

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#0B8CBF] py-16 md:py-24 text-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Nuestros Aliados Deportivos
              </h1>
              <p className="mt-4 text-xl text-white/80">
                Conoce los centros deportivos y clubes con los que colaboramos para ofrecer las mejores experiencias deportivas
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Aliados Grid */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <FadeIn className="text-center mb-16">
            <div className="inline-block rounded-lg bg-[#0B8CBF]/10 px-3 py-1 text-sm text-[#0B8CBF] mb-4">
              Nuestros Aliados
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Aliados Deportivos de Confianza
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Trabajamos de la mano con los mejores centros deportivos y clubes especializados para garantizar 
              espacios de calidad y experiencias deportivas excepcionales.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {aliados.map((aliado, index) => (
              <SlideIn key={aliado.id} direction="up" delay={index * 0.2}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Image
                        src={aliado.logo}
                        alt={`Logo ${aliado.nombre}`}
                        width={aliado.id === "fenix" ? 140 : 80}
                        height={aliado.id === "fenix" ? 70 : 100}
                        className="object-contain rounded-lg max-w-full max-h-full"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg"
                        }}
                      />
                    </div>
                    <CardTitle className="text-xl text-[#0B8CBF]">{aliado.nombre}</CardTitle>
                    <div className="inline-block bg-[#0B8CBF]/10 text-[#0B8CBF] px-2 py-1 rounded text-sm">
                      {aliado.tipo}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-center">
                      {aliado.descripcion}
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-[#0B8CBF] flex-shrink-0" />
                        <span>{aliado.ubicacion}</span>
                      </div>
                      
                      {aliado.telefono && (
                        <div className="flex items-center gap-2 text-sm">
                          <Phone className="h-4 w-4 text-[#0B8CBF] flex-shrink-0" />
                          <span>{aliado.telefono}</span>
                          {aliado.telefonoAdicional && (
                            <span className="text-muted-foreground">/ {aliado.telefonoAdicional}</span>
                          )}
                        </div>
                      )}
                      
                      {aliado.website && (
                        <div className="flex items-center gap-2 text-sm">
                          <Globe className="h-4 w-4 text-[#0B8CBF] flex-shrink-0" />
                          <a 
                            href={aliado.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[#0B8CBF] hover:underline"
                          >
                            {aliado.website}
                          </a>
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Servicios principales:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {aliado.servicios.map((servicio, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-[#0B8CBF] rounded-full flex-shrink-0" />
                            {servicio}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-4">
                      <Link href={`/aliados-deportivos/${aliado.id}`}>
                        <Button className="w-full bg-[#0B8CBF] hover:bg-[#0B8CBF]/90">
                          <Eye className="h-4 w-4 mr-2" />
                          Ver más información
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#F8F9FA]">
        <div className="container px-4 md:px-6">
          <FadeIn className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              ¿Quieres ser nuestro aliado deportivo?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Si tienes un centro deportivo, club o instalación y quieres formar parte de nuestra red de aliados, 
              contáctanos para conocer más sobre nuestros programas de colaboración.
            </p>
            <Link href="/contacto">
              <Button size="lg" className="bg-[#0B8CBF] hover:bg-[#0B8CBF]/90">
                Contáctanos
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  )
} 