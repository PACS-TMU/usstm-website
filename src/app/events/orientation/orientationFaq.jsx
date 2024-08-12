import { faqData } from "./faqData"
import OrientationFAQItem from "./orientationFaqItem"

export default function OrientationFAQ() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            {faqData.map((faq) => (
                <OrientationFAQItem key={faq.id} question={faq.question} answer={faq.answer} />
            ))}
        </div>
    )
}