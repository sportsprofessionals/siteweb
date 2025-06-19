import { useState, useRef, useEffect } from "react";
import { articles } from "@/lib/articles";
import { ArticleCard } from "./ArticleCard";
import { useAnimation } from "./animation-provider";
import { ChevronLeft, ChevronRight, BookOpen, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "./ui/carousel";

export function ArticlesSection() {
  const { FadeIn, SlideIn, ScaleIn } = useAnimation();

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 overflow-hidden">
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
        {/* Header rediseñado */}
        <FadeIn className="text-center mb-20">
          <div className="inline-flex items-center gap-3 rounded-3xl bg-white/60 backdrop-blur-xl px-8 py-4 mb-8 border border-white/40 shadow-2xl">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Biblioteca Digital
              </span>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center shadow-lg">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-8">
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Conocimiento y
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Experiencia
            </span>
          </h2>
          
          <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light mb-12">
            Descubre una colección curada de <span className="font-bold text-blue-600">artículos especializados</span> 
            {" "}sobre entrenamiento deportivo, metodologías innovadoras y las últimas tendencias en ciencias del deporte.
          </p>
          
          {/* Estadísticas rediseñadas */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 mb-16">
            <div className="text-center group">
              <div className="text-4xl font-black bg-gradient-to-br from-cyan-500 to-blue-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">{articles.length}+</div>
              <div className="text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wider">Artículos Especializados</div>
            </div>
            <div className="hidden sm:block h-12 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
            <div className="text-center group">
              <div className="text-4xl font-black bg-gradient-to-br from-purple-500 to-blue-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">5</div>
              <div className="text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wider">Categorías Diversas</div>
            </div>
            <div className="hidden sm:block h-12 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
            <div className="text-center group">
              <div className="flex items-center justify-center gap-1 text-4xl font-black bg-gradient-to-br from-blue-500 to-cyan-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8" />
                100%
              </div>
              <div className="text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wider">Contenido Actualizado</div>
            </div>
          </div>
        </FadeIn>

        {/* Carousel Container rediseñado */}
        <div className="relative px-4 md:px-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {articles.map((article, index) => (
                <CarouselItem key={article.id} className="md:basis-1/2 lg:basis-1/3">
                  <SlideIn direction="up" delay={0.1 * (index % 3 + 1)}>
                    <ArticleCard
                      id={article.id}
                      title={article.title}
                      summary={article.summary}
                      author={article.author}
                      imageUrl={article.imageUrl}
                      sport={article.sport}
                    />
                  </SlideIn>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Controles de navegación rediseñados */}
            <div className="flex items-center justify-center gap-4 mt-12">
              <CarouselPrevious className="static translate-y-0 rounded-full w-14 h-14 border-2 border-white/30 bg-white/60 backdrop-blur-lg text-blue-600 hover:bg-white/80 hover:border-white/50 transition-all duration-300 shadow-lg hover:shadow-xl" />
              <CarouselNext className="static translate-y-0 rounded-full w-14 h-14 border-2 border-white/30 bg-white/60 backdrop-blur-lg text-blue-600 hover:bg-white/80 hover:border-white/50 transition-all duration-300 shadow-lg hover:shadow-xl" />
            </div>
          </Carousel>
        </div>

        {/* Call to Action rediseñado */}
        <FadeIn className="text-center mt-20">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-600 hover:via-blue-700 hover:to-purple-700 text-white shadow-2xl hover:shadow-blue-500/25 rounded-2xl px-12 py-4 text-lg font-bold transition-all duration-300 border-0"
            >
              <Link href="/articulos" className="flex items-center gap-3">
                <BookOpen className="w-6 h-6" />
                Explorar todos los artículos
                <ChevronRight className="w-5 h-5" />
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-2 border-blue-300/60 text-blue-600 bg-white/60 backdrop-blur-lg hover:bg-white/80 hover:border-blue-400 rounded-2xl px-12 py-4 text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Link href="/contacto">
                Sugiere un tema
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}