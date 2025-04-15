import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function AdministracionDeportiva() {
  return (
    <div>
      <section className="bg-[#5E308C] py-16 md:py-24 text-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Administración Deportiva</h1>
            <p className="mt-4 text-xl text-white/80">Soluciones integrales para la gestión deportiva</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <Image
                src="/ad-deportiva.jpg"
                alt="Administración Deportiva"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight">Nuestros Servicios de Administración Deportiva</h2>
              <p className="text-lg text-muted-foreground">
                Ofrecemos soluciones integrales para la gestión y administración de organizaciones deportivas,
                ayudándoles a alcanzar sus objetivos con eficacia y eficiencia.
              </p>

              <ul className="space-y-4 mt-6">
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-[#41A650] shrink-0" />
                  <div>
                    <h3 className="font-medium">Planeación estratégica y liderazgo</h3>
                    <p className="text-muted-foreground">
                      Desarrollo de planes estratégicos para organizaciones deportivas.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-[#41A650] shrink-0" />
                  <div>
                    <h3 className="font-medium">Capacitación en la industria del deporte</h3>
                    <p className="text-muted-foreground">
                      Formación especializada para profesionales del sector deportivo.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-[#41A650] shrink-0" />
                  <div>
                    <h3 className="font-medium">Marketing social del deporte</h3>
                    <p className="text-muted-foreground">Estrategias de marketing adaptadas al sector deportivo.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-[#41A650] shrink-0" />
                  <div>
                    <h3 className="font-medium">Asesorías a empresas deportivas</h3>
                    <p className="text-muted-foreground">
                      Consultoría especializada para optimizar la gestión deportiva.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-[#41A650] shrink-0" />
                  <div>
                    <h3 className="font-medium">Administración de centros e instalaciones deportivas</h3>
                    <p className="text-muted-foreground">Gestión eficiente de espacios deportivos.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-[#41A650] shrink-0" />
                  <div>
                    <h3 className="font-medium">Finanzas</h3>
                    <p className="text-muted-foreground">Gestión financiera para organizaciones deportivas.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-[#41A650] shrink-0" />
                  <div>
                    <h3 className="font-medium">Planes de negocio</h3>
                    <p className="text-muted-foreground">
                      Desarrollo de planes de negocio para emprendimientos deportivos.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-[#41A650] shrink-0" />
                  <div>
                    <h3 className="font-medium">Metodología de la investigación de la administración deportiva</h3>
                    <p className="text-muted-foreground">Investigación aplicada al sector deportivo.</p>
                  </div>
                </li>
              </ul>

              <div className="pt-6">
                <Button asChild className="bg-[#5E308C] hover:bg-[#5357A6]">
                  <Link href="/contacto">Solicitar información</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
