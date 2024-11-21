// fetch all publications
export const fetchAllPublications = async (locale: string) => {
    try {
        const res = await fetch(`${process.env.STRAPI_URL}/publications?locale=${locale}&populate=image&sort=createdAt:desc`)
        return res.json()
    } catch (error) {
        console.log("publications error: ", error);
    }
}

// fetch all publications in home
export const fetchPublicationsInHome = async (locale: string) => {
    try {
        const res = await fetch(`${process.env.STRAPI_URL}/publications?locale=${locale}&populate=image&sort=createdAt:desc&pagination[limit]=4`)
        return res.json()
    } catch (error) {
        console.log("publications home error: ", error);
    }
}