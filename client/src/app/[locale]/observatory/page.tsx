import Img from "@/components/shared/Img";
import { useTranslations } from "next-intl";
import React from "react";

const Page = () => {

    const t = useTranslations('observatoryPage');

    const data = [
        {
            id: 1,
            content: [
                {
                    id: 1,
                    title: t('content1.title'),
                    desc: t('content1.desc'),
                },
                {
                    id: 2,
                    title: t('content2.title'),
                    desc: t('content2.desc'),
                },
                {
                    id: 3,
                    title: t('content3.title'),
                    desc: t('content3.desc'),
                },
            ],
        },
        {
            id: 2,
            content: [
                {
                    id: 1,
                    title: t('content4.title'),
                    desc: t('content4.desc'),
                },
                {
                    id: 2,
                    title: t('content5.title'),
                    desc: t('content5.desc'),
                },
                {
                    id: 3,
                    title: t('content6.title'),
                    desc: t('content6.desc'),
                },
                {
                    id: 4,
                    title: t('content7.title'),
                    desc: t('content7.desc'),
                },
            ],
        },
    ];
    return (
        <section className='my-16 body-container'>
            <div className='mx-5'>
                <h2 className='mb-10 ml-2 mr-2 text-3xl font-bold underline underline-offset-8 decoration-grona'>
                    {t('title')}
                </h2>
                <article className='flex flex-col xl:flex-row gap-7'>
                    <div>
                        <p className='leading-8 prose max-w-none text-base'>
                            {t('description')}
                        </p>
                        <hr className="mb-3" />
                        <p className='leading-8 prose max-w-none text-base'>
                            <div dangerouslySetInnerHTML={{ __html: t.raw('text2') }} />
                        </p>
                    </div>
                    <Img
                        src="/directorate.jpg"
                        alt={t('title')}
                        className='object-cover w-full h-auto rounded'
                    />
                </article>
                <article className='mt-10'>
                    {data.map((item, index) => {
                        const { content } = item
                        return (
                            <div key={index} className='grid gap-2 md:grid-cols-3'>
                                {content.map((c, index) => {
                                    const isLastElement = index === 3;
                                    const columnClasses = isLastElement ? 'md:col-span-3' : '';
                                    return (
                                        <div key={index} className={`p-5 rounded bg-slate-800 my-5 ${columnClasses}`}>
                                            <h3 className='font-semibold text-grona'>{c.title}</h3>
                                            <p className='text-sm leading-5 text-white'>{c.desc}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </article>
            </div>
        </section>
    )
};

export default Page;
