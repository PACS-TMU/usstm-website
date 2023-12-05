'use client'
import { useState, useRef, useEffect } from "react"
import DownArrow from "../general/down-arrow"
import UpArrow from "../general/up-arrow"
import autoAnimate from "@formkit/auto-animate";

export default function FAQItem(item) {
    const [ isVisible, setVisible ] = useState(false);
    const parent = useRef(null);

    useEffect(() => { 
        parent.current && autoAnimate(parent.current);
    }, [parent]);

    const toggle = () => {
        setVisible(!isVisible);
    }

    return (
        <div className="faq py-2" ref={parent} onClick={toggle}>
            <div className={`question flex justify-between py-2 ${isVisible ? "bg-highlight-blue rounded-sm" : "bg-background"}`}>
                <p className="text-xl mx-2 lg:text-2xl">{item.props.question}</p>
                <button className="mx-2">
                    {isVisible ? <UpArrow /> : <DownArrow />}
                </button>
            </div>
            {isVisible && <div className="answer mx-4 py-2 text-foreground lg:text-lg" dangerouslySetInnerHTML={ {__html: item.props.answer} } />}
            <hr />
       </div>
    )
}