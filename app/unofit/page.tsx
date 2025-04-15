"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Building, Users, Map, Briefcase, BarChart, Lightbulb } from "lucide-react"
import { useAnimation } from "@/components/animation-provider"

export default function Unofit() {
  const { FadeIn, SlideIn, ScaleIn } = useAnimation()

  return (
    <div>
      <section className="bg-[#5E308C] py-16 md:py-24 text-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">UNOFIT</h1>
            <p className="mt-4 text-xl text-white/80">
              Dirección y gestión de instalaciones deportivas, gimnasios, centros y complejos deportivos
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <FadeIn className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Nuestros Servicios UNOFIT</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              SPORTSPROFESSIONALS desarrolla sus actividades en los sectores de instalaciones deportivas, gimnasios,
              ayuntamientos, sector público y turismo a través de UNOFIT. gimnasios, ayuntamientos, sector público y
              turismo a través de UNOFIT.
            </p>
          </FadeIn>

          <div className="grid gap-12 lg:grid-cols-2 items-center mb-20">
            <ScaleIn>
              <Image
                src="/gym.jpg"
                alt="UNOFIT"
                width={300}
                height={300}
                className="rounded-lg object-cover w-full"
              />
            </ScaleIn>
            <SlideIn direction="right">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold tracking-tight">Gimnasios, centros y complejos deportivos</h3>
                <p className="text-lg text-muted-foreground">
                  Ayudamos a las dirección y gestión de instalaciones deportivas en cualquier área de la organización:
                  marketing, RRHH, económico-financiero, etc. Con un conjunto de prácticas para impulsar el crecimiento
                  y conseguir resultados sostenibles.
                </p>
                <p className="text-lg text-muted-foreground">
                  Intervenimos como un partner estrátegico para facilitar y acelerar el proceso desde una visión
                  ampliada del sector de instalaciones deportivas y gimnasios.
                </p>
                <p className="text-lg text-muted-foreground">
                  Colaboramos con operadores consolidados e iniciativas de emprendimiento en la formulación de un plan
                  que logre un rendimiento superior de la empresa y satisfaga las necesidades del mercado.
                </p>
                <p className="text-lg text-muted-foreground">
                  A través de determinados estudios y una metodología contrastada, identificamos las fortalezas y
                  debilidades para definir de forma compartida las metas y objetivos del plan estratégico en el contexto
                  actual.
                </p>
              </div>
            </SlideIn>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 items-center mb-20">
            <SlideIn direction="left" className="order-2 lg:order-1">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold tracking-tight">Ayuntamientos y sector público en general</h3>
                <p className="text-lg text-muted-foreground">
                  Aportamos dinamismo e innovación en el desarrollo del servicio público para impulsar los territorios y
                  ciudades través de propuestas en materia de deporte velando por la eficacia y eficiencia en las
                  diferentes actuaciones.
                </p>
                <p className="text-lg text-muted-foreground">
                  El deporte está en constante evolución y las administraciones públicas deben contar con una estrategia
                  definida para cumplir con los retos del futuro.
                </p>
                <p className="text-lg text-muted-foreground">
                  Ayudamos a las corporaciones a través de una metodología contrastada a diagnosticar la situación en la
                  que se encuentran, el establecimiento de objetivos, la definición de líneas estratégicas y los
                  programas de actuación.
                </p>
                <p className="text-lg text-muted-foreground">
                  De acuerdo con prácticas de calidad y según la normativa aplicable. Nuestra área de planificación
                  estratégica deportiva incorpora un conjunto de servicios que van desde la redacción de planes
                  estratégicos del deporte, planes directores y locales de instalaciones y equipamientos deportivos y
                  otros planes sectoriales con incidencia en la promoción de la actividad física y deporte.
                </p>
              </div>
            </SlideIn>
            <ScaleIn className="order-1 lg:order-2">
              <Image
                src="/gym2.jpg"
                alt="Sector Público"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full"
              />
            </ScaleIn>
          </div>

         

          <FadeIn>
            <div className="bg-[#F8F9FA] p-8 rounded-lg">
              <h3 className="text-2xl font-bold tracking-tight mb-6">
                Planificación y programación de servicios deportivos
              </h3>
              <p className="text-lg text-muted-foreground mb-4">
                Contribuimos en la planificación y programación de los servicios deportivos para ajustarse a la demanda
                real y necesidades de la ciudadanía.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                La actividad física y deporte está en constante evolución. La misma, se integra en los entornos donde
                las personas viven, trabajan y estudian; ocupando su ocio y entretenimiento.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                En los niños y adolescentes fomenta un estilo de vida activo a través de su educación. En los adultos
                reduce el sedentarismo. Y en los mayores mantiene la salud y permite un envejecimiento saludable.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Por ello, las necesidades, demandas y las nuevas tendencias, exigen una revisión de la oferta deportiva,
                para cubrir las necesidades e intereses de la ciudadanía.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Un ejercicio de análisis y diagnóstico de los intereses de las personas usuarias, deportistas y clientes
                estableciendo unos criterios para establecer unas necesidades mínimas que satisfaga las necesidades
                mayoritarias y minoritarias.
              </p>
              <p className="text-lg text-muted-foreground">
                UNOFIT Deporte, ocio y gestión colabora con ayuntamientos aportando suficiencia de medios y
                especialización para elaborar los estudios pertinentes para el desarrollo del modelo deportivo. Su
                propuesta de programa, así como los objetivos, acciones para su desarrollo, recursos humanos y
                materiales y presupuesto entre otras actividades de planificación.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#F8F9FA]">
        <div className="container px-4 md:px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Nuestros Servicios</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              En UNOFIT deporte, ocio y gestión brindamos asesoramiento y gestión a gerentes, propietarios e
              inversionistas de instalaciones deportivas. Estamos especializados en la atención de consultas específicas
              y recomendaciones según las necesidades identificadas.
            </p>
          </FadeIn>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <SlideIn direction="up" delay={0.1}>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 h-full">
                <Building className="h-10 w-10 text-[#5E308C] mb-4" />
                <h3 className="text-xl font-bold mb-3">
                  Gestión y asesoramiento en la dirección de instalaciones deportivas
                </h3>
                <p className="text-muted-foreground">
                  Ofrecemos servicios de consultoría y gestión para la dirección eficiente de instalaciones deportivas.
                </p>
              </div>
            </SlideIn>
            <SlideIn direction="up" delay={0.2}>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 h-full">
                <BarChart className="h-10 w-10 text-[#5E308C] mb-4" />
                <h3 className="text-xl font-bold mb-3">Planificación estratégica deportiva</h3>
                <p className="text-muted-foreground">
                  Desarrollamos planes estratégicos para organizaciones deportivas que buscan crecimiento sostenible.
                </p>
              </div>
            </SlideIn>
            <SlideIn direction="up" delay={0.3}>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 h-full">
                <Lightbulb className="h-10 w-10 text-[#5E308C] mb-4" />
                <h3 className="text-xl font-bold mb-3">Estudios e investigación deportiva</h3>
                <p className="text-muted-foreground">
                  Realizamos investigaciones y estudios para mejorar la gestión y operación de entidades deportivas.
                </p>
              </div>
            </SlideIn>
            <SlideIn direction="up" delay={0.4}>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 h-full">
                <Briefcase className="h-10 w-10 text-[#5E308C] mb-4" />
                <h3 className="text-xl font-bold mb-3">Marketing y comunicación en el deporte</h3>
                <p className="text-muted-foreground">
                  Estrategias de marketing y comunicación especializadas para el sector deportivo.
                </p>
              </div>
            </SlideIn>
            <SlideIn direction="up" delay={0.5}>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 h-full">
                <Users className="h-10 w-10 text-[#5E308C] mb-4" />
                <h3 className="text-xl font-bold mb-3">Asistencia técnica en gestión deportiva</h3>
                <p className="text-muted-foreground">
                  Apoyo técnico especializado para la gestión eficiente de organizaciones deportivas.
                </p>
              </div>
            </SlideIn>
            <SlideIn direction="up" delay={0.6}>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 h-full">
                <Map className="h-10 w-10 text-[#5E308C] mb-4" />
                <h3 className="text-xl font-bold mb-3">Transformación digital en entidades deportivas</h3>
                <p className="text-muted-foreground">
                  Implementación de soluciones digitales para modernizar la gestión de entidades deportivas.
                </p>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-lg bg-[#5E308C]/10 px-3 py-1 text-sm text-[#5E308C]">
              ¿Necesitas nuestros servicios?
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Contáctanos para una consulta personalizada
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              Nuestras propuestas dependen exclusivamente de tus necesidades. Estamos aquí para ayudarte a alcanzar tus
              objetivos.
            </p>
            <div className="pt-4">
              <Button asChild className="bg-[#5E308C] hover:bg-[#5357A6]">
                <Link href="/contacto">Solicitar información</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
