"use client";
import Header from "@/app/_components/general/header";
import InvalidPage from "@/app/_components/general/invalid-page";

export default function Academics() {
    return (
        <section>
            <Header title={`Academics`} />
            <div className="main">
                <InvalidPage id={4} />
            </div>
        </section>
    )
}