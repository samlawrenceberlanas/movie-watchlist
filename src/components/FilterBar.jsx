const FilterBar = ({ filter, onFilterChange }) => {
    return (
        <div className="flex gap-2 mb-6">
            <button
                className={`btn ${
                    filter === "all" ? "btn-primary" : "btn-ghost"
                }`}
                onClick={() => onFilterChange("all")}
            >
                All
            </button>

            <button
                className={`btn ${
                    filter === "watched" ? "btn-primary" : "btn-ghost"
                }`}
                onClick={() => onFilterChange("watched")}
            >
                Watched
            </button>

            <button
                className={`btn ${
                    filter === "unwatched" ? "btn-primary" : "btn-ghost"
                }`}
                onClick={() => onFilterChange("unwatched")}
            >
                Unwatched
            </button>
        </div>
    );
};

export default FilterBar;
