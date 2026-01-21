import React from 'react';
import { serializeLexical } from '@/lib/serializeLexical';

interface AboutUsBlockProps {
  content: any;
  heading?: string;
}

export async function AboutUsBlock({ content, heading = 'About Us' }: AboutUsBlockProps) {
  const html = await serializeLexical(content);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Heading */}
          <div className="text-center lg:text-left">
            <h2 className="text-6xl lg:text-8xl font-bold text-[#0C2340] font-serif">{heading}</h2>
          </div>

          {/* Right side - Content */}
          <div className="flex items-center">
            <div
              className="prose prose-base max-w-none text-[#1a1a1a] prose-p:text-justify prose-p:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
