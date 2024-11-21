"use client";

import { fetchAllWebsite } from "@/utils/Apis/search.apis";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import ArticleCard from "./ArticleCard";
import PublicationCard from "./PublicationCard";
import FilterButtons from "./FilterBtns";

const SearchAllData: React.FC<{ search: string, locale: string }> = ({ search, locale }) => {
    const { data } = useQuery({
        queryKey: ["search_website", locale, search],
        queryFn: () => fetchAllWebsite(locale, search),
        enabled: !!search,
    });

    const results: any = data ?? {};
    const articles = results?.articles || [];
    const publications = results?.publications || [];

    const [activeFilter, setActiveFilter] = useState<string>("articles");

    return (
        <div>
            <FilterButtons
                articlesCount={articles.length}
                publicationsCount={publications.length}
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
            />
            <br /><br />
            {activeFilter === "articles" && articles.length > 0 && (
                <ArticleCard locale={locale} items={articles} />
            )}
            {activeFilter === "publications" && publications.length > 0 && (
                <PublicationCard locale={locale} items={publications} />
            )}
        </div>
    );
};
export default SearchAllData