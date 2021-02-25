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

const MoviesList = ({movies, similarMovies}) => {
  const [currentMovieId, setCurrentMovieId] = useState(-1);

  const onMovieCardMouseEnter = (id) => setCurrentMovieId(id);

  const onMovieCardMouseLeave = () => setCurrentMovieId(-1);

  const moviesToDisplay = similarMovies ? similarMovies : movies;

  return (
    <div className="catalog__movies-list">
      {moviesToDisplay.map(({id, ...rest}) => getMovieCardComponent(id, rest, onMovieCardMouseEnter, onMovieCardMouseLeave, currentMovieId))}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(movieProp).isRequired,
  match: PropTypes.object.isRequired,
  similarMovies: PropTypes.arrayOf(movieProp)
};

const mapStateToProps = (state, {match}) => {
  const id = match.params.id;

  if (id) {
    const movie = getMovieById(id);
    const similarMovies = getSimilarMovies(state.movies, movie);

    return {
      movies: state.movies,
      similarMovies
    };
  }

  const filteredMoviesByGenre = getMoviesByGenre(state.movies, state.genre);

  return {
    movies: filteredMoviesByGenre
  };
};

export {MoviesList};
export default withRouter(connect(mapStateToProps)(MoviesList));
