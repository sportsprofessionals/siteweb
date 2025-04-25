"use client"

import { useAnimation } from "@/components/animation-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function DeportePage() {
  const { FadeIn, SlideIn } = useAnimation()

  return (
    <div className="container py-16 md:py-24">
      <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="inline-block rounded-lg bg-[#0B8CBF]/10 px-3 py-1 text-sm text-[#0B8CBF]">
          Deporte
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Servicios en Deporte
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Ofrecemos servicios especializados en deporte para diferentes niveles y necesidades.
        </p>
      </FadeIn>

      <div className="grid gap-8 md:grid-cols-2">
        <SlideIn direction="left">
          <Card>
            <CardHeader>
              <CardTitle>Áreas de Servicio</CardTitle>
              <CardDescription>
                Soluciones integrales para el deporte
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Área de Alto Rendimiento y Preparación Física</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Deporte y rendimiento</li>
                    <li>Metodología del entrenamiento deportivo</li>
                    <li>Preparación física especializada por disciplina</li>
                    <li>Evaluaciones físicas y control del rendimiento</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Área de Inclusión y Deporte Adaptado</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Deporte adaptado y rendimiento deportivo</li>
                    <li>Asesoramiento en inclusión deportiva</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Área de Formación y Desarrollo Humano</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Coaching deportivo y desarrollo de entrenadores</li>
                    <li>Capacitación profesional continua</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Área de Tendencias y Experiencias Deportivas</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Deportes de nuevas tendencias y aventura</li>
                    <li>Turismo deportivo y experiencias activas</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Área de Ciencia, Tecnología y Gestión del Deporte</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Investigación deportiva aplicada</li>
                    <li>Tecnología para el rendimiento</li>
                    <li>Consultoría y gestión de programas deportivos</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </SlideIn>

        <SlideIn direction="right">
          <div className="space-y-6">
            <div className="relative h-64 w-full overflow-hidden rounded-lg">
              <Image
                src="/deporte.jpg"
                alt="Deporte"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 w-full overflow-hidden rounded-lg">
              <Image
                src="/deporte-2.jpg"
                alt="Deporte Adaptado"
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
                ¿Por qué elegir nuestros servicios deportivos?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Especialización</h3>
                  <p className="text-muted-foreground">
                    Expertos en diferentes áreas del deporte y el rendimiento.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Innovación</h3>
                  <p className="text-muted-foreground">
                    Tecnología y metodologías de vanguardia para el deporte.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Inclusión</h3>
                  <p className="text-muted-foreground">
                    Programas adaptados para todas las personas y capacidades.
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