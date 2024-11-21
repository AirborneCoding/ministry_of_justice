import Img from "@/components/shared/Img";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations();

  return (
    <main className="my-16 body-container">
      <h3 className="mb-10 text text-3xl font-bold">
        {t('missions.title')}
      </h3>
      <div className="prose max-w-none text-lg">
        <div dangerouslySetInnerHTML={{ __html: t.raw('missions.description') }} />
        <div dangerouslySetInnerHTML={{ __html: t.raw('missions.text') }} />
      </div>
      <div className="mt-10">
        <Img
          src="/missions.webp"
          alt="Description de l'image"
          className="w-full h-auto"
        />
      </div>
    </main>
  );
}
