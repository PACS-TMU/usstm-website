import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface CTAButton {
  label: string;
  href: string;
  style?: 'default' | 'primary' | 'secondary' | 'outline';
}

interface CTABlockProps {
  heading: string;
  description?: string;
  buttons: CTAButton[];
  alignment?: 'left' | 'center' | 'right';
  backgroundColor?: 'none' | 'background' | 'highlight' | 'highlight-blue' | 'highlight-dark';
}

export function CTABlock({
  heading,
  description,
  buttons,
  alignment = 'center',
  backgroundColor = 'none',
}: CTABlockProps) {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  const bgColorClasses = {
    none: '',
    background: 'bg-usstm-background',
    highlight: 'bg-highlight text-white',
    'highlight-blue': 'bg-highlight-blue',
    'highlight-dark': 'bg-highlight-dark text-white',
  };

  const buttonVariants: Record<string, 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'> = {
    default: 'default',
    primary: 'default',
    secondary: 'secondary',
    outline: 'outline',
  };

  return (
    <section className={`py-12 ${bgColorClasses[backgroundColor]}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col gap-6 ${alignmentClasses[alignment]}`}>
          <h2 className="text-4xl lg:text-5xl font-bold">
            {heading}
          </h2>

          {description && (
            <p className="text-lg md:text-xl max-w-2xl">
              {description}
            </p>
          )}

          <div className="flex flex-wrap gap-4 justify-center">
            {buttons.map((button, index) => (
              <Button
                key={index}
                asChild
                variant={buttonVariants[button.style || 'default']}
                size="lg"
              >
                <Link href={button.href}>
                  {button.label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
