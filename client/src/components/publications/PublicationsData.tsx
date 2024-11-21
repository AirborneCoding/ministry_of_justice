'use client'
import React from "react";
import SearchBox from "./SearchBox";
import BtnReset from "./BtnReset";
import InCategoriesPage from "./InCategoriesPage";
import PublicationsCard from "./PublicationsCard";
import { useQuery } from "@tanstack/react-query";
import { fetchAllPublications } from "@/utils/Apis/publications.apis";

const PublicationsData: React.FC<{ locale: string }> = ({ locale }) => {

    const { data } = useQuery({
        queryKey: ["publications", locale],
        queryFn: () => fetchAllPublications(locale)
    })

    const { data: publications, meta } = data ?? {}

    return (
        <>
            <section className="flex gap-8">
                <SearchBox />
                <BtnReset />
            </section>

            <section className="flex flex-col gap-8 mt-5 lg:flex-row">
                <InCategoriesPage />
                <div className={`flex-grow grid grid-cols-2 lg:grid-cols-4 gap-5 lg:w-80`}>
                    {publications.map((pub: any) => {
                        return <PublicationsCard
                            key={pub.id}
                            {...pub}
                        />
                    })}
                </div>

            </section>
        </>
    )
};

export default PublicationsData;
