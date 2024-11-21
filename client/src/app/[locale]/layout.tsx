import "@/styles/globals.css";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'react-loading-skeleton/dist/skeleton.css'

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Cairo } from "next/font/google";
import { getLangDir } from "rtl-detect";
import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import Header from "@/components/layouts/Header";
import Providers from "../providers";
import { Metadata } from "next";

const cairo = Cairo({
    subsets: ["arabic"],
    // weight: ["200"],
    variable: "--font-cairo"
})


export const metadataAr: Metadata = {
    icons: "favicon.ico",
    title: {
        default: "المرصد الوطني للإجرام",
        template: "%s - المرصد الوطني للإجرام"
    },
    description: "المرصد الوطني للإجرام هو منصة تقنية تهدف إلى مراقبة وتحليل الجريمة في البلاد وتوفير بيانات ومعلومات مفيدة للمجتمع والسلطات المعنية. تستند عمليات المرصد على تقنيات متطورة لتتبع الجرائم وتحديد أنماطها والعمل على الحد منها. انضم إلينا في رحلة العمل الجماعي لبناء مجتمع آمن ومزدهر.",
};

export const metadataFr: Metadata = {
    icons: "favicon.ico",
    title: {
        default: "Observatoire National de la Criminalité",
        template: "%s - Observatoire National de la Criminalité"
    },
    description: "L'Observatoire National de la Criminalité est une plateforme technologique visant à surveiller et analyser le crime dans le pays, fournissant des données et des informations utiles à la communauté et aux autorités concernées. Les opérations de l'observatoire reposent sur des technologies avancées pour suivre les crimes, identifier leurs schémas et travailler à les réduire. Rejoignez-nous dans un voyage de travail collectif pour construire une communauté sûre et prospère.",
};


export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {

    if (locale === 'ar') {
        return metadataAr
    } else if (locale === 'fr') {
        return metadataFr
    }
    else {
        return metadataAr
    }
}

export default async function LocaleLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {

    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    const messages = await getMessages();
    const direction = getLangDir(locale);
    return (
        <html
            lang={locale}
            dir={direction}
            suppressHydrationWarning={true}
        >
            <body
                className={cairo.className}
            >
                <NextIntlClientProvider messages={messages}>
                    <Providers>
                        <Navbar />
                        <Header />
                        {children}
                        <Footer />
                    </Providers>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}