'use client'
import { useState, useRef, useEffect } from "react";
import Arrow from "@/app/_components/general/arrow";
import CandidateSection from "./candidate-section";
import autoAnimate from "@formkit/auto-animate";

export default function Collapsible(props) {
    const [isVisible, setVisible] = useState(false);
    const parent = useRef(null);

    useEffect(() => {
        parent.current && autoAnimate(parent.current);
    }, [parent]);

    const [candidates, setCandidtes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data/elections2025/candidates.json`);
                const data = await response.json();
                setCandidtes(data);
            } catch (error) {
                console.error('Error fetching Elections data:', error);
            }
        };

        fetchData();
    }, []);

    const toggle = () => {
        setVisible(!isVisible);
    }

    let allExecutives = [];
    let allDirectors = [];

    if (props.sectionName === "Executives") {
        // const presidents = candidates.filter(candidate => candidate.position === 'President' || candidate.position === 'Co-President');
        // const ops = candidates.filter(candidate => candidate.position === 'Vice President Operations');
        // const finance = candidates.filter(candidate => candidate.position === 'Vice President Finance');
        const communications = candidates.filter(candidate => candidate.position === 'Vice President Communications');
        // const studentlife = candidates.filter(candidate => candidate.position === 'Vice President Student Life');
        // const academics = candidates.filter(candidate => candidate.position === 'Vice President Academics');
        // const external = candidates.filter(candidate => candidate.position === 'Vice President External');
        // const equity = candidates.filter(candidate => candidate.position === 'Vice President Equity');
        allExecutives = [communications];
    }
    else if (props.sectionName === "Directors") {
        const bio = candidates.filter(candidate => candidate.position === 'Biology Director');
        const biomed = candidates.filter(candidate => candidate.position === 'Biomedical Science Director');
        const cs = candidates.filter(candidate => candidate.position === 'Computer Science Director');
        const chem = candidates.filter(candidate => candidate.position === 'Chemistry Director');
        // const math = candidates.filter(candidate => candidate.position === 'Math and Its Applications Director');
        allDirectors = [bio, biomed, cs, chem];
    }
    else {
        console.error('Invalid role:', props.sectionName);
    }

    return (
        <div className="py-2" ref={parent}>
            <button className="faq w-full py-2 sticky" onClick={toggle}>
                <div className={`question text-left flex justify-between items-center py-2 ${isVisible ? "bg-highlight-blue rounded-sm" : "bg-background"}`}>
                    <p className="text-xl mx-2 lg:text-2xl xl:text-3xl font-semibold">{props.sectionName}</p>
                    <div className="mx-2">
                        <Arrow direction={isVisible && "up"} />
                    </div>
                </div>
            </button>
            {isVisible &&
                <div className="answer text-left mx-4 py-2 text-foreground lg:text-lg">
                    {props.sectionName === "Executives" ?
                        <CandidateSection
                            role="Executives"
                            candidates={allExecutives}
                        /> :
                        <CandidateSection
                            role="Directors"
                            candidates={allDirectors}
                        />
                    }
                </div>
            }
            <hr />
        </div>

    )
}