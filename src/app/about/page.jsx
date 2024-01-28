'use client'
import Header from "@/app/_components/general/header";
import InvalidPage from '../_components/general/invalidpage';

export default function About() {
    
    return (
        <section>
            <Header title={`About`} />
            <div className="main">
                <InvalidPage id={2} />
            </div>
        </section>
    )
}