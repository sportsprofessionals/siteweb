"use client"

import Image from "next/image"
import Link from "next/link"
import { Award, Briefcase, Dumbbell, GraduationCap, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import BannerSlider from "@/components/banner-slider"
import ServiceCard from "@/components/service-card"
import { useAnimation } from "@/components/animation-provider"
import CookieBanner from "@/components/cookie-banner"


export default function Home() {
  const { FadeIn, SlideIn, ScaleIn } = useAnimation()

  return (
    <div>
      <CookieBanner/>
      <BannerSlider />

      {/* Servicios Principales */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-lg bg-[#5E308C]/10 px-3 py-1 text-sm text-[#5E308C]">
              Nuestros Servicios
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Soluciones Integrales para el Deporte
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Ofrecemos servicios especializados en administración deportiva, educación física, actividad física, deporte y recreación.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SlideIn direction="up" delay={0.1}>
              <div className="relative group overflow-hidden rounded-lg">
                <Image
                  src="/admin-deportiva.jpg"
                  alt="Administración Deportiva"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold">Administración Deportiva</h3>
                  <p className="text-white/80">Gestión y planeación estratégica para organizaciones deportivas</p>
                  <Button
                    asChild
                    variant="outline"
                    className="mt-4 bg-white/20 backdrop-blur-sm border-white/40 text-white hover:bg-white/30 hover:text-white"
                  >
                    <Link href="/servicios/administracion-deportiva">Ver más</Link>
                  </Button>
                </div>
              </div>
            </SlideIn>

            <SlideIn direction="up" delay={0.2}>
              <div className="relative group overflow-hidden rounded-lg">
                <Image
                  src="/educacion-fisica.jpg"
                  alt="Educación Física"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold">Educación Física</h3>
                  <p className="text-white/80">Formación y desarrollo de habilidades motoras</p>
                  <Button
                    asChild
                    variant="outline"
                    className="mt-4 bg-white/20 backdrop-blur-sm border-white/40 text-white hover:bg-white/30 hover:text-white"
                  >
                    <Link href="/servicios/educacion-fisica">Ver más</Link>
                  </Button>
                </div>
              </div>
            </SlideIn>

            <SlideIn direction="up" delay={0.3}>
              <div className="relative group overflow-hidden rounded-lg">
                <Image
                  src="/actividad-fisica.jpg"
                  alt="Actividad Física"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold">Actividad Física</h3>
                  <p className="text-white/80">Programas personalizados para todas las edades</p>
                  <Button
                    asChild
                    variant="outline"
                    className="mt-4 bg-white/20 backdrop-blur-sm border-white/40 text-white hover:bg-white/30 hover:text-white"
                  >
                    <Link href="/servicios/actividad-fisica">Ver más</Link>
                  </Button>
                </div>
              </div>
            </SlideIn>

            <SlideIn direction="up" delay={0.4}>
              <div className="relative group overflow-hidden rounded-lg">
                <Image
                  src="/deporte.jpg"
                  alt="Deporte"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold">Deporte</h3>
                  <p className="text-white/80">Alto rendimiento, inclusión y desarrollo deportivo</p>
                  <Button
                    asChild
                    variant="outline"
                    className="mt-4 bg-white/20 backdrop-blur-sm border-white/40 text-white hover:bg-white/30 hover:text-white"
                  >
                    <Link href="/servicios/deporte">Ver más</Link>
                  </Button>
                </div>
              </div>
            </SlideIn>

            <SlideIn direction="up" delay={0.5}>
              <div className="relative group overflow-hidden rounded-lg">
                <Image
                  src="/recreacion.jpg"
                  alt="Recreación"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold">Recreación</h3>
                  <p className="text-white/80">Experiencias activas y bienestar integral</p>
                  <Button
                    asChild
                    variant="outline"
                    className="mt-4 bg-white/20 backdrop-blur-sm border-white/40 text-white hover:bg-white/30 hover:text-white"
                  >
                    <Link href="/servicios/recreacion">Ver más</Link>
                  </Button>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Quiénes Somos */}
      <section className="py-16 md:py-24 bg-[#F8F9FA]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <ScaleIn>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-[#5E308C]/10 px-3 py-1 text-sm text-[#5E308C]">
                  Nuestra Misión
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Misión
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  Brindar soluciones integrales e innovadoras a nuestros clientes POR MEDIO de servicios especializados en administración deportiva, educación física, actividad física, deporte y recreación, QUE CONTRIBUYA EFECTIVAMENTE al desarrollo social y económico del país.
                </p>
              </div>
            </ScaleIn>
            <SlideIn direction="right">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-[#5E308C]/10 px-3 py-1 text-sm text-[#5E308C]">
                  Nuestra Visión
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Visión
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  Posicionarnos, en el año 2029, como una organización de excelencia, altamente competitiva y referente a nivel nacional e internacional, reconocida por su liderazgo en servicios integrales e innovadores en los ámbitos de la gestión deportiva, la educación física, la actividad física, el deporte y la recreación.
                </p>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-lg bg-[#5E308C]/10 px-3 py-1 text-sm text-[#5E308C]">
              Nuestros Servicios
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Soluciones Integrales para el Deporte
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Ofrecemos servicios relacionados con la industria del deporte en los segmentos de la educación física,
              recreación, administración del deporte y actividad física.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SlideIn direction="up" delay={0.1}>
              <ServiceCard
                icon={Briefcase}
                title="Administración Deportiva"
                description="Planeación estratégica, liderazgo, marketing social del deporte y asesorías a empresas deportivas."
                href="/servicios/administracion-deportiva"
              />
            </SlideIn>
            <SlideIn direction="up" delay={0.2}>
              <ServiceCard
                icon={Dumbbell}
                title="Servicios Deportivos"
                description="Capacitación en entrenamiento deportivo, monitores deportivos, entrenadores y turismo deportivo."
                href="/servicios/servicios-deportivos"
              />
            </SlideIn>
            <SlideIn direction="up" delay={0.3}>
              <ServiceCard
                icon={Users}
                title="Servicios Recreativos"
                description="Organización de eventos recreativos, caminatas ecológicas, campamentos juveniles y familiares."
                href="/servicios/servicios-recreativos"
              />
            </SlideIn>
            <SlideIn direction="up" delay={0.4}>
              <ServiceCard
                icon={Award}
                title="Actividad Física"
                description="Pausas activas empresariales, actividad física para adultos y acondicionamiento físico."
                href="/servicios/actividad-fisica"
              />
            </SlideIn>
            <SlideIn direction="up" delay={0.5}>
              <ServiceCard
                icon={GraduationCap}
                title="Educación Física"
                description="Administración y gestión de la educación física escolar y comunitaria, formación de habilidades motoras."
                href="/servicios/educacion-fisica"
              />
            </SlideIn>
            
          </div>
        </div>
      </section>

      {/* Escenarios Deportivos */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-lg bg-[#5E308C]/10 px-3 py-1 text-sm text-[#5E308C]">
              Escenarios Deportivos
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Instalaciones Deportivas Recomendadas
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Descubre las mejores instalaciones deportivas para practicar tu deporte favorito.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SlideIn direction="up" delay={0.1}>
              <div className="relative group overflow-hidden rounded-lg">
                <Image
                  src="/futbol.jpg"
                  alt="Campos de Fútbol"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold">Campos de Fútbol</h3>
                  <p className="text-white/80">Las mejores instalaciones para el deporte rey</p>
                  <Button
                    asChild
                    variant="outline"
                    className="mt-4 bg-white/20 backdrop-blur-sm border-white/40 text-white hover:bg-white/30 hover:text-white"
                  >
                    <Link href="/escenarios-deportivos?tipo=futbol">Ver instalaciones</Link>
                  </Button>
                </div>
              </div>
            </SlideIn>
            <SlideIn direction="up" delay={0.2}>
              <div className="relative group overflow-hidden rounded-lg">
                <Image
                  src="/padel.jpeg"
                  alt="Pistas de Pádel"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold">Pistas de Pádel</h3>
                  <p className="text-white/80">Disfruta del deporte de moda en las mejores pistas</p>
                  <Button
                    asChild
                    variant="outline"
                    className="mt-4 bg-white/20 backdrop-blur-sm border-white/40 text-white hover:bg-white/30 hover:text-white"
                  >
                    <Link href="/escenarios-deportivos?tipo=padel">Ver instalaciones</Link>
                  </Button>
                </div>
              </div>
            </SlideIn>
            <SlideIn direction="up" delay={0.3}>
              <div className="relative group overflow-hidden rounded-lg">
                <Image
                  src="/tenis.jpeg"
                  alt="Pistas de Tenis"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold">Pistas de Tenis</h3>
                  <p className="text-white/80">Clubes y academias de tenis de primer nivel</p>
                  <Button
                    asChild
                    variant="outline"
                    className="mt-4 bg-white/20 backdrop-blur-sm border-white/40 text-white hover:bg-white/30 hover:text-white"
                  >
                    <Link href="/escenarios-deportivos?tipo=tenis">Ver instalaciones</Link>
                  </Button>
                </div>
              </div>
            </SlideIn>
          </div>

          <div className="flex justify-center mt-8">
            <Button asChild className="bg-[#5E308C] hover:bg-[#5357A6]">
              <Link href="/escenarios-deportivos">Ver todos los escenarios</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Clientes */}
      <section className="py-16 md:py-24 bg-[#F8F9FA]">
        <div className="container px-4 md:px-6">
          <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-lg bg-[#5E308C]/10 px-3 py-1 text-sm text-[#5E308C]">
              Nuestros Clientes
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Empresas que confían en nosotros
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Conoce algunas de las empresas e instituciones con las que hemos trabajado.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <ScaleIn key={i} delay={i * 0.05} className="w-full max-w-[150px]">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 h-24 flex items-center justify-center">
                  <Image
                    src={`/placeholder.svg`}
                    alt={`Cliente ${i}`}
                    width={120}
                    height={60}
                    className="max-h-16 w-auto object-contain"
                  />
                </div>
              </ScaleIn>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button asChild className="bg-[#5E308C] hover:bg-[#5357A6]">
              <Link href="/clientes">Ver todos los clientes</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Formación */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#5E308C] to-[#0F8DBF] text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <SlideIn direction="left">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Formación Profesional</h2>
                <p className="md:text-lg text-white/80">
                  Una de nuestras actividades es transferir nuestro conocimiento y experiencia en el mundo de la gestión
                  del deporte. Compartir nuestras respuestas a los profesionales, empresas e instituciones que quieran
                  desarrollarse a través del ejercicio de la gestión deportiva.
                </p>
                <ul className="space-y-2 md:text-lg text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="text-[#41A650] font-bold">•</span>
                    <span>Formaciones dirigidas a gestores deportivos de entidades públicas y privadas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#41A650] font-bold">•</span>
                    <span>Directores o gerentes de instalaciones deportivas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#41A650] font-bold">•</span>
                    <span>Técnicos deportivos y titulados universitarios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#41A650] font-bold">•</span>
                    <span>Estudiantes de grados y máster del deporte</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <Button asChild className="bg-white text-[#5E308C] hover:bg-white/90">
                    <Link href="/formacion">Ver programas</Link>
                  </Button>
                </div>
              </div>
            </SlideIn>
            <ScaleIn delay={0.3}>
              {/* Responsive video wrapper */}
              <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-lg">
                <iframe
                  src="https://www.youtube.com/embed/BakoE2sMVjg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                />
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-lg bg-[#5E308C]/10 px-3 py-1 text-sm text-[#5E308C]">Contacto</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              ¿Necesitas nuestros servicios?
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Nuestras propuestas dependen exclusivamente de sus necesidades. Contáctanos para una consulta
              personalizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild className="bg-[#5E308C] hover:bg-[#5357A6]">
                <Link href="/contacto">Contactar ahora</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/servicios">Ver todos los servicios</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}