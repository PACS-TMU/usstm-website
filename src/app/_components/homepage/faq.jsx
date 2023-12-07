"use client";
import FAQItem from './faq-item';
import { useEffect, useState } from 'react';

export default function FAQ() {
  const [faqItems, setFaqItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/faq-db.json');
        const data = await response.json();
        setFaqItems(data.slice(0, 8));
      } catch (error) {
        console.error('Error fetching FAQ data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="FAQ" className="main space-y-2 w-full md:w-3/4">
      <p className="text-center">FAQs</p>
      <h1 className="text-4xl lg:text-5xl text-highlight-dark text-center">
        Frequently Asked Questions
      </h1>
      <p className="text-center pb-4">Have Questions? We&apos;re here to help.</p>
      <search></search>
      {faqItems.map((faqItem) => (
        <FAQItem key={faqItem.id} props={faqItem} />
      ))}
    </section>
  );
}
