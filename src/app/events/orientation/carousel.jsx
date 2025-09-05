import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import "./carousel.css";
import { getImageUrl } from "@/lib/supabase";

export default function Carousel({ imgList }) {
    return (
        <Swiper
            loop={true}
            slidesPerGroupSkip={0}
            pagination={{
                dynamicBullets: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="w-full h-auto text-center text-lg flex justify-center items-center"
        >
            {imgList.map((img, index) => (
                <SwiperSlide key={index}>
                    <div className="relative lg:w-[55%] w-full h-[80vh] mx-auto flex justify-center items-center">
                        <Image
                            overrideSrc={getImageUrl(`events/orientation/${img.path}`)}
                            alt={img.alt}
                            width={1000}
                            height={1000}
                            className='w-full h-full object-contain lg:object-cover'
                            priority={true}
                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
