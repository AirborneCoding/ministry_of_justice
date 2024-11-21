import { useTranslations } from "next-intl";
import Img from "../shared/Img";

const ObservatoryNbrs = () => {

    const t = useTranslations("observatoryInNumbers")

    return (
        <section className="bg-slate-300">
            <div className="py-8 md:py-10 body-container">
                <h2 className="mb-6 ml-2 mr-2 text-3xl font-bold text-center underline text-myBlue underline-offset-8 decoration-grona">
                    {t("title")}
                </h2>
                <p className="mb-10 text-sm font-bold leading-relaxed text-center text-myBlue">
                    {t("paragraph1")}
                </p>
                <div className="p-8 mx-6 bg-white rounded shadow-xl md:mx-0 text-myBlue shadow-myBlue">
                    <div className="grid grid-cols-1 md:grid-cols-4 md:gap-8 place-items-center">
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <Img
                                src="/useful1_1.svg"
                                alt="المرصد في أرقام"
                                className="w-full h-20"
                            />
                            <div className="flex items-center mt-8 gap-x-5">
                                <h4 className="self-center mt-1 font-bold text-grona">83</h4>
                                <h4 className="text-myBlue text-md">
                                    {t("links.residentJudgeCenters")}
                                </h4>
                            </div>
                            <hr className="p-4" />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <Img
                                src="/useful1_2.svg"
                                alt="المرصد في أرقام"
                                className="w-full h-20"
                            />
                            <div className="flex items-center mt-8 gap-x-5">
                                <h4 className="self-center mt-1 font-bold text-grona">88</h4>
                                <h4 className="text-myBlue text-md"
                                >
                                    {t("links.administrativeCourts")}
                                </h4>
                            </div>
                            <hr className="p-4" />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <Img
                                src="/useful1_3.svg"
                                alt="المرصد في أرقام"
                                className="w-full h-20"
                            />
                            <div className="flex items-center mt-8 gap-x-5">
                                <h4 className="self-center mt-1 font-bold text-grona">10</h4>
                                <h4 className="text-myBlue text-md">
                                    {t("links.commercialCourts")}
                                </h4>
                            </div>
                            <hr className="p-4" />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <Img
                                src="/useful1_4.svg"
                                alt="المرصد في أرقام"
                                className="w-full h-20"
                            />
                            <div className="flex items-center mt-8 gap-x-5">
                                <h4 className="self-center mt-1 font-bold text-grona">10</h4>
                                <h4 className="text-myBlue text-md"
                                >
                                    {t("links.administrativeCourts")}
                                </h4>
                            </div>
                            <hr className="p-4" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
};

export default ObservatoryNbrs;
