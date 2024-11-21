import PublicationsData from "@/components/publications/PublicationsData";
import { fetchAllPublications } from "@/utils/Apis/publications.apis";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

export default async function Page({ params: { locale } }: { params: { locale: string } }) {

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["publications", locale],
    queryFn: () => fetchAllPublications(locale)
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="min-h-screen body-container my-16"
      >
        <PublicationsData locale={locale} />
      </main>
    </HydrationBoundary>

  )
}