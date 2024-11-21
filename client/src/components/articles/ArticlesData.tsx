"use client"
import { fetchAllArticles } from "@/utils/Apis/articles.apis";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import Img from "../shared/Img";

const ArticlesData: React.FC<{ locale: string }> = ({ locale }) => {

    const { data } = useQuery({
        queryKey: ["articles", locale],
        queryFn: () => fetchAllArticles(locale)
    })

    const { data: articles, meta } = data ?? {}

    return (

        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {
                articles?.map((article: any) => {
                    return (
                        <article key={article?.documentId} className="overflow-hidden rounded-lg shadow-lg bg-white">
                            <Link href={`/${locale}/articles/${article?.slug}`}>
                                <Img
                                    src={article?.image?.url}
                                    alt={article?.title}
                                    className="block h-52 w-full object-cover"
                                />
                            </Link>
                            <header className="flex flex-col items-start justify-between leading-tight p-2 md:p-4 gap-y-5">
                                <h1 className="text-sm text-myBlue3">
                                    <Link href={`/${locale}/articles/${article?.slug}`} className="no-underline hover:underline">
                                        {article?.title}
                                    </Link>
                                </h1>
                                <p className="text-grey-darker text-sm">14/4/19</p>
                            </header>
                        </article>
                    )
                })
            }
        </section>

    )
};

export default ArticlesData;
