import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

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
    <Card className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm font-semibold text-primary">{sport}</span>
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600">
          {summary}
        </CardDescription>
      </CardContent>
      <CardFooter className="border-t pt-4 flex flex-col gap-4">
        <div className="flex items-center justify-between w-full">
          <p className="text-sm text-gray-500 italic">
            Por: {author}
          </p>
   
        </div>
        <Button asChild className="w-full">
          <Link href={`/articulos/${id}`}>
            Leer artículo completo
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
} 