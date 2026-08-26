import { toWatchlistMovie } from "../api/tmdb";

export default function SearchResults({
  results,
  isLoading,
  error,
  onAddMovie,
}) {
  if (isLoading) {
    return <p className="mb-6">Searching...</p>;
  }

  if (error) {
    return <p className="text-error mb-6">{error}</p>;
  }

  if (!results.length) {
    return null;
  }

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Search Results</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {results.map((movie) => {
          const watchlistMovie = toWatchlistMovie(movie);

          return (
            <div
              key={movie.id}
              className="card bg-base-100 shadow-md"
            >
              {watchlistMovie.poster ? (
                <figure>
                  <img
                    src={watchlistMovie.poster}
                    alt={watchlistMovie.title}
                    className="h-64 w-full object-cover"
                  />
                </figure>
              ) : (
                <div className="h-64 flex items-center justify-center bg-base-200">
                  No poster
                </div>
              )}

              <div className="card-body">
                <h3 className="card-title">
                  {watchlistMovie.title}
                </h3>

                <p>
                  {watchlistMovie.year || "Unknown year"}
                </p>

                <p>
                  ⭐ {watchlistMovie.rating}
                </p>

                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => onAddMovie(watchlistMovie)}
                >
                  Add to Watchlist
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}