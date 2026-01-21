import React from 'react';
import { serializeLexical } from '@/lib/serializeLexical';

interface LandAcknowledgementBlockProps {
  heading?: string;
  content: any;
  backgroundColor?: 'none' | 'background' | 'highlight' | 'highlight-blue' | 'highlight-dark';
}

export async function LandAcknowledgementBlock({
  heading = 'Land Acknowledgement',
  content,
  backgroundColor = 'highlight-dark',
}: LandAcknowledgementBlockProps) {
  const html = await serializeLexical(content);

  const bgColorClasses = {
    none: '',
    background: 'bg-usstm-background',
    highlight: 'bg-highlight text-white',
    'highlight-blue': 'bg-highlight-blue',
    'highlight-dark': 'bg-highlight-dark text-white',
  };

  return (
    <section className={`py-12 ${bgColorClasses[backgroundColor]}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {heading && <h2 className="text-4xl lg:text-5xl font-bold text-center text-primary mb-8">{heading}</h2>}

        <div className="prose prose-lg max-w-none text-left" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </section>
  );
}
