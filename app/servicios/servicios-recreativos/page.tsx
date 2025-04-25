"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import { useAnimation } from "@/components/animation-provider"

export default function ServiciosRecreativos() {
  const { FadeIn, SlideIn, ScaleIn } = useAnimation()

  return (
    <div>
      <section className="bg-[#0B8CBF] py-16 md:py-24 text-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Servicios Recreativos</h1>
            <p className="mt-4 text-xl text-white/80">Experiencias recreativas para todas las edades</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <ScaleIn>
              <Image
                src="/caminata.jpg"
                alt="Servicios Recreativos"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full"
              />
            </ScaleIn>

            <SlideIn direction="right">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tight">Nuestros Servicios Recreativos</h2>
                <p className="text-lg text-muted-foreground">
                  Ofrecemos una amplia gama de servicios recreativos diseñados para promover el bienestar, la diversión
                  y el desarrollo personal a través de actividades lúdicas y al aire libre.
                </p>

                <ul className="space-y-4 mt-6">
                  <li className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-[#41A650] shrink-0" />
                    <div>
                      <h3 className="font-medium">Organización de eventos recreativos</h3>
                      <p className="text-muted-foreground">
                        Planificación y ejecución de eventos recreativos para empresas, instituciones y grupos.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-[#41A650] shrink-0" />
                    <div>
                      <h3 className="font-medium">Caminatas ecológicas</h3>
                      <p className="text-muted-foreground">
                        Rutas guiadas por entornos naturales con enfoque en la educación ambiental y el bienestar.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-[#41A650] shrink-0" />
                    <div>
                      <h3 className="font-medium">Campamentos juveniles y familiares</h3>
                      <p className="text-muted-foreground">
                        Experiencias inmersivas en la naturaleza con actividades educativas y recreativas.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-[#41A650] shrink-0" />
                    <div>
                      <h3 className="font-medium">Organización de vacaciones y festivales recreativos</h3>
                      <p className="text-muted-foreground">
                        Programas completos de actividades para periodos vacacionales y eventos especiales.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-[#41A650] shrink-0" />
                    <div>
                      <h3 className="font-medium">Excursiones culturales</h3>
                      <p className="text-muted-foreground">
                        Visitas guiadas a lugares de interés cultural combinadas con actividades recreativas.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-[#41A650] shrink-0" />
                    <div>
                      <h3 className="font-medium">Excursiones ecoturísticas</h3>
                      <p className="text-muted-foreground">
                        Experiencias en entornos naturales con enfoque en la sostenibilidad y el respeto al medio
                        ambiente.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-[#41A650] shrink-0" />
                    <div>
                      <h3 className="font-medium">Estudios e investigación en Metodología de servicios recreativos</h3>
                      <p className="text-muted-foreground">
                        Investigación aplicada para mejorar la calidad y el impacto de los servicios recreativos.
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Nuestras Actividades Recreativas</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Diseñamos experiencias recreativas adaptadas a diferentes públicos y necesidades, promoviendo el disfrute,
              la socialización y el desarrollo personal.
            </p>
          </FadeIn>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <SlideIn direction="up" delay={0.1}>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 h-full">
                <h3 className="text-xl font-bold mb-3">Campamentos de Verano</h3>
                <p className="text-muted-foreground mb-4">
                  Experiencias inmersivas para niños y jóvenes durante las vacaciones escolares, con actividades
                  deportivas, educativas y recreativas en entornos naturales.
                </p>
                <Image
                  src="/campamentos.jpg"
                  alt="Campamentos de Verano"
                  width={400}
                  height={250}
                  className="rounded-lg object-cover w-full h-48"
                />
              </div>
            </SlideIn>
            <SlideIn direction="up" delay={0.2}>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 h-full">
                <h3 className="text-xl font-bold mb-3">Eventos Corporativos</h3>
                <p className="text-muted-foreground mb-4">
                  Actividades recreativas diseñadas para empresas, enfocadas en el team building, la motivación y el
                  bienestar de los empleados.
                </p>
                <Image
                  src="/eventos-corporativos.jpg"
                  alt="Eventos Corporativos"
                  width={400}
                  height={250}
                  className="rounded-lg object-cover w-full h-48"
                />
              </div>
            </SlideIn>
            <SlideIn direction="up" delay={0.3}>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 h-full">
                <h3 className="text-xl font-bold mb-3">Rutas de Senderismo</h3>
                <p className="text-muted-foreground mb-4">
                  Caminatas guiadas por entornos naturales, con diferentes niveles de dificultad y enfoque en la
                  educación ambiental y el disfrute de la naturaleza.
                </p>
                <Image
                  src="/senderismo.jpg"
                  alt="Rutas de Senderismo"
                  width={400}
                  height={250}
                  className="rounded-lg object-cover w-full h-48"
                />
              </div>
            </SlideIn>
            <SlideIn direction="up" delay={0.4}>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 h-full">
                <h3 className="text-xl font-bold mb-3">Festivales Recreativos</h3>
                <p className="text-muted-foreground mb-4">
                  Eventos con múltiples actividades recreativas para toda la familia, diseñados para fomentar la
                  participación y el disfrute comunitario.
                </p>
                <Image
                  src="/festivales.jpg"
                  alt="Festivales Recreativos"
                  width={400}
                  height={250}
                  className="rounded-lg object-cover w-full h-48"
                />
              </div>
            </SlideIn>
            <SlideIn direction="up" delay={0.5}>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 h-full">
                <h3 className="text-xl font-bold mb-3">Excursiones Culturales</h3>
                <p className="text-muted-foreground mb-4">
                  Visitas guiadas a lugares de interés histórico y cultural, combinadas con actividades recreativas para
                  una experiencia completa.
                </p>
                <Image
                  src="/excursiones-culturales.jpg"
                  alt="Excursiones Culturales"
                  width={400}
                  height={250}
                  className="rounded-lg object-cover w-full h-48"
                />
              </div>
            </SlideIn>
            <SlideIn direction="up" delay={0.6}>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 h-full">
                <h3 className="text-xl font-bold mb-3">Actividades Familiares</h3>
                <p className="text-muted-foreground mb-4">
                  Programas diseñados para el disfrute conjunto de toda la familia, fomentando la interacción y creando
                  recuerdos compartidos.
                </p>
                <Image
                  src="/actividades-familiares.jpg"
                  alt="Actividades Familiares"
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
              ¿Necesitas nuestros servicios recreativos?
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Contáctanos para una consulta personalizada
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              Nuestras propuestas dependen exclusivamente de tus necesidades. Estamos aquí para ayudarte a crear
              experiencias recreativas memorables.
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
