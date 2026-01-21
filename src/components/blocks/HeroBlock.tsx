import React from 'react';
import Image from 'next/image';
import type { Media } from '@/payload-types';

interface HeroBlockProps {
  title: string;
  subtitle?: string;
  motto?: string;
  backgroundImage?: Media | null;
  overlayOpacity?: number;
  textAlignment?: 'left' | 'center' | 'right';
  stats?: Array<{
    label: string;
    value: string;
    suffix?: string;
    icon?: Media | null;
  }>;
}

export function HeroBlock({
  title,
  subtitle,
  motto,
  backgroundImage,
  overlayOpacity = 0.5,
  textAlignment = 'center',
  stats,
}: HeroBlockProps) {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  const bgImageUrl = typeof backgroundImage === 'object' && backgroundImage?.url ? backgroundImage.url : null;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      {bgImageUrl && (
        <>
          <div className="absolute inset-0 z-0">
            <Image src={bgImageUrl} alt="" fill className="object-cover" priority />
          </div>
          <div className="absolute inset-0 z-10 bg-primary" style={{ opacity: overlayOpacity }} />
        </>
      )}

      {/* Content */}
      <div
        className={`relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 flex flex-col ${alignmentClasses[textAlignment]} gap-6 sm:gap-8`}
      >
        <div className="w-full bg-transparent rounded-lg py-6 sm:py-8 px-4 flex flex-col items-center space-y-3 sm:space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white drop-shadow-lg text-center">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg sm:text-xl md:text-2xl text-white drop-shadow-md max-w-3xl font-bold text-center px-2">
              {subtitle}
            </p>
          )}
          {motto && (
            <p className="text-base sm:text-lg md:text-xl text-white/90 italic drop-shadow-md font-bold text-center px-2">
              {motto}
            </p>
          )}
        </div>

        {/* Stats */}
        {stats && stats.length > 0 && (
          <div className="mt-4 sm:mt-6 w-full bg-white/90 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row divide-y-2 sm:divide-y-0 sm:divide-x-2 sm:divide-white/70">
              {stats.map((stat, index) => {
                const iconUrl = typeof stat.icon === 'object' && stat.icon?.url ? stat.icon.url : null;
                return (
                  <div
                    key={index}
                    className="flex-1 flex flex-col items-center gap-3 sm:gap-4 py-4 sm:py-6 md:py-0 md:px-8 lg:px-12 xl:px-16 first:pt-0 last:pb-0 sm:first:pt-4 sm:last:pb-4 md:first:pt-0 md:last:pb-0"
                  >
                    {iconUrl && (
                      <div
                        className="w-16 h-16 sm:w-20 sm:h-20 bg-primary"
                        style={{
                          maskImage: `url(${iconUrl})`,
                          maskSize: 'contain',
                          maskRepeat: 'no-repeat',
                          maskPosition: 'center',
                          WebkitMaskImage: `url(${iconUrl})`,
                          WebkitMaskSize: 'contain',
                          WebkitMaskRepeat: 'no-repeat',
                          WebkitMaskPosition: 'center',
                        }}
                      />
                    )}
                    <div className="text-center">
                      <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
                        {stat.value}
                        {stat.suffix && <sup className="text-xl sm:text-2xl">{stat.suffix}</sup>}
                      </p>
                      <p className="text-base sm:text-lg md:text-xl text-primary/90 mt-1 sm:mt-2 whitespace-nowrap uppercase tracking-wide">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
