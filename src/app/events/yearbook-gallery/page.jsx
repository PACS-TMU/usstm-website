'use client';
import Header from "@/app/_components/general/header";
import Carousel from "./_components/carousel";
import Gallery from "./_components/gallery";

export default function YearbookGallery() {
    return (
        <section>
            <Header title={`Yearbook & Gallery`} />
            
            <div className="">
                <Carousel />
                <Gallery />
            </div>
        </section>
    )
}
