"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const navLinks = [
  { name: "Inicio", href: "/" },
  {
    name: "Servicios",
    href: "#",
    submenu: [
      { name: "Administración Deportiva", href: "/servicios/administracion-deportiva" },
      { name: "Educación Física", href: "/servicios/educacion-fisica" },
      { name: "Actividad Física", href: "/servicios/actividad-fisica" },
      { name: "Deporte", href: "/servicios/deporte" },
      { name: "Recreación", href: "/servicios/recreacion" },
    ],
  },
  { name: "Quiénes Somos", href: "/quienes-somos" },
  { name: "Formación", href: "/formacion" },
  /*
  { name: "Clientes", href: "/clientes" },
  { name: "Escenarios", href: "/escenarios-deportivos" },
   */
  { name: "Contacto", href: "/contacto" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo1.png" alt="SPORTSPROFESSIONALS Logo" width={40} height={40} className="h-10 w-auto" />
          <span className="text-xl font-bold text-[#5E308C]">SPORTSPROFESSIONALS</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) =>
            !link.submenu ? (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#0D0D0D] hover:text-[#5E308C] transition-colors"
              >
                {link.name}
              </Link>
            ) : (
              <DropdownMenu key={link.name}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-sm font-medium text-[#0D0D0D] hover:text-[#5E308C]">
                    {link.name}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {link.submenu.map((subItem) => (
                    <DropdownMenuItem key={subItem.name} asChild>
                      <Link href={subItem.href} className="cursor-pointer">
                        {subItem.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ),
          )}
        </nav>

        <Button variant="outline" size="icon" className="md:hidden" onClick={() => setIsOpen(true)}>
          <Menu className="h-5 w-5" />
          <span className="sr-only">Abrir menú</span>
        </Button>

        {isOpen && (
          <div className="fixed inset-0 z-50 bg-white md:hidden">
            <div className="container flex h-16 items-center justify-between">
              <Link href="/" className="flex items-center gap-2">
                <Image src="/logo.png" alt="SPORTSPROFESSIONALS Logo" width={40} height={40} className="h-10 w-auto" />
                <span className="text-xl font-bold text-[#5E308C]">SPORTSPROFESSIONALS</span>
              </Link>
              <Button variant="outline" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-5 w-5" />
                <span className="sr-only">Cerrar menú</span>
              </Button>
            </div>
            <nav className="container grid gap-6 pb-8 pt-6">
              {navLinks.map((link) =>
                !link.submenu ? (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium text-[#0D0D0D] hover:text-[#5E308C]"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <div key={link.name} className="space-y-3">
                    <div className="font-medium text-lg text-[#0D0D0D]">{link.name}</div>
                    <div className="grid gap-2 pl-4">
                      {link.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="text-sm text-muted-foreground hover:text-[#5E308C]"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ),
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
