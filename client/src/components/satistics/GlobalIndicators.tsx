"use client";

import { useLocale } from "next-intl";
import React, { useState } from "react";

const GlobalIndicatorsPage = () => {
    const [selectedIndicator, setSelectedIndicator] = useState(0);
    const locale = useLocale();

    // Indicators content based on locale
    const indicatorsContent = [
        {
            title: {
                ar: "المؤشر العالمي للأمن السيبراني",
                fr: "Indicateur mondial de cybersécurité",
            },
            description: {
                ar: "يقيم المؤشر العالمي للأمن السيبراني قدرة الدول على حماية أنظمتها الرقمية من التهديدات والهجمات الإلكترونية.",
                fr: "L'indicateur mondial de cybersécurité évalue la capacité des pays à protéger leurs systèmes numériques contre les menaces et cyberattaques.",
            },
        },
        {
            title: {
                ar: "المؤشر العام للفساد",
                fr: "Indicateur de la corruption générale",
            },
            description: {
                ar: "يقيس هذا المؤشر مستوى الفساد في القطاع العام عبر مختلف الدول.",
                fr: "Cet indicateur mesure le niveau de corruption dans le secteur public à travers différents pays.",
            },
        },
        {
            title: {
                ar: "مؤشر الإرهاب",
                fr: "Indicateur du terrorisme",
            },
            description: {
                ar: "يُقيّم هذا المؤشر انتشار الإرهاب في العالم بناءً على عدد الحوادث الإرهابية.",
                fr: "Cet indicateur évalue la propagation du terrorisme dans le monde.",
            },
        },
        {
            title: {
                ar: "مؤشر الجريمة المنظمة",
                fr: "Indicateur du crime organisé",
            },
            description: {
                ar: "يقيم هذا المؤشر مستوى الجريمة المنظمة في العالم.",
                fr: "Cet indicateur évalue le niveau de criminalité organisée dans le monde.",
            },
        },
        {
            title: {
                ar: "مؤشر السلام العالمي",
                fr: "Indicateur de la paix mondiale",
            },
            description: {
                ar: "يُقيّم هذا المؤشر حالة السلام في الدول والمناطق حول العالم.",
                fr: "Cet indicateur évalue l'état de la paix dans les pays et les régions du monde.",
            },
        },
    ];

    const handleIndicatorClick = (index: number) => {
        setSelectedIndicator(index);
    };

    return (
        <div className="w-full py-10">
            <h1 className="text-3xl font-bold text-center mb-8">
                {locale === "ar" ? "المؤشرات العالمية" : "Indicateurs mondiaux"}
            </h1>

            {/* Buttons for categories */}
            <div className="flex justify-center flex-wrap gap-4 mb-6">
                {indicatorsContent.map((indicator, index) => (
                    <button
                        key={index}
                        className="btn"
                        onClick={() => handleIndicatorClick(index)}
                    >
                        {locale === "ar" ? indicator.title.ar : indicator.title.fr}
                    </button>
                ))}
            </div>

            {/* Content for the selected indicator */}
            <div className="bg-gray-100 shadow-lg rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    {locale === "ar"
                        ? indicatorsContent[selectedIndicator].title.ar
                        : indicatorsContent[selectedIndicator].title.fr}
                </h3>
                <p className="text-gray-700">
                    {locale === "ar"
                        ? indicatorsContent[selectedIndicator].description.ar
                        : indicatorsContent[selectedIndicator].description.fr}
                </p>
            </div>
        </div>
    );
};

export default GlobalIndicatorsPage;
