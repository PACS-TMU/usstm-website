"use client";
import Header from "@/app/_components/general/header";
import InvalidPage from "@/app/_components/general/invalid-page";

export default function Community() {
    return (
        <section>
            <Header title={`Community`} />
            <div className="main">
                <InvalidPage id={6} />
            </div>
        </section>
    )
}