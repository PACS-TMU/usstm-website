import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { serializeLexical } from '@/lib/serializeLexical';

interface TextSectionBlockProps {
  heading?: string;
  subheading?: string;
  content: any;
  backgroundColor?: 'none' | 'background' | 'highlight' | 'highlight-blue' | 'highlight-dark';
  alignment?: 'left' | 'center' | 'right' | 'justify';
}

export async function TextSectionBlock({
  heading,
  subheading,
  content,
  backgroundColor = 'none',
  alignment = 'left',
}: TextSectionBlockProps) {
  const html = await serializeLexical(content);

  const bgColorClasses = {
    none: '',
    background: 'bg-usstm-background',
    highlight: 'bg-highlight',
    'highlight-blue': 'bg-highlight-blue',
    'highlight-dark': 'bg-highlight-dark text-white',
  };

  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
  };

  return (
    <section className={`py-12 ${bgColorClasses[backgroundColor]}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {heading || subheading ? (
          <Card>
            <CardHeader>
              {heading && <CardTitle className="text-4xl lg:text-5xl">{heading}</CardTitle>}
              {subheading && <CardDescription className="text-lg">{subheading}</CardDescription>}
            </CardHeader>
            <CardContent>
              <div
                className={`prose prose-lg max-w-none ${alignmentClasses[alignment]}`}
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </CardContent>
          </Card>
        ) : (
          <div
            className={`prose prose-lg max-w-none ${alignmentClasses[alignment]}`}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        )}
      </div>
    </section>
  );
}
