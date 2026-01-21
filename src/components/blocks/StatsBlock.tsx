import React from 'react';
import Image from 'next/image';
import type { Media } from '@/payload-types';

interface Stat {
  label: string;
  value: string;
  suffix?: string;
  icon?: Media | null;
}

interface StatsBlockProps {
  stats: Stat[];
  layout?: 'horizontal' | 'vertical' | 'grid';
}

export function StatsBlock({
  stats,
  layout = 'horizontal',
}: StatsBlockProps) {
  const layoutClasses = {
    horizontal: 'flex flex-row flex-wrap justify-center items-center gap-12',
    vertical: 'flex flex-col items-center gap-8',
    grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8',
  };

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={layoutClasses[layout]}>
          {stats.map((stat, index) => {
            const iconUrl = typeof stat.icon === 'object' && stat.icon?.url ? stat.icon.url : null;

            return (
              <div
                key={index}
                className="flex flex-col items-center gap-4 text-center"
              >
                {iconUrl && (
                  <div className="relative w-16 h-16 md:w-20 md:h-20">
                    <Image
                      src={iconUrl}
                      alt={stat.label}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
                <div>
                  <p className="text-4xl md:text-5xl font-bold text-highlight-dark">
                    {stat.value}
                    {stat.suffix && <sup>{stat.suffix}</sup>}
                  </p>
                  <p className="text-lg md:text-xl text-muted-foreground mt-2">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
