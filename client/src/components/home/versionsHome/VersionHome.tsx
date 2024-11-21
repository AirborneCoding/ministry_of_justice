'use client'
import React, { useState } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import VersionsHomeCard from "./VersionsHomeCard";
import VersionsCategories from "./VersionsCategories";
import { useQuery } from "@tanstack/react-query";
import { fetchPublicationsInHome } from "@/utils/Apis/publications.apis";

const VersionHome = () => {
    const locale = useLocale()
    const [category, setCategory] = useState("")

    const { data } = useQuery({
        queryKey: ["publications_home", locale],
        queryFn: () => fetchPublicationsInHome(locale)
    })

    const { data: publications, meta } = data ?? {}

    return (
        <section className="my-12 body-container">
            <div className='flex flex-row-reverse items-center justify-between'>
                <Link
                    href={`/publications`}
                    className='px-4 py-2 mx-1 mb-3 font-bold bg-grona rounded text-slate-800 active:text-white active:bg-myBlue'
                >
                    {locale === "ar" ? "الكل" : "Plus"}
                </Link>
                <h2 className='mb-6 text-2xl font-bold underline underline-offset-8 decoration-grona'>
                    {locale === "ar" ? "الإصدارات" : "Publications"}
                </h2>
            </div>
            <article className="flex flex-col gap-8 lg:flex-row">
                <div className="flex-grow-2">
                    <VersionsCategories
                        locale={locale}
                        category={category}
                        setCategory={setCategory}
                    />
                </div>
                <div className={`flex-grow grid grid-cols-2 lg:grid-cols-4 gap-5 lg:w-80`}>
                    {publications?.map((pub: any) => {
                        return <VersionsHomeCard
                            key={pub.id}
                            {...pub}
                            locale={locale}
                        />
                    })}
                </div>
            </article>
        </section>
    )
};

export default VersionHome;
