import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card';

const getMovieCardComponent = ({id, ...rest}) => (
  <MovieCard
    key = {id}
    {...rest}
  />
);

const MoviesList = ({allMovies}) => (
  <div className="catalog__movies-list">
    {allMovies.map(getMovieCardComponent)}
  </div>
);

MoviesList.propTypes = {
  allMovies: PropTypes.array.isRequired
};

export default MoviesList;
