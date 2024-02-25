"use client";
import Header from "@/app/_components/general/header";
import InvalidPage from "@/app/_components/general/invalid-page";

export default function Events() {
    return (
        <section>
            <Header title={`Events`} />
            <div className="main">
                <InvalidPage id={3} />
            </div>
        </section>
    )
}