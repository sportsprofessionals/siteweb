"use client"

import { useAnimation } from "@/components/animation-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"

export default function ServiciosPage() {
  const { FadeIn, SlideIn } = useAnimation()

  return (
    <div className="container py-16 md:py-24">
      <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="inline-block rounded-lg bg-[#5E308C]/10 px-3 py-1 text-sm text-[#5E308C]">
          Nuestros Servicios
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Servicios Especializados
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Ofrecemos una amplia gama de servicios especializados en el ámbito deportivo y recreativo.
        </p>
      </FadeIn>

      <Tabs defaultValue="administracion" className="w-full">
        <TabsList className="grid w-full grid-cols-5 mb-8">
          <TabsTrigger value="administracion">Administración</TabsTrigger>
          <TabsTrigger value="educacion">Educación Física</TabsTrigger>
          <TabsTrigger value="actividad">Actividad Física</TabsTrigger>
          <TabsTrigger value="deporte">Deporte</TabsTrigger>
          <TabsTrigger value="recreacion">Recreación</TabsTrigger>
        </TabsList>

        {/* Administración Deportiva */}
        <TabsContent value="administracion">
          <div className="grid gap-6">
            <SlideIn direction="up">
              <Card>
                <CardHeader>
                  <CardTitle>Administración Deportiva</CardTitle>
                  <CardDescription>
                    Servicios especializados en gestión y administración deportiva
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
          </div>
        </TabsContent>

        {/* Educación Física */}
        <TabsContent value="educacion">
          <div className="grid gap-6">
            <SlideIn direction="up">
              <Card>
                <CardHeader>
                  <CardTitle>Educación Física</CardTitle>
                  <CardDescription>
                    Servicios especializados en educación física y desarrollo motor
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Contexto histórico de la educación física</li>
                    <li>Metodología de la enseñanza de la educación física</li>
                    <li>Teoría de las habilidades motrices</li>
                    <li>Organización, administración y gestión de la educación física</li>
                    <li>Competencias para el desempeño profesional en la educación física</li>
                    <li>Educación física y deporte escolar</li>
                    <li>Teoría y práctica de la educación física adaptada</li>
                    <li>Desarrollo de talentos deportivos en la educación física</li>
                  </ul>
                </CardContent>
              </Card>
            </SlideIn>
          </div>
        </TabsContent>

        {/* Actividad Física */}
        <TabsContent value="actividad">
          <div className="grid gap-6">
            <SlideIn direction="up">
              <Card>
                <CardHeader>
                  <CardTitle>Actividad Física</CardTitle>
                  <CardDescription>
                    Servicios especializados en actividad física y bienestar
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
          </div>
        </TabsContent>

        {/* Deporte */}
        <TabsContent value="deporte">
          <div className="grid gap-6">
            <SlideIn direction="up">
              <Card>
                <CardHeader>
                  <CardTitle>Deporte</CardTitle>
                  <CardDescription>
                    Servicios especializados en deporte y alto rendimiento
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Área de Alto Rendimiento y Preparación Física</h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Deporte y rendimiento</li>
                        <li>Metodología del entrenamiento deportivo</li>
                        <li>Preparación física especializada por disciplina</li>
                        <li>Evaluaciones físicas y control del rendimiento</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Área de Inclusión y Deporte Adaptado</h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Deporte adaptado y rendimiento deportivo</li>
                        <li>Asesoramiento en inclusión deportiva</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Área de Formación y Desarrollo Humano</h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Coaching deportivo y desarrollo de entrenadores</li>
                        <li>Capacitación profesional continua</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Área de Tendencias y Experiencias Deportivas</h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Deportes de nuevas tendencias y aventura</li>
                        <li>Turismo deportivo y experiencias activas</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Área de Ciencia, Tecnología y Gestión del Deporte</h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Investigación deportiva aplicada</li>
                        <li>Tecnología para el rendimiento</li>
                        <li>Consultoría y gestión de programas deportivos</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </SlideIn>
          </div>
        </TabsContent>

        {/* Recreación */}
        <TabsContent value="recreacion">
          <div className="grid gap-6">
            <SlideIn direction="up">
              <Card>
                <CardHeader>
                  <CardTitle>Recreación</CardTitle>
                  <CardDescription>
                    Servicios especializados en recreación, cultura y bienestar activo
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">1. Organización de Eventos Recreativos</h3>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">2. Recreación al Aire Libre y Naturaleza</h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Caminatas ecológicas guiadas</li>
                        <li>Campamentos formativos y recreativos</li>
                        <li>Rutas temáticas y jornadas al aire libre</li>
                        <li>Excursiones ecoturísticas y culturales</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">3. Recreación Empresarial e Institucional</h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Festivales recreativos para empresas y organizaciones</li>
                        <li>Jornadas de pausas activas y recreación laboral</li>
                        <li>Team building recreativo</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">4. Turismo Recreativo y Experiencias Activas</h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Programas de turismo activo</li>
                        <li>Turismo social</li>
                        <li>Viajes recreo-formativos</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">5. Nuevas Tendencias y Experiencias Innovadoras</h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Recreación digital y gamificada</li>
                        <li>Festivales culturales y de expresión creativa</li>
                        <li>Recreación inclusiva</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </SlideIn>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
} 