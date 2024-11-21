import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import Img from '../shared/Img';

const Header: React.FC = () => {
    const locale = useLocale()
    const t = useTranslations("Header")
    return (
        <section
            className="pt-10 pb-2 mx-auto bg-center bg-cover md:pt-10"
            style={{ backgroundImage: "url('/backmenu.png')" }}
        >
            <div className="flex items-center justify-between body-container">
                <div>
                    <Link href={`/${locale}`}>
                        <Img
                            src='/logo.png'
                            // src='/newlogo.png'
                            className='h-40 pt-6 pl-5 w-50 md:w-64 md:h-48'
                            alt={t('title')}
                        />
                    </Link>
                </div>

                <div>
                    <h2
                        className={`font-arabicFont font-extrabold text-myBlue3 ${locale === "ar" ? "text-4xl md:text-5xl" : "text-xl md:text-4xl"}`}
                    >
                        {t('title')}
                    </h2>
                </div>
                <div className="hidden lg:flex items-center flex-shrink-0 gap-x-4">
                    <a
                        href="https://justice.gov.ma/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                    >
                        <Img
                            alt="المرصد الوطني للإجرام"
                            className="w-auto h-12 ml-10 md:h-20"
                            src='/logoamazigh.svg'
                        />
                    </a>
                    <Img
                        alt="المرصد الوطني للإجرام"
                        className="w-auto h-12 ml-4 md:h-20"
                        src='/maroc.webp'
                    />
                </div>
            </div>
        </section>
    );
};

export default Header;
