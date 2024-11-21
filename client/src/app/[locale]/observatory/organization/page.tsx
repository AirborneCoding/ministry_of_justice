import Img from "@/components/shared/Img";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations();

  return (
    <main className="my-16 body-container">
      <h3 className="mb-10 text-3xl font-bold">
        {t('structural_organization.title')}
      </h3>
      <div className="prose max-w-none text-lg">
        <p>{t('structural_organization.description')}</p>
      </div>
      <div className="mt-10">
        <Img
          src="/structu.webp"
          alt="Description de l'image"
          className="w-full h-auto"
        />
      </div>
      <div className="mt-10">
        <p className="font-semibold">{t('structural_organization.professional_units')}</p>
        <ul className="list-disc ml-6 mt-2">
          <li className="text-lg">{t('structural_organization.professional_units_list.0')}</li>
          <li className="text-lg">{t('structural_organization.professional_units_list.1')}</li>
          <li className="text-lg">{t('structural_organization.professional_units_list.2')}</li>
          <li className="text-lg">{t('structural_organization.professional_units_list.3')}</li>
        </ul>
      </div>
      <div className="mt-10">
        <p className="font-semibold">{t('structural_organization.supporting_units')}</p>
        <ul className="list-disc ml-6 mt-2">
          <li className="text-lg">{t('structural_organization.supporting_units_list.0')}</li>
          <li className="text-lg">{t('structural_organization.supporting_units_list.1')}</li>
          <li className="text-lg">{t('structural_organization.supporting_units_list.2')}</li>
        </ul>
      </div>
    </main>
  );
}
