import React from 'react';
import Link from 'next/link';

interface CardProps {
    id: number;
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ id, title, description }) => {
    return (
        <section className="mx-auto w-fit p-12">
            {/* Card */}
            <div className="w-72 h-fit group">
                <div className="relative overflow-hidden">
                    <div className="h-96 w-full object-cover bg-neutral-400 flex items-center justify-center -bottom-10">
                        <h2>{title}</h2>
                    </div>
                    <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <button className="bg-black text-white py-2 px-5">Read More</button>
                    </div>
                </div>
              
            </div>
        </section>

    );
};

export default Card;
