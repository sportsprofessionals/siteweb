"use client"

import { useAnimation } from "@/components/animation-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function AdministracionDeportivaPage() {
  const { FadeIn, SlideIn } = useAnimation()

  return (
    <div className="container py-16 md:py-24">
      <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="inline-block rounded-lg bg-[#0B8CBF]/10 px-3 py-1 text-sm text-[#0B8CBF]">
          Administración Deportiva
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Servicios en Administración Deportiva
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Ofrecemos servicios especializados en gestión y administración deportiva para organizaciones e instituciones.
        </p>
      </FadeIn>

      <div className="grid gap-8 md:grid-cols-2">
        <SlideIn direction="left">
          <Card>
            <CardHeader>
              <CardTitle>Servicios Principales</CardTitle>
              <CardDescription>
                Soluciones integrales para la gestión deportiva
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Planeación estratégica en administración deportiva</li>
                <li>Liderazgo para las organizaciones deportivas</li>
                <li>Marketing deportivo</li>
                <li>Administración de instalaciones deportivas</li>
                <li>Capacitación en finanzas para el contexto del deporte</li>
                <li>Emprendimiento y planes de negocio en el deporte</li>
                <li>Metodología de la investigación en la administración deportiva</li>
                <li>Organización y planificación de eventos deportivos</li>
                <li>Teoría de la administración deportiva</li>
                <li>Gobernanza deportiva</li>
                <li>E-Sports y deportes electrónicos</li>
                <li>Turismo deportivo</li>
              </ul>
            </CardContent>
          </Card>
        </SlideIn>

        <SlideIn direction="right">
          <div className="space-y-6">
            <div className="relative h-64 w-full overflow-hidden rounded-lg">
              <Image
                src="/admin-deportiva.jpg"
                alt="Administración Deportiva"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 w-full overflow-hidden rounded-lg">
              <Image
                src="/admin-deportiva-2.jpg"
                alt="Gestión Deportiva"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </SlideIn>
      </div>

      <div className="mt-12">
        <SlideIn direction="up">
          <Card>
            <CardHeader>
              <CardTitle>Beneficios de Nuestros Servicios</CardTitle>
              <CardDescription>
                ¿Por qué elegir nuestros servicios de administración deportiva?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Experiencia</h3>
                  <p className="text-muted-foreground">
                    Años de experiencia en la gestión y administración de organizaciones deportivas.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Innovación</h3>
                  <p className="text-muted-foreground">
                    Soluciones modernas y adaptadas a las necesidades actuales del sector deportivo.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Resultados</h3>
                  <p className="text-muted-foreground">
                    Enfoque en resultados medibles y mejoras tangibles para su organización.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </SlideIn>
      </div>
    </div>
  )
}
