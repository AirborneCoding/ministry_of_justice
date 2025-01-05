"use client";

import React from "react";
import { projectsAndLaws } from "@/utils/data";

const InCategoriesPage: React.FC<{
    locale: string;
    selectedCategory: string;
    onCategorySelect: (category: string) => void;
}> = ({ locale, selectedCategory, onCategorySelect }) => {
    return (
        <div className="flex-grow-2">
            <ul className="grid grid-cols-3 lg:flex lg:flex-col gap-x-2 gap-y-7">
                {projectsAndLaws.map((c, i) => {
                    const displayLabel = locale === "ar" ? c.ar : c.fr;

                    return (
                        <li
                            key={i}
                            onClick={() => onCategorySelect(c.api)}
                            className={`btn btn-neutral text-xs ${selectedCategory === c.api ? "btn-active" : ""
                                }`}
                        >
                            {displayLabel}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default InCategoriesPage;
