import { useTranslations } from "next-intl"

export default function Page() {
  const t = useTranslations()
  return (
    <main className="my-16 body-container">
      <h2 className="mb-10 font-bold text-3xl">
        {t("text_juri.title")}
      </h2>
      <div>
        <div className="prose max-w-none text-lg" dangerouslySetInnerHTML={{ __html: t.raw('text_juri.content') }} />
      </div>
    </main>

  )
}