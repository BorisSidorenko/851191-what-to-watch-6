import React, {useState} from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card';
import {movieProp} from '../props/movie-props';

const MoviesList = ({allMovies}) => {
  const [currentMovieId, setCurrentMovieId] = useState({
    movieId: ``
  });

  const handleMovieCardMouseEnter = (id) => {
    setCurrentMovieId({...currentMovieId, movieId: id});
  };

  return (
    <div className="catalog__movies-list">
      {allMovies.map(({id, ...rest}) => <MovieCard key={id} movieId={id} {...rest} onMovieCardMouseEnter={handleMovieCardMouseEnter} />)}
    </div>
  );
};

MoviesList.propTypes = {
  allMovies: PropTypes.arrayOf(movieProp).isRequired
};

export default MoviesList;
