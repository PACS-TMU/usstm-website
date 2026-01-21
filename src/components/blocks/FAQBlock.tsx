import React from 'react';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { serializeLexical } from '@/lib/serializeLexical';
import type { Faq } from '@/payload-types';

interface FAQBlockProps {
  heading?: string;
  subheading?: string;
  faqs: Faq[];
  displayLimit?: number;
  viewMoreLink?: string;
}

export async function FAQBlock({
  heading = 'Frequently Asked Questions',
  subheading,
  faqs,
  displayLimit,
  viewMoreLink,
}: FAQBlockProps) {
  const displayedFaqs = displayLimit ? faqs.slice(0, displayLimit) : faqs;

  // Serialize all FAQ answers
  const serializedFaqs = await Promise.all(
    displayedFaqs.map(async (faq) => ({
      ...faq,
      answerHtml: await serializeLexical(faq.answer),
    }))
  );

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          {heading && <h2 className="text-4xl lg:text-5xl font-bold text-[#0C2340] mb-4 font-serif">{heading}</h2>}
          {subheading && <p className="text-lg text-muted-foreground">{subheading}</p>}
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {serializedFaqs.map((faq, index) => (
            <AccordionItem key={faq.id || index} value={`item-${index}`} className="border-none">
              <AccordionTrigger className="text-left hover:no-underline text-lg font-serif text-[#0C2340] hover:text-[#1a4d7a] transition-colors cursor-pointer">
                <span className="font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent>
                <div
                  className="prose prose-base max-w-none text-[#1a1a1a] prose-a:text-[#4A8B8B] prose-a:underline prose-a:font-semibold prose-a:transition-colors [&_a:hover]:text-[#0C2340]"
                  dangerouslySetInnerHTML={{
                    __html: faq.answerHtml,
                  }}
                />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {viewMoreLink && (
          <div className="text-center mt-8">
            <Link href={viewMoreLink} className="text-highlight text-lg hover:text-highlight-dark hover:underline">
              View More
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
