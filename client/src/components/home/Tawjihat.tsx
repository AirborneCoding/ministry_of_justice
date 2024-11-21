import { useTranslations } from "next-intl";
import Img from "../shared/Img";

const Tawjihat = () => {
    const t = useTranslations("section2")
    return (
        <section className="my-10 body-container">
            <h2 className="mx-2 my-6 text-2xl font-bold underline underline-offset-8 decoration-grona">
                {t("title")}
            </h2>
            <article className="flex flex-col-reverse justify-between gap-8 md:flex-row items">
                <div>
                    <p className="mt-8 leading-7 lg:mt-0">
                        {t("paragraph1")}
                    </p>
                    <h4 className="font-bold">
                        {" "}
                        {t("paragraph2")}
                    </h4>
                </div>
                <Img
                    src="/roi.jpg"
                    alt="هشام ملاطي"
                    className="w-full rounded shadow-md md:h-80 shadow-myBlue"
                />
            </article>
        </section>

    )
};

export default Tawjihat;
