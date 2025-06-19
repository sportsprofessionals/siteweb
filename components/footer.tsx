import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, ArrowRight, Sparkles, Zap, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-600/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-purple-600/10 to-transparent rounded-full blur-3xl animate-pulse delay-75" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-600/5 to-transparent rounded-full blur-2xl animate-pulse delay-150" />
        
        {/* Partículas flotantes */}
        <div className="absolute top-20 right-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-bounce" />
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-purple-400/30 rounded-full animate-bounce delay-100" />
        <div className="absolute top-1/3 left-20 w-1 h-4 bg-cyan-400/20 animate-pulse delay-200" />
        <div className="absolute bottom-1/4 right-20 w-3 h-3 bg-blue-400/20 transform rotate-45 animate-spin" style={{animationDuration: '8s'}} />
        
        {/* Líneas decorativas */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
        <div className="absolute top-32 left-0 w-32 h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent animate-pulse" />
        <div className="absolute bottom-40 right-0 w-24 h-px bg-gradient-to-l from-transparent via-cyan-400/20 to-transparent animate-pulse delay-300" />
      </div>

      <div className="container py-16 md:py-24 relative z-10">
        {/* Header principal del footer */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 rounded-3xl bg-white/5 backdrop-blur-xl px-8 py-4 mb-8 border border-white/10 shadow-2xl">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center shadow-lg">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                SPORTSPROFESSIONALS
              </span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Transformando el Futuro
            </span>
            <br />
            <span className="text-white">
              del Deporte
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Somos una empresa conformada por <span className="font-bold text-cyan-400">profesionales especializados</span> que 
            trabajamos en los sectores público y privado, ofreciendo soluciones integrales para la industria deportiva.
          </p>
        </div>

        {/* Grid principal rediseñado */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 mb-16">
          
          {/* Columna 1: Información de la empresa */}
          <div className="lg:col-span-1 space-y-8">
            <div className="group">
              <div className="flex items-center gap-3 mb-6">
                <Image 
                  src="/logo1.png" 
                  alt="SPORTSPROFESSIONALS Logo" 
                  width={48} 
                  height={48} 
                  className="h-12 w-auto group-hover:scale-110 transition-transform duration-300" 
                />
                <div>
                  <span className="text-xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    SPORTS
                  </span>
                  <br />
                  <span className="text-sm font-bold text-cyan-400">
                    PROFESSIONALS
                  </span>
                </div>
              </div>
              
              <p className="text-gray-400 leading-relaxed mb-6">
                Líderes en servicios deportivos especializados con más de 5 años de experiencia 
                transformando la industria del deporte en Colombia.
              </p>
              
              {/* Estadísticas rápidas */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                  <div className="text-2xl font-black text-cyan-400">5+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Servicios</div>
                </div>
                <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                  <div className="text-2xl font-black text-purple-400">100+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Clientes</div>
                </div>
              </div>
            </div>
          </div>

          {/* Columna 2: Servicios con iconos */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-lg">
                <Award className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Servicios Especializados</h3>
            </div>
            
            <ul className="space-y-4">
              {[
                { href: "/servicios/administracion-deportiva", name: "Administración Deportiva", icon: Users },
                { href: "/servicios/educacion-fisica", name: "Educación Física", icon: Sparkles },
                { href: "/servicios/actividad-fisica", name: "Actividad Física", icon: Zap },
                { href: "/servicios/deporte", name: "Deporte Competitivo", icon: Award },
                { href: "/servicios/recreacion", name: "Recreación Integral", icon: Users },
              ].map((service, index) => {
                const Icon = service.icon
                return (
                  <li key={index}>
                    <Link 
                      href={service.href} 
                      className="group flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 p-2 rounded-lg hover:bg-white/5"
                    >
                      <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 group-hover:from-blue-500 group-hover:to-cyan-600 flex items-center justify-center transition-all duration-300">
                        <Icon className="w-3 h-3 text-gray-400 group-hover:text-white" />
                      </div>
                      <span className="text-sm font-medium">{service.name}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </Link>
              </li>
                )
              })}
            </ul>
          </div>

          {/* Columna 3: Enlaces rápidos */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Enlaces Rápidos</h3>
            </div>
            
            <ul className="space-y-4">
              {[
                { href: "/quienes-somos", name: "Quiénes Somos" },
                { href: "/articulos", name: "Artículos Deportivos" },
                { href: "/aliados-deportivos", name: "Aliados Deportivos" },
                { href: "/formacion", name: "Formación Profesional" },
                { href: "/contacto", name: "Contacto" },
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="group flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 p-2 rounded-lg hover:bg-white/5"
                  >
                    <div className="w-2 h-2 rounded-full bg-purple-400 group-hover:bg-pink-400 transition-colors duration-300" />
                    <span className="text-sm font-medium">{link.name}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </Link>
              </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Información de contacto */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Contacto Directo</h3>
            </div>
            
            <ul className="space-y-6">
              <li className="group">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg flex-shrink-0">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
          <div>
                    <div className="text-sm font-semibold text-white mb-1">Ubicación</div>
                    <div className="text-sm text-gray-400">Calle 152B #72-91</div>
                  </div>
                </div>
              </li>
              
              <li className="group">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-lg flex-shrink-0">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white mb-1">Teléfono</div>
                    <div className="text-sm text-gray-400">+57 310 5627575</div>
                  </div>
                </div>
              </li>
              
              <li className="group">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg flex-shrink-0">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white mb-1">Email</div>
                    <div className="text-sm text-gray-400 break-all">infosportsprofessionals@gmail.com</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Sección de redes sociales y newsletter */}
        <div className="border-t border-white/10 pt-12 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            
            {/* Redes sociales */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-bold text-white mb-6">Síguenos en Redes Sociales</h4>
              <div className="flex justify-center md:justify-start gap-4">
                {[
                  { 
                    href: "https://www.facebook.com/profile.php?id=61575308113610", 
                    icon: Facebook, 
                    name: "Facebook",
                    gradient: "from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600"
                  },
                  { 
                    href: "https://instagram.com", 
                    icon: Instagram, 
                    name: "Instagram",
                    gradient: "from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500"
                  },
                  { 
                    href: "https://linkedin.com", 
                    icon: Linkedin, 
                    name: "LinkedIn",
                    gradient: "from-blue-700 to-blue-800 hover:from-blue-600 hover:to-blue-700"
                  },
                ].map((social, index) => {
                  const Icon = social.icon
                  return (
                    <Link
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative w-14 h-14 rounded-2xl bg-gradient-to-br ${social.gradient} flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1`}
                    >
                      <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        {social.name}
                      </span>
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Call to action */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-bold text-white mb-4">¿Listo para comenzar?</h4>
              <p className="text-gray-400 mb-6">Contacta con nosotros y descubre cómo podemos ayudarte</p>
              <Button 
                asChild 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-xl hover:shadow-2xl rounded-2xl px-6 py-3 font-bold transition-all duration-300 transform hover:scale-105 border-0"
              >
                <Link href="/contacto" className="flex items-center gap-2">
                  <span>Contactar Ahora</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} <span className="font-semibold text-white">SPORTSPROFESSIONALS</span>. 
                Todos los derechos reservados.
              </p>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link href="/privacidad" className="hover:text-white transition-colors duration-300">
                Política de Privacidad
              </Link>
              <Link href="/terminos" className="hover:text-white transition-colors duration-300">
                Términos de Uso
              </Link>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span>Sitio Seguro</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Línea decorativa superior */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500" />
    </footer>
  )
}
