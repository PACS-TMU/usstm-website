import DownArrow from "../general/down-arrow";

const data = {
  title: "FAQs",
  content: [
    {
      question: "What is Netflix?",
      answer:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.\n\nYou can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
    },
    {
      question: "How much does Netflix cost?",
      answer:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 199 to ₹ 799 a month. No extra costs, no contracts.",
    },
    {
      question: "Where can I watch?",
      answer:
        "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.\n\nYou can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    },
    {
      question: "How do I cancel?",
      answer:
        "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
      question: "What can I watch on Netflix?",
      answer:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      question: "Is Netflix good for kids?",
      answer:
        "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.\n\nKids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
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
    <section id="FAQ" className="main space-y-2 w-full md:w-3/4 py-10">
      <p className="text-center">{data.title}</p>
      <h1 className="text-5xl text-highlight-dark text-center">
        Frequently Asked Questions
      </h1>
      <p className="text-center pb-4">Have Questions? We&apos;re here to help.</p>
      <search></search>
      {faq}
    </section>
  );
}
