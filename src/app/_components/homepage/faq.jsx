import FAQItem from './faq-item';

export const faqData = [
  {
    id: 1,
    question: "What is USSTM?",
    answer:
      "USSTM is a dynamic community of science enthusiasts, students, and professionals dedicated to fostering a love for science, innovation, and collaboration.",
  },
  {
    id: 2,
    question: "How can I stay updated on upcoming events?",
    answer:
      "Stay informed about our events by checking our [Calendar] regularly and following us on [social media platforms].",
  },
  {
    id: 3,
    question: "Can I propose an event or activity idea?",
    answer:
      "Absolutely! We encourage our members to share their event ideas. Contact us through [Emails] or [Other Socials] with your suggestions.",
  },
  {
    id: 4,
    question: "How can I provide feedback on events?",
    answer:
      "We value your feedback! Use our [Events Feedback] form to share your thoughts and suggestions regarding our events.",
  },
  {
    id: 5,
    question: "How is USSTM governed?",
    answer:
      "USSTM is governed by an elected body of students known as the Board of Directors (BoD). Learn more about our governance structure [Link to Governance Page].",
  },
  {
    id: 6,
    question: "How can I get involved in leadership roles?",
    answer:
      "If you're interested in leadership roles or committees, reach out to us through [Emails] or [Other Socials]. We welcome members who are eager to contribute!",
  },
  {
    id: 7,
    question: "How is USSTM funded?",
    answer:
      "USSTM is funded through a combination of membership fees, sponsorships, and fundraising initiatives. Check our [Finances] page for more details.",
  },
  {
    id: 8,
    question: "Can I apply for project funding?",
    answer:
      "Yes, we encourage members to apply for project funding. Visit our [Project Funding] page for information on the application process.",
  },
]

export default function FAQ() {
  const faqItems = faqData.map((faqItem) => {
    return (
      <FAQItem key={faqItem.id} props={faqItem} />
    )
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
