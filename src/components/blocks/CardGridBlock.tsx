import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Media } from '@/payload-types';

interface CardItem {
  title: string;
  description?: string;
  image?: Media | null;
  link?: string;
}

interface CardGridBlockProps {
  heading?: string;
  cards: CardItem[];
  columns?: '2' | '3' | '4';
}

export function CardGridBlock({
  heading,
  cards,
  columns = '3',
}: CardGridBlockProps) {
  const gridClasses = {
    '2': 'grid-cols-1 md:grid-cols-2',
    '3': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    '4': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {heading && (
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 text-highlight-dark">
            {heading}
          </h2>
        )}

        <div className={`grid ${gridClasses[columns]} gap-6`}>
          {cards.map((card, index) => {
            const imageUrl = typeof card.image === 'object' && card.image?.url ? card.image.url : null;
            
            const CardWrapper = card.link ? Link : 'div';
            const wrapperProps = card.link ? { href: card.link } : {};

            return (
              <CardWrapper key={index} {...wrapperProps}>
                <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  {imageUrl && (
                    <div className="relative w-full aspect-video">
                      <Image
                        src={imageUrl}
                        alt={card.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{card.title}</CardTitle>
                  </CardHeader>
                  {card.description && (
                    <CardContent>
                      <CardDescription>{card.description}</CardDescription>
                    </CardContent>
                  )}
                </Card>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
