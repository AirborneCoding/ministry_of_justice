"use client"
import Img from "@/components/shared/Img";
import { achievements, reports } from "@/utils/data";
import { useLocale } from "next-intl";
import React, { useState } from "react";
type Locale = 'ar' | 'fr';

const ReportsPage = ({ params: { locale } }: { params: { locale: Locale } }) => {

  const [currentCategory, setCurrentCategory] = useState('reports');

  const handleCategoryChange = (category: string) => {
    setCurrentCategory(category);
  };

  return (
    <section className="my-16 body-container">
      <h1 className="mb-8 text-3xl font-bold underline underline-offset-8 decoration-grona">
        {locale === 'fr' ? 'Rapports et Réalisations' : 'التقارير والإنجازات'}
      </h1>

      <div className="mb-4">
        <button
          className={`mx-2 py-2 px-4 rounded font-bold  ${currentCategory === 'reports' ? 'bg-grona text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => handleCategoryChange('reports')}
        >
          {locale === 'fr' ? 'Rapports' : 'التقارير'}
        </button>
        <button
          className={`mx-2 py-2 px-4 rounded font-bold ${currentCategory === 'achievements' ? 'bg-grona text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => handleCategoryChange('achievements')}
        >
          {locale === 'fr' ? 'Réalisations' : 'الإنجازات'}
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {currentCategory === 'reports' &&
          reports.map((report, index) => (
            <div key={`report_${index}`} className="bg-white rounded-lg shadow-md ">
              <Img
                // src={report.image}
                src={`https://picsum.photos/600/500?random=${index}`}
                alt={report.title[locale]} className="object-cover w-full mb-4 rounded-md h-52" />
              <div className="px-4">
                <h3 className="mb-2 text-lg font-bold text-myBlue">{report.title[locale]}</h3>
                <p className="text-gray-600">{report.description[locale]}</p>
              </div>
            </div>
          ))}

        {currentCategory === 'achievements' &&
          achievements.map((achievement, index) => (
            <div key={`achievement_${index}`} className="bg-white rounded-lg shadow-md ">
              <Img
                // src={achievement.image}
                src={`https://picsum.photos/600/400?random=${index}`}
                alt={achievement.title[locale]} className="object-cover w-full mb-4 rounded-md h-52" />
              <div className="px-4">
                <h3 className="mb-2 text-lg font-bold text-myBlue">{achievement.title[locale]}</h3>
                <p className="text-gray-600">{achievement.description[locale]}</p>
              </div>
            </div>
          ))}
      </div>
    </section>
  )
};

export default ReportsPage;

