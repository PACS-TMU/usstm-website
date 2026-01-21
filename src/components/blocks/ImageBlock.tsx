import React from 'react';
import Image from 'next/image';
import type { Media } from '@/payload-types';

interface ImageBlockProps {
  image: Media;
  alt: string;
  caption?: string;
  size?: 'small' | 'medium' | 'large' | 'full';
  alignment?: 'left' | 'center' | 'right';
}

export function ImageBlock({
  image,
  alt,
  caption,
  size = 'medium',
  alignment = 'center',
}: ImageBlockProps) {
  const sizeClasses = {
    small: 'max-w-md',
    medium: 'max-w-2xl',
    large: 'max-w-4xl',
    full: 'max-w-full',
  };

  const alignmentClasses = {
    left: 'mr-auto',
    center: 'mx-auto',
    right: 'ml-auto',
  };

  const imageUrl = typeof image === 'object' && image?.url ? image.url : '';

  if (!imageUrl) return null;

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`${sizeClasses[size]} ${alignmentClasses[alignment]}`}>
          <div className="relative w-full aspect-video">
            <Image
              src={imageUrl}
              alt={alt}
              fill
              className="object-contain rounded-lg"
            />
          </div>
          {caption && (
            <p className="mt-4 text-center text-sm text-muted-foreground">{caption}</p>
          )}
        </div>
      </div>
    </section>
  );
}
