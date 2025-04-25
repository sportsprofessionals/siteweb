"use client"

import { useAnimation } from "@/components/animation-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function ActividadFisicaPage() {
  const { FadeIn, SlideIn } = useAnimation()

  return (
    <div className="container py-16 md:py-24">
      <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="inline-block rounded-lg bg-[#0B8CBF]/10 px-3 py-1 text-sm text-[#0B8CBF]">
          Actividad Física
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Servicios en Actividad Física
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Ofrecemos servicios especializados en actividad física para diferentes poblaciones y necesidades.
        </p>
      </FadeIn>

      <div className="grid gap-8 md:grid-cols-2">
        <SlideIn direction="left">
          <Card>
            <CardHeader>
              <CardTitle>Servicios Principales</CardTitle>
              <CardDescription>
                Soluciones integrales para la actividad física
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Actividad física y salud</li>
                <li>Actividad física para adultos mayores</li>
                <li>Valoración y evaluación de la actividad física para diferentes poblaciones</li>
                <li>Actividades de acondicionamiento físico para adultos mayores</li>
                <li>Actividad física y envejecimiento</li>
                <li>Actividad física para poblaciones especiales</li>
                <li>Actividad física y bienestar laboral</li>
              </ul>
            </CardContent>
          </Card>
        </SlideIn>

        <SlideIn direction="right">
          <div className="space-y-6">
            <div className="relative h-64 w-full overflow-hidden rounded-lg">
              <Image
                src="/actividad-fisica.jpg"
                alt="Actividad Física"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 w-full overflow-hidden rounded-lg">
              <Image
                src="/actividad-fisica-2.jpg"
                alt="Actividad Física para Adultos Mayores"
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
                ¿Por qué elegir nuestros servicios de actividad física?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Personalización</h3>
                  <p className="text-muted-foreground">
                    Programas adaptados a cada persona y sus necesidades específicas.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Expertise</h3>
                  <p className="text-muted-foreground">
                    Profesionales especializados en diferentes poblaciones y necesidades.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Resultados</h3>
                  <p className="text-muted-foreground">
                    Mejoras medibles en salud, bienestar y calidad de vida.
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