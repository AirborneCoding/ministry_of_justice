import React from "react";
import SearchAllData from "@/components/search/SearchAllData";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { fetchAllWebsite } from "@/utils/Apis/search.apis";

interface Params {
  params: {
    search: string,
    locale: string
  }
  searchParams: { q: string }
}

const page: React.FC<Params> = async ({ params: { locale, search }, searchParams: { q } }) => {

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["search_website", locale, q],
    queryFn: () => fetchAllWebsite(locale, q),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="min-h-screen my-16 body-container">
        <SearchAllData
          locale={locale}
          search={q}
        />
      </main>
    </HydrationBoundary>
  )
};

export default page;