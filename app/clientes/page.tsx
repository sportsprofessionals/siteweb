"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { StarIcon } from "lucide-react"
import { useAnimation } from "@/components/animation-provider"

const testimonios = [
  {
    nombre: "Carlos Rodríguez",
    cargo: "Director de Deportes",
    empresa: "Alcaldía de Bogotá",
    texto:
      "SPORTSPROFESSIONALS ha sido un aliado estratégico en la modernización de los servicios deportivos de nuestra ciudad. Su experiencia y compromiso han sido clave para ofrecer mejores espacios y programas a nuestros ciudadanos.",
    imagen: "/placeholder.svg",
  },
  {
    nombre: "Laura Martínez",
    cargo: "Gerente General",
    empresa: "Gimnasios VidaFit",
    texto:
      "Gracias a SPORTSPROFESSIONALS, hemos optimizado la operación de nuestros gimnasios, logrando una experiencia superior para nuestros clientes y un crecimiento sostenido en nuestros resultados.",
    imagen: "/placeholder.svg",
  },
  {
    nombre: "Miguel Ángel Sánchez",
    cargo: "Presidente",
    empresa: "Club Deportivo Los Andes",
    texto:
      "La asesoría de SPORTSPROFESSIONALS ha transformado la gestión de nuestro club, permitiéndonos alcanzar nuevos niveles de excelencia en nuestros entrenamientos y servicios.",
    imagen: "/placeholder.svg",
  },
  {
    nombre: "Ana Gómez",
    cargo: "Directora de Recursos Humanos",
    empresa: "Corporación Empresarial ABC",
    texto:
      "Los programas de bienestar laboral implementados por SPORTSPROFESSIONALS han mejorado significativamente la calidad de vida de nuestros empleados, aumentando su productividad y compromiso.",
    imagen: "/placeholder.svg",
  },
  {
    nombre: "Javier López",
    cargo: "Gerente General",
    empresa: "Resort Caribe",
    texto:
      "El programa de turismo deportivo diseñado por SPORTSPROFESSIONALS ha diversificado nuestra oferta, atrayendo a nuevos clientes y aumentando nuestra ocupación en temporadas bajas.",
    imagen: "/placeholder.svg",
  },
  {
    nombre: "Elena Fernández",
    cargo: "Concejala de Deportes",
    empresa: "Alcaldía de Medellín",
    texto:
      "La planificación estratégica deportiva desarrollada por SPORTSPROFESSIONALS ha sido fundamental para mejorar la infraestructura y los programas deportivos en nuestra ciudad.",
    imagen: "/placeholder.svg",
  },
]

const clientes = [
  { nombre: "Alcaldía de Bogotá", logo: "/placeholder.svg" },
  { nombre: "Gimnasios VidaFit", logo: "/placeholder.svg" },
  { nombre: "Club Deportivo Los Andes", logo: "/placeholder.svg" },
  { nombre: "Corporación Empresarial ABC", logo: "/placeholder.svg" },
  { nombre: "Resort Caribe", logo: "/placeholder.svg" },
  { nombre: "Alcaldía de Medellín", logo: "/placeholder.svg" },
  { nombre: "Centro Deportivo Nacional", logo: "/placeholder.svg" },
  { nombre: "Federación Colombiana de Fútbol", logo: "/placeholder.svg" },
  { nombre: "Universidad del Deporte", logo: "/placeholder.svg" },
  { nombre: "Complejo Deportivo El Campín", logo: "/placeholder.svg" },
  { nombre: "Cadena de Gimnasios Fitness Colombia", logo: "/placeholder.svg" },
  { nombre: "Asociación Deportiva Colombiana", logo: "/placeholder.svg" },
]

export default function Clientes() {
  const { FadeIn, SlideIn, ScaleIn } = useAnimation()

  return (
    <div>
      <section className="bg-[#5E308C] py-16 md:py-24 text-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nuestros Clientes</h1>
            <p className="mt-4 text-xl text-white/80">Empresas e instituciones que confían en SPORTSPROFESSIONALS</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Empresas que confían en nosotros</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              A lo largo de nuestra trayectoria, hemos tenido el privilegio de trabajar con importantes empresas e
              instituciones del sector deportivo y más allá.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
            {clientes.map((cliente, index) => (
              <ScaleIn key={index} delay={index * 0.1} className="w-full max-w-[200px]">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 h-32 flex items-center justify-center">
                  <Image
                    src={cliente.logo || "/placeholder.svg"}
                    alt={cliente.nombre}
                    width={150}
                    height={80}
                    className="max-h-20 w-auto object-contain"
                  />
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#F8F9FA]">
        <div className="container px-4 md:px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Testimonios</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Descubre lo que nuestros clientes dicen sobre nuestra colaboración y los resultados obtenidos.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonios.map((testimonio, index) => (
              <SlideIn key={index} direction="up" delay={index * 0.1}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6">"{testimonio.texto}"</p>
                    <div className="flex items-center gap-4">
                      <Image
                        src={testimonio.imagen || "/placeholder.svg"}
                        alt={testimonio.nombre}
                        width={60}
                        height={60}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-medium">{testimonio.nombre}</h3>
                        <p className="text-sm text-muted-foreground">
                          {testimonio.cargo}, {testimonio.empresa}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <SlideIn direction="left">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight">¿Quieres ser nuestro próximo caso de éxito?</h2>
                <p className="text-lg text-muted-foreground">
                  En SPORTSPROFESSIONALS nos enorgullece el éxito de nuestros clientes. Trabajamos estrechamente con
                  cada organización para entender sus necesidades específicas y desarrollar soluciones a medida que
                  generen resultados tangibles.
                </p>
                <p className="text-lg text-muted-foreground">
                  Nuestro enfoque colaborativo y nuestra experiencia en el sector deportivo nos permiten ofrecer un
                  servicio de alta calidad que marca la diferencia en la gestión deportiva de nuestros clientes.
                </p>
                <div className="pt-4">
                  <Button asChild className="bg-[#5E308C] hover:bg-[#5357A6]">
                    <Link href="/contacto">Contactar ahora</Link>
                  </Button>
                </div>
              </div>
            </SlideIn>
            <ScaleIn>
              <Image
                src="/placeholder.svg"
                alt="Casos de éxito"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full"
              />
            </ScaleIn>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-r from-[#5E308C] to-[#0F8DBF] text-white">
        <div className="container px-4 md:px-6">
          <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">¿Quieres compartir tu experiencia?</h2>
            <p className="max-w-[700px] md:text-lg">
              Si eres cliente de SPORTSPROFESSIONALS y quieres compartir tu experiencia, nos encantaría escucharte.
              Contacta con nosotros para incluir tu testimonio en nuestra página.
            </p>
            <div className="pt-4">
              <Button asChild className="bg-white text-[#5E308C] hover:bg-white/90">
                <Link href="/contacto">Compartir mi experiencia</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
