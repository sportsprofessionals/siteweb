"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Clock, Phone, Star, CheckCircle, ArrowLeft } from "lucide-react"
import { useAnimation } from "@/components/animation-provider"
import { useParams, useRouter } from "next/navigation"

// Datos de ejemplo para las instalaciones deportivas (mismo array que en la página principal)
const instalaciones = [
  {
    id: 1,
    nombre: "Complejo Deportivo Municipal El Prado",
    tipo: "futbol",
    direccion: "Calle del Prado, 15, Madrid",
    telefono: "+34 912 345 678",
    horario: "Lun-Dom: 8:00 - 22:00",
    precio: "Desde 40€/hora",
    valoracion: 4.8,
    imagen: "/escenarios/futbol1.jpg",
    servicios: ["Vestuarios", "Cafetería", "Parking", "Iluminación nocturna"],
    descripcion:
      "Modernas instalaciones con 3 campos de fútbol 11 y 2 campos de fútbol 7, todos con césped artificial de última generación. Ideal para partidos, entrenamientos y eventos deportivos.",
    imagenes: [
      "/escenarios/futbol1.jpg",
      "/escenarios/futbol1-2.jpg",
      "/escenarios/futbol1-3.jpg",
      "/escenarios/futbol1-4.jpg",
    ],
    horarios_detallados: "Lunes a Viernes: 8:00 - 22:00\nSábados y Domingos: 9:00 - 21:00\nFestivos: 10:00 - 20:00",
    precios_detallados:
      "Campo de Fútbol 11: 80€/hora\nCampo de Fútbol 7: 40€/hora\nDescuentos para equipos locales y reservas recurrentes.",
    equipamiento: "Balones disponibles para alquiler, petos, conos y material de entrenamiento.",
    reservas: "Reserva online o por teléfono con al menos 24 horas de antelación.",
  },
  {
    id: 2,
    nombre: "Centro Deportivo La Raqueta",
    tipo: "padel",
    direccion: "Avenida del Deporte, 28, Barcelona",
    telefono: "+34 933 456 789",
    horario: "Lun-Vie: 7:00 - 23:00, Sáb-Dom: 9:00 - 21:00",
    precio: "Desde 24€/hora",
    valoracion: 4.6,
    imagen: "/escenarios/padel1.jpg",
    servicios: ["Vestuarios", "Tienda deportiva", "Clases particulares", "Torneos"],
    descripcion:
      "Centro especializado en pádel con 12 pistas cubiertas de cristal. Todas las pistas cuentan con la mejor superficie y mantenimiento. Ofrecemos clases para todos los niveles y organizamos torneos regularmente.",
    imagenes: [
      "/escenarios/padel1.jpg",
      "/escenarios/padel1-2.jpg",
      "/escenarios/padel1-3.jpg",
      "/escenarios/padel1-4.jpg",
    ],
    horarios_detallados: "Lunes a Viernes: 7:00 - 23:00\nSábados y Domingos: 9:00 - 21:00\nFestivos: 9:00 - 20:00",
    precios_detallados: "Hora punta (17:00-22:00): 32€/hora\nHora valle: 24€/hora\nBono 10 horas: 220€",
    equipamiento: "Alquiler de palas y pelotas. Venta de material deportivo en tienda especializada.",
    reservas: "Reserva online, app móvil o por teléfono. Posibilidad de reserva fija semanal.",
  },
  {
    id: 3,
    nombre: "Club de Tenis Mediterráneo",
    tipo: "tenis",
    direccion: "Paseo Marítimo, 45, Valencia",
    telefono: "+34 962 345 678",
    horario: "Lun-Dom: 8:00 - 22:00",
    precio: "Desde 15€/hora",
    valoracion: 4.9,
    imagen: "/escenarios/tenis1.jpg",
    servicios: ["Vestuarios", "Restaurante", "Piscina", "Academia de tenis"],
    descripcion:
      "Club con 8 pistas de tenis de tierra batida y 4 pistas rápidas. Ubicado frente al mar, ofrece un entorno inmejorable para la práctica del tenis. Contamos con academia para todas las edades y niveles.",
    imagenes: [
      "/escenarios/tenis1.jpg",
      "/escenarios/tenis1-2.jpg",
      "/escenarios/tenis1-3.jpg",
      "/escenarios/tenis1-4.jpg",
    ],
    horarios_detallados: "Todos los días: 8:00 - 22:00\nPiscina (verano): 10:00 - 20:00",
    precios_detallados:
      "Pistas de tierra: 20€/hora\nPistas rápidas: 15€/hora\nSocios: 50% descuento\nClases particulares: desde 35€/hora",
    equipamiento: "Alquiler de raquetas y pelotas. Encordado de raquetas en el club.",
    reservas: "Reserva telefónica o presencial. Socios pueden reservar con 7 días de antelación, no socios con 2 días.",
  },
  {
    id: 4,
    nombre: "Estadio Metropolitano",
    tipo: "futbol",
    direccion: "Avenida de Luis Aragonés, 4, Madrid",
    telefono: "+34 913 456 789",
    horario: "Según eventos",
    precio: "Consultar disponibilidad",
    valoracion: 4.7,
    imagen: "/escenarios/futbol2.jpg",
    servicios: ["Vestuarios premium", "Restaurantes", "Parking VIP", "Palcos privados"],
    descripcion:
      "Estadio de primer nivel con capacidad para 68.000 espectadores. Disponible para eventos corporativos, partidos benéficos y experiencias exclusivas. Césped natural de máxima calidad.",
    imagenes: [
      "/escenarios/futbol2.jpg",
      "/escenarios/futbol2-2.jpg",
      "/escenarios/futbol2-3.jpg",
      "/escenarios/futbol2-4.jpg",
    ],
    horarios_detallados: "Disponibilidad según calendario de eventos. Contactar para información específica.",
    precios_detallados:
      "Eventos corporativos: desde 15.000€\nExperiencias VIP: desde 5.000€\nVisitas guiadas: 30€/persona",
    equipamiento: "Equipamiento profesional completo disponible bajo petición.",
    reservas:
      "Contacto directo con departamento de eventos. Reserva con mínimo 3 meses de antelación para eventos grandes.",
  },
  {
    id: 5,
    nombre: "Padel Indoor Center",
    tipo: "padel",
    direccion: "Calle Industria, 112, Sevilla",
    telefono: "+34 954 567 890",
    horario: "Lun-Vie: 8:00 - 23:00, Sáb-Dom: 9:00 - 22:00",
    precio: "Desde 18€/hora",
    valoracion: 4.5,
    imagen: "/escenarios/padel2.jpg",
    servicios: ["Vestuarios", "Cafetería", "Tienda", "Clases grupales"],
    descripcion:
      "Centro indoor con 8 pistas de pádel climatizadas. Perfecto para jugar en cualquier época del año independientemente de las condiciones meteorológicas. Ofrecemos clases, ligas y torneos.",
    imagenes: [
      "/escenarios/padel2.jpg",
      "/escenarios/padel2-2.jpg",
      "/escenarios/padel2-3.jpg",
      "/escenarios/padel2-4.jpg",
    ],
    horarios_detallados: "Lunes a Viernes: 8:00 - 23:00\nSábados y Domingos: 9:00 - 22:00\nFestivos: 9:00 - 21:00",
    precios_detallados:
      "Hora punta (18:00-22:00): 26€/hora\nHora valle: 18€/hora\nBono 10 horas: 180€\nClases grupales: 12€/persona",
    equipamiento: "Alquiler de palas y pelotas. Servicio de encordado.",
    reservas: "Reserva online o telefónica. Cancelación gratuita hasta 12 horas antes.",
  },
  {
    id: 6,
    nombre: "Real Club de Tenis Barcelona",
    tipo: "tenis",
    direccion: "Calle Bosch i Gimpera, 5-13, Barcelona",
    telefono: "+34 932 037 852",
    horario: "Lun-Dom: 7:00 - 22:00",
    precio: "Desde 30€/hora (socios), 45€/hora (no socios)",
    valoracion: 4.9,
    imagen: "/escenarios/tenis2.jpg",
    servicios: ["Vestuarios de lujo", "Restaurante gourmet", "Gimnasio", "Fisioterapia"],
    descripcion:
      "Club histórico con 18 pistas de tierra batida. Sede del Trofeo Conde de Godó. Instalaciones de primer nivel con servicios exclusivos para socios y visitantes. Academia dirigida por ex-tenistas profesionales.",
    imagenes: [
      "/escenarios/tenis2.jpg",
      "/escenarios/tenis2-2.jpg",
      "/escenarios/tenis2-3.jpg",
      "/escenarios/tenis2-4.jpg",
    ],
    horarios_detallados:
      "Todos los días: 7:00 - 22:00\nRestaurante: 13:00 - 16:00 y 20:00 - 23:00\nGimnasio: 7:00 - 21:00",
    precios_detallados:
      "Socios: 30€/hora\nInvitados: 45€/hora\nClases particulares: desde 60€/hora\nCuota de socio: consultar",
    equipamiento: "Servicio completo de encordado, alquiler y venta de material deportivo premium.",
    reservas: "Reserva exclusiva para socios con 7 días de antelación. Invitados deben ser acompañados por socios.",
  },
  {
    id: 7,
    nombre: "Ciudad Deportiva Valdebebas",
    tipo: "futbol",
    direccion: "Avenida de las Fuerzas Armadas, Madrid",
    telefono: "+34 917 896 543",
    horario: "Lun-Sáb: 9:00 - 21:00",
    precio: "Desde 60€/hora",
    valoracion: 4.8,
    imagen: "/escenarios/futbol3.jpg",
    servicios: ["Vestuarios profesionales", "Gimnasio", "Servicios médicos", "Análisis de rendimiento"],
    descripcion:
      "Complejo deportivo de élite con 6 campos de fútbol de césped natural y 2 de césped artificial. Instalaciones utilizadas por equipos profesionales, disponibles para eventos especiales y entrenamientos de alto rendimiento.",
    imagenes: [
      "/escenarios/futbol3.jpg",
      "/escenarios/futbol3-2.jpg",
      "/escenarios/futbol3-3.jpg",
      "/escenarios/futbol3-4.jpg",
    ],
    horarios_detallados:
      "Lunes a Viernes: 9:00 - 21:00\nSábados: 9:00 - 18:00\nDomingos: Cerrado excepto eventos especiales",
    precios_detallados:
      "Campo de césped natural: 120€/hora\nCampo de césped artificial: 60€/hora\nPaquete de entrenamiento profesional: 300€/sesión",
    equipamiento: "Material de entrenamiento profesional, sistemas de análisis de rendimiento, equipamiento médico.",
    reservas: "Contacto directo con administración. Disponibilidad limitada, reserva con al menos 1 mes de antelación.",
  },
  {
    id: 8,
    nombre: "Padel Experience Club",
    tipo: "padel",
    direccion: "Calle Deportiva, 34, Málaga",
    telefono: "+34 952 678 901",
    horario: "Lun-Dom: 8:00 - 23:00",
    precio: "Desde 16€/hora",
    valoracion: 4.7,
    imagen: "/escenarios/padel3.jpg",
    servicios: ["Vestuarios", "Bar deportivo", "Parking gratuito", "Escuela infantil"],
    descripcion:
      "Club moderno con 10 pistas de pádel, 6 cubiertas y 4 al aire libre. Ambiente familiar y profesional. Organizamos ligas, torneos y eventos sociales. Clases para todos los niveles y edades.",
    imagenes: [
      "/escenarios/padel3.jpg",
      "/escenarios/padel3-2.jpg",
      "/escenarios/padel3-3.jpg",
      "/escenarios/padel3-4.jpg",
    ],
    horarios_detallados: "Todos los días: 8:00 - 23:00\nFestivos: 9:00 - 22:00",
    precios_detallados:
      "Hora punta (17:00-22:00): 24€/hora\nHora valle: 16€/hora\nBono 10 horas: 160€\nClases: desde 25€/hora",
    equipamiento: "Alquiler de palas y pelotas. Venta de accesorios básicos.",
    reservas: "Reserva online, app o telefónica. Sistema de puntos para usuarios frecuentes.",
  },
  {
    id: 9,
    nombre: "Academia Rafa Nadal",
    tipo: "tenis",
    direccion: "Carretera Cala Millor, Manacor, Mallorca",
    telefono: "+34 971 845 622",
    horario: "Lun-Vie: 9:00 - 20:00, Sáb: 9:00 - 14:00",
    precio: "Desde 40€/hora, programas especiales disponibles",
    valoracion: 5.0,
    imagen: "/escenarios/tenis3.jpg",
    servicios: ["Residencia", "Gimnasio avanzado", "Piscina", "Educación internacional"],
    descripcion:
      "Centro de alto rendimiento con 19 pistas de tenis (dura, tierra batida y hierba). Metodología única desarrollada por Rafa Nadal y su equipo. Programas para jugadores de todos los niveles, desde iniciación hasta profesionales.",
    imagenes: [
      "/escenarios/tenis3.jpg",
      "/escenarios/tenis3-2.jpg",
      "/escenarios/tenis3-3.jpg",
      "/escenarios/tenis3-4.jpg",
    ],
    horarios_detallados: "Lunes a Viernes: 9:00 - 20:00\nSábados: 9:00 - 14:00\nDomingos: Cerrado",
    precios_detallados:
      "Alquiler de pista: 40€/hora\nPrograma semanal: desde 500€\nPrograma mensual: desde 1.800€\nPrograma anual con residencia: consultar",
    equipamiento: "Equipamiento profesional completo, análisis biomecánico, preparación física especializada.",
    reservas: "Contacto directo con la academia. Programas especiales requieren proceso de admisión.",
  },
]

export default function EscenarioDetalle() {
  const { FadeIn, SlideIn, ScaleIn } = useAnimation()
  const params = useParams()
  const router = useRouter()
  const [instalacion, setInstalacion] = useState<any>(null)
  const [imagenActiva, setImagenActiva] = useState(0)

  useEffect(() => {
    if (params.id) {
      const id = Number.parseInt(params.id as string)
      const instalacionEncontrada = instalaciones.find((inst) => inst.id === id)
      if (instalacionEncontrada) {
        setInstalacion(instalacionEncontrada)
      } else {
        router.push("/escenarios-deportivos")
      }
    }
  }, [params.id, router])

  if (!instalacion) {
    return (
      <div className="container py-16 md:py-24 flex justify-center items-center">
        <p>Cargando información...</p>
      </div>
    )
  }

  return (
    <div>
      <section className="bg-[#5E308C] py-16 md:py-24 text-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-white/80 mb-4"
              onClick={() => router.push("/escenarios-deportivos")}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Volver a escenarios
            </Button>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{instalacion.nombre}</h1>
            <p className="mt-4 text-xl text-white/80 capitalize">{instalacion.tipo}</p>
            <div className="flex items-center justify-center mt-4">
              <div className="flex items-center bg-white/20 rounded-full px-3 py-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                <span className="text-sm font-medium">{instalacion.valoracion} / 5</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <SlideIn direction="left">
              <div className="space-y-6">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={instalacion.imagenes[imagenActiva] || "/placeholder.svg"}
                    alt={`${instalacion.nombre} - Imagen ${imagenActiva + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {instalacion.imagenes.map((img: string, idx: number) => (
                    <button
                      key={idx}
                      className={`relative aspect-video rounded-md overflow-hidden border-2 ${
                        imagenActiva === idx ? "border-[#5E308C]" : "border-transparent"
                      }`}
                      onClick={() => setImagenActiva(idx)}
                    >
                      <Image
                        src={img || "/placeholder.svg"}
                        alt={`Miniatura ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </SlideIn>

            <SlideIn direction="right">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tight">Información General</h2>
                <p className="text-lg text-muted-foreground">{instalacion.descripcion}</p>

                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-[#41A650] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-foreground">Dirección</h3>
                      <p>{instalacion.direccion}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-[#41A650] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-foreground">Horario</h3>
                      <p className="whitespace-pre-line">{instalacion.horarios_detallados}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-[#41A650] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-foreground">Teléfono</h3>
                      <p>{instalacion.telefono}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h3 className="font-medium text-lg mb-2">Servicios disponibles</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {instalacion.servicios.map((servicio: string, idx: number) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-[#41A650]" />
                        <span>{servicio}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Button asChild className="bg-[#5E308C] hover:bg-[#5357A6] w-full">
                    <a href={`tel:${instalacion.telefono}`}>Contactar ahora</a>
                  </Button>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#F8F9FA]">
        <div className="container px-4 md:px-6">
          <FadeIn className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-center">Detalles de la instalación</h2>
          </FadeIn>

          <Tabs defaultValue="precios" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="precios">Precios</TabsTrigger>
              <TabsTrigger value="equipamiento">Equipamiento</TabsTrigger>
              <TabsTrigger value="reservas">Reservas</TabsTrigger>
            </TabsList>
            <TabsContent value="precios" className="p-6 bg-white rounded-lg mt-6">
              <h3 className="text-xl font-bold mb-4">Tarifas</h3>
              <p className="whitespace-pre-line text-muted-foreground">{instalacion.precios_detallados}</p>
            </TabsContent>
            <TabsContent value="equipamiento" className="p-6 bg-white rounded-lg mt-6">
              <h3 className="text-xl font-bold mb-4">Equipamiento disponible</h3>
              <p className="text-muted-foreground">{instalacion.equipamiento}</p>
            </TabsContent>
            <TabsContent value="reservas" className="p-6 bg-white rounded-lg mt-6">
              <h3 className="text-xl font-bold mb-4">Política de reservas</h3>
              <p className="text-muted-foreground">{instalacion.reservas}</p>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-lg bg-[#5E308C]/10 px-3 py-1 text-sm text-[#5E308C]">
              ¿Te interesa esta instalación?
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Reserva ahora</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              Contacta directamente con la instalación para consultar disponibilidad y realizar tu reserva.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild className="bg-[#5E308C] hover:bg-[#5357A6]">
                <a href={`tel:${instalacion.telefono}`}>Llamar</a>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contacto">Solicitar más información</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
