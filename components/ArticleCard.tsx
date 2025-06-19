import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { Clock, User, ArrowRight, BookOpen } from 'lucide-react';

interface ArticleCardProps {
  id: string;
  title: string;
  summary: string;
  author: string;
  imageUrl: string;
  sport: string;
}

export function ArticleCard({ id, title, summary, author, imageUrl, sport }: ArticleCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 flex flex-col">
      {/* Efecto de gradiente de fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B8CBF]/5 to-[#1e40af]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Elementos decorativos */}
      <div className="absolute top-4 right-4 w-20 h-20 bg-[#0B8CBF]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-4 left-4 w-16 h-16 bg-[#1e40af]/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Imagen con overlay dinámico */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Badge del deporte */}
        <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md rounded-full px-3 py-1 border border-white/30">
          <div className="flex items-center gap-2">
            <BookOpen className="w-3 h-3 text-white" />
            <span className="text-xs font-medium text-white">{sport}</span>
          </div>
        </div>
        
        {/* Indicador de tiempo de lectura */}
        <div className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1 border border-white/20">
          <div className="flex items-center gap-1 text-white">
            <Clock className="w-3 h-3" />
            <span className="text-xs">5 min</span>
          </div>
        </div>
      </div>
      
      {/* Contenido principal */}
      <div className="relative flex-1 p-6 flex flex-col">
        {/* Título completo */}
        <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#0B8CBF] transition-colors duration-300">
          {title}
        </h3>
        
        {/* Resumen completo */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
          {summary}
        </p>
        
        {/* Footer con autor */}
        <div className="border-t border-gray-100 pt-4 mt-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-gray-400" />
              <span className="text-xs text-gray-500 line-clamp-1 flex-1">
                {author}
              </span>
            </div>
          </div>
          
          {/* Botón de acción mejorado */}
          <Button 
            asChild 
            className="w-full bg-gradient-to-r from-[#0B8CBF] to-[#1e40af] hover:from-[#0B8CBF]/90 hover:to-[#1e40af]/90 text-white border-0 rounded-xl py-2.5 font-medium transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#0B8CBF]/25"
          >
            <Link href={`/articulos/${id}`} className="flex items-center justify-center gap-2">
              Leer artículo
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Línea decorativa animada */}
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#0B8CBF] to-[#1e40af] w-0 group-hover:w-full transition-all duration-500" />
    </div>
  );
} 