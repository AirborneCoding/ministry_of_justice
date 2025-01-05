"use client";

import React, { useState } from "react";
import SearchBox from "./SearchBox";
import BtnReset from "./BtnReset";
import InCategoriesPage from "./InCategoriesPage";
import PublicationsCard from "./PublicationsCard";
import { useQuery } from "@tanstack/react-query";
import { fetchAllPublications } from "@/utils/Apis/publications.apis";

const PublicationsData: React.FC<{ locale: string }> = ({ locale }) => {
    const [searchValue, setSearchValue] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    const { data } = useQuery({
        queryKey: ["publications", locale],
        queryFn: () => fetchAllPublications(locale)
    })

    const { data: publications, meta } = data ?? {}

    // Filter publications locally
    const filteredPublications = publications.filter((pub: any) => {
        const matchesSearch = pub.title.toLowerCase().includes(searchValue.toLowerCase());
        const matchesCategory = selectedCategory
            ? pub.category.toLowerCase() === selectedCategory.toLowerCase()
            : true;
        return matchesSearch && matchesCategory;
    });

    const handleSearch = (search: string) => {
        setSearchValue(search);
        setSelectedCategory(""); // Reset category when a search is performed
    };

    const handleCategorySelect = (category: string) => {
        setSelectedCategory(category);
        setSearchValue(""); // Reset search when a category is selected
    };

    const handleReset = () => {
        setSearchValue("");
        setSelectedCategory("");
    };

    return (
        <>
            <section className="flex gap-8">
                <SearchBox onSearch={handleSearch} />
                <BtnReset onReset={handleReset} />
            </section>

            <section className="flex flex-col gap-8 mt-5 lg:flex-row">
                <InCategoriesPage
                    locale={locale}
                    selectedCategory={selectedCategory}
                    onCategorySelect={handleCategorySelect}
                />
                <div className={`flex-grow grid grid-cols-2 lg:grid-cols-4 gap-5 lg:w-80`}>
                    {filteredPublications.map((pub: any) => (
                        <PublicationsCard key={pub.id} {...pub} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default PublicationsData;
