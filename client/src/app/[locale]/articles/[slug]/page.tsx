import SingleArticleData from "@/components/articles/SingleArticleData"
import { fetchSingleArticles } from "@/utils/Apis/articles.apis"
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query"

interface Props {
  params: {
    slug: string
    locale: string
  }
}

export default async function Page(props: Props) {
  const { params: { locale, slug } } = props

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["single_articles", locale],
    queryFn: () => fetchSingleArticles(locale, slug)
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="my-16 min-h-screen body-container ">
        <SingleArticleData slug={slug} />
      </main>
    </HydrationBoundary>
  )
}