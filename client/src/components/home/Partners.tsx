// 'use client'
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react'
// import 'swiper/css';
// import 'swiper/css/autoplay';
// import 'swiper/css/navigation';

// import { Autoplay, Pagination, Navigation } from "swiper/modules";

// const Partners = () => {
//     const logos = [
//         { id: 1, src: '/path/to/logo1.png', alt: 'Company 1' },
//         { id: 2, src: '/path/to/logo2.png', alt: 'Company 2' },
//         { id: 3, src: '/path/to/logo3.png', alt: 'Company 3' },
//         { id: 4, src: '/path/to/logo4.png', alt: 'Company 4' },
//         { id: 5, src: '/path/to/logo5.png', alt: 'Company 5' },
//         { id: 1, src: '/path/to/logo1.png', alt: 'Company 1' },
//         { id: 2, src: '/path/to/logo2.png', alt: 'Company 2' },
//         { id: 3, src: '/path/to/logo3.png', alt: 'Company 3' },
//         { id: 4, src: '/path/to/logo4.png', alt: 'Company 4' },
//         { id: 5, src: '/path/to/logo5.png', alt: 'Company 5' },
//     ];

//     return (
//         <section className="py-8 ">
//             <div className="body-container">
//                 <Swiper
//                     modules={[Autoplay]}
//                     spaceBetween={20}
//                     slidesPerView={3}
//                     loop={true}
//                     speed={3000}
//                     autoplay={{
//                         delay: 0,
//                         disableOnInteraction: false,
//                     }}
//                     breakpoints={{
//                         640: { slidesPerView: 2 },
//                         768: { slidesPerView: 3 },
//                         1024: { slidesPerView: 5 },
//                     }}
//                 >
//                     {logos.map((logo, idx) => (
//                         <SwiperSlide key={idx}>
//                             <img
//                                 // src={logo.src}
//                                 src='http://localhost:3000/useful/logoamazigh.svg'
//                                 alt={logo.alt}
//                                 className="mx-auto h-20 w-auto object-contain"
//                             />
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//             </div>
//         </section>
//     );
// };

// export default Partners;


'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import { Autoplay, FreeMode } from 'swiper';

import { Autoplay, Pagination, Navigation, FreeMode } from "swiper/modules";
import { useTranslations } from 'next-intl';
import Img from '../shared/Img';

const CompanyLogos = () => {
    const logos = [
        { id: 1, src: '/akhawayn.png', alt: 'Company 1' },
        { id: 2, src: '/humansell1.jpg', alt: 'Company 2' },
        { id: 3, src: '/iresLogo.jpg', alt: 'Company 3' },
        { id: 4, src: '/logoamazigh.svg', alt: 'Company 4' },
        { id: 5, src: '/logoPolice.jpg', alt: 'Company 5' },
        { id: 6, src: '/nayfLogo.png', alt: 'Company 1' },
        { id: 7, src: '/niyaba.jpg', alt: 'Company 2' },
        { id: 8, src: '/ocpLogo.jpg', alt: 'Company 3' },
        { id: 9, src: '/police.png', alt: 'Company 4' },
        { id: 10, src: '/prison.jfif', alt: 'Company 5' },
        { id: 11, src: '/uirlogo.png', alt: 'Company 4' },
        { id: 12, src: '/unafriLogo.webp', alt: 'Company 5' },
        { id: 13, src: '/unodcLogo.png', alt: 'Company 5' },
    ];

    const t = useTranslations("usefulLinks");

    return (
        <section className="py-16 body-container">
            <h2 className="mb-24 text-2xl font-bold underline underline-offset-8 decoration-grona text-myBlue">
                {t("title")}
            </h2>
            <div className="my-8">

                <Swiper
                    modules={[Autoplay, FreeMode]}
                    spaceBetween={40}
                    grabCursor={true}
                    freeMode={true}
                    speed={11000}
                    slidesPerView={2} // Default slides per view for smallest screens
                    autoplay={{
                        delay: 0, // No delay, continuous motion
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2 }, // Small screens
                        1024: { slidesPerView: 5 }, // Large screens
                    }}
                >
                    {logos.map((logo) => (
                        <SwiperSlide key={logo.id} className="trusted-by-list">
                            <Img
                                src={logo.src}
                                alt={logo.alt}
                                className="mx-auto h-20 w-auto object-contain"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
};

export default CompanyLogos;
