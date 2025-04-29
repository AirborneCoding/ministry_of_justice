import ArticlesData from "@/components/articles/ArticlesData";
import { fetchAllArticles } from "@/utils/Apis/articles.apis";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
export const maxDurations = 60; 
export default async function Page({ params: { locale } }: { params: { locale: string } }) {

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["articles", locale],
    queryFn: () => fetchAllArticles(locale)
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="min-h-screen my-16 body-container">
        <ArticlesData locale={locale} />
      </main>
    </HydrationBoundary>
  )
}