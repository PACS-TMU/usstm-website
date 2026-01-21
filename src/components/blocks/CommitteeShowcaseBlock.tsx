'use client';

import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import type { Committee, Media } from '@/payload-types';

interface CommitteeShowcaseBlockProps {
  heading?: string;
  committees: Committee[];
  displayStyle?: 'grid' | 'carousel';
}

export function CommitteeShowcaseBlock({
  heading,
  committees,
  displayStyle = 'grid',
}: CommitteeShowcaseBlockProps) {
  if (displayStyle === 'carousel') {
    return (
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {heading && (
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 text-highlight-dark">
              {heading}
            </h2>
          )}

          <Carousel className="w-full">
            <CarouselContent>
              {committees.map((committee) => {
                const images = Array.isArray(committee.images) ? committee.images : [];
                const firstImage = images[0] as Media | undefined;
                const imageUrl = firstImage?.url || null;

                return (
                  <CarouselItem key={committee.id} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full">
                      {imageUrl && (
                        <div className="relative w-full aspect-video">
                          <Image
                            src={imageUrl}
                            alt={committee.name}
                            fill
                            className="object-cover rounded-t-lg"
                          />
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle>{committee.name}</CardTitle>
                      </CardHeader>
                      {committee.description && (
                        <CardContent>
                          <div
                            className="prose prose-sm"
                            dangerouslySetInnerHTML={{
                              __html: typeof committee.description === 'string' 
                                ? committee.description 
                                : JSON.stringify(committee.description),
                            }}
                          />
                        </CardContent>
                      )}
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
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
          {committees.map((committee) => {
            const images = Array.isArray(committee.images) ? committee.images : [];
            const firstImage = images[0] as Media | undefined;
            const imageUrl = firstImage?.url || null;

            return (
              <Card key={committee.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                {imageUrl && (
                  <div className="relative w-full aspect-video">
                    <Image
                      src={imageUrl}
                      alt={committee.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{committee.name}</CardTitle>
                </CardHeader>
                {committee.description && (
                  <CardContent>
                    <div
                      className="prose prose-sm"
                      dangerouslySetInnerHTML={{
                        __html: typeof committee.description === 'string' 
                          ? committee.description 
                          : JSON.stringify(committee.description),
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
