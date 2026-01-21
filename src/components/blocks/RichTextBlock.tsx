import React from 'react';
import { serializeLexical } from '@/lib/serializeLexical';

interface RichTextBlockProps {
  content: any;
}

export async function RichTextBlock({ content }: RichTextBlockProps) {
  const html = await serializeLexical(content);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </section>
  );
}
