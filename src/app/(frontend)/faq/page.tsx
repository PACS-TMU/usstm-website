import { getPayload } from 'payload';
import config from '@/payload.config';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const metadata = {
  title: 'FAQ - USSTM',
  description: 'Frequently Asked Questions about USSTM',
};

export default async function FAQPage() {
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });

  // Fetch all published FAQs
  const { docs: faqs } = await payload.find({
    collection: 'faqs',
    where: {
      isPublished: { equals: true },
    },
    limit: 100,
    sort: 'order',
  });

  // Group FAQs by category
  const groupedFaqs = faqs.reduce(
    (acc, faq) => {
      const category = faq.category || 'General';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(faq);
      return acc;
    },
    {} as Record<string, typeof faqs>
  );

  return (
    <div className="max-w-5xl mx-auto px-5 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl lg:text-6xl font-bold text-highlight-dark">Frequently Asked Questions</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Find answers to common questions about USSTM, our services, events, and more.
        </p>
      </div>

      {/* FAQs by Category */}
      <div className="space-y-8">
        {Object.entries(groupedFaqs).map(([category, categoryFaqs]) => (
          <div key={category} className="space-y-4">
            <h2 className="text-2xl lg:text-3xl font-semibold text-highlight-dark border-b-2 border-highlight-blue pb-2">
              {category}
            </h2>
            <Accordion type="single" collapsible className="space-y-2">
              {categoryFaqs.map((faq) => (
                <AccordionItem key={faq.id} value={`faq-${faq.id}`} className="border rounded-lg px-4 bg-card">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div
                      className="prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={{
                        __html: typeof faq.answer === 'string' ? faq.answer : JSON.stringify(faq.answer, null, 2),
                      }}
                    />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>

      {/* No FAQs Message */}
      {faqs.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">No FAQs available at the moment.</p>
        </div>
      )}
    </div>
  );
}
