// "use client"
// import { projectsAndLaws } from "@/utils/data";
// import { useLocale } from "next-intl";
// import { useSearchParams, useRouter, usePathname } from "next/navigation";
// import { useCallback } from "react";

// const InCategoriesPage = () => {
//     const locale = useLocale()
//     const searchParams = useSearchParams();
//     const router = useRouter();
//     const pathname = usePathname();
//     const { replace } = useRouter();

//     const handleClick = useCallback(
//         (cate: string) => {
//             const params = new URLSearchParams(searchParams.toString());
//             params.delete('search_publications')
//             params.delete('page')
//             params.set("category", cate);
//             replace(`${pathname}?${params.toString()}`);
//         },
//         [searchParams, router]
//     );

//     return (
//         <div className="flex-grow-2">
//             <ul className="grid grid-cols-3 lg:flex lg:flex-col gap-x-2 gap-y-7">
//                 {projectsAndLaws.map((c, i) => {
//                     return (
//                         <li
//                             onClick={() => handleClick(locale === "ar" ? c.ar : c.fr)}
//                             key={i} className="btn btn-neutral text-xs">
//                             {locale === "ar" ? c.ar : c.fr}
//                         </li>
//                     );
//                 })}
//             </ul>
//         </div>
//     );
// };

// export default InCategoriesPage;


"use client";
import { projectsAndLaws } from "@/utils/data";
import { useLocale } from "next-intl";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";

const InCategoriesPage = () => {
    const locale = useLocale();
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleClick = useCallback(
        (cate: string) => {
            const params = new URLSearchParams(searchParams.toString());
            params.delete("search_publications");
            params.delete("page");
            params.set("category", cate);
            replace(`${pathname}?${params.toString()}`);
        },
        [searchParams, pathname, replace] // Added `pathname` and `replace` to dependencies
    );

    return (
        <div className="flex-grow-2">
            <ul className="grid grid-cols-3 lg:flex lg:flex-col gap-x-2 gap-y-7">
                {projectsAndLaws.map((c, i) => {
                    return (
                        <li
                            onClick={() => handleClick(locale === "ar" ? c.ar : c.fr)}
                            key={i}
                            className="btn btn-neutral text-xs"
                        >
                            {locale === "ar" ? c.ar : c.fr}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default InCategoriesPage;
