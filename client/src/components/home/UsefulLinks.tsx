import { useLocale, useTranslations } from "next-intl";
import Img from "../shared/Img";

const UsefulLinks = () => {
    const locale = useLocale();
    const t = useTranslations("usefulLinks");

    const links = [
        {
            href: "https://justice.gov.ma/",
            imgSrc: "/useful/logoamazigh.svg",
            imgAlt: "وزارة العدل",
            title: t("links.justiceMinistry")
        },
        {
            href: "https://cnclt.justice.gov.ma/",
            imgSrc: "https://ministry-client.vercel.app/_next/image?url=%2Fwebsite%2Fcnclt.png&w=640&q=75",
            imgAlt: "اللجنة الوطنية لتنسيق إجراءات مكافحة الاتجار بالبشر والوقاية منه",
            title: t("links.nationalCommitteeAntiTrafficking")
        },
        {
            href: "https://www.dgapr.gov.ma/",
            imgSrc: "/_next/image?url=%2Fuseful%2Fprison.jfif&w=1080&q=75",
            imgAlt: "المندوبية العامة لإدارة السجون وإعادة الإدماج",
            title: t("links.generalDelegationPrisons")
        },
        {
            href: "https://www.pmp.ma/",
            imgSrc: "https://ministry-client.vercel.app/_next/image?url=%2Fwebsite%2Fpmp.jpg&w=640&q=75",
            imgAlt: "رئاسة النيابة العامة",
            title: t("links.publicProsecution")
        },
        {
            href: "https://cspj.ma/",
            imgSrc: "https://ministry-client.vercel.app/_next/image?url=%2Fwebsite%2Fcspj.png&w=640&q=75",
            imgAlt: "المجلس الأعلى للسلطة القضائية",
            title: t("links.supremeCouncilJudicialPower")
        },
        {
            href: "https://concours.dgsn.gov.ma/",
            imgSrc: "/_next/image?url=%2Fuseful%2Fpolice.png&w=1080&q=75",
            imgAlt: "المديرية العامة للأمن الوطني",
            title: t("links.generalDirectorateNationalSecurity")
        }
    ];

    return (
        <section className="bg-white">
            <div className="py-8 md:py-10 body-container">
                {/* <div className="flex flex-row-reverse items-center justify-between">
                    <div />
                    <h2 className="mb-6 text-2xl font-bold underline underline-offset-8 decoration-grona text-myBlue">
                        {t("title")}
                    </h2>
                </div> */}
                <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-6 mt-14">
                    {links.map((link, index) => (
                        <div className="text-center" key={index}>
                            <a href={link.href} target="_blank" rel="noopener noreferrer">
                                {/* <img
                                    alt={link.imgAlt}
                                    loading="lazy"
                                    width={500}
                                    height={500}
                                    className="w-32 h-32 mx-auto md:w-30 md:h-30"
                                    src={link.imgSrc}
                                /> */}
                                <Img
                                    src={link.imgSrc}
                                    alt={link.imgAlt}
                                    className="w-32 h-32 mx-auto md:w-30 md:h-30"
                                />
                                <h4 className="mt-4 text-sm font-bold text-myBlue">{link.title}</h4>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UsefulLinks;
