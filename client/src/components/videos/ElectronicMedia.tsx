import React from "react";

const videoLinks: string[] = [
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/tgbNymZ7vqY",
    "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    "https://www.youtube.com/embed/eYq7WapuDLU",
    "https://www.youtube.com/embed/V-_O7nl0Ii0",
    "https://www.youtube.com/embed/8UVNT4wvIGY",
    "https://www.youtube.com/embed/ZXsQAXx_ao0",
    "https://www.youtube.com/embed/6_b7RDuLwcI",
    "https://www.youtube.com/embed/kffacxfA7G4",
    "https://www.youtube.com/embed/2Vv-BfVoq4g",
];

const ElectronicMedia = () => {
    return (
        // w-full bg-gray-100 py-10 px-4
        <div className="">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
                Electronic Media
            </h1>
            <p className="text-center text-gray-600 mb-12">
                Explore a curated list of engaging and informative videos. Stay updated on the latest trends in technology, entertainment, and innovation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {videoLinks.map((link, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg overflow-hidden"
                    >
                        <iframe
                            src={link}
                            title={`Video ${index + 1}`}
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
                                Enjoy this insightful video covering various topics.
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default ElectronicMedia;
