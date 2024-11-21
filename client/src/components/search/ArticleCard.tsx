import React from "react";
import Link from "next/link";
import Img from "../shared/Img";

interface CardProps {
    items: any[];
    locale: string
}

const ArticleCard: React.FC<CardProps> = ({ items, locale }) => {
    return (

        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {
                items?.map((item: any) => {
                    return (
                        <article key={item.documentId} className="overflow-hidden rounded-lg shadow-lg bg-white">
                            <Link href={`/${locale}/articles/${item?.slug}`}>
                                <Img
                                    src={item?.image?.url}
                                    alt={item?.title}
                                    className="block h-52 w-full object-cover"
                                />
                            </Link>
                            <header className="flex flex-col items-start justify-between leading-tight p-2 md:p-4 gap-y-5">
                                <h1 className="text-sm text-myBlue3">
                                    <Link href={`/${locale}/articles/${item?.slug}`} className="no-underline hover:underline">
                                        {item?.title}
                                    </Link>
                                </h1>
                            </header>
                        </article>
                    )
                })
            }
        </section>
    );
};

export default ArticleCard;