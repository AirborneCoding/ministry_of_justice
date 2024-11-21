// import React from "react";
// import Img from "../shared/Img";

// interface CardProps {
//     items: any[];
//     locale: string
// }

// const PublicationCard: React.FC<CardProps> = ({ items, locale }) => {
//     return (
//         <section >
//             {
//                 items?.map((publication: any) => {
//                     <>
//                         <div className="flex flex-col-reverse shadow-xl card bg-white">
//                             <div className="flex justify-between px-4 py-4 card-body">
//                                 <div>
//                                     <h2 className="text-sm md:text-base card-title text-myBlue3">{publication.title}</h2>
//                                 </div>
//                                 <button
//                                     className="btn btn-sm text-sm md:text-base"
//                                     onClick={() => {
//                                         const modal = document?.getElementById("my_modal_1") as HTMLDialogElement | null;
//                                         modal?.showModal();
//                                     }}
//                                 >
//                                     {locale === "ar" ? "تحميل" : "Télécharger"}
//                                 </button>
//                                 <dialog id="my_modal_1" className="modal">
//                                     <div className="modal-box">
//                                         <p className="py-4">
//                                             {locale === "ar"
//                                                 ? "هذه مجرد بيانات تجريبية للوزارة، ولا نقدم لهم منشورات بصيغة PDF."
//                                                 : "Ceci est juste des données testées pour un ministère, nous ne fournissons pas de publications PDF."}
//                                         </p>
//                                         <div className="modal-action">
//                                             <form method="dialog">
//                                                 <button className="btn">
//                                                     {locale === "ar" ? "إغلاق" : "Fermer"}
//                                                 </button>
//                                             </form>
//                                         </div>
//                                     </div>
//                                 </dialog>
//                             </div>
//                             <Img
//                                 src={publication?.image?.url}
//                                 alt={publication?.title}
//                                 className="object-cover lg:w-80 md:h-auto"
//                             />
//                         </div>
//                     </>
//                 })
//             }
//         </section>
//     );
// };

// export default PublicationCard;


import React from "react";
import Img from "../shared/Img";

interface CardProps {
    items: any[];
    locale: string;
}

const PublicationCard: React.FC<CardProps> = ({ items, locale }) => {
    return (
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {items?.map((publication: any) => (
                // Added `return` or used implicit return with parentheses
                <div key={publication.id} className="flex flex-col-reverse shadow-xl card bg-white">
                    <div className="flex justify-between px-4 py-4 card-body">
                        <div>
                            <h2 className="text-sm md:text-base card-title text-myBlue3">
                                {publication.title}
                            </h2>
                        </div>
                        <button
                            className="btn btn-sm text-sm md:text-base"
                            onClick={() => {
                                const modal = document?.getElementById(
                                    "my_modal_1"
                                ) as HTMLDialogElement | null;
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
                        src={publication?.image?.url}
                        alt={publication?.title}
                        className="object-cover lg:w-80 md:h-auto"
                    />
                </div>
            ))}
        </section>
    );
};

export default PublicationCard;
