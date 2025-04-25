"use client"

import { useAnimation } from "@/components/animation-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function RecreacionPage() {
  const { FadeIn, SlideIn } = useAnimation()

  return (
    <div className="container py-16 md:py-24">
      <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="inline-block rounded-lg bg-[#0B8CBF]/10 px-3 py-1 text-sm text-[#0B8CBF]">
          Recreación
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Servicios en Recreación
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Ofrecemos servicios especializados en recreación, cultura y bienestar activo.
        </p>
      </FadeIn>

      <div className="grid gap-8 md:grid-cols-2">
        <SlideIn direction="left">
          <Card>
            <CardHeader>
              <CardTitle>Líneas de Servicio</CardTitle>
              <CardDescription>
                Soluciones integrales para la recreación
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">1. Organización de Eventos Recreativos</h3>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">2. Recreación al Aire Libre y Naturaleza</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Caminatas ecológicas guiadas</li>
                    <li>Campamentos formativos y recreativos</li>
                    <li>Rutas temáticas y jornadas al aire libre</li>
                    <li>Excursiones ecoturísticas y culturales</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">3. Recreación Empresarial e Institucional</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Festivales recreativos para empresas y organizaciones</li>
                    <li>Jornadas de pausas activas y recreación laboral</li>
                    <li>Team building recreativo</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">4. Turismo Recreativo y Experiencias Activas</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Programas de turismo activo</li>
                    <li>Turismo social</li>
                    <li>Viajes recreo-formativos</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">5. Nuevas Tendencias y Experiencias Innovadoras</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Recreación digital y gamificada</li>
                    <li>Festivales culturales y de expresión creativa</li>
                    <li>Recreación inclusiva</li>
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
                src="/recreacion.jpg"
                alt="Recreación"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 w-full overflow-hidden rounded-lg">
              <Image
                src="/recreacion-2.jpg"
                alt="Recreación al Aire Libre"
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
                ¿Por qué elegir nuestros servicios de recreación?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Experiencias Únicas</h3>
                  <p className="text-muted-foreground">
                    Actividades innovadoras y memorables para todos los participantes.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Bienestar Integral</h3>
                  <p className="text-muted-foreground">
                    Programas que promueven la salud física y mental.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Desarrollo Social</h3>
                  <p className="text-muted-foreground">
                    Actividades que fomentan la integración y el trabajo en equipo.
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