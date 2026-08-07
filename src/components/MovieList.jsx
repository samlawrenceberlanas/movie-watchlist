import MovieCard from "./MovieCard";

export default function MovieList({movies}) {
  // TODO: destructure props — movies

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          poster={movie.poster}
          year={movie.year}
          rating={movie.rating}
          genre={movie.genre}
          watched={movie.watched}
        />
      ))}
    </div>
  );
}
