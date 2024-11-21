interface FilterButtonsProps {
    articlesCount: number;
    publicationsCount: number;
    activeFilter: string;
    setActiveFilter: (filter: string) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({
    articlesCount,
    publicationsCount,
    activeFilter,
    setActiveFilter,
}) => {
    return (
        <div className="flex gap-4 mb-4">
            {articlesCount > 0 && (
                <button
                    onClick={() => setActiveFilter("articles")}
                    className={`${activeFilter === "articles" ? "btn btn-warning" : ""
                        }`}
                >
                    Articles ({articlesCount})
                </button>
            )}
            {publicationsCount > 0 && (
                <button
                    onClick={() => setActiveFilter("publications")}
                    className={`px-4 py-2 rounded ${activeFilter === "publications" ? "btn btn-warning" : "btn"
                        }`}
                >
                    Publications ({publicationsCount})
                </button>
            )}
        </div>
    );
};
export default FilterButtons