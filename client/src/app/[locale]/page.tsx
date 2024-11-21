import React from "react";

import {
    ArticlesSection,
    ObservatoryNbrs,
    Tawjihat,
    UsefulLinks,
    VersionHome,
    VideosHome,
    Partners
} from "@/components/home";

import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { fetchArticlesInHome } from "@/utils/Apis/articles.apis";
import { fetchPublicationsInHome } from "@/utils/Apis/publications.apis";

const page = async ({ params: { locale } }: { params: { locale: string } }) => {

    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ["articles_home", locale],
        queryFn: () => fetchArticlesInHome(locale)
    });

    await queryClient.prefetchQuery({
        queryKey: ["publications_home", locale],
        queryFn: () => fetchPublicationsInHome(locale)
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <main>
                <ArticlesSection />
                <Tawjihat />
                <VersionHome />
                <ObservatoryNbrs />
                <VideosHome />
                <Partners />
                {/* <UsefulLinks /> */}
            </main>
        </HydrationBoundary>

    );
};

export default page;
