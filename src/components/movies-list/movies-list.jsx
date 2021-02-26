import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MovieCard from '../movie-card/movie-card';
import {movieProp} from '../props/movie-props';
import {getMovieById, getSimilarMovies, getMoviesByGenre} from '../../utils/common';

const getMovieCardComponent = (id, rest, onMovieCardMouseEnter, onMovieCardMouseLeave, currentMovieId) => {
  return <MovieCard key={id} movieId={id} {...rest} onMovieCardMouseEnter={onMovieCardMouseEnter} onMovieCardMouseLeave={onMovieCardMouseLeave} currentMovieId={currentMovieId} />;
};

const MoviesList = ({targetMovies}) => {
  const [currentMovieId, setCurrentMovieId] = useState(-1);

  const onMovieCardMouseEnter = (id) => setCurrentMovieId(id);

  const onMovieCardMouseLeave = () => setCurrentMovieId(-1);

  return (
    <div className="catalog__movies-list">
      {targetMovies.map(({id, ...rest}) => getMovieCardComponent(id, rest, onMovieCardMouseEnter, onMovieCardMouseLeave, currentMovieId))}
    </div>
  );
};

MoviesList.propTypes = {
  targetMovies: PropTypes.arrayOf(movieProp).isRequired
};

const mapStateToProps = (state, {match}) => {
  const {id} = match.params;

  const movie = getMovieById(state.movies, id);
  const similarMovies = getSimilarMovies(state.movies, movie);

  const targetMovies = id ? similarMovies : getMoviesByGenre(state.movies, state.genre);

  return {
    targetMovies
  };
};

export default withRouter(connect(mapStateToProps)(MoviesList));
