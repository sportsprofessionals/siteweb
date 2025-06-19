"use client";

import { useParams } from "next/navigation";
import { articles } from "@/lib/articles";
import { useAnimation } from "@/components/animation-provider";
import Image from "next/image";
import { notFound } from "next/navigation";
import AudioPlayer from "@/components/AudioPlayer";
import { ArrowLeft, BookOpen, User, Clock, Share2, Quote, Calendar, Tag, Eye, ChevronRight, Copy, Check } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';

// Componente de líneas decorativas sutiles
const SubtleLines = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30 z-0">
    <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
    <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
    <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
  </div>
)

// Componente para el sidebar con información adicional
const ArticleSidebar = ({ article, colors }: { article: any, colors: any }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      
      // Notificación personalizada bonita
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-md w-full bg-white shadow-lg rounded-2xl pointer-events-auto flex items-center gap-3 p-4 border border-green-200`}
        >
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
            <Check className="w-5 h-5 text-green-600" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-gray-900">¡Enlace copiado!</div>
            <div className="text-sm text-gray-600">El enlace se ha copiado al portapapeles</div>
          </div>
        </div>
      ), {
        duration: 3000,
      });
      
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Error al copiar el enlace');
    }
  };

  return (
    <div className="space-y-8">
      {/* Card de información del artículo */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h3 className="font-bold text-lg mb-4 text-gray-900">Información del Artículo</h3>
        
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${colors.gradient} flex items-center justify-center`}>
              <User className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-medium text-gray-900">Autor</div>
              <div className="text-sm text-gray-600">{article.author}</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
              <Clock className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <div className="font-medium text-gray-900">Tiempo de lectura</div>
              <div className="text-sm text-gray-600">~8 minutos</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
              <Tag className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <div className="font-medium text-gray-900">Categoría</div>
              <div className="text-sm text-gray-600">{article.sport}</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Card de compartir */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h3 className="font-bold text-lg mb-4 text-gray-900">Compartir Artículo</h3>
        <Button 
          onClick={copyToClipboard}
          variant="outline" 
          size="sm" 
          className="w-full flex items-center gap-2 hover:bg-gray-50 transition-colors"
          disabled={copied}
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-green-600">¡Copiado!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>Copiar enlace</span>
            </>
          )}
        </Button>
      </div>

      {/* Navegación a otros artículos */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h3 className="font-bold text-lg mb-4 text-gray-900">Más Artículos</h3>
        <Link 
          href="/#conocimiento"
          className="group flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors"
        >
          <span className="text-gray-700 group-hover:text-gray-900">Ver todos los artículos</span>
          <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" />
        </Link>
      </div>
    </div>
  )
}

export default function ArticlePage() {
  // const { FadeIn, SlideIn, ScaleIn } = useAnimation();
  const params = useParams();
  const id = params?.id as string;
  const article = articles.find((a) => a.id === id);

  if (!article) {
    notFound();
  }

  // Función para obtener paleta de colores según el deporte
  const getSportColors = (sport: string) => {
    const colorMap: Record<string, { primary: string, secondary: string, gradient: string, bg: string }> = {
      "Entrenamiento Deportivo": {
        primary: "text-emerald-600",
        secondary: "text-teal-600", 
        gradient: "from-emerald-500 to-teal-600",
        bg: "from-emerald-50 to-teal-50"
      },
      "Educación Física": {
        primary: "text-violet-600",
        secondary: "text-purple-600",
        gradient: "from-violet-500 to-purple-600", 
        bg: "from-violet-50 to-purple-50"
      },
      "Salud y Estilo de Vida": {
        primary: "text-amber-600",
        secondary: "text-orange-600",
        gradient: "from-amber-500 to-orange-600",
        bg: "from-amber-50 to-orange-50"
      },
      "Recreación y Deporte": {
        primary: "text-blue-600", 
        secondary: "text-indigo-600",
        gradient: "from-blue-500 to-indigo-600",
        bg: "from-blue-50 to-indigo-50"
      },
      "Fisiología del Ejercicio": {
        primary: "text-rose-600",
        secondary: "text-pink-600", 
        gradient: "from-rose-500 to-pink-600",
        bg: "from-rose-50 to-pink-50"
      },
      "Natación Adaptada": {
        primary: "text-cyan-600",
        secondary: "text-blue-600",
        gradient: "from-cyan-500 to-blue-600", 
        bg: "from-cyan-50 to-blue-50"
      },
      "Liderazgo Deportivo": {
        primary: "text-indigo-600",
        secondary: "text-slate-600",
        gradient: "from-indigo-500 to-slate-600",
        bg: "from-indigo-50 to-slate-50"
      }
    };
    
    return colorMap[sport] || {
      primary: "text-slate-600",
      secondary: "text-gray-600", 
      gradient: "from-slate-500 to-gray-600",
      bg: "from-slate-50 to-gray-50"
    };
  };

  const colors = getSportColors(article.sport);

  const formatText = (text: string) => {
    return text.split(' ').map(word => {
      if (word === word.toUpperCase() && word.length > 1) {
        return word.charAt(0) + word.slice(1).toLowerCase()
      }
      return word
    }).join(' ')
  };

  const renderContent = () => {
    let inList = false;
    let inGlossary = false;
    const result: React.ReactElement[] = [];
    let listItems: React.ReactElement[] = [];

    // Dividir el contenido y filtrar líneas vacías
    const paragraphs = article.content.split("\n").filter(p => p.trim() !== "");

    paragraphs.forEach((paragraph, index) => {
      const trimmedParagraph = paragraph.trim();
      
      // Skip empty paragraphs
      if (!trimmedParagraph) {
        return;
      }

      // Check if this is a GLOSARIO section
      if (trimmedParagraph.includes("**GLOSARIO DE TÉRMINOS CLAVE**") || trimmedParagraph.includes("**GLOSARIO")) {
        inGlossary = true;
        result.push(
          <div key={`glossary-${index}`} className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 my-12 border-l-4 border-gray-300">
            <div className="flex items-center gap-3 mb-6">
              <Quote className="w-6 h-6 text-gray-500" />
              <h2 className="text-2xl font-bold text-gray-900">
                {formatText(trimmedParagraph.replace(/\*\*/g, ""))}
              </h2>
            </div>
          </div>
        );
        return;
      }

      // Handle glossary items
      if (inGlossary && trimmedParagraph.startsWith("- **")) {
        const match = trimmedParagraph.match(/- \*\*(.*?)\*\*: (.*)/);
        if (match) {
          const term = match[1];
          const definition = match[2];
          result.push(
            <div key={`glossary-item-${index}`} className="bg-white rounded-xl p-6 mb-4 shadow-sm border border-gray-100 ml-8">
              <dt className={`font-bold ${colors.primary} text-lg mb-2`}>{term}</dt>
              <dd className="text-gray-700 leading-relaxed">{definition}</dd>
            </div>
          );
        }
        return;
      }

      // Handle images
      if (trimmedParagraph.includes("[IMAGEN:")) {
        const imageType = trimmedParagraph.match(/\[IMAGEN: (.*?)\]/)?.[1] || "";
        let imageName = "";

        if (imageType.includes("FUTBOL")) {
          imageName = "futbol.jpg";
        } else if (imageType.includes("TENNIS") || imageType.includes("TENIS")) {
          imageName = "tenis.jpg";
        } else if (imageType.includes("VOLEIBOL")) {
          imageName = "voleibol.jpg";
        } else if (imageType.includes("NADADORES") || imageType.includes("NATACION")) {
          imageName = "natacion.jpg";
        } else if (imageType.includes("BALONCESTO")) {
          imageName = "baloncesto.jpg";
        } else if (imageType.includes("EDUCACION FISICA") || imageType.includes("ESCOLAR")) {
          imageName = "educacion-fisica.jpg";
        } else {
          imageName = article.imageUrl.split('/').pop() || "default.jpg";
        }

        result.push(
          <figure key={`image-${index}`} className="my-12">
            <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={imageName.startsWith('/') ? imageName : `/articles/${imageName}`}
                alt={imageType || "Imagen ilustrativa"}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            {imageType && (
              <figcaption className="text-center mt-4 text-sm text-gray-600 italic">
                {imageType}
              </figcaption>
            )}
          </figure>
        );
        return;
      }

      // Handle audio players
      if (trimmedParagraph.includes("<audio-player")) {
        const srcMatch = trimmedParagraph.match(/src="([^"]+)"/);
        const titleMatch = trimmedParagraph.match(/title="([^"]+)"/);
        
        if (srcMatch && titleMatch) {
          const src = srcMatch[1];
          const title = titleMatch[1];
          
          result.push(
            <div key={`audio-${index}`} className="my-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <AudioPlayer 
                  src={src}
                  title={title}
                />
              </div>
            </div>
          );
        }
        return;
      }

      // Handle video players
      if (trimmedParagraph.includes("[VIDEO:")) {
        const urlMatch = trimmedParagraph.match(/\[VIDEO:\s*(https:\/\/youtu\.be\/([^|\]]+))\]/);
        if (urlMatch) {
          const fullUrl = urlMatch[1];
          const videoId = urlMatch[2];
          
          result.push(
            <div key={`video-${index}`} className="my-12">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="Video complementario"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </div>
            </div>
          );
        }
        return;
      }

      // Handle subheadings
      if (trimmedParagraph.includes("Ejemplo aplicado")) {
        result.push(
          <div key={`subheading-${index}`} className="my-12 relative z-10" style={{ visibility: 'visible', opacity: 1, display: 'block' }}>
            <div className={`inline-flex items-center gap-3 bg-gradient-to-r ${colors.gradient} text-white px-6 py-3 rounded-xl font-bold text-lg shadow-lg`}>
              <Eye className="w-5 h-5" />
              {formatText(trimmedParagraph)}
            </div>
          </div>
        );
        return;
      }

      // Handle section titles (all caps text)
      if (trimmedParagraph === trimmedParagraph.toUpperCase() && trimmedParagraph.length > 3 && !trimmedParagraph.includes("**")) {
        result.push(
          <div key={`section-${index}`} className="my-12 relative z-10" style={{ visibility: 'visible', opacity: 1, display: 'block' }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight" style={{ visibility: 'visible', opacity: 1, display: 'block' }}>
              {formatText(trimmedParagraph)}
            </h2>
            <div className={`w-24 h-1 bg-gradient-to-r ${colors.gradient} rounded-full`} />
          </div>
        );
        return;
      }

      // Handle horizontal lines
      if (trimmedParagraph === "---") {
        result.push(
          <div key={`hr-${index}`} className="my-16 flex justify-center">
            <div className="w-24 h-px bg-gray-300" />
          </div>
        );
        return;
      }

      // Handle list items
      if (trimmedParagraph.startsWith("-") || trimmedParagraph.startsWith("*") || trimmedParagraph.match(/^\d+\./)) {
        if (!inList) {
          inList = true;
          listItems = [];
        }
        
        const itemText = trimmedParagraph
          .replace(/^-\s+/, '')
          .replace(/^\*\s+/, '')
          .replace(/^\d+\.\s+/, '')
          .replace(/\*\*(.*?)\*\*/g, `<strong class="${colors.primary}">$1</strong>`)
          .trim();
        
        listItems.push(
          <li key={`list-item-${index}`} className="flex items-start gap-4 mb-4">
            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${colors.gradient} mt-2.5 flex-shrink-0`} />
            <span 
              className="text-gray-700 leading-relaxed text-lg"
              dangerouslySetInnerHTML={{ __html: itemText }}
            />
          </li>
        );
        return;
      }

      // If we were in a list but now we're not, add the completed list to results
      if (inList && !trimmedParagraph.startsWith("-") && !trimmedParagraph.startsWith("*") && !trimmedParagraph.match(/^\d+\./)) {
        inList = false;
        result.push(
          <div key={`list-${index}`} className="bg-gray-50 rounded-2xl p-8 my-8 relative z-10" style={{ visibility: 'visible', opacity: 1, display: 'block' }}>
            <ul className="space-y-2">
              {listItems}
            </ul>
          </div>
        );
        listItems = [];
      }

      // Handling section headings with colons
      if (trimmedParagraph.includes(":") && !trimmedParagraph.includes("**") && trimmedParagraph.length < 100) {
        const parts = trimmedParagraph.split(":");
        if (parts.length === 2 && parts[0].trim().length > 0) {
          result.push(
            <div key={`section-${index}`} className="my-10 relative z-10" style={{ visibility: 'visible', opacity: 1, display: 'block' }}>
              <h3 className={`text-2xl font-bold ${colors.primary} leading-tight mb-4`} style={{ visibility: 'visible', opacity: 1, display: 'block' }}>
                {formatText(trimmedParagraph)}
              </h3>
            </div>
          );
          return;
        }
      }

      // Handle formatted text with bold markers and/or links
      if (trimmedParagraph.includes("**") || trimmedParagraph.includes("[")) {
        let formattedText = formatText(trimmedParagraph)
          .replace(/\*\*(.*?)\*\*/g, `<strong class="${colors.primary} font-semibold">$1</strong>`)
          .replace(/\[([^\]]+)\]\(mailto:([^)]+)\)/g, `<a href="mailto:$2" class="${colors.secondary} hover:underline font-medium">$1</a>`)
          .replace(/\[([^\]]+)\]\(https:\/\/wa\.me\/([^)]+)\)/g, `<a href="https://wa.me/$2" target="_blank" rel="noopener noreferrer" class="${colors.secondary} hover:underline font-medium">$1</a>`)
          .replace(/\[([^\]]+)\]\(([^)]+)\)/g, `<a href="$2" target="_blank" rel="noopener noreferrer" class="${colors.secondary} hover:underline font-medium">$1</a>`);
        
        result.push(
          <div key={`paragraph-${index}`} className="my-6 relative z-10" style={{ visibility: 'visible', opacity: 1, display: 'block' }}>
            <p 
              className="text-gray-700 leading-relaxed text-lg"
              style={{ visibility: 'visible', opacity: 1, display: 'block' }}
              dangerouslySetInnerHTML={{ __html: formattedText }}
            />
          </div>
        );
        return;
      }

      // Regular paragraphs
      if (trimmedParagraph.length > 0) {
        result.push(
          <div key={`paragraph-${index}`} className="my-6 relative z-10" style={{ visibility: 'visible', opacity: 1, display: 'block' }}>
            <p className="text-gray-700 leading-relaxed text-lg" style={{ visibility: 'visible', opacity: 1, display: 'block' }}>
              {formatText(trimmedParagraph)}
            </p>
          </div>
        );
      }
    });

    // If we ended while still in a list, add the final list
    if (inList && listItems.length > 0) {
      result.push(
        <div key="final-list" className="bg-gray-50 rounded-2xl p-8 my-8 relative z-10" style={{ visibility: 'visible', opacity: 1, display: 'block' }}>
          <ul className="space-y-2">
            {listItems}
          </ul>
        </div>
      );
    }

    return result;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Toast container */}
      <Toaster 
        position="top-right"
        toastOptions={{
          className: '',
          style: {},
        }}
      />
      
      {/* Hero Section - Estilo Magazine */}
      <section className="relative bg-white border-b border-gray-200 z-10">
        <SubtleLines />
        
        <div className="container relative z-20 py-16 md:py-24">
          {/* Breadcrumb minimalista */}
          <div>
            <Link 
              href="/#conocimiento" 
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Volver a Artículos</span>
            </Link>
          </div>

          <div className="max-w-4xl mx-auto">
            <div>
              {/* Badge de categoría elegante */}
              <div className="mb-8">
                <span className={`inline-flex items-center gap-2 bg-gradient-to-r ${colors.gradient} text-white px-4 py-2 rounded-full text-sm font-medium`}>
                  <BookOpen className="w-4 h-4" />
                  {article.sport}
                </span>
              </div>
              
              {/* Título principal - Estilo editorial */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8 tracking-tight">
                {article.title}
              </h1>
              
              {/* Resumen con tipografía elegante */}
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12 font-light max-w-3xl">
                {article.summary}
              </p>

              {/* Metadatos en línea horizontal */}
              <div className="flex flex-wrap items-center gap-8 pb-8 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${colors.gradient} flex items-center justify-center`}>
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Por {article.author}</div>
                    <div className="text-sm text-gray-600">Autor principal</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">~8 min de lectura</span>
                </div>
                
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Actualizado recientemente</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image Section - Mejorada */}
      <section className="relative bg-white z-10">
        <div className="container py-8">
          <div>
            {/* Container con bordes redondeados y sombra elegante */}
            <div className="relative max-w-5xl mx-auto">
              <div className="relative h-64 md:h-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                {/* Overlay gradiente más sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                
                {/* Badge flotante con la categoría */}
                <div className="absolute top-6 left-6 z-10">
                  <span className={`inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow-lg`}>
                    <BookOpen className="w-4 h-4" />
                    {article.sport}
                  </span>
                </div>
                
                {/* Indicador de lectura en la esquina inferior derecha */}
                <div className="absolute bottom-6 right-6 z-10">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                    <div className="flex items-center gap-2 text-gray-700 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>8 min</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido principal con layout tipo magazine */}
      <section className="relative py-16 md:py-24 z-10">
        <div className="container">
          <div className="grid lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
            
            {/* Contenido principal del artículo */}
            <div className="lg:col-span-3 relative z-20">
              <div>
                <article className="bg-white rounded-2xl shadow-lg p-8 md:p-12 relative z-30">
                  <div className="prose prose-lg prose-gray max-w-none relative z-40">
                    {renderContent()}
                  </div>
                </article>
              </div>
              
              {/* Footer del artículo */}
              <div>
                <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 relative z-30">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-gray-200">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${colors.gradient} flex items-center justify-center`}>
                        <User className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">{article.author}</h3>
                        <p className="text-gray-600">Autor principal del artículo</p>
                      </div>
                    </div>
                    
                    <Button 
                      asChild 
                      className={`bg-gradient-to-r ${colors.gradient} hover:opacity-90 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300`}
                    >
                      <Link href="/#conocimiento" className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        Ver más artículos
                      </Link>
                    </Button>
                  </div>
                  
                  {/* Créditos de adaptación */}
                  <div className="pt-6 text-center">
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-gray-600">Adaptado por</span>
                      <span className={`${colors.primary} font-bold`}>SPORTSPROFESSIONALS</span>
                      <Image
                        src="/logo1.png"
                        alt="Sportsprofessionals"
                        width={100}
                        height={25}
                        className="h-6 w-auto opacity-80"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1 relative z-20">
              <div>
                <div className="sticky top-8 relative z-30">
                  <ArticleSidebar article={article} colors={colors} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}