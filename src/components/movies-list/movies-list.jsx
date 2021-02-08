import React from 'react';
import MovieCard from '../movie-card/movie-card';

const getMovieCardComponent = ({id, name, preview_image: preview}) => (
  <MovieCard
    key = {id}
    name = {name}
    preview = {preview}
  />
);

const MoviesList = ({allMovies}) => allMovies.map((movie) => getMovieCardComponent(movie));

export default MoviesList;
