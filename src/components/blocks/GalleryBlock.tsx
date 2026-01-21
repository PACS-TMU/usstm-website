'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import type { Media } from '@/payload-types';

interface GalleryBlockProps {
  heading?: string;
  images: Media[];
  layout?: 'grid' | 'masonry' | 'carousel';
  columns?: '2' | '3' | '4';
}

export function GalleryBlock({
  heading,
  images,
  layout = 'grid',
  columns = '3',
}: GalleryBlockProps) {
  const [selectedImage, setSelectedImage] = useState<Media | null>(null);

  const gridClasses = {
    '2': 'grid-cols-1 md:grid-cols-2',
    '3': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    '4': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  if (layout === 'carousel') {
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
              {images.map((image) => (
                <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="relative w-full aspect-square cursor-pointer group">
                        <Image
                          src={image.url || ''}
                          alt={image.alt || ''}
                          fill
                          className="object-cover rounded-lg group-hover:opacity-90 transition-opacity"
                        />
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <div className="relative w-full aspect-video">
                        <Image
                          src={image.url || ''}
                          alt={image.alt || ''}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    );
  }

  // Grid or masonry display
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {heading && (
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 text-highlight-dark">
            {heading}
          </h2>
        )}

        <div className={`grid ${gridClasses[columns]} gap-4`}>
          {images.map((image) => (
            <Dialog key={image.id}>
              <DialogTrigger asChild>
                <button className="relative w-full aspect-square cursor-pointer group overflow-hidden rounded-lg">
                  <Image
                    src={image.url || ''}
                    alt={image.alt || ''}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <div className="relative w-full aspect-video">
                  <Image
                    src={image.url || ''}
                    alt={image.alt || ''}
                    fill
                    className="object-contain"
                  />
                </div>
                {image.alt && (
                  <p className="text-center text-sm text-muted-foreground mt-4">{image.alt}</p>
                )}
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
