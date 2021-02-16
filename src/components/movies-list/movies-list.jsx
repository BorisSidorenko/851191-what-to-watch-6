import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card';

const MoviesList = ({allMovies}) => (
  <div className="catalog__movies-list">
    {allMovies.map(({id, ...rest}) => <MovieCard key={id} {...rest} />)}
  </div>
);

MoviesList.propTypes = {
  allMovies: PropTypes.array.isRequired
};

export default MoviesList;
