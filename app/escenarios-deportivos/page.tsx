"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Clock, Phone, Star, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useAnimation } from "@/components/animation-provider"
import { useState } from "react"

// Datos de ejemplo para las instalaciones deportivas
const instalaciones = [
  {
    id: 1,
    nombre: "Complejo Deportivo El Campín",
    tipo: "futbol",
    direccion: "Calle 57, Bogotá",
    telefono: "+57 1 345 6789",
    horario: "Lun-Dom: 8:00 - 22:00",
    precio: "Desde 80,000 COP/hora",
    valoracion: 4.8,
    imagen: "/escenarios/futbol1.jpg",
    servicios: ["Vestuarios", "Cafetería", "Parking", "Iluminación nocturna"],
    descripcion:
      "Modernas instalaciones con 3 campos de fútbol 11 y 2 campos de fútbol 7, todos con césped artificial de última generación. Ideal para partidos, entrenamientos y eventos deportivos.",
  },
  {
    id: 2,
    nombre: "Centro Deportivo La Raqueta",
    tipo: "padel",
    direccion: "Carrera 15, Medellín",
    telefono: "+57 4 456 7890",
    horario: "Lun-Vie: 7:00 - 23:00, Sáb-Dom: 9:00 - 21:00",
    precio: "Desde 50,000 COP/hora",
    valoracion: 4.6,
    imagen: "/escenarios/padel1.jpg",
    servicios: ["Vestuarios", "Tienda deportiva", "Clases particulares", "Torneos"],
    descripcion:
      "Centro especializado en pádel con 12 pistas cubiertas de cristal. Todas las pistas cuentan con la mejor superficie y mantenimiento. Ofrecemos clases para todos los niveles y organizamos torneos regularmente.",
  },
  {
    id: 3,
    nombre: "Club de Tenis El Poblado",
    tipo: "tenis",
    direccion: "Avenida El Poblado, Medellín",
    telefono: "+57 4 345 6789",
    horario: "Lun-Dom: 8:00 - 22:00",
    precio: "Desde 30,000 COP/hora",
    valoracion: 4.9,
    imagen: "/escenarios/tenis1.jpg",
    servicios: ["Vestuarios", "Restaurante", "Piscina", "Academia de tenis"],
    descripcion:
      "Club con 8 pistas de tenis de tierra batida y 4 pistas rápidas. Ubicado en un entorno tranquilo, ofrece un espacio ideal para la práctica del tenis. Contamos con academia para todas las edades y niveles.",
  },
  {
    id: 4,
    nombre: "Estadio Atanasio Girardot",
    tipo: "futbol",
    direccion: "Calle 47D, Medellín",
    telefono: "+57 4 456 7891",
    horario: "Según eventos",
    precio: "Consultar disponibilidad",
    valoracion: 4.7,
    imagen: "/escenarios/futbol2.jpg",
    servicios: ["Vestuarios premium", "Restaurantes", "Parking VIP", "Palcos privados"],
    descripcion:
      "Estadio de primer nivel con capacidad para 40,000 espectadores. Disponible para eventos corporativos, partidos benéficos y experiencias exclusivas. Césped natural de máxima calidad.",
  },
  {
    id: 5,
    nombre: "Padel Indoor Bogotá",
    tipo: "padel",
    direccion: "Calle 100, Bogotá",
    telefono: "+57 1 567 8901",
    horario: "Lun-Vie: 8:00 - 23:00, Sáb-Dom: 9:00 - 22:00",
    precio: "Desde 45,000 COP/hora",
    valoracion: 4.5,
    imagen: "/escenarios/padel2.jpg",
    servicios: ["Vestuarios", "Cafetería", "Tienda", "Clases grupales"],
    descripcion:
      "Centro indoor con 8 pistas de pádel climatizadas. Perfecto para jugar en cualquier época del año independientemente de las condiciones meteorológicas. Ofrecemos clases, ligas y torneos.",
  },
  {
    id: 6,
    nombre: "Real Club de Tenis Cali",
    tipo: "tenis",
    direccion: "Carrera 1, Cali",
    telefono: "+57 2 345 6789",
    horario: "Lun-Dom: 7:00 - 22:00",
    precio: "Desde 60,000 COP/hora",
    valoracion: 4.9,
    imagen: "/escenarios/tenis2.jpg",
    servicios: ["Vestuarios de lujo", "Restaurante gourmet", "Gimnasio", "Fisioterapia"],
    descripcion:
      "Club histórico con 18 pistas de tierra batida. Instalaciones de primer nivel con servicios exclusivos para socios y visitantes. Academia dirigida por ex-tenistas profesionales.",
  },
  {
    id: 7,
    nombre: "Ciudad Deportiva Cali",
    tipo: "futbol",
    direccion: "Avenida Roosevelt, Cali",
    telefono: "+57 2 896 5432",
    horario: "Lun-Sáb: 9:00 - 21:00",
    precio: "Desde 100,000 COP/hora",
    valoracion: 4.8,
    imagen: "/escenarios/futbol3.jpg",
    servicios: ["Vestuarios profesionales", "Gimnasio", "Servicios médicos", "Análisis de rendimiento"],
    descripcion:
      "Complejo deportivo de élite con 6 campos de fútbol de césped natural y 2 de césped artificial. Instalaciones utilizadas por equipos profesionales, disponibles para eventos especiales y entrenamientos de alto rendimiento.",
  },
  {
    id: 8,
    nombre: "Padel Experience Medellín",
    tipo: "padel",
    direccion: "Calle Deportiva, Medellín",
    telefono: "+57 4 678 9012",
    horario: "Lun-Dom: 8:00 - 23:00",
    precio: "Desde 40,000 COP/hora",
    valoracion: 4.7,
    imagen: "/escenarios/padel3.jpg",
    servicios: ["Vestuarios", "Bar deportivo", "Parking gratuito", "Escuela infantil"],
    descripcion:
      "Club moderno con 10 pistas de pádel, 6 cubiertas y 4 al aire libre. Ambiente familiar y profesional. Organizamos ligas, torneos y eventos sociales. Clases para todos los niveles y edades.",
  },
  {
    id: 9,
    nombre: "Academia Santiago Giraldo",
    tipo: "tenis",
    direccion: "Carrera 10, Pereira",
    telefono: "+57 6 845 6221",
    horario: "Lun-Vie: 9:00 - 20:00, Sáb: 9:00 - 14:00",
    precio: "Desde 80,000 COP/hora, programas especiales disponibles",
    valoracion: 5.0,
    imagen: "/escenarios/tenis3.jpg",
    servicios: ["Residencia", "Gimnasio avanzado", "Piscina", "Educación internacional"],
    descripcion:
      "Centro de alto rendimiento con 19 pistas de tenis (dura, tierra batida y hierba). Metodología única desarrollada por Santiago Giraldo y su equipo. Programas para jugadores de todos los niveles, desde iniciación hasta profesionales.",
  },
]

export default function EscenariosDeportivos() {
  const { FadeIn, SlideIn, ScaleIn } = useAnimation()
  const [filtroActivo, setFiltroActivo] = useState("todos")
  const [busqueda, setBusqueda] = useState("")

  const instalacionesFiltradas = instalaciones.filter(
    (instalacion) =>
      (filtroActivo === "todos" || instalacion.tipo === filtroActivo) &&
      instalacion.nombre.toLowerCase().includes(busqueda.toLowerCase()),
  )

  return (
    <div>
      <section className="bg-[#5E308C] py-16 md:py-24 text-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Escenarios Deportivos</h1>
            <p className="mt-4 text-xl text-white/80">
              Descubre las mejores instalaciones deportivas recomendadas por SPORTSPROFESSIONALS
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Instalaciones Recomendadas</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Seleccionamos cuidadosamente las mejores instalaciones deportivas para que disfrutes de tu deporte
              favorito en las mejores condiciones.
            </p>
          </FadeIn>

          <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
            <Tabs defaultValue="todos" className="w-full md:w-auto" onValueChange={setFiltroActivo}>
              <TabsList>
                <TabsTrigger value="todos">Todos</TabsTrigger>
                <TabsTrigger value="futbol">Fútbol</TabsTrigger>
                <TabsTrigger value="padel">Pádel</TabsTrigger>
                <TabsTrigger value="tenis">Tenis</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="relative w-full md:w-80">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar instalación..."
                className="pl-8"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instalacionesFiltradas.map((instalacion, index) => (
              <SlideIn key={instalacion.id} direction="up" delay={index * 0.1}>
                <Card className="h-full overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={instalacion.imagen || "/placeholder.svg"}
                      alt={instalacion.nombre}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-xs font-medium flex items-center">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                      {instalacion.valoracion}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-2">
                      <span className="inline-block bg-[#5E308C]/10 text-[#5E308C] text-xs font-medium rounded-full px-2.5 py-0.5 capitalize">
                        {instalacion.tipo}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{instalacion.nombre}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{instalacion.descripcion}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-[#41A650] shrink-0 mt-0.5" />
                        <span>{instalacion.direccion}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Clock className="h-4 w-4 text-[#41A650] shrink-0 mt-0.5" />
                        <span>{instalacion.horario}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Phone className="h-4 w-4 text-[#41A650] shrink-0 mt-0.5" />
                        <span>{instalacion.telefono}</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t">
                      <div className="flex justify-between items-center">
                        <span className="font-bold">{instalacion.precio}</span>
                        <Button asChild size="sm" className="bg-[#5E308C] hover:bg-[#5357A6]">
                          <Link href={`/escenarios-deportivos/${instalacion.id}`}>Ver detalles</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#F8F9FA]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <SlideIn direction="left">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight">¿Quieres promocionar tu instalación deportiva?</h2>
                <p className="text-lg text-muted-foreground">
                  Si gestionas una instalación deportiva y quieres promocionarla en nuestra plataforma, contáctanos.
                  Ofrecemos visibilidad a instalaciones de calidad que cumplan con nuestros estándares.
                </p>
                <p className="text-lg text-muted-foreground">Beneficios de aparecer en nuestra plataforma:</p>
                <ul className="space-y-2 text-lg text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-[#41A650] font-bold">•</span>
                    <span>Mayor visibilidad ante un público objetivo interesado en deporte</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#41A650] font-bold">•</span>
                    <span>Respaldo de SPORTSPROFESSIONALS como instalación recomendada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#41A650] font-bold">•</span>
                    <span>Acceso a una red de profesionales y clientes potenciales</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <Button asChild className="bg-[#5E308C] hover:bg-[#5357A6]">
                    <Link href="/contacto">Promocionar mi instalación</Link>
                  </Button>
                </div>
              </div>
            </SlideIn>
            <ScaleIn>
              <Image
                src="/promocion-instalaciones.jpg"
                alt="Promoción de instalaciones"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full"
              />
            </ScaleIn>
          </div>
        </div>
      </section>
    </div>
  )
}
