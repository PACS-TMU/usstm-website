import FAQItem from './faq-item';
import { promises as fs } from 'fs';

export default async function FAQ() {
  const file = await fs.readFile(process.cwd() + "/public/data/faq-db.json", "utf-8");
  let faqItems = JSON.parse(file).map((faqItem) => {
    return ((faqItem.id <= 8) && <FAQItem key={faqItem.id} props={faqItem} />)
  });

  return (
    <section id="FAQ" className="main space-y-2 w-full md:w-3/4">
      <p className="text-center">FAQs</p>
      <h1 className="text-4xl lg:text-5xl text-highlight-dark text-center">
        Frequently Asked Questions
      </h1>
      <p className="text-center pb-4">Have Questions? We&apos;re here to help.</p>
      <search></search>
      {faqItems}
    </section>
  );
}
