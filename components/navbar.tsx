"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, ArrowRight, Sparkles, Award, Users, Zap, BookOpen, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

const navLinks = [
  { 
    name: "Inicio", 
    href: "/",
    icon: Sparkles
  },
  {
    name: "Servicios",
    href: "#",
    icon: Award,
    submenu: [
      { name: "Administración Deportiva", href: "/servicios/administracion-deportiva", icon: Users },
      { name: "Educación Física", href: "/servicios/educacion-fisica", icon: BookOpen },
      { name: "Actividad Física", href: "/servicios/actividad-fisica", icon: Zap },
      { name: "Deporte", href: "/servicios/deporte", icon: Award },
      { name: "Recreación", href: "/servicios/recreacion", icon: Users },
    ],
  },
  { 
    name: "Quiénes Somos", 
    href: "/quienes-somos",
    icon: Users
  },
  { 
    name: "Formación", 
    href: "/formacion",
    icon: BookOpen
  },
  { 
    name: "Aliados Deportivos", 
    href: "/aliados-deportivos",
    icon: Award
  },
  { 
    name: "Contacto", 
    href: "/contacto",
    icon: Phone
  },
]

// Componente de partículas decorativas para el navbar
const NavbarParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Partículas flotantes sutiles */}
    <div className="absolute top-2 right-1/4 w-1 h-1 bg-blue-400/30 rounded-full animate-bounce" />
    <div className="absolute top-4 left-1/3 w-0.5 h-0.5 bg-cyan-400/20 rounded-full animate-pulse" />
    <div className="absolute bottom-3 right-1/3 w-0.5 h-2 bg-purple-400/15 animate-pulse delay-100" />
    
    {/* Líneas decorativas */}
    <div className="absolute top-0 left-0 w-16 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />
    <div className="absolute bottom-0 right-0 w-20 h-px bg-gradient-to-l from-transparent via-cyan-400/20 to-transparent" />
  </div>
)

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Detectar scroll para efectos dinámicos
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-500",
      isScrolled 
        ? "bg-white/80 backdrop-blur-2xl border-b border-white/20 shadow-2xl shadow-blue-500/10" 
        : "bg-white/95 backdrop-blur-xl border-b border-gray-200/50"
    )}>
      {/* Partículas decorativas */}
      <NavbarParticles />
      
      <div className="container relative z-10">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo rediseñado */}
          <Link href="/" className="group flex items-center gap-4 transition-all duration-300 hover:scale-105">
            <div className="relative">
              {/* Glow effect around logo */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
              <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-3 shadow-lg border border-white/60 group-hover:shadow-xl transition-all duration-300">
                <Image 
                  src="/logo1.png" 
                  alt="SPORTSPROFESSIONALS Logo" 
                  width={48} 
                  height={48} 
                  className="h-12 w-auto group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
            </div>
            
            <div className="hidden sm:block">
              <div className="text-2xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">
                  SPORTS
                </span>
              </div>
              <div className="text-sm font-bold text-gray-600 -mt-1 tracking-wider">
                PROFESSIONALS
              </div>
            </div>
          </Link>

          {/* Navegación desktop rediseñada */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon
              
              return !link.submenu ? (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group relative flex items-center gap-2 px-4 py-3 rounded-2xl text-sm font-semibold text-gray-700 hover:text-blue-600 transition-all duration-300 hover:bg-blue-50/80 hover:backdrop-blur-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 rounded-2xl transition-all duration-300" />
                  <Icon className="w-4 h-4 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  <span className="relative z-10">{link.name}</span>
                  
                  {/* Underline effect */}
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-8 transition-all duration-300" />
                </Link>
              ) : (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="ghost" 
                      className="group relative flex items-center gap-2 px-4 py-3 h-auto rounded-2xl text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50/80 hover:backdrop-blur-sm transition-all duration-300"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 rounded-2xl transition-all duration-300" />
                      <Icon className="w-4 h-4 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                      <span className="relative z-10">{link.name}</span>
                      <ChevronDown className="w-4 h-4 relative z-10 group-data-[state=open]:rotate-180 transition-transform duration-300" />
                      
                      {/* Underline effect */}
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-8 transition-all duration-300" />
                    </Button>
                  </DropdownMenuTrigger>
                  
                  {/* Dropdown rediseñado */}
                  <DropdownMenuContent 
                    align="end" 
                    className="w-72 bg-white/90 backdrop-blur-2xl border border-white/30 shadow-2xl rounded-3xl p-2 mt-2"
                  >
                    {/* Header del dropdown */}
                    <div className="px-4 py-3 border-b border-gray-200/50 mb-2">
                      <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                        <Icon className="w-4 h-4 text-blue-600" />
                        {link.name}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">Servicios especializados</p>
                    </div>
                    
                    {link.submenu.map((subItem) => {
                      const SubIcon = subItem.icon
                      return (
                        <DropdownMenuItem key={subItem.name} asChild>
                          <Link 
                            href={subItem.href} 
                            className="group relative flex items-center gap-3 px-4 py-3 rounded-2xl cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50"
                          >
                            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 group-hover:from-blue-200 group-hover:to-cyan-200 flex items-center justify-center transition-all duration-300">
                              <SubIcon className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                {subItem.name}
                              </div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                          </Link>
                        </DropdownMenuItem>
                      )
                    })}
                    
                    {/* Footer del dropdown */}
                    <div className="px-4 py-3 border-t border-gray-200/50 mt-2">
                      <Link 
                        href="/contacto"
                        className="flex items-center justify-center gap-2 w-full py-2 px-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold text-sm hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                      >
                        <Phone className="w-4 h-4" />
                        Contactar Ahora
                      </Link>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              )
            })}
          </nav>

          {/* Call to action button */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              asChild
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-xl hover:shadow-2xl rounded-2xl px-6 py-3 font-bold transition-all duration-300 transform hover:scale-105 border-0"
            >
              <Link href="/contacto" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>Contacto</span>
              </Link>
            </Button>
          </div>

          {/* Mobile menu button rediseñado */}
          <Button 
            variant="outline" 
            size="icon" 
            className="lg:hidden rounded-lg border border-gray-200 bg-white hover:bg-blue-50 hover:border-blue-200 transition-colors duration-200 shadow-sm" 
            onClick={() => setIsOpen(true)}
          >
            <Menu className="h-5 w-5 text-gray-600" />
            <span className="sr-only">Abrir menú</span>
          </Button>
        </div>
      </div>

      {/* Mobile menu rediseñado */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Overlay con blur */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Panel principal */}
          <div className="absolute right-0 top-0 h-screen w-full max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-out flex flex-col">
            {/* Header del mobile menu */}
            <div className="flex h-16 items-center justify-between px-4 border-b border-gray-200 bg-white">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                  <Image src="/logo1.png" alt="Logo" width={20} height={20} className="h-5 w-auto" />
                </div>
                <div>
                  <div className="text-sm font-black text-blue-600">SPORTS</div>
                  <div className="text-xs font-bold text-gray-500 -mt-0.5">PROFESSIONALS</div>
                </div>
              </div>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-lg hover:bg-gray-100 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-5 w-5 text-gray-600" />
                <span className="sr-only">Cerrar menú</span>
              </Button>
            </div>
            
            {/* Navegación mobile */}
            <nav className="flex-1 px-4 py-4 overflow-y-auto bg-white">
              <div className="space-y-2">
                {navLinks.map((link, index) => {
                  const Icon = link.icon
                  
                  return !link.submenu ? (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="group flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-blue-50 active:bg-blue-100"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 group-hover:from-blue-200 group-hover:to-cyan-200 flex items-center justify-center transition-colors duration-200">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                          {link.name}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" />
                    </Link>
                  ) : (
                    <div key={link.name} className="space-y-2">
                      {/* Título principal del menú desplegable */}
                      <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-blue-50 border border-blue-100">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-base font-bold text-blue-600">{link.name}</div>
                          <div className="text-xs text-gray-500">Servicios especializados</div>
                        </div>
                      </div>
                      
                      {/* Submenú */}
                      <div className="ml-3 pl-3 border-l-2 border-blue-100 space-y-1">
                        {link.submenu.map((subItem) => {
                          const SubIcon = subItem.icon
                          return (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="group flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-gray-50 active:bg-gray-100"
                              onClick={() => setIsOpen(false)}
                            >
                              <div className="w-8 h-8 rounded-lg bg-gray-100 group-hover:bg-blue-100 flex items-center justify-center transition-colors duration-200">
                                <SubIcon className="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-colors duration-200" />
                              </div>
                              <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                                {subItem.name}
                              </span>
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  )
                })}
              </div>
              
              {/* Call to action en mobile */}
              <div className="bg-white border-t border-gray-200 p-4">
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-lg py-3 font-semibold transition-colors duration-200"
                >
                  <Link href="/contacto" className="flex items-center justify-center gap-2" onClick={() => setIsOpen(false)}>
                    <Phone className="w-4 h-4" />
                    <span>Contactar Ahora</span>
                  </Link>
                </Button>
                
                {/* Stats en mobile */}
                <div className="grid grid-cols-3 gap-2 mt-3">
                  <div className="text-center bg-blue-50 rounded-lg p-2">
                    <div className="text-sm font-bold text-blue-600">5+</div>
                    <div className="text-xs text-gray-500">Servicios</div>
                  </div>
                  <div className="text-center bg-cyan-50 rounded-lg p-2">
                    <div className="text-sm font-bold text-cyan-600">100+</div>
                    <div className="text-xs text-gray-500">Clientes</div>
                  </div>
                  <div className="text-center bg-purple-50 rounded-lg p-2">
                    <div className="text-sm font-bold text-purple-600">24/7</div>
                    <div className="text-xs text-gray-500">Soporte</div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
