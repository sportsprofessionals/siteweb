"use client"

import { useAnimation } from "@/components/animation-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function QuienesSomosPage() {
  const { FadeIn, SlideIn } = useAnimation()

  return (
    <div className="container py-16 md:py-24">
      <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="inline-block rounded-lg bg-[#0B8CBF]/10 px-3 py-1 text-sm text-[#0B8CBF]">
          Quiénes Somos
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Nuestra Identidad
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Conoce nuestra misión, visión y valores que nos guían en el desarrollo del deporte y la recreación.
        </p>
      </FadeIn>

      <div className="grid gap-8 md:grid-cols-2">
        <SlideIn direction="left">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-2xl">Misión</CardTitle>
              <CardDescription>
                Nuestro compromiso con el desarrollo deportivo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-lg">
                Brindar soluciones integrales e innovadoras a nuestros clientes por medio de servicios especializados en administración deportiva, educación física, actividad física, deporte y recreación, que contribuya efectivamente al desarrollo social y económico del país.
                </p>
                <div className="relative h-64 w-full overflow-hidden rounded-lg">
                  <Image
                    src="/mision.jpg"
                    alt="Nuestra Misión"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </SlideIn>

        <SlideIn direction="right">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-2xl">Visión</CardTitle>
              <CardDescription>
                Nuestro futuro en el sector deportivo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-lg">
                  Posicionarnos, en el año 2029, como una organización de excelencia, altamente competitiva y referente a nivel nacional e internacional, reconocida por su liderazgo en servicios integrales e innovadores en los ámbitos de la gestión deportiva, la educación física, la actividad física, el deporte y la recreación.
                </p>
                <div className="relative h-64 w-full overflow-hidden rounded-lg">
                  <Image
                    src="/vision.jpg"
                    alt="Nuestra Visión"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </SlideIn>
      </div>
    </div>
  )
}
