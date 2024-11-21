// http://localhost:1337/api/fuzzy-search/search?query=وزارة العدل&populate[articles]=image&populate[publications]=image&locale=ar

export const fetchAllWebsite = async (locale: string, search: string) => {
    try {
        const res = await fetch(`${process.env.STRAPI_URL}/fuzzy-search/search?query=${encodeURIComponent(search)}&populate[articles]=image&populate[publications]=image&locale=${locale}&sort=createdAt:desc`)
        return res.json()
    } catch (error) {
        console.log("search error: ", error);
    }
}
//     const fetchAllWebsite = async () => {
//         const response = await fetch(
//             `${process.env.STRAPI_URL}/fuzzy-search/search?query=${query}&populate[articles]=image&populate[publications]=image&locale=${locale}&sort=createdAt:desc`
//         );

//         if (!response.ok) {
//             throw new Error("Failed to get search");
//         }

//         return response.json();
//     };

//     // const { data: results, isLoading } = useQuery({
//     //     queryKey: ["search_website", locale, query],
//     //     queryFn: fetchAllWebsite,
//     //     enabled: !!query,
//     // });

//     return {
//         // results,
//         // isLoading,
//         fetchAllWebsite
//     };
// };
// enabled: !!restaurantId,