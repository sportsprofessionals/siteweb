"use client"

import { useAnimation } from "@/components/animation-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function EducacionFisicaPage() {
  const { FadeIn, SlideIn } = useAnimation()

  return (
    <div className="container py-16 md:py-24">
      <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="inline-block rounded-lg bg-[#5E308C]/10 px-3 py-1 text-sm text-[#5E308C]">
          Educación Física
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Servicios en Educación Física
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Ofrecemos servicios especializados en educación física para instituciones educativas y organizaciones.
        </p>
      </FadeIn>

      <div className="grid gap-8 md:grid-cols-2">
        <SlideIn direction="left">
          <Card>
            <CardHeader>
              <CardTitle>Servicios Principales</CardTitle>
              <CardDescription>
                Soluciones integrales para la educación física
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Metodología de la enseñanza de la educación física</li>
                <li>Historia y epistemología de la educación física</li>
                <li>Desarrollo del talento deportivo</li>
                <li>Psicología del deporte y la actividad física</li>
                <li>Fisiología del ejercicio</li>
                <li>Biomecánica del movimiento humano</li>
                <li>Nutrición deportiva</li>
                <li>Primeros auxilios y prevención de lesiones</li>
                <li>Actividad física y salud</li>
                <li>Deporte escolar y recreativo</li>
                <li>Evaluación y medición en educación física</li>
                <li>Didáctica de la educación física</li>
              </ul>
            </CardContent>
          </Card>
        </SlideIn>

        <SlideIn direction="right">
          <div className="space-y-6">
            <div className="relative h-64 w-full overflow-hidden rounded-lg">
              <Image
                src="/educacion-fisica.jpg"
                alt="Educación Física"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 w-full overflow-hidden rounded-lg">
              <Image
                src="/educacion-fisica-2.jpg"
                alt="Enseñanza Deportiva"
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
                ¿Por qué elegir nuestros servicios de educación física?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Expertise</h3>
                  <p className="text-muted-foreground">
                    Profesionales altamente capacitados en educación física y deportes.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Metodología</h3>
                  <p className="text-muted-foreground">
                    Enfoques pedagógicos innovadores y efectivos para el aprendizaje.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Impacto</h3>
                  <p className="text-muted-foreground">
                    Resultados medibles en el desarrollo físico y deportivo de los estudiantes.
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