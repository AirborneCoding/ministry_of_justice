import React from "react";
import SearchBox from "./navbar_items/SearchBox";
import Theme from "../shared/Theme";
import LocalSwitcher from "../shared/local-switcher";
import { useLocale, useTranslations } from "next-intl";
import { MdSpaceDashboard } from "react-icons/md";
import Sidebar from "./navbar_items/Sidebar";
import NavLinks from "./navbar_items/NavLinks";

const Navbar = () => {
    const locale = useLocale()
    const t = useTranslations("Header");

    const navLinks = [
        {
            id: 1,
            label: t("home"),
            link: `/${locale}`,
        },
        {
            id: 2,
            label: t("observatory.label"),
            subItems: [
                { title: t("observatory.subItems.introduction"), href: `/${locale}/observatory` },
                { title: t("observatory.subItems.missions"), href: `/${locale}/observatory/missions` },
                { title: t("observatory.subItems.texts"), href: `/${locale}/observatory/texts` },
                { title: t("observatory.subItems.organization"), href: `/${locale}/observatory/organization` },
            ],
        },
        {
            id: 3,
            label: t("statistics.label"),
            link: `/${locale}/statistics`,
            subItems: [
                { title: t("statistics.subItems.main"), href: `/${locale}/statistics` },
                { title: t("statistics.subItems.indicators"), href: `/${locale}/statistics/indicators` },
                { title: t("statistics.subItems.global"), href: `/${locale}/statistics/global` },
                { title: t("statistics.subItems.news"), href: `/${locale}/statistics/news` },
            ],
        },
        {
            id: 4,
            label: t("articles"),
            link: `/${locale}/articles`,
        },
        {
            id: 5,
            label: t("publications"),
            link: `/${locale}/publications`,
        },
        {
            id: 6,
            label: t("content.label"),
            subItems: [
                { title: t("content.subItems.reports"), href: `/${locale}/reports` },
                { title: t("content.subItems.videos"), href: `/${locale}/videos` },
                { title: t("content.subItems.presentations"), href: `/${locale}/content/presentations` },
                { title: t("content.subItems.contact"), href: `/${locale}/contact` },
            ],
        },
    ];


    return (
        <div className="drawer border-b">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col ">
                {/* Navbar */}
                <div className=" bg-myBlue w-full">
                    <div className="body-container navbar">

                        {/* items 1 */}
                        <div className="mx-2 flex-1 px-2">
                            <div className="flex gap-2">
                                <Theme />
                                <LocalSwitcher />
                                <SearchBox
                                    search=""
                                />
                            </div>
                        </div>
                        {/* links */}
                        <div className="hidden flex-none lg:block flex-row-reverse">
                            <NavLinks navLinks={navLinks} locale={locale} />
                        </div>

                        {/* button tot toggle sidebar */}
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar">
                                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="cursor-pointer">
                                    <MdSpaceDashboard size={25} className="text-white hover:text-grona" />
                                </label>
                            </label>
                        </div>
                    </div>

                </div>

            </div>
            {/* sidebar here */}
            <Sidebar navLinks={navLinks} />
        </div>
    )
};

export default Navbar;