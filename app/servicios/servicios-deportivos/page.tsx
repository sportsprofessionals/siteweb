"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import { useAnimation } from "@/components/animation-provider"

export default function ServiciosDeportivos() {
  const { FadeIn, SlideIn, ScaleIn } = useAnimation()

  return (
    <div>
      <section className="bg-[#0B8CBF] py-16 md:py-24 text-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Servicios Deportivos</h1>
            <p className="mt-4 text-xl text-white/80">
              Soluciones integrales para el entrenamiento y desarrollo deportivo
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <ScaleIn>
              <Image
                src="/entrenador.jpg"
                alt="Servicios Deportivos"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full"
              />
            </ScaleIn>

            <SlideIn direction="right">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tight">Nuestros Servicios Deportivos</h2>
                <p className="text-lg text-muted-foreground">
                  Ofrecemos soluciones integrales para el entrenamiento y desarrollo deportivo, con profesionales
                  altamente cualificados y metodologías probadas para alcanzar los mejores resultados.
                </p>

                <ul className="space-y-4 mt-6">
                  <li className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-[#41A650] shrink-0" />
                    <div>
                      <h3 className="font-medium">Capacitación en entrenamiento deportivo</h3>
                      <p className="text-muted-foreground">
                        Formación especializada para entrenadores y profesionales del deporte.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-[#41A650] shrink-0" />
                    <div>
                      <h3 className="font-medium">Monitores deportivos</h3>
                      <p className="text-muted-foreground">
                        Profesionales cualificados para la supervisión y dirección de actividades deportivas.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-[#41A650] shrink-0" />
                    <div>
                      <h3 className="font-medium">Entrenadores</h3>
                      <p className="text-muted-foreground">
                        Entrenadores especializados en diferentes disciplinas deportivas.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-[#41A650] shrink-0" />
                    <div>
                      <h3 className="font-medium">Turismo deportivo</h3>
                      <p className="text-muted-foreground">
                        Organización de actividades deportivas combinadas con experiencias turísticas.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-[#41A650] shrink-0" />
                    <div>
                      <h3 className="font-medium">Deporte adaptado para adultos mayores</h3>
                      <p className="text-muted-foreground">
                        Programas específicos adaptados a las necesidades de los adultos mayores.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-[#41A650] shrink-0" />
                    <div>
                      <h3 className="font-medium">Estudios e investigación en Metodología de servicios deportivos</h3>
                      <p className="text-muted-foreground">
                        Investigación aplicada para mejorar la calidad de los servicios deportivos.
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="pt-6">
                  <Button asChild className="bg-[#0B8CBF] hover:bg-[#5357A6]">
                    <Link href="/contacto">Solicitar información</Link>
                  </Button>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#F8F9FA]">
        <div className="container px-4 md:px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Nuestros Programas Deportivos</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Desarrollamos programas deportivos adaptados a diferentes públicos y necesidades, siempre con un enfoque
              profesional y personalizado.
            </p>
          </FadeIn>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <SlideIn direction="up" delay={0.1}>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 h-full">
                <h3 className="text-xl font-bold mb-3">Entrenamiento Personalizado</h3>
                <p className="text-muted-foreground mb-4">
                  Programas de entrenamiento adaptados a las necesidades y objetivos individuales, con seguimiento
                  personalizado por parte de entrenadores cualificados.
                </p>
                <Image
                  src="/entrenamiento-personalizado.jpg"
                  alt="Entrenamiento Personalizado"
                  width={400}
                  height={250}
                  className="rounded-lg object-cover w-full h-48"
                />
              </div>
            </SlideIn>
            <SlideIn direction="up" delay={0.2}>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 h-full">
                <h3 className="text-xl font-bold mb-3">Actividades Grupales</h3>
                <p className="text-muted-foreground mb-4">
                  Sesiones de entrenamiento en grupo para fomentar la motivación y el compañerismo, dirigidas por
                  monitores especializados en diferentes disciplinas.
                </p>
                <Image
                  src="/actividades-grupales.jpg"
                  alt="Actividades Grupales"
                  width={400}
                  height={250}
                  className="rounded-lg object-cover w-full h-48"
                />
              </div>
            </SlideIn>
            <SlideIn direction="up" delay={0.3}>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 h-full">
                <h3 className="text-xl font-bold mb-3">Deporte para Mayores</h3>
                <p className="text-muted-foreground mb-4">
                  Programas adaptados a las necesidades de los adultos mayores, enfocados en mejorar la calidad de vida,
                  la movilidad y el bienestar general.
                </p>
                <Image
                  src="/deporte-mayores.jpg"
                  alt="Deporte para Mayores"
                  width={400}
                  height={250}
                  className="rounded-lg object-cover w-full h-48"
                />
              </div>
            </SlideIn>
            <SlideIn direction="up" delay={0.4}>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 h-full">
                <h3 className="text-xl font-bold mb-3">Turismo Deportivo</h3>
                <p className="text-muted-foreground mb-4">
                  Experiencias que combinan actividades deportivas con turismo, permitiendo disfrutar del deporte en
                  entornos naturales y culturales únicos.
                </p>
                <Image
                  src="/turismo-deportivo.jpg"
                  alt="Turismo Deportivo"
                  width={400}
                  height={250}
                  className="rounded-lg object-cover w-full h-48"
                />
              </div>
            </SlideIn>
            <SlideIn direction="up" delay={0.5}>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 h-full">
                <h3 className="text-xl font-bold mb-3">Formación de Entrenadores</h3>
                <p className="text-muted-foreground mb-4">
                  Programas de capacitación para entrenadores y monitores deportivos, con el objetivo de mejorar sus
                  habilidades técnicas y pedagógicas.
                </p>
                <Image
                  src="/formacion-entrenadores.jpg"
                  alt="Formación de Entrenadores"
                  width={400}
                  height={250}
                  className="rounded-lg object-cover w-full h-48"
                />
              </div>
            </SlideIn>
            <SlideIn direction="up" delay={0.6}>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 h-full">
                <h3 className="text-xl font-bold mb-3">Eventos Deportivos</h3>
                <p className="text-muted-foreground mb-4">
                  Organización de competiciones, torneos y eventos deportivos para diferentes públicos y disciplinas.
                </p>
                <Image
                  src="/eventos-deportivos.jpg"
                  alt="Eventos Deportivos"
                  width={400}
                  height={250}
                  className="rounded-lg object-cover w-full h-48"
                />
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-lg bg-[#0B8CBF]/10 px-3 py-1 text-sm text-[#0B8CBF]">
              ¿Necesitas nuestros servicios deportivos?
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Contáctanos para una consulta personalizada
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              Nuestras propuestas dependen exclusivamente de tus necesidades. Estamos aquí para ayudarte a alcanzar tus
              objetivos deportivos.
            </p>
            <div className="pt-4">
              <Button asChild className="bg-[#0B8CBF] hover:bg-[#5357A6]">
                <Link href="/contacto">Solicitar información</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
