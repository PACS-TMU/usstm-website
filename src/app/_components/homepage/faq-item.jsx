'use client'
import { useState } from "react"
import DownArrow from "../general/down-arrow"

export default function FAQItem(item) {
    const [ isVisible, setVisible ] = useState(false);
    return (
        <div className="faq py-2" onClick={() => {setVisible(!isVisible)}}>
            <div className="question flex justify-between py-2">
                <p className="text-xl">{item.props.question}</p>
                <button>
                    <DownArrow />
                </button>
            </div>
            {isVisible && <p className="answer">{item.props.answer}</p>}
            <hr />
       </div>
    )
}