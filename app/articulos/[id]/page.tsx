"use client";

import { useParams } from "next/navigation";
import { articles } from "@/lib/articles";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function ArticlePage() {
  const params = useParams();
  const article = articles.find((a) => a.id === params.id);

  if (!article) {
    notFound();
  }

  // Función para procesar el contenido y mostrar las imágenes
  const renderContent = (content: string) => {
    const paragraphs = content.split('\n\n');
    
    return paragraphs.map((paragraph, index) => {
      // Verificar si el párrafo contiene una marca de imagen
      if (paragraph.includes('[IMAGEN:')) {
        const imageMatch = paragraph.match(/\[IMAGEN: (.*?)\]/);
        if (imageMatch) {
          const imageDescription = imageMatch[1];
          // Extraer el nombre del archivo de imagen basado en la descripción
          let imageFileName = '';
          
          if (imageDescription.includes('FUTBOL')) {
            imageFileName = 'futbol.jpg';
          } else if (imageDescription.includes('TENNIS')) {
            imageFileName = 'tenis.jpg';
          } else if (imageDescription.includes('VOLEIBOL')) {
            imageFileName = 'voleibol.jpg';
          } else if (imageDescription.includes('NADADORES')) {
            imageFileName = 'natacion.jpg';
          } else if (imageDescription.includes('BALONCESTO')) {
            imageFileName = 'baloncesto.jpg';
          } else {
            imageFileName = 'entrenamiento-deportivo.jpg';
          }
          
          return (
            <div key={index} className="my-8">
              <div className="relative h-[300px] w-full rounded-lg overflow-hidden">
                <Image
                  src={`/articles/${imageFileName}`}
                  alt={imageDescription}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-sm text-gray-500 mt-2">{imageDescription}</p>
            </div>
          );
        }
      }
      
      // Verificar si es una línea de separación
      if (paragraph.trim() === '________________________________________') {
        return <hr key={index} className="my-6 border-gray-200" />;
      }
      
      // Verificar si es un subtítulo de ejemplo (contiene emoji y "Ejemplo aplicado")
      if (paragraph.includes('Ejemplo aplicado')) {
        return (
          <h3 key={index} className="text-xl font-bold mt-6 mb-4 text-[#5E308C]">
            {paragraph}
          </h3>
        );
      }
      
      // Si no es una imagen, mostrar como párrafo normal
      return (
        <p key={index} className="mb-4">
          {paragraph}
        </p>
      );
    });
  };

  return (
    <div className="container px-4 md:px-6 py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="inline-block rounded-lg bg-[#5E308C]/10 px-3 py-1 text-sm text-[#5E308C] mb-4">
            {article.sport}
          </div>
          <h1 className="text-4xl font-bold tracking-tighter mb-4">{article.title}</h1>
          <div className="flex items-center justify-between">
            <p className="text-gray-500 italic">Por: {article.author}</p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Adaptado por Sportsprofessionals</span>
            </div>
          </div>
        </div>

        <div className="relative h-[400px] w-full mb-8 rounded-lg overflow-hidden">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          {renderContent(article.content)}
        </div>
      </div>
    </div>
  );
} 