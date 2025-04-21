import { articles } from "@/lib/articles";
import { ArticleCard } from "./ArticleCard";
import { useAnimation } from "./animation-provider";

export function ArticlesSection() {
  const { FadeIn, SlideIn } = useAnimation();

  return (
    <section className="py-16 md:py-24 bg-[#F8F9FA]">
      <div className="container px-4 md:px-6">
        <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-[#5E308C]/10 px-3 py-1 text-sm text-[#5E308C]">
            Artículos Deportivos
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Conocimiento y Experiencia
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Descubre artículos especializados sobre entrenamiento deportivo, técnicas y metodologías.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
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
    </section>
  );
} 