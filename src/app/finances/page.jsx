'use client'
import Header from "@/app/_components/general/header";
import InvalidPage from '@/app/_components/general/invalid-page';

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