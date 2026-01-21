'use client';

import React from 'react';
import { Card } from '@/components/ui/card';

interface Pillar {
  title: string;
  description: string;
  textColor?: 'white' | 'dark';
}

interface FourPillarsBlockProps {
  heading?: string;
  pillars: Pillar[];
}

export function FourPillarsBlock({ heading = 'Our Four Pillars', pillars }: FourPillarsBlockProps) {
  return (
    <section className="py-12 bg-highlight-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-6xl lg:text-8xl font-bold text-white">{heading}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.slice(0, 4).map((pillar, index) => (
              <div key={index} className="relative aspect-square" style={{ perspective: '1000px' }}>
                <div
                  className="flip-card group relative w-full h-full transition-transform duration-500 ease-in-out"
                  style={{
                    transformStyle: 'preserve-3d',
                    willChange: 'transform',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'rotateY(180deg)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'rotateY(0deg)';
                  }}
                >
                  {/* Front of card */}
                  <Card
                    className="absolute inset-0 flex items-center justify-center bg-[#4A8B8B] text-white p-6 rounded-lg border-2 border-white/20"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-center drop-shadow-lg">{pillar.title}</h3>
                  </Card>

                  {/* Back of card */}
                  <Card
                    className={`absolute inset-0 flex items-center justify-center p-6 rounded-lg border-2 border-white/20 ${
                      pillar.textColor === 'dark' ? 'bg-white text-[#0C2340]' : 'bg-[#4A8B8B] text-white'
                    }`}
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    <p className="text-sm md:text-base text-center">{pillar.description}</p>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
