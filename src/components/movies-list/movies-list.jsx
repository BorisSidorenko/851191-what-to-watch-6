import React from 'react';
import MovieCard from '../movie-card/movie-card';

const getMovieCardComponent = ({id, ...rest}) => (
  <MovieCard
    key = {id}
    {...rest}
  />
);

const MoviesList = ({allMovies}) => allMovies.map(getMovieCardComponent);

export default MoviesList;
