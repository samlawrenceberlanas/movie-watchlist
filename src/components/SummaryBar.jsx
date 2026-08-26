const SummaryBar = ({ movies }) => {
    const total = movies.length;
    const watched = movies.filter((movie) => movie.watched).length;
    const unwatched = total - watched;

    return (
        <div className="flex gap-4 mb-6">
            <div className="stat bg-base-200 rounded-box">
                <div className="stat-title">Total</div>
                <div className="stat-value">{total}</div>
            </div>

            <div className="stat bg-base-200 rounded-box">
                <div className="stat-title">Watched</div>
                <div className="stat-value">{watched}</div>
            </div>

            <div className="stat bg-base-200 rounded-box">
                <div className="stat-title">Unwatched</div>
                <div className="stat-value">{unwatched}</div>
            </div>
        </div>
    );
};

export default SummaryBar;
