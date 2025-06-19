"use client";

import { useState } from "react";
import { articles } from "@/lib/articles";
import Link from "next/link";
import { 
  BookOpen, 
  Search, 
  Filter, 
  Clock, 
  ChevronRight, 
  Sparkles,
  TrendingUp,
  FileText,
  User,
  ArrowLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function ArticulosPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSport, setSelectedSport] = useState("all");

  // Obtener categorías únicas
  const sports = [...new Set(articles.map(article => article.sport))];

  // Filtrar artículos
  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSport = selectedSport === "all" || article.sport === selectedSport;
    return matchesSearch && matchesSport;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-200/30 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-purple-200/30 to-transparent rounded-full blur-3xl animate-pulse delay-75" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-200/20 to-indigo-200/20 rounded-full blur-2xl animate-pulse delay-150" />
          
          {/* Formas geométricas flotantes */}
          <div className="absolute top-20 right-1/4 w-4 h-4 bg-cyan-300/40 rotate-45 animate-bounce" />
          <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-purple-300/40 rounded-full animate-bounce delay-100" />
          <div className="absolute top-1/3 left-20 w-2 h-8 bg-blue-300/40 animate-pulse delay-200" />
          <div className="absolute bottom-1/4 right-20 w-6 h-6 bg-cyan-300/30 transform rotate-12 animate-spin" style={{animationDuration: '10s'}} />
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-200 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 rounded-3xl bg-white/60 backdrop-blur-xl px-8 py-4 mb-8 border border-white/40 shadow-2xl">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Biblioteca Completa
                </span>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center shadow-lg">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8">
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Todos los
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Artículos
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light mb-12">
              Explora nuestra colección completa de artículos especializados en ciencias del deporte, 
              metodologías de entrenamiento y desarrollo profesional.
            </p>

            {/* Estadísticas */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 mb-12">
              <div className="text-center group">
                <div className="text-4xl font-black bg-gradient-to-br from-cyan-500 to-blue-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  {articles.length}
                </div>
                <div className="text-sm font-medium text-gray-600 uppercase tracking-wider">Artículos Disponibles</div>
              </div>
              <div className="hidden sm:block h-12 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
              <div className="text-center group">
                <div className="text-4xl font-black bg-gradient-to-br from-purple-500 to-blue-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  {sports.length}
                </div>
                <div className="text-sm font-medium text-gray-600 uppercase tracking-wider">Categorías</div>
              </div>
              <div className="hidden sm:block h-12 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
              <div className="text-center group">
                <div className="flex items-center justify-center gap-1 text-4xl font-black bg-gradient-to-br from-blue-500 to-cyan-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8" />
                  100%
                </div>
                <div className="text-sm font-medium text-gray-600 uppercase tracking-wider">Contenido Premium</div>
              </div>
            </div>
          </div>

          {/* Filtros y Búsqueda */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-white/40 shadow-2xl">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Búsqueda */}
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Buscar artículos por título o contenido..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 pr-4 py-4 text-lg border-2 border-gray-200/50 rounded-2xl focus:border-blue-400 focus:ring-blue-400/20 bg-white/80 backdrop-blur-sm"
                  />
                </div>

                {/* Filtro por categoría */}
                <div className="relative">
                  <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedSport}
                    onChange={(e) => setSelectedSport(e.target.value)}
                    className="pl-12 pr-8 py-4 text-lg border-2 border-gray-200/50 rounded-2xl focus:border-blue-400 focus:ring-blue-400/20 bg-white/80 backdrop-blur-sm appearance-none cursor-pointer min-w-[200px]"
                  >
                    <option value="all">Todas las categorías</option>
                    {sports.map(sport => (
                      <option key={sport} value={sport}>{sport}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Resultados */}
              {searchTerm && (
                <div className="mt-4 text-center text-gray-600">
                  Mostrando {filteredArticles.length} de {articles.length} artículos
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Artículos */}
      <section className="pb-20 relative z-10">
        <div className="container px-4 md:px-6">
          {filteredArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <div
                  key={article.id}
                  className="group relative bg-white/60 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/40 shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:-translate-y-2"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  {/* Imagen */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Badge de categoría */}
                    <div className="absolute top-4 left-4">
                      <Badge 
                        variant="secondary" 
                        className="bg-white/90 text-blue-600 font-semibold px-3 py-1 rounded-xl border border-blue-200/50"
                      >
                        {article.sport}
                      </Badge>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                      {article.summary}
                    </p>

                    {/* Autor */}
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                      <User className="w-4 h-4" />
                      <span className="line-clamp-1">{article.author}</span>
                    </div>

                    {/* Botón de leer más */}
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-2xl py-3 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <Link href={`/articulos/${article.id}`} className="flex items-center justify-center gap-2">
                        <FileText className="w-4 h-4" />
                        Leer artículo completo
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Estado vacío */
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No se encontraron artículos</h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                No hay artículos que coincidan con tu búsqueda. Intenta con otros términos o categorías.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedSport("all");
                }}
                variant="outline"
                className="border-2 border-blue-300/60 text-blue-600 bg-white/60 backdrop-blur-lg hover:bg-white/80 hover:border-blue-400 rounded-2xl px-8 py-3 font-semibold"
              >
                Limpiar filtros
              </Button>
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
} 