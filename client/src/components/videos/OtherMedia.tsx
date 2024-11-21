"use client";

import React from "react";
import RelatedContent from "./RelatedContent";
import { useTranslations } from "next-intl";

const videoLinks: string[] = [
    "https://www.youtube.com/embed/tNxzSiy0I2A?si=SPnTsY5RCRraNSRX",
    "https://www.youtube.com/embed/MWCGxKyOG3w?si=a8w5wxJUGs85-skz",
    "https://www.youtube.com/embed/kt4i5_oq8Lo?si=ukrbumvplixP206Z",
    "https://www.youtube.com/embed/3kTJBoPOG8k?si=53Z14PLRSkauOCFP",
    "https://www.youtube.com/embed/UWzcuAn7XyE?si=rh-zWv7ISTjnwwxG",
    "https://www.youtube.com/embed/Kpz2Vm4NDrw?si=UxdVURnJzdj8wOaf",
    "https://www.youtube.com/embed/_54XA64YTVE?si=vwaFP-8y6Uqoy0er",
    "https://www.youtube.com/embed/apJEf9XZ61k?si=4ZfUBkdXGt6KpSDE",
    "https://www.youtube.com/embed/gjaOw3J1zhM?si=citnr3p-8qLNvnvX",
    "https://www.youtube.com/embed/-874IR5KSN8?si=i8zH-ZZxn7MgRu47"
];

const OtherMedia = () => {
    const t = useTranslations("videos")
    return (
        <div className="w-full py-10 px-4">
            <h1 className="text-3xl font-bold text-center  mb-8">
                {t("title")}
            </h1>
            <p className="text-center text-gray-400 mb-12">
                {t("description")}
            </p>

            {/* Video Grid Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {videoLinks.map((link, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 shadow-lg rounded-lg overflow-hidden"
                    >
                        <iframe
                            src={link}
                            title={`Crime Report Video ${index + 1}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-48"
                        ></iframe>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-800">
                                Video {index + 1}
                            </h3>
                            <p className="text-sm text-gray-600 mt-2">
                                Detailed analysis on crime trends and law enforcement efforts.
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Related Content Section */}
            <RelatedContent />
        </div>
    );
};

export default OtherMedia;
