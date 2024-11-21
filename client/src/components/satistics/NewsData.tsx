import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const newsData = [
    {
        title: "تقرير جديد حول الجريمة المنظمة في الشرق الأوسط",
        description: "تم إصدار تقرير جديد حول مستوى الجريمة المنظمة في منطقة الشرق الأوسط وتأثيراتها على الأمن الإقليمي.",
        date: "2024-11-16",
        link: "/news/article1",
    },
    {
        title: "ارتفاع مستوى الفساد في دول الاتحاد الأوروبي",
        description: "دراسة تكشف عن زيادة في مستويات الفساد في بعض الدول الأوروبية. وتتناول الأسباب والتداعيات.",
        date: "2024-11-15",
        link: "/news/article2",
    },
    {
        title: "أحدث البيانات حول الأمن السيبراني في العالم",
        description: "التقرير الأخير يقدم تحليلاً للأمن السيبراني في مختلف الدول مع التركيز على التهديدات الإلكترونية.",
        date: "2024-11-14",
        link: "/news/article3",
    },
    {
        title: "مؤشر الإرهاب وأثره على المنطقة الآسيوية",
        description: "تحليل جديد يظهر تأثير الإرهاب في آسيا وكيفية مواجهة التهديدات في الدول المعرضة.",
        date: "2024-11-13",
        link: "/news/article4",
    },
    {
        title: "مؤشر السلام العالمي وتطورات السنة الحالية",
        description: "أحدث المؤشرات تظهر تحسناً طفيفاً في بعض مناطق العالم، ولكن الصراعات الإقليمية ما تزال مستمرة.",
        date: "2024-11-12",
        link: "/news/article5",
    },
    {
        title: "تحليل لمؤشر الجريمة في إفريقيا",
        description: "دراسة تفصيلية حول الجريمة في قارة إفريقيا وتأثيرها على التنمية المستدامة.",
        date: "2024-11-11",
        link: "/news/article6",
    },
];

const NewsData = () => {
    const t = useTranslations("SatisticsPage")
    return (
        <section >
            <h1 className="text-3xl font-bold text-center mb-8">
                {t("news")}
            </h1>

            {/* Grid System for displaying News Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {newsData.map((news, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">{news.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">{news.description}</p>
                        <span className="text-gray-500 text-xs">{news.date}</span>

                        {/* Link to read more */}
                        <div className="mt-4">
                            <Link href={news.link} className="btn">
                                اقرأ المزيد
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
};

export default NewsData;
