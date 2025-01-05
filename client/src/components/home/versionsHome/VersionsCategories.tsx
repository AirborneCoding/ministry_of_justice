import { projectsAndLaws } from "@/utils/data";
import React from "react";

const VersionsCategories = ({ locale, setCategory }: { locale: string, category: string, setCategory: (searchValue: string) => void }) => {
    return (
        <ul className="grid grid-cols-3 lg:flex lg:flex-col gap-x-2 gap-y-7">
            {projectsAndLaws.map((c, i) => {
                return (
                    <li
                        onClick={() => setCategory(locale === "ar" ? c.ar : c.fr)}
                        key={i} className="text-xs btn btn-neutral">
                        {locale === "ar" ? c.ar : c.fr}
                    </li>
                )
            })}
        </ul>
    )
};

export default VersionsCategories;

// !to can filter
// import { projectsAndLaws } from "@/utils/data";
// import React from "react";

// const VersionsCategories = ({ locale, setCategory }: { locale: string, category: string, setCategory: (searchValue: string) => void }) => {
//     return (
//         <ul className="grid grid-cols-3 lg:flex lg:flex-col gap-x-2 gap-y-7">
//             {projectsAndLaws.map((c, i) => {
//                 return (
//                     <li
//                         onClick={() => setCategory(c.api)}
//                         key={i}
//                         className="text-xs btn btn-neutral"
//                     >
//                         {locale === "ar" ? c.ar : c.fr}
//                     </li>
//                 )
//             })}
//         </ul>
//     )
// };

// export default VersionsCategories;
