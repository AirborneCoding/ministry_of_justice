"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useLocale } from "next-intl";
import Link from "next/link";
import Img from "../shared/Img";
import { useQuery } from "@tanstack/react-query";
import { fetchArticlesInHome } from "@/utils/Apis/articles.apis";

const ArticlesSection = () => {
    

    const locale = useLocale()
    const [isPaused, setIsPaused] = useState(false);

    const handleMouseEnter = () => {
        setIsPaused(true);
    };
    const handleMouseLeave = () => {
        setIsPaused(false);
    };

    const { data } = useQuery({
        queryKey: ["articles_home", locale],
        queryFn: () => fetchArticlesInHome(locale)
    })

    const { data: articles, meta } = data ?? {}

    return (
        <section >
            {/* section 1 */}
            <div
                className="w-full bg-myBlue text-white overflow-hidden"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <ul
                    className={`ticker-list flex animate-scroll space-x-8 py-2 ${isPaused && 'paused'}`}

                >

                    {articles?.map((article: any) => (
                        <li key={article?.documentId} className="inline-block">
                            <Link href={`${locale}/articles/${article?.slug}`}>
                                <div
                                    className="whitespace-nowrap text-lg font-medium px-4"
                                >
                                    {article?.title}
                                </div>
                                <div
                                    style={{ padding: "1px" }}
                                    className="bg-grona"
                                ></div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* section 2 */}
            <div className="w-full">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    className="w-full"
                >
                    {articles?.map((article: any) => (
                        <SwiperSlide key={article?.documentId}>
                            <div className="relative w-full max-h-[80vh]">
                                <Img
                                    src={article?.image?.url}
                                    alt={article?.title}
                                    className="w-full h-[80vh] object-cover"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-start justify-start p-8 ">
                                    <Link href={`/${locale}/articles/${article?.slug}`} className="text-white relative top-[50vh] md:top-[60vh]">
                                        <h2 className="text-md lg:text-2xl font-bold mb-2">{article?.title}</h2>
                                        <p className="text-sm lg:text-xl">
                                            <div dangerouslySetInnerHTML={{ __html: article?.content.substring(0, 200) }} />...
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default ArticlesSection;
