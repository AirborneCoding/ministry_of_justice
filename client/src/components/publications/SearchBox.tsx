// "use client"

// import { useCallback } from "react";
// import { useSearchParams } from "next/navigation";

// const SearchBox = () => {

//     const searchParams = useSearchParams();
//     const searchValue = searchParams.get('search-publications') || '';

//     const handleSubmit = useCallback(
//         (e: React.FormEvent<HTMLFormElement>) => {
//             let params = new URLSearchParams();
//             const formData = new FormData(e.currentTarget);
//             const search = formData.get('search') as string;
//             params.delete('category')
//             params.delete('page')
//             params.set('search', search);
//         }
//         , [searchParams])

//     return (
//         <form
//             onSubmit={handleSubmit}
//             className="flex-1"
//         >
//             <input
//                 type="text"
//                 // placeholder="search..."
//                 // placeholder="..."
//                 className="w-full input input-bordered input-xl"
//                 id="search_pub"
//                 name='search_publications'
//                 defaultValue={searchValue}
//             />
//         </form>
//     )
// };

// export default SearchBox;



"use client";

import { useCallback } from "react";
import { useSearchParams } from "next/navigation";

const SearchBox = () => {
    const searchParams = useSearchParams();
    const searchValue = searchParams.get("search-publications") || "";

    const handleSubmit = useCallback(
        (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault(); // Prevent page reload on form submission
            const params = new URLSearchParams();
            const formData = new FormData(e.currentTarget);
            const search = formData.get("search") as string;
            params.delete("category");
            params.delete("page");
            params.set("search", search);

            // Add functionality to update the URL or perform search here
            console.log(params.toString()); // Example for debugging
        },
        [] // Removed `searchParams` from the dependencies
    );

    return (
        <form onSubmit={handleSubmit} className="flex-1">
            <input
                type="text"
                className="w-full input input-bordered input-xl"
                id="search_pub"
                name="search_publications"
                defaultValue={searchValue}
            />
        </form>
    );
};

export default SearchBox;
