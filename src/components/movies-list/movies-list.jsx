import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MovieCard from '../movie-card/movie-card';
import {movieProp} from '../props/movie-props';
import {getMovieById, getSimilarMovies, getMoviesByGenre} from '../../utils/common';
import {loadMovieList} from '../../api/api-actions';

const getMovieCardComponent = (id, rest, onMovieCardMouseEnter, onMovieCardMouseLeave, currentMovieId) => {
  return <MovieCard key={id} movieId={id} {...rest} onMovieCardMouseEnter={onMovieCardMouseEnter} onMovieCardMouseLeave={onMovieCardMouseLeave} currentMovieId={currentMovieId} />;
};

const MoviesList = ({isMoviesLoaded, targetMovies, amountToDisplay, onMovieListUpdate, onLoadData}) => {
  const [currentMovieId, setCurrentMovieId] = useState(-1);

  useEffect(() => {
    if (!isMoviesLoaded) {
      onLoadData();
    }
  }, [isMoviesLoaded]);

  const onMovieCardMouseEnter = (id) => setCurrentMovieId(id);

  const onMovieCardMouseLeave = () => setCurrentMovieId(-1);

  const targetMoviesToShowByClick = targetMovies.slice(0, amountToDisplay);

  useEffect(() => {
    if (targetMovies.length <= amountToDisplay) {
      onMovieListUpdate(false);
    } else {
      onMovieListUpdate(true);
    }
  }, [targetMovies, amountToDisplay]);

  return (
    <div className="catalog__movies-list">
      {targetMoviesToShowByClick.map(({id, ...rest}) => getMovieCardComponent(id, rest, onMovieCardMouseEnter, onMovieCardMouseLeave, currentMovieId))}
    </div>
  );
};

MoviesList.propTypes = {
  targetMovies: PropTypes.arrayOf(movieProp).isRequired,
  amountToDisplay: PropTypes.number.isRequired,
  onMovieListUpdate: PropTypes.func.isRequired,
  isMoviesLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired
};

const mapStateToProps = ({movies, genre, isMoviesLoaded}, {match}) => {
  const {id} = match.params;

  const movie = getMovieById(movies, id);
  const similarMovies = getSimilarMovies(movies, movie);

  const targetMovies = id ? similarMovies : getMoviesByGenre(movies, genre);

  return {
    isMoviesLoaded,
    targetMovies
  };
};

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(loadMovieList());
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MoviesList));
