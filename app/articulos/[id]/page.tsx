"use client";

import { useParams } from "next/navigation";
import { articles } from "@/lib/articles";
import { useAnimation } from "@/components/animation-provider";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function ArticlePage() {
  const { FadeIn, SlideIn } = useAnimation();
  const { id } = useParams();
  const article = articles.find((a) => a.id === id);

  if (!article) {
    notFound();
  }

  const formatText = (text: string) => {
    return text.split(' ').map(word => {
      if (word === word.toUpperCase() && word.length > 1) {
        return word.charAt(0) + word.slice(1).toLowerCase()
      }
      return word
    }).join(' ')
  }

  const renderContent = () => {
    return article.content.split("\n").map((paragraph, index) => {
      // Si el párrafo contiene una imagen
      if (paragraph.includes("[IMAGEN:")) {
        const imageType = paragraph.match(/\[IMAGEN: (.*?)\]/)?.[1] || "";
        let imageName = "";

        // Determinar el nombre del archivo de imagen basado en el tipo
        if (imageType.includes("FUTBOL")) {
          imageName = "futbol.jpg";
        } else if (imageType.includes("TENNIS")) {
          imageName = "tenis.jpg";
        } else if (imageType.includes("VOLEIBOL")) {
          imageName = "voleibol.jpg";
        } else if (imageType.includes("NADADORES")) {
          imageName = "natacion.jpg";
        } else if (imageType.includes("BALONCESTO")) {
          imageName = "baloncesto.jpg";
        }

        return (
          <div key={index} className="my-6">
            <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
              <Image
                src={`/articles/${imageName}`}
                alt={imageType}
                fill
                className="object-cover"
              />
            </div>
          </div>
        );
      }

      // Si es un subtítulo (contiene "Ejemplo aplicado")
      if (paragraph.includes("Ejemplo aplicado")) {
        return (
          <h3 key={index} className="text-xl font-semibold mt-8 mb-4 text-[#5E308C]">
            {formatText(paragraph)}
          </h3>
        );
      }

      // Si es una línea horizontal
      if (paragraph.trim() === "---") {
        return <hr key={index} className="my-8 border-gray-200" />;
      }

      // Si es un párrafo normal
      return (
        <p key={index} className="text-justify text-muted-foreground mb-4">
          {formatText(paragraph)}
        </p>
      );
    });
  };

  return (
    <div className="container py-16 md:py-24">
      <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="inline-block rounded-lg bg-[#5E308C]/10 px-3 py-1 text-sm text-[#5E308C]">
          {article.sport}
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {article.title}
        </h1>
        <div className="flex flex-col items-center gap-2">
          <p className="text-muted-foreground md:text-lg">
            Por {article.author}
          </p>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground md:text-lg">Adaptado por Sportsprofessionals</span>
            <Image
              src="/logo1.png"
              alt="Sportsprofessionals"
              width={120}
              height={30}
              className="h-6 w-auto"
            />
          </div>
        </div>
      </FadeIn>

      <div className="max-w-3xl mx-auto">
        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          {renderContent()}
        </div>
      </div>
    </div>
  );
} 