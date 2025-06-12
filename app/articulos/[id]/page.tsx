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
  };

  const renderContent = () => {
    let inList = false;
    let inGlossary = false;
    const result: React.ReactElement[] = [];
    let listItems: React.ReactElement[] = [];

    article.content.split("\n").forEach((paragraph, index) => {
      // Check if this is a GLOSARIO section
      if (paragraph.includes("**GLOSARIO DE TÉRMINOS CLAVE**") || paragraph.includes("**GLOSARIO")) {
        inGlossary = true;
        result.push(
          <h2 key={`glossary-${index}`} className="text-2xl font-bold mt-12 mb-6 text-[#0B8CBF]">
            {formatText(paragraph.replace(/\*\*/g, ""))}
          </h2>
        );
        return;
      }

      // Handle glossary items
      if (inGlossary && paragraph.startsWith("- **")) {
        const match = paragraph.match(/- \*\*(.*?)\*\*: (.*)/);
        if (match) {
          const term = match[1];
          const definition = match[2];
          result.push(
            <div key={`glossary-item-${index}`} className="mb-4">
              <dt className="font-semibold text-[#0B8CBF]">{term}</dt>
              <dd className="ml-4 text-muted-foreground">{definition}</dd>
            </div>
          );
        }
        return;
      }

      // Handle images - Enhanced version with more image type detection
      if (paragraph.includes("[IMAGEN:")) {
        const imageType = paragraph.match(/\[IMAGEN: (.*?)\]/)?.[1] || "";
        let imageName = "";

        // Extended image mapping with more specific checks
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
          // Default to article main image if specific type not found
          imageName = article.imageUrl.split('/').pop() || "default.jpg";
        }

        result.push(
          <div key={`image-${index}`} className="my-6">
            <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
              <Image
                src={imageName.startsWith('/') ? imageName : `/articles/${imageName}`}
                alt={imageType || "Imagen ilustrativa"}
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-center text-muted-foreground mt-2">
              {imageType || "Imagen ilustrativa"}
            </p>
          </div>
        );
        return;
      }

      // Handle subheadings
      if (paragraph.includes("Ejemplo aplicado")) {
        result.push(
          <h3 key={`subheading-${index}`} className="text-xl font-semibold mt-8 mb-4 text-[#0B8CBF]">
            {formatText(paragraph)}
          </h3>
        );
        return;
      }

      // Handle section titles (all caps text)
      if (paragraph.trim() === paragraph.trim().toUpperCase() && paragraph.trim().length > 3) {
        result.push(
          <h3 key={`section-${index}`} className="text-xl font-semibold mt-8 mb-4 text-[#0B8CBF]">
            {formatText(paragraph)}
          </h3>
        );
        return;
      }

      // Handle horizontal lines
      if (paragraph.trim() === "---") {
        result.push(<hr key={`hr-${index}`} className="my-8 border-gray-200" />);
        return;
      }

      // Handle list items
      if (paragraph.trim().startsWith("-") || paragraph.trim().startsWith("*") || paragraph.trim().match(/^\d+\./)) {
        if (!inList) {
          inList = true;
          listItems = [];
        }
        
        // Clean up the list item text, removing markdown formatting
        const itemText = paragraph.trim()
          .replace(/^-\s+/, '')
          .replace(/^\*\s+/, '')
          .replace(/^\d+\.\s+/, '')
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          .trim();
        
        listItems.push(
          <li 
            key={`list-item-${index}`} 
            className="ml-6 mb-2 text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: itemText }}
          />
        );
        return;
      }

      // If we were in a list but now we're not, add the completed list to results
      if (inList && !paragraph.trim().startsWith("-") && !paragraph.trim().startsWith("*") && !paragraph.trim().match(/^\d+\./)) {
        inList = false;
        result.push(
          <ul key={`list-${index}`} className="my-4 list-disc">
            {listItems}
          </ul>
        );
      }

      // Handling section headings with colons
      if (paragraph.includes(":") && !paragraph.includes("**") && paragraph.length < 100) {
        const parts = paragraph.split(":");
        if (parts.length === 2 && parts[0].trim().length > 0) {
          result.push(
            <h3 key={`section-${index}`} className="text-xl font-semibold mt-8 mb-4 text-[#0B8CBF]">
              {formatText(paragraph)}
            </h3>
          );
          return;
        }
      }      // Handle formatted text with bold markers and/or links
      if (paragraph.includes("**") || paragraph.includes("[")) {
        let formattedText = formatText(paragraph)
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          .replace(/\[([^\]]+)\]\(mailto:([^)]+)\)/g, '<a href="#" onclick="window.location.href=\'mailto:$2\'; return false;" class="text-[#0B8CBF] hover:text-[#0B8CBF]/80 underline cursor-pointer">$1</a>')
          .replace(/\[([^\]]+)\]\(https:\/\/wa\.me\/([^)]+)\)/g, '<a href="https://wa.me/$2" target="_blank" rel="noopener noreferrer" class="text-[#0B8CBF] hover:text-[#0B8CBF]/80 underline">$1</a>')
          .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-[#0B8CBF] hover:text-[#0B8CBF]/80 underline">$1</a>');
        
        result.push(
          <p 
            key={`paragraph-${index}`} 
            className="text-justify text-muted-foreground mb-4"
            dangerouslySetInnerHTML={{ __html: formattedText }}
          />
        );
        return;
      }

      // Regular paragraphs
      if (paragraph.trim().length > 0) {
        result.push(
          <p key={`paragraph-${index}`} className="text-justify text-muted-foreground mb-4">
            {formatText(paragraph)}
          </p>
        );
      }
    });

    // If we ended while still in a list, add the final list
    if (inList && listItems.length > 0) {
      result.push(
        <ul key="final-list" className="my-4 list-disc">
          {listItems}
        </ul>
      );
    }

    return result;
  };

  return (
    <div className="container py-16 md:py-24">
      <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="inline-block rounded-lg bg-[#0B8CBF]/10 px-3 py-1 text-sm text-[#0B8CBF]">
          {article.sport}
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {article.title}
        </h1>
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
        
        {/* Author and adaptation information moved here, below the article content */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col items-center gap-4 text-center">
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
        </div>
      </div>
    </div>
  );
}