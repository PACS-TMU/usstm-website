// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Other imports
import Image from "next/image";
import "./carousel.css";
import { useMemo } from "react";
import { getImageUrl } from '@/lib/supabase';

export default function Carousel({ imgs, name }) {
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
			{imgs.length ? (
				imgs.map((img) => {
					return (
						<SwiperSlide key={img}>
							<Image
								overrideSrc={getImageUrl(`about/your-team/carousel-images/${img}`)}
								alt={name}
								width={2250}
								height={1500}
								loading="lazy"
								className="w-full h-auto lg:w-auto lg:h-full max-h-[100vh] block mx-auto object-cover"
							/>
						</SwiperSlide>
					);
				})
			) : (
				<SwiperSlide>
					<Image
						overrideSrc={getImageUrl('about/your-team/carousel-images/Image Not Found.jpg')}
						alt={name}
						width={2250}
						height={1500}
						loading="lazy"
						className="w-full h-auto lg:w-auto lg:h-full max-h-[100vh] block mx-auto object-cover"
					/>
				</SwiperSlide>
			)}
		</Swiper>
	);
}
