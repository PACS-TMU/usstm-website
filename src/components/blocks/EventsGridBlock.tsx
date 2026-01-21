import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Event, Media } from '@/payload-types';

interface EventsGridBlockProps {
  heading?: string;
  events: Event[];
  displayStyle?: 'grid' | 'list';
  showDate?: boolean;
}

export function EventsGridBlock({
  heading,
  events,
  displayStyle = 'grid',
  showDate = true,
}: EventsGridBlockProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (displayStyle === 'list') {
    return (
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {heading && (
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 text-highlight-dark">
              {heading}
            </h2>
          )}

          <div className="space-y-4">
            {events.map((event) => {
              const images = Array.isArray(event.images) ? event.images : [];
              const firstImage = images[0] as Media | undefined;
              const imageUrl = firstImage?.url || null;

              return (
                <Card key={event.id} className="flex flex-row overflow-hidden hover:shadow-lg transition-shadow">
                  {imageUrl && (
                    <div className="relative w-48 h-48 flex-shrink-0">
                      <Image
                        src={imageUrl}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle>{event.title}</CardTitle>
                        {showDate && event.date && (
                          <Badge variant="secondary">{formatDate(event.date)}</Badge>
                        )}
                      </div>
                    </CardHeader>
                    {event.description && (
                      <CardContent>
                        <div
                          className="prose prose-sm"
                          dangerouslySetInnerHTML={{
                            __html: typeof event.description === 'string' 
                              ? event.description 
                              : JSON.stringify(event.description),
                          }}
                        />
                      </CardContent>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  // Grid display
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {heading && (
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 text-highlight-dark">
            {heading}
          </h2>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => {
            const images = Array.isArray(event.images) ? event.images : [];
            const firstImage = images[0] as Media | undefined;
            const imageUrl = firstImage?.url || null;

            return (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                {imageUrl && (
                  <div className="relative w-full aspect-video">
                    <Image
                      src={imageUrl}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle>{event.title}</CardTitle>
                    {showDate && event.date && (
                      <Badge variant="secondary" className="ml-2">
                        {formatDate(event.date)}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                {event.description && (
                  <CardContent>
                    <div
                      className="prose prose-sm"
                      dangerouslySetInnerHTML={{
                        __html: typeof event.description === 'string' 
                          ? event.description 
                          : JSON.stringify(event.description),
                      }}
                    />
                  </CardContent>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
