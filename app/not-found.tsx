"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function NotFound() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/")
    }, 10000) // 10 segundos

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      <div className="relative w-64 h-64 mb-8">
        <Image
          src="/404-illustration.svg"
          alt="Página no encontrada"
          fill
          className="object-contain"
          priority
        />
      </div>
      <h1 className="text-4xl font-bold mb-4">¡Oops! Página no encontrada</h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-md">
        Lo sentimos, la página que estás buscando no existe o ha sido movida.
        Serás redirigido a la página principal en 10 segundos.
      </p>
      <div className="flex gap-4">
        <Button asChild size="lg" className="bg-[#5E308C] hover:bg-[#5E308C]/90">
          <Link href="/">Volver al inicio</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/contacto">Contactar soporte</Link>
        </Button>
      </div>
    </div>
  )
} 