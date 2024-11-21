import { useTranslations } from "next-intl";

const NewSati = () => {
    const t = useTranslations('SatisticsPage');

    const categories = [
        {
            key: "violent_crimes",
            imageUrl: "https://www.svgrepo.com/show/277272/crime-scene.svg",
            backgroundColor: "#41C0FF"
        },
        {
            key: "violence_against_women",
            imageUrl: "https://www.svgrepo.com/show/526455/women.svg",
            backgroundColor: "#f5a7a7"
        },
        {
            key: "violence_against_children",
            imageUrl: "https://www.svgrepo.com/show/494367/child.svg",
            backgroundColor: "#f5a7a7"
        },
        {
            key: "human_trafficking",
            imageUrl: "https://www.svgrepo.com/show/9340/statistics.svg",
            backgroundColor: "#a7a7f5"
        },
        {
            key: "children_in_conflict_with_law",
            imageUrl: "https://www.svgrepo.com/show/218257/human-resources-search.svg",
            backgroundColor: "#a7a7f5"
        },
        {
            key: "cyber_crime",
            imageUrl: "https://www.svgrepo.com/show/295816/internet-safe.svg",
            backgroundColor: "#f5a7a7"
        },
        {
            key: "drugs",
            imageUrl: "https://www.svgrepo.com/show/189223/drugs-drug.svg",
            backgroundColor: "#a7a7f5"
        },
        {
            key: "traffic_accidents",
            imageUrl: "https://www.svgrepo.com/show/427990/traffic-and-transportation.svg",
            backgroundColor: "#f5a7a7"
        }
    ];

    return (
        <>
            <h2 className='mb-10 ml-2 mr-2 text-3xl font-bold underline underline-offset-8 decoration-grona'>
                {t('title')}
            </h2>
            <div dangerouslySetInnerHTML={{ __html: t.raw('text') }} />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-12">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="relative cursor-pointer rounded-lg p-4 flex flex-col justify-end items-center h-40"
                        style={{
                            backgroundImage: `url(${category.imageUrl})`,
                            backgroundSize: "40%",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center center",
                            backgroundColor: category.backgroundColor
                        }}
                    >
                        <div className="bg-opacity-70 bg-white w-full text-center p-1 rounded-md">
                            {t(`categories.${category.key}`)} {/* Dynamically fetch the category name */}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default NewSati;
