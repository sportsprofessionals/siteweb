"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulación de envío de formulario
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitSuccess(true)
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      asunto: "",
      mensaje: "",
    })

    // Resetear mensaje de éxito después de 5 segundos
    setTimeout(() => {
      setSubmitSuccess(false)
    }, 5000)
  }

  return (
    <div>
      <section className="bg-[#5E308C] py-16 md:py-24 text-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contacto</h1>
            <p className="mt-4 text-xl text-white/80">Estamos aquí para ayudarte. Contáctanos para más información.</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-6">Envíanos un mensaje</h2>

              {submitSuccess && (
                <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg mb-6">
                  ¡Gracias por contactarnos! Te responderemos a la brevedad.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre completo</Label>
                    <Input
                      id="nombre"
                      name="nombre"
                      placeholder="Tu nombre"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo electrónico</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefono">Teléfono</Label>
                  <Input
                    id="telefono"
                    name="telefono"
                    placeholder="Tu número de teléfono"
                    value={formData.telefono}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="asunto">Asunto</Label>
                  <Input
                    id="asunto"
                    name="asunto"
                    placeholder="Asunto de tu mensaje"
                    required
                    value={formData.asunto}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensaje">Mensaje</Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    placeholder="Escribe tu mensaje aquí..."
                    rows={5}
                    required
                    value={formData.mensaje}
                    onChange={handleChange}
                  />
                </div>

                <Button type="submit" className="w-full bg-[#5E308C] hover:bg-[#5357A6]" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-6">Información de contacto</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#5E308C]/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-[#5E308C]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Dirección</h3>
                    <p className="text-muted-foreground">Calle Principal 123, Ciudad</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#5E308C]/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-[#5E308C]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Teléfono</h3>
                    <p className="text-muted-foreground">+57 310 5627575</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#5E308C]/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-[#5E308C]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Correo electrónico</h3>
                    <p className="text-muted-foreground">sportsprofessionals2024@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="font-medium text-lg mb-4">Horario de atención</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>Lunes a Viernes: 9:00 - 18:00</p>
                  <p>Sábados: 9:00 - 13:00</p>
                  <p>Domingos: Cerrado</p>
                </div>
              </div>

              <div className="mt-10 bg-[#F8F9FA] p-6 rounded-lg">
                <h3 className="font-medium text-lg mb-2">¿Necesitas una respuesta rápida?</h3>
                <p className="text-muted-foreground mb-4">
                  Contáctanos directamente por WhatsApp para una atención más rápida.
                </p>
                <Button
                  onClick={() => window.open("https://wa.me/3105627575", "_blank")}
                  className="bg-[#41A650] hover:bg-[#41A650]/90"
                >
                  Contactar por WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
