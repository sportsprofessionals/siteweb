import { useState, useRef, useEffect } from "react";
import { articles } from "@/lib/articles";
import { ArticleCard } from "./ArticleCard";
import { useAnimation } from "./animation-provider";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ArticlesSection() {
  const { FadeIn, SlideIn } = useAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const sliderRef = useRef(null);

  // Número de artículos a mostrar por slide
  const articlesPerSlide = 3;
  
  // Calcular el número total de slides
  const totalSlides = Math.ceil(articles.length / articlesPerSlide);
  
  // Obtener los artículos para el slide actual
  const getCurrentSlideArticles = () => {
    const startIndex = currentIndex * articlesPerSlide;
    return articles.slice(startIndex, startIndex + articlesPerSlide);
  };

  // Funciones para navegación
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  // Control para swipe en móviles
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section className="py-16 md:py-24 bg-[#F8F9FA]">
      <div className="container px-4 md:px-6">
        <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-[#0B8CBF]/10 px-3 py-1 text-sm text-[#0B8CBF]">
            Artículos Deportivos
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Conocimiento y Experiencia
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Descubre artículos especializados sobre entrenamiento deportivo, técnicas y metodologías.
          </p>
        </FadeIn>

        <div className="relative w-full">
          {/* Slider container */}
          <div
            ref={sliderRef}
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {getCurrentSlideArticles().map((article, index) => (
                <SlideIn key={article.id} direction="up" delay={0.1 * (index + 1)}>
                  <ArticleCard
                    id={article.id}
                    title={article.title}
                    summary={article.summary}
                    author={article.author}
                    imageUrl={article.imageUrl}
                    sport={article.sport}
                  />
                </SlideIn>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          {totalSlides > 1 && (
            <div className="flex justify-center mt-8 gap-4">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-[#0B8CBF] text-white hover:bg-[#0B8CBF] focus:outline-none focus:ring-2 focus:ring-[#0B8CBF] transition-all"
                aria-label="Artículos anteriores"
              >
                <ChevronLeft size={24} />
              </button>
              
              {/* Dots indicators */}
              <div className="flex items-center gap-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentIndex === index ? "bg-[#0B8CBF]" : "bg-gray-300"
                    }`}
                    aria-label={`Ir a slide ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-[#0B8CBF] text-white hover:bg-[#0B8CBF] focus:outline-none focus:ring-2 focus:ring-[#0B8CBF] transition-all"
                aria-label="Artículos siguientes"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}