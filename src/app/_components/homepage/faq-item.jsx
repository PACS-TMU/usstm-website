'use client'
import { useState, useRef, useEffect } from "react";
import Arrow from "../general/arrow";
import autoAnimate from "@formkit/auto-animate";
import parse from "html-react-parser";

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
        <button className="faq w-full py-2" onClick={toggle} ref={parent}>
            <div className={`question text-left flex justify-between py-2 ${isVisible ? "bg-highlight-blue rounded-sm" : "bg-background"}`}>
                <p className="text-xl mx-2 lg:text-2xl">{item.props.question}</p>
                <div className="mx-2">
                    <Arrow direction={isVisible && "up"} />
                </div>
            </div>
            {isVisible && 
                <div className="answer text-left mx-4 py-2 text-foreground lg:text-lg">
                    {parse(item.props.answer)}
                </div>
            }
            <hr />
       </button>
    )
}