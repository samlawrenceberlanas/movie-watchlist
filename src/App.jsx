import Layout from "./layouts/Layout";
import MovieList from "./components/MovieList";
import moviesData from "./data/movies";
import { useState } from "react";
import FilterBar from "./components/FilterBar";
import SummaryBar  from "./components/SummaryBar";
import AddMovieForm from "./components/AddMovieForm";

export default function App() {
  const [movies, setMovies] = useState(moviesData);
  const [filter, setFilter] = useState("all");

  const handleToggleWatched = (id) => {
    setMovies(
      movies.map((movie)=>
        movie.id === id ? {...movie, watched: !movie.watched } : movie
      )
    );
  };

  const handleDeleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !==id));
  };

  const handleAddMovie = (newMovie) =>{
    setMovies ([...movies, newMovie]);
  };

  const visibleMovies = movies.filter((movie) => {
    if (filter === "watched") return movie.watched;
    if (filter === "unwatched") return !movie.watched;
    return true;
  })

  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">My Watchlist</h1>
        <p className="opacity-70">
          A collection of movies I've watched and want to watch.
        </p>
      </div>
      <AddMovieForm onAddMovie={handleAddMovie}/>
      <SummaryBar movies={movies}/>
      <FilterBar filter={filter} onFilterChange={setFilter}/>
      <MovieList movies={visibleMovies} 
      onToggleWatched={handleToggleWatched}
      onDeleteMovie={handleDeleteMovie}
      />
    </Layout>

  );
}
