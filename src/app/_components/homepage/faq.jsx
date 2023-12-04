import DownArrow from "../general/down-arrow";

const data = {
  title: "FAQs",
  content: [
    {
      question: "What is USSTM?",
      answer:
        "USSTM is a dynamic community of science enthusiasts, students, and professionals dedicated to fostering a love for science, innovation, and collaboration.",
    },
    {
      question: "How can I stay updated on upcoming events?",
      answer:
        "Stay informed about our events by checking our [Calendar] regularly and following us on [social media platforms].",
    },
    {
      question: "Can I propose an event or activity idea?",
      answer:
        "Absolutely! We encourage our members to share their event ideas. Contact us through [Emails] or [Other Socials] with your suggestions.",
    },
    {
      question: "How can I provide feedback on events?",
      answer:
        "We value your feedback! Use our [Events Feedback] form to share your thoughts and suggestions regarding our events.",
    },
    {
      question: "How is USSTM governed?",
      answer:
        "USSTM is governed by an elected body of students known as the Board of Directors (BoD). Learn more about our governance structure [Link to Governance Page].",
    },
    {
      question: "How can I get involved in leadership roles?",
      answer:
        "If you're interested in leadership roles or committees, reach out to us through [Emails] or [Other Socials]. We welcome members who are eager to contribute!",
    },
    {
      question: "How is USSTM funded?",
      answer:
        "USSTM is funded through a combination of membership fees, sponsorships, and fundraising initiatives. Check our [Finances] page for more details.",
    },
    {
      question: "Can I apply for project funding?",
      answer:
        "Yes, we encourage members to apply for project funding. Visit our [Project Funding] page for information on the application process.",
    },
  ],
};

const faq = data.content.map((item) => {
  return (
    <div key={item.question} className="faq py-2">
      <div className="question flex justify-between py-2">
        <p className="text-xl">{item.question}</p>
        <button>
            <DownArrow />
        </button>
      </div>
      <p className="answer hidden">{item.answer}</p>
      <hr />
    </div>
  )
})

export default function FAQ() {
  return (
    <section id="FAQ" className="main space-y-2 w-full md:w-3/4">
      <p className="text-center">{data.title}</p>
      <h1 className="text-4xl lg:text-5xl text-highlight-dark text-center">
        Frequently Asked Questions
      </h1>
      <p className="text-center pb-4">Have Questions? We&apos;re here to help.</p>
      <search></search>
      {faq}
    </section>
  );
}
