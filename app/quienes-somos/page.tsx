import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function QuienesSomos() {
  return (
    <div>
      <section className="bg-[#5E308C] py-16 md:py-24 text-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Quiénes Somos</h1>
            <p className="mt-4 text-xl text-white/80">Profesionales al servicio del deporte y la actividad física</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight">Nuestra Empresa</h2>
              <p className="text-lg text-muted-foreground">
                Somos una empresa conformada por profesionales, que trabajamos en el sector público y privado,
                ofreciendo servicios relacionados con la industria del deporte en los segmentos de la educación física,
                recreación, administración del deporte y actividad física, para alcanzar resultados sobre las
                necesidades de nuestros clientes con eficacia y eficiencia.
              </p>

              <h2 className="text-2xl font-bold tracking-tight pt-4">Nuestra Filosofía</h2>
              <p className="text-lg text-muted-foreground">
                Nuestro actuar diario está soportado por la calidad en la prestación de los servicios relacionados con
                la industria del deporte.
              </p>
              <p className="text-lg text-muted-foreground">
                La compañía está comprometida en el desarrollo del talento humano empresarial y comunitario, en el
                bienestar y en el fortalecimiento de su calidad de vida; estimula su iniciativa, propicia un clima de
                trabajo orientado hacia las actividades en equipo y al mejoramiento humano.
              </p>
              <p className="text-lg text-muted-foreground">
                Toda nuestra actividad empresarial genera un valor agregado para la comunidad y para el país.
              </p>

              <div className="bg-[#5357A6]/10 p-6 rounded-lg border border-[#5357A6]/20 mt-6">
                <p className="text-lg font-medium text-[#5E308C]">
                  TODOS NUESTROS SERVICIOS APORTAN VALOR AGREGADO Y LIDERAZGO AJUSTANDOSE a la demanda real y a LAS
                  necesidades DE NUESTROS CLIENTES Y LA Comunidad en general.
                </p>
              </div>
            </div>

            <div>
              <Image
                src="/logo.png"
                alt="Equipo UNOFIT"
                width={600}
                height={450}
                className="rounded-lg object-cover w-full"
              />

              <div className="mt-12 space-y-6">
                <h2 className="text-2xl font-bold tracking-tight">Nuestros Valores</h2>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-[#41A650] shrink-0" />
                    <div>
                      <h3 className="font-medium">Profesionalismo</h3>
                      <p className="text-muted-foreground">
                        Trabajamos con los más altos estándares de calidad y ética profesional.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-[#41A650] shrink-0" />
                    <div>
                      <h3 className="font-medium">Innovación</h3>
                      <p className="text-muted-foreground">
                        Buscamos constantemente nuevas formas de mejorar nuestros servicios.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-[#41A650] shrink-0" />
                    <div>
                      <h3 className="font-medium">Compromiso</h3>
                      <p className="text-muted-foreground">
                        Nos comprometemos con el éxito de nuestros clientes y la comunidad.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-[#41A650] shrink-0" />
                    <div>
                      <h3 className="font-medium">Trabajo en equipo</h3>
                      <p className="text-muted-foreground">Colaboramos para lograr resultados excepcionales.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
