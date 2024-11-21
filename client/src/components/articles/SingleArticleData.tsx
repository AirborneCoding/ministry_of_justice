'use client'
import React from "react";
import { useLocale } from "next-intl";
import { useQuery } from "@tanstack/react-query";
import { fetchSingleArticles } from "@/utils/Apis/articles.apis";
import Img from "../shared/Img";

const SingleArticleData: React.FC<{ slug: string }> = ({ slug }) => {

    const locale = useLocale()

    const { data } = useQuery({
        queryKey: ["single_articles", locale],
        queryFn: () => fetchSingleArticles(locale, slug)
    })

    const { data: article } = data ?? {}

    if (!article) {
        return <div className="text-xl text-center">Article not found</div>;
    }

    return (
        <>
            <picture className="relative grid h-56 md:h-96 overflow-hidden shadow rounded-theme-lg lg:h-[510px]">
                <Img
                    src={article?.image?.url}
                    alt={article?.title}
                    className="absolute w-full h-full inset-0 object-cover group-hf:scale-105 transition-all ease-in select-none"
                />
            </picture>

            <h1 className="my-8 text-3xl font-bold">
                {article?.title}
            </h1>
            <hr className="mb-16" />
            <div className="prose max-w-none md:text-lg ">
                <div dangerouslySetInnerHTML={{ __html: article?.content }} />
            </div>
        </>
    )
};

export default SingleArticleData;
