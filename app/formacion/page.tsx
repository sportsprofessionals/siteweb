"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GraduationCap, Users, Building, BookOpen, Award, Calendar } from "lucide-react"
import { useAnimation } from "@/components/animation-provider"

export default function Formacion() {
  const { FadeIn, SlideIn, ScaleIn } = useAnimation()

  return (
    <div>
      <section className="bg-[#5E308C] py-16 md:py-24 text-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Formación</h1>
            <p className="mt-4 text-xl text-white/80">
              Transferimos nuestro conocimiento y experiencia en el mundo de la gestión del deporte
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center mb-20">
            <ScaleIn>
              <Image
                src="/entrenador2.jpg"
                alt="Formación SPORTSPROFESSIONALS"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full"
              />
            </ScaleIn>
            <SlideIn direction="right">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight">Nuestra Formación</h2>
                <p className="text-lg text-muted-foreground">
                  Una de nuestras actividades es transferir nuestro conocimiento y experiencia en el mundo de la gestión
                  del deporte. Compartir nuestras respuestas a los profesionales, empresas e instituciones que quieran
                  desarrollarse a través del ejercicio de la gestión deportiva.
                </p>
                <h3 className="text-xl font-bold">Servicios</h3>
                <p className="text-lg text-muted-foreground">
                  Formaciones dirigidas a gestores deportivos de entidades públicas y privadas, directores o gerentes de
                  instalaciones deportivas, técnicos deportivos, titulados universitarios y estudiantes de grados y
                  máster del deporte.
                </p>
                <h3 className="text-xl font-bold">Formación a medida</h3>
                <p className="text-lg text-muted-foreground">
                  Disponemos de programas con la capacidad de adaptarse a las necesidades de las organizaciones
                  deportivas.
                </p>
              </div>
            </SlideIn>
          </div>

          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Nuestros Programas de Formación</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Hemos compartido en jornadas, conferencias, ponencias y diferentes asignaturas en diferentes instituciones
              y entidades socioeconómicas.
            </p>
          </FadeIn>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <SlideIn direction="up" delay={0.1}>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 h-full">
                <GraduationCap className="h-10 w-10 text-[#5E308C] mb-4" />
                <h3 className="text-xl font-bold mb-3">Gestión Deportiva Avanzada</h3>
                <p className="text-muted-foreground mb-4">
                  Programa completo para profesionales que buscan mejorar sus habilidades en la gestión de
                  organizaciones deportivas.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <Calendar className="h-4 w-4 text-[#41A650] shrink-0 mt-0.5" />
                    <span>Duración: 60 horas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="h-4 w-4 text-[#41A650] shrink-0 mt-0.5" />
                    <span>Dirigido a: Gestores deportivos y directores</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-[#5E308C] hover:bg-[#5357A6]">
                  <Link href="/contacto">Solicitar información</Link>
                </Button>
              </div>
            </SlideIn>
            <SlideIn direction="up" delay={0.2}>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 h-full">
                <Building className="h-10 w-10 text-[#5E308C] mb-4" />
                <h3 className="text-xl font-bold mb-3">Dirección de Instalaciones Deportivas</h3>
                <p className="text-muted-foreground mb-4">
                  Formación especializada en la gestión eficiente de instalaciones y centros deportivos.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <Calendar className="h-4 w-4 text-[#41A650] shrink-0 mt-0.5" />
                    <span>Duración: 40 horas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="h-4 w-4 text-[#41A650] shrink-0 mt-0.5" />
                    <span>Dirigido a: Directores y gerentes de instalaciones</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-[#5E308C] hover:bg-[#5357A6]">
                  <Link href="/contacto">Solicitar información</Link>
                </Button>
              </div>
            </SlideIn>
            <SlideIn direction="up" delay={0.3}>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 h-full">
                <BookOpen className="h-10 w-10 text-[#5E308C] mb-4" />
                <h3 className="text-xl font-bold mb-3">Marketing Deportivo</h3>
                <p className="text-muted-foreground mb-4">
                  Estrategias de marketing y comunicación específicas para el sector deportivo.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <Calendar className="h-4 w-4 text-[#41A650] shrink-0 mt-0.5" />
                    <span>Duración: 30 horas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="h-4 w-4 text-[#41A650] shrink-0 mt-0.5" />
                    <span>Dirigido a: Profesionales de marketing y comunicación</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-[#5E308C] hover:bg-[#5357A6]">
                  <Link href="/contacto">Solicitar información</Link>
                </Button>
              </div>
            </SlideIn>
            <SlideIn direction="up" delay={0.4}>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 h-full">
                <Award className="h-10 w-10 text-[#5E308C] mb-4" />
                <h3 className="text-xl font-bold mb-3">Planificación de Eventos Deportivos</h3>
                <p className="text-muted-foreground mb-4">
                  Organización y gestión de eventos deportivos de diferentes escalas.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <Calendar className="h-4 w-4 text-[#41A650] shrink-0 mt-0.5" />
                    <span>Duración: 25 horas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="h-4 w-4 text-[#41A650] shrink-0 mt-0.5" />
                    <span>Dirigido a: Organizadores de eventos y técnicos deportivos</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-[#5E308C] hover:bg-[#5357A6]">
                  <Link href="/contacto">Solicitar información</Link>
                </Button>
              </div>
            </SlideIn>
            <SlideIn direction="up" delay={0.5}>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 h-full">
                <Users className="h-10 w-10 text-[#5E308C] mb-4" />
                <h3 className="text-xl font-bold mb-3">Gestión de Recursos Humanos en el Deporte</h3>
                <p className="text-muted-foreground mb-4">
                  Estrategias para la gestión eficiente del personal en organizaciones deportivas.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <Calendar className="h-4 w-4 text-[#41A650] shrink-0 mt-0.5" />
                    <span>Duración: 20 horas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="h-4 w-4 text-[#41A650] shrink-0 mt-0.5" />
                    <span>Dirigido a: Responsables de RRHH y directores</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-[#5E308C] hover:bg-[#5357A6]">
                  <Link href="/contacto">Solicitar información</Link>
                </Button>
              </div>
            </SlideIn>
            <SlideIn direction="up" delay={0.6}>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 h-full">
                <GraduationCap className="h-10 w-10 text-[#5E308C] mb-4" />
                <h3 className="text-xl font-bold mb-3">Formación a Medida</h3>
                <p className="text-muted-foreground mb-4">
                  Programas personalizados adaptados a las necesidades específicas de tu organización.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <Calendar className="h-4 w-4 text-[#41A650] shrink-0 mt-0.5" />
                    <span>Duración: Según necesidades</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="h-4 w-4 text-[#41A650] shrink-0 mt-0.5" />
                    <span>Dirigido a: Organizaciones deportivas</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-[#5E308C] hover:bg-[#5357A6]">
                  <Link href="/contacto">Solicitar información</Link>
                </Button>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#F8F9FA]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <SlideIn direction="left">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight">Experiencia</h2>
                <p className="text-lg text-muted-foreground">
                  Hemos compartido en jornadas, conferencias, ponencias y diferentes asignaturas en diferentes
                  instituciones y entidades socioeconómicas.
                </p>
                <p className="text-lg text-muted-foreground">
                  Nuestra experiencia nos permite ofrecer formación de alta calidad, combinando conocimientos teóricos
                  con aplicaciones prácticas del mundo real.
                </p>
                <p className="text-lg text-muted-foreground">
                  Contamos con un equipo de profesionales con amplia experiencia en el sector deportivo, que comparten
                  sus conocimientos y mejores prácticas.
                </p>
                <div className="pt-4">
                  <Button asChild className="bg-[#5E308C] hover:bg-[#5357A6]">
                    <Link href="/contacto">Solicitar información</Link>
                  </Button>
                </div>
              </div>
            </SlideIn>
            <ScaleIn>
            <iframe
              src="https://www.youtube.com/embed/BakoE2sMVjg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              width={600}
              height={400}
              className="mx-auto rounded-lg object-cover"
            />
            </ScaleIn>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-lg bg-[#5E308C]/10 px-3 py-1 text-sm text-[#5E308C]">
              Formación Personalizada
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              ¿Necesitas un programa de formación a medida?
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              Contáctanos para diseñar un programa de formación adaptado a las necesidades específicas de tu
              organización.
            </p>
            <div className="pt-4">
              <Button asChild className="bg-[#5E308C] hover:bg-[#5357A6]">
                <Link href="/contacto">Contactar ahora</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
