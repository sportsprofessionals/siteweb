import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo1.png" alt="SPORTSPROFESSIONALS Logo" width={40} height={40} className="h-10 w-auto" />
              <span className="text-xl font-bold">SPORTSPROFESSIONALS</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Somos una empresa conformada por profesionales, que trabajamos en el sector público y privado, ofreciendo
              servicios relacionados con la industria del deporte.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/profile.php?id=61575308113610" className="hover:text-[#5357A6] transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" className="hover:text-[#5357A6] transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://linkedin.com" className="hover:text-[#5357A6] transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/servicios/administracion-deportiva" className="hover:text-white transition-colors">
                  Administración Deportiva
                </Link>
              </li>
              <li>
                <Link href="/servicios/servicios-deportivos" className="hover:text-white transition-colors">
                  Servicios Deportivos
                </Link>
              </li>
              <li>
                <Link href="/servicios/servicios-recreativos" className="hover:text-white transition-colors">
                  Servicios Recreativos
                </Link>
              </li>
              <li>
                <Link href="/servicios/actividad-fisica" className="hover:text-white transition-colors">
                  Actividad Física
                </Link>
              </li>
              <li>
                <Link href="/servicios/educacion-fisica" className="hover:text-white transition-colors">
                  Educación Física
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/quienes-somos" className="hover:text-white transition-colors">
                  Quiénes Somos
                </Link>
              </li>
             
              <li>
                <Link href="/formacion" className="hover:text-white transition-colors">
                  Formación
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="shrink-0 mt-0.5 text-[#41A650]" />
                <span>Calle Principal 123, Ciudad</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="shrink-0 text-[#41A650]" />
                <span>+57 310 5627575</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="shrink-0 text-[#41A650]" />
                <span>sportsprofessionals2024@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} SPORTSPROFESSIONALS. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
