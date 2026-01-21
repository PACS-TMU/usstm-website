import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { People, Media } from '@/payload-types';

interface TeamGridBlockProps {
  heading?: string;
  people: People[];
  columns?: '2' | '3' | '4';
  showContactInfo?: boolean;
}

export function TeamGridBlock({
  heading,
  people,
  columns = '3',
  showContactInfo = true,
}: TeamGridBlockProps) {
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
          {people.map((person) => {
            const photo = person.photo as Media | null;
            const photoUrl = photo?.url || null;

            return (
              <Card key={person.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  {photoUrl && (
                    <div className="relative w-full aspect-square">
                      <Image
                        src={photoUrl}
                        alt={person.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-2">{person.name}</CardTitle>
                  <CardDescription className="mb-4">{person.position}</CardDescription>
                  {showContactInfo && person.email && (
                    <a
                      href={`mailto:${person.email}`}
                      className="text-highlight hover:text-highlight-dark text-sm hover:underline"
                    >
                      {person.email}
                    </a>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
