"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useAnimation } from "@/components/animation-provider"
import {
  Briefcase,
  GraduationCap,
  Dumbbell,
  Trophy,
  Sparkles,
  CheckCircle,
  ArrowRight,
} from "lucide-react"

type Grupo = {
  titulo?: string
  items: string[]
}

type Linea = {
  slug: string
  label: string
  icon: any
  descripcion: string
  gradFrom: string
  gradTo: string
  viaClass: string
  textClass: string
  grupos: Grupo[]
}

const lineas: Linea[] = [
  {
    slug: "administracion-deportiva",
    label: "Administración",
    icon: Briefcase,
    descripcion: "Servicios especializados en gestión y administración deportiva",
    gradFrom: "from-blue-500",
    gradTo: "to-blue-600",
    viaClass: "via-blue-900",
    textClass: "text-blue-600",
    grupos: [
      {
        items: [
          "Planeación estratégica en administración deportiva",
          "Liderazgo para las organizaciones deportivas",
          "Marketing deportivo",
          "Administración de instalaciones deportivas",
          "Capacitación en finanzas para el contexto del deporte",
          "Emprendimiento y planes de negocio en el deporte",
          "Metodología de la investigación en la administración deportiva",
          "Organización y planificación de eventos deportivos",
          "Teoría de la administración deportiva",
          "Gobernanza deportiva",
          "E-Sports y deportes electrónicos",
          "Turismo deportivo",
        ],
      },
    ],
  },
  {
    slug: "educacion-fisica",
    label: "Educación Física",
    icon: GraduationCap,
    descripcion: "Servicios especializados en educación física y desarrollo motor",
    gradFrom: "from-purple-500",
    gradTo: "to-purple-600",
    viaClass: "via-purple-900",
    textClass: "text-purple-600",
    grupos: [
      {
        items: [
          "Contexto histórico de la educación física",
          "Metodología de la enseñanza de la educación física",
          "Teoría de las habilidades motrices",
          "Organización, administración y gestión de la educación física",
          "Competencias para el desempeño profesional en la educación física",
          "Educación física y deporte escolar",
          "Teoría y práctica de la educación física adaptada",
          "Desarrollo de talentos deportivos en la educación física",
        ],
      },
    ],
  },
  {
    slug: "actividad-fisica",
    label: "Actividad Física",
    icon: Dumbbell,
    descripcion: "Servicios especializados en actividad física y bienestar",
    gradFrom: "from-orange-500",
    gradTo: "to-orange-600",
    viaClass: "via-orange-900",
    textClass: "text-orange-600",
    grupos: [
      {
        items: [
          "Actividad física y salud",
          "Actividad física para adultos mayores",
          "Valoración y evaluación de la actividad física para diferentes poblaciones",
          "Actividades de acondicionamiento físico para adultos mayores",
          "Actividad física y envejecimiento",
          "Actividad física para poblaciones especiales",
          "Actividad física y bienestar laboral",
        ],
      },
    ],
  },
  {
    slug: "deporte",
    label: "Deporte",
    icon: Trophy,
    descripcion: "Servicios especializados en deporte y alto rendimiento",
    gradFrom: "from-green-500",
    gradTo: "to-green-600",
    viaClass: "via-green-900",
    textClass: "text-green-600",
    grupos: [
      {
        titulo: "Alto Rendimiento y Preparación Física",
        items: [
          "Deporte y rendimiento",
          "Metodología del entrenamiento deportivo",
          "Preparación física especializada por disciplina",
          "Evaluaciones físicas y control del rendimiento",
        ],
      },
      {
        titulo: "Inclusión y Deporte Adaptado",
        items: ["Deporte adaptado y rendimiento deportivo", "Asesoramiento en inclusión deportiva"],
      },
      {
        titulo: "Formación y Desarrollo Humano",
        items: ["Coaching deportivo y desarrollo de entrenadores", "Capacitación profesional continua"],
      },
      {
        titulo: "Tendencias y Experiencias Deportivas",
        items: ["Deportes de nuevas tendencias y aventura", "Turismo deportivo y experiencias activas"],
      },
      {
        titulo: "Ciencia, Tecnología y Gestión del Deporte",
        items: ["Investigación deportiva aplicada", "Tecnología para el rendimiento", "Consultoría y gestión de programas deportivos"],
      },
    ],
  },
  {
    slug: "recreacion",
    label: "Recreación",
    icon: Sparkles,
    descripcion: "Servicios especializados en recreación, cultura y bienestar activo",
    gradFrom: "from-cyan-500",
    gradTo: "to-cyan-600",
    viaClass: "via-cyan-900",
    textClass: "text-cyan-600",
    grupos: [
      { titulo: "Organización de Eventos Recreativos", items: [] },
      {
        titulo: "Recreación al Aire Libre y Naturaleza",
        items: [
          "Caminatas ecológicas guiadas",
          "Campamentos formativos y recreativos",
          "Rutas temáticas y jornadas al aire libre",
          "Excursiones ecoturísticas y culturales",
        ],
      },
      {
        titulo: "Recreación Empresarial e Institucional",
        items: [
          "Festivales recreativos para empresas y organizaciones",
          "Jornadas de pausas activas y recreación laboral",
          "Team building recreativo",
        ],
      },
      {
        titulo: "Turismo Recreativo y Experiencias Activas",
        items: ["Programas de turismo activo", "Turismo social", "Viajes recreo-formativos"],
      },
      {
        titulo: "Nuevas Tendencias y Experiencias Innovadoras",
        items: ["Recreación digital y gamificada", "Festivales culturales y de expresión creativa", "Recreación inclusiva"],
      },
    ],
  },
]

export default function ServiciosPage() {
  const { FadeIn, SlideIn } = useAnimation()
  const [active, setActive] = useState(0)
  const linea = lineas[active]
  const Icon = linea.icon

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-full blur-3xl animate-pulse delay-75" />
        </div>

        <div className="container relative z-10">
          <FadeIn className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-2xl bg-white/10 backdrop-blur-xl px-6 py-3 border border-white/20 shadow-xl">
              <Sparkles className="w-4 h-4 text-cyan-300" />
              <span className="text-sm font-bold text-white uppercase tracking-wider">Nuestros Servicios</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                Servicios Especializados
              </span>
            </h1>
            <p className="max-w-2xl text-gray-300 text-lg md:text-xl font-light">
              Ofrecemos una amplia gama de servicios especializados en el ámbito deportivo y recreativo.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Selector de líneas */}
      <section className="relative bg-gray-50 py-10 md:py-14 sticky top-0 z-30 border-b border-gray-200 shadow-sm">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3">
            {lineas.map((l, i) => {
              const LIcon = l.icon
              const isActive = i === active
              return (
                <button
                  key={l.slug}
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-sm md:text-base transition-all duration-300 border-2 ${
                    isActive
                      ? `bg-gradient-to-r ${l.gradFrom} ${l.gradTo} text-white border-transparent shadow-xl scale-105`
                      : "bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:shadow-md"
                  }`}
                >
                  <LIcon className="w-4 h-4" />
                  {l.label}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contenido de la línea activa */}
      <section className="relative bg-white py-16 md:py-24">
        <div className="container max-w-5xl mx-auto">
          <div key={linea.slug} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Encabezado de la línea */}
            <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 ${linea.viaClass} to-slate-900 p-8 md:p-12 mb-10 shadow-2xl`}>
              <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 md:justify-between">
                <div className="flex items-center gap-5">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${linea.gradFrom} ${linea.gradTo} flex items-center justify-center shadow-xl flex-shrink-0`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black text-white mb-1">{linea.label}</h2>
                    <p className="text-gray-300 font-medium">{linea.descripcion}</p>
                  </div>
                </div>
                <Button
                  asChild
                  className="bg-white text-gray-900 hover:bg-gray-100 shadow-xl rounded-2xl px-6 py-5 font-bold whitespace-nowrap"
                >
                  <Link href={`/servicios/${linea.slug}`} className="flex items-center gap-2">
                    Ver página completa
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Lista de servicios, por grupos */}
            <div className="space-y-10">
              {linea.grupos.map((grupo, gi) => (
                <SlideIn key={gi} direction="up" delay={gi * 0.1}>
                  <div>
                    {grupo.titulo && (
                      <h3 className={`text-xl font-bold mb-4 ${linea.textClass}`}>{grupo.titulo}</h3>
                    )}
                    {grupo.items.length > 0 && (
                      <div className="grid md:grid-cols-2 gap-3">
                        {grupo.items.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-md transition-all duration-300"
                          >
                            <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${linea.gradFrom} ${linea.gradTo} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                              <CheckCircle className="w-3.5 h-3.5 text-white" />
                            </div>
                            <span className="text-gray-700 font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </SlideIn>
              ))}
            </div>

            {/* CTA final */}
            <div className="text-center mt-14">
              <Button
                asChild
                size="lg"
                className={`bg-gradient-to-r ${linea.gradFrom} ${linea.gradTo} hover:shadow-2xl text-white shadow-xl rounded-2xl px-10 py-6 text-lg font-bold transition-all duration-300`}
              >
                <Link href="/contacto" className="flex items-center gap-3">
                  <span>Solicitar información</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
