import { useLocale } from "next-intl";
import Img from "../shared/Img";


const PublicationsCard = (props: any) => {
    const locale = useLocale()
    return (
        <div className="flex flex-col-reverse shadow-xl card bg-white">
            <div className="flex justify-between px-4 py-4 card-body">
                <div>
                    <h2 className="text-sm md:text-base card-title text-myBlue3">{props.title}</h2>
                </div>
                {/* <div className="card-actions justify-sart">
                    <button className="btn btn-xs btn-neutral">
                        {locale === "ar" ? "تحميل" : "télécharger"}
                    </button>
                </div> */}

                <button
                    className="btn btn-sm text-sm md:text-base"
                    onClick={() => {
                        const modal = document?.getElementById('my_modal_1') as HTMLDialogElement | null;
                        modal?.showModal();
                    }}
                >
                    {locale === "ar" ? "تحميل" : "Télécharger"}
                </button>
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        <p className="py-4">
                            {locale === "ar"
                                ? "هذه مجرد بيانات تجريبية للوزارة، ولا نقدم لهم منشورات بصيغة PDF."
                                : "Ceci est juste des données testées pour un ministère, nous ne fournissons pas de publications PDF."}
                        </p>
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn">
                                    {locale === "ar" ? "إغلاق" : "Fermer"}
                                </button>
                            </form>
                        </div>
                    </div>
                </dialog>

            </div>
            <Img
                src={props?.image?.url}
                alt={props.title}
                className="object-cover lg:w-80 md:h-auto"
            />
        </div>
    )
};

export default PublicationsCard;
