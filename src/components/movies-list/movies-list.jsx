import React, {useState} from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card';
import {movieProp} from '../props/movie-props';

const MoviesList = ({allMovies}) => {
  const [currentMovieId, setCurrentMovieId] = useState(-1);

  const onMovieCardMouseEnter = (id) => setCurrentMovieId(id);

  const onMovieCardMouseLeave = () => setCurrentMovieId(-1);

  return (
    <div className="catalog__movies-list">
      {allMovies.map(({id, ...rest}) => <MovieCard key={id} movieId={id} {...rest} onMovieCardMouseEnter={onMovieCardMouseEnter} onMovieCardMouseLeave={onMovieCardMouseLeave} currentMovieId={currentMovieId} />)}
    </div>
  );
};

MoviesList.propTypes = {
  allMovies: PropTypes.arrayOf(movieProp).isRequired
};

export default MoviesList;
