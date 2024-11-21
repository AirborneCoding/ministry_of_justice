"use client";

import React from "react";
import Link from "next/link";

const relatedArticles = [
    {
        id: 1,
        title: "The Rise of Digital Media",
        description:
            "Explore how digital media platforms have reshaped entertainment and news consumption.",
        link: "#",
    },
    {
        id: 2,
        title: "Future of Streaming Services",
        description:
            "An in-depth look at the growth of streaming platforms and their impact on traditional TV.",
        link: "#",
    },
    {
        id: 3,
        title: "The Evolution of Online News",
        description:
            "A history of how online media outlets have transformed journalism in the 21st century.",
        link: "#",
    },
    {
        id: 4,
        title: "How Social Media Shapes Public Opinion",
        description:
            "Understanding the influence of social media on shaping societal views and political discourse.",
        link: "#",
    },
    {
        id: 5,
        title: "Virtual Reality in Media and Entertainment",
        description:
            "The potential impact of VR technology on film, gaming, and live events.",
        link: "#",
    },
];

const RelatedContent = () => {
    return (
        <section className="py-12 px-4">
            <h2 className="text-3xl font-semibold text-center mb-8">
                Related Articles on Electronic Media
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {relatedArticles.map((article) => (
                    <div
                        key={article.id}
                        className="bg-gray-50 p-6 shadow-lg rounded-lg hover:shadow-xl transition-all"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                            {article.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                            {article.description}
                        </p>
                        <Link href={article.link} className="text-blue-500 hover:underline">
                            Read more
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RelatedContent;
