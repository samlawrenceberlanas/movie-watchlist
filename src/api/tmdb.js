import React from 'react';
  
  const Tmdb = () =>  {
	return (
	  <div>
	  </div>
	);
  }
  
  export default Tmdb;
  
  import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const BASE_URL = "https://api.themoviedb.org/3";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export async function searchMovies(query) {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query,
    },
  });

  return response.data.results;
}

export function getPosterUrl(path) {
  if (!path) return "";
  return `${IMAGE_BASE_URL}${path}`;
}

export function toWatchlistMovie(tmdbMovie) {
  return {
    id: `tmdb-${tmdbMovie.id}`,
    title: tmdbMovie.title,
    poster: getPosterUrl(tmdbMovie.poster_path),
    genre: "TMDB",
    year: tmdbMovie.release_date
      ? Number(tmdbMovie.release_date.slice(0, 4))
      : null,
    rating: tmdbMovie.vote_average
      ? Number(tmdbMovie.vote_average.toFixed(1))
      : 0,
    watched: false,
  };
}