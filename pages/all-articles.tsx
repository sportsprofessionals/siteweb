import { articles } from "@/lib/articles";
import { ArticleCard } from "@/components/ArticleCard";

export default function AllArticles() {
  return (
    <section className="py-16 md:py-24 bg-[#F8F9FA]">
      <div className="container px-4 md:px-6">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Todos los Artículos
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              id={article.id}
              title={article.title}
              summary={article.summary}
              author={article.author}
              imageUrl={article.imageUrl}
              sport={article.sport}
            />
          ))}
        </div>
      </div>
    </section>
  );
}