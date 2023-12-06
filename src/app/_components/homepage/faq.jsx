import FAQItem from './faq-item';

export const faqData = [
  {
    id: 1,
    question: "What is USSTM?",
    answer:
      "The Undergraduate Science Society of Toronto Metropolitan (USSTM) represents 4000+ science students and 25+ student groups in order to provide services, advocacy and an overall enhanced university experience.",
  },
  {
    id: 2,
    question: "How can I stay updated on upcoming events?",
    answer:
      "Stay informed about our events by checking our <a href='/events/calendar' target='_blank'>Events Calendar</a> regularly and following us on <a href='/contact' target='_blank'>social media</a>.",
  },
  {
    id: 3,
    question: "What types of events does USSTM host?",
    answer:
      "USSTM hosts various <a href='/events/annual' target='_blank'>Annual Events</a> which support students academically and socially, such as <i>Formals</i>, <i>Networking Night</i> and <i>Week of Welcome</i>. We also host smaller scale events. To see all out past events, you could check out our <a href='/events/yearbook-gallery' target='_blank'>Yearbook/Gallery</a>",
  },
  {
    id: 4,
    question: "Can I provide academic feedback about courses and professors?",
    answer:
      "Absolutely! USSTM gathers feedback about all science courses, all feeback is kept <b>anonymous</b> from professors. To voice your concerns, visit out <a href='/academics/feedback' target='blank'>Academic Feedback</a> page.",
  },
  {
    id: 5,
    question: "How is USSTM governed?",
    answer:
      "USSTM is governed by an elected body of students known as the Board of Directors (BoD). We host bi-weekly <a href='/about/meetings' target='_blank'>meetings</a> which are open to the membership and have a consitution that must be followed. Learn more about our <a href='/about/governance' target='_blank'>governace</a>.",
  },
  {
    id: 6,
    question: "How can I get involved?",
    answer:
      "USSTM is made up of 15+ <a href='/about/your-team' target='_blank'>committees</a> and each has roughly 5-10 members. If you're interested in leadership roles or committees, <a href='/contact' target='_blank'>contact us</a>. If you are intrested in joining the Board of Directors, check out our <a href='/community/elections' target='_blank'>Elections</a> page. We welcome members who are eager to contribute!",
  },
  {
    id: 7,
    question: "How is USSTM funded?",
    answer:
      "USSTM is mainly funded through membership fees. Each Faculty of Science student pays a student levy as a part of their tutition. We use our student levy to host all of the events and services we host. To see where your money is going, visit our <a href='/finances/budget' target='_blank'>budget</a>.",
  },
  {
    id: 8,
    question: "Can I apply for funding?",
    answer:
      "Yes, we encourage members to apply for funding. USSTM funds students to go to <a href='/events/conference-competitions' target='_blank'>Conferences & Competitions</a>. We also fund students throught our <a href='/finanes/startup-certified' target='_blank'>Startup Certified</a> service, hosted by the <a href='https://dmz.torontomu.ca/' target='_blank'>DMZ</a> which is funding for student startups.",
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
