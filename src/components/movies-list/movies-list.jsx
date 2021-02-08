import React from 'react';
import SmallMovieCard from '../small-movie-card/small-movie-card';

const getSmallMovieCardComponent = ({id, name, preview_image: preview}) => (
  <SmallMovieCard
    key = {id}
    name = {name}
    preview = {preview}
  />
);

const MoviesList = ({allMovies}) => allMovies.map((movie) => getSmallMovieCardComponent(movie));

export default MoviesList;
