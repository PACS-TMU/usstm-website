'use client'
import Header from "@/app/_components/general/header";
import InvalidPage from '../_components/general/invalidpage';

export default function Finances() {
    
    return (
        <section>
            <Header title={`Finances`} />
            <div className="main">
                <InvalidPage id={5} />
            </div>
        </section>
    )
}