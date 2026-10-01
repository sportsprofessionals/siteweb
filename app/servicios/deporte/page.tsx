"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Briefcase, GraduationCap, Dumbbell, Trophy, Sparkles, CheckCircle, ArrowRight, ArrowLeft } from "lucide-react"
import { useAnimation } from "@/components/animation-provider"

export default function DeportePage() {
  const { FadeIn, SlideIn } = useAnimation()

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-green-500/20 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tl from-green-600/20 to-transparent rounded-full blur-3xl animate-pulse delay-75" />
        </div>

        <div className="container relative z-10 py-20 md:py-28">
          <FadeIn>
            <Link
              href="/servicios"
              className="inline-flex items-center gap-3 rounded-2xl bg-white/10 backdrop-blur-xl px-6 py-3 border border-white/20 shadow-lg mb-8 text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-medium">Todos los servicios</span>
            </Link>

            {/* Navegación entre las 5 líneas de negocio */}
            <div className="flex flex-wrap gap-2 mb-10">
              <Link
                href="/servicios/administracion-deportiva"
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 bg-white/10 text-white/70 hover:bg-white/20 hover:text-white`}
              >
                Administración
              </Link>
              <Link
                href="/servicios/educacion-fisica"
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 bg-white/10 text-white/70 hover:bg-white/20 hover:text-white`}
              >
                Educación Física
              </Link>
              <Link
                href="/servicios/actividad-fisica"
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 bg-white/10 text-white/70 hover:bg-white/20 hover:text-white`}
              >
                Actividad Física
              </Link>
              <Link
                href="/servicios/deporte"
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 bg-white text-green-600`}
              >
                Deporte
              </Link>
              <Link
                href="/servicios/recreacion"
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 bg-white/10 text-white/70 hover:bg-white/20 hover:text-white`}
              >
                Recreación
              </Link>
            </div>

            <div className="inline-flex items-center gap-3 rounded-3xl bg-white/10 backdrop-blur-xl px-6 py-3 mb-6 border border-white/20 shadow-xl">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg">
                <Trophy className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-bold text-white uppercase tracking-wider">Deporte</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-8 max-w-4xl">
              <span className="bg-gradient-to-r from-white via-green-400 to-white bg-clip-text text-transparent">
                El deporte transforma. Nosotros lo hacemos posible.
              </span>
            </h1>

            <p className="text-xl text-gray-200 max-w-3xl leading-relaxed font-light mb-10">
              Impartimos experiencias deportivas reales, prácticas y teóricas, tanto en el ámbito formativo como en el de rendimiento. Con un fuerte enfoque en la comunidad y el entorno escolar, formamos atletas integrales que llevan los valores del deporte más allá del terreno de juego.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 shadow-2xl rounded-2xl px-8 py-6 text-lg font-bold transition-all duration-300 border-0"
              >
                <Link href="/contacto" className="flex items-center gap-3">
                  <span>Forma parte del equipo</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white/40 text-white bg-white/5 backdrop-blur-lg hover:bg-white/15 rounded-2xl px-8 py-6 text-lg font-bold transition-all duration-300"
              >
                <a href="#servicios">Conoce nuestros programas</a>
              </Button>
            </div>
          </FadeIn>
        </div>

        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-green-600`} />
      </section>

      {/* Lista de servicios */}
      <section id="servicios" className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20 md:py-28">
        <div className="container relative z-10 max-w-4xl mx-auto">
          <SlideIn direction="up">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-10 text-center">
              Qué incluye <span className="text-green-600">Deporte</span>
            </h2>
            <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium text-lg">Cursos de natación, tenis, voleibol, baloncesto, fútbol y otros deportes</span>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium text-lg">Metodología del entrenamiento deportivo para niños, jóvenes y adultos</span>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium text-lg">Métodos alternativos para la enseñanza y aprendizaje en iniciación y formación deportiva dentro y fuera del contexto escolar</span>
                </div>
            </div>

            <div className="text-center mt-12">
              <Button
                asChild
                size="lg"
                className={`bg-gradient-to-r from-green-500 to-green-600 hover:shadow-2xl text-white shadow-xl rounded-2xl px-10 py-6 text-lg font-bold transition-all duration-300`}
              >
                <Link href="/contacto" className="flex items-center gap-3">
                  <span>Solicitar información</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </SlideIn>
        </div>
      </section>
    </div>
  )
}
