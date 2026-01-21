import React from 'react';

interface EmbedBlockProps {
  embedCode: string;
  aspectRatio?: '16/9' | '4/3' | '1/1' | 'auto';
}

export function EmbedBlock({
  embedCode,
  aspectRatio = '16/9',
}: EmbedBlockProps) {
  const aspectRatioClasses = {
    '16/9': 'aspect-video',
    '4/3': 'aspect-[4/3]',
    '1/1': 'aspect-square',
    'auto': '',
  };

  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`w-full ${aspectRatioClasses[aspectRatio]}`}>
          <div
            className="w-full h-full"
            dangerouslySetInnerHTML={{ __html: embedCode }}
          />
        </div>
      </div>
    </section>
  );
}
