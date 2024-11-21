// fetch all articles
export const fetchAllArticles = async (locale: string) => {
    try {
        const res = await fetch(`${process.env.STRAPI_URL}/articles?locale=${locale}&populate=image&sort=createdAt:desc`)
        return res.json()
    } catch (error) {
        console.log("articles error: ", error);
    }
}

// fetch single article
export const fetchSingleArticles = async (locale: string, slug: string) => {
    try {
        const res = await fetch(`${process.env.STRAPI_URL}/articles/${slug}?locale=${locale}`)
        return res.json()
    } catch (error) {
        console.log("single articles error: ", error);
    }
}

// fetch articles in home
export const fetchArticlesInHome = async (locale: string) => {
    try {
        const res = await fetch(`${process.env.STRAPI_URL}/articles?locale=${locale}&populate=image&sort=createdAt:desc&pagination[limit]=4`)
        return res.json()
    } catch (error) {
        console.log("articles home error: ", error);
    }
}