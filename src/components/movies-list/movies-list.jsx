import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MovieCard from '../movie-card/movie-card';
import {movieProp} from '../props/movie-props';
import {getMovieById, getSimilarMovies, getMoviesByGenre, getFavoriteMovies} from '../../utils/common';
import {loadMovieList} from '../../api/api-actions';
import {RoutePaths} from '../../utils/constatns';
import Loading from '../loading/loading';

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

  const targetMoviesToShowByClick = targetMovies && targetMovies.slice(0, amountToDisplay);

  useEffect(() => {
    if (targetMovies && targetMovies.length <= amountToDisplay) {
      onMovieListUpdate(false);
    } else {
      onMovieListUpdate(true);
    }
  }, [targetMovies, amountToDisplay]);

  return (
    <div className="catalog__movies-list">
      {isMoviesLoaded && targetMoviesToShowByClick ? targetMoviesToShowByClick.map(({id, ...rest}) => getMovieCardComponent(id, rest, onMovieCardMouseEnter, onMovieCardMouseLeave, currentMovieId)) : <Loading />}
    </div>
  );
};

MoviesList.propTypes = {
  targetMovies: PropTypes.arrayOf(movieProp),
  amountToDisplay: PropTypes.number.isRequired,
  onMovieListUpdate: PropTypes.func.isRequired,
  isMoviesLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired
};

const mapStateToProps = ({movies, genre, isMoviesLoaded}, {match, location}) => {
  const {id} = match.params;

  const movie = getMovieById(movies, id);

  let targetMovies;

  switch (location.pathname) {
    case RoutePaths.MY_LIST:
      targetMovies = getFavoriteMovies(movies);
      break;
    case RoutePaths.MAIN:
      targetMovies = getMoviesByGenre(movies, genre);
      break;
    default:
      targetMovies = getSimilarMovies(movies, movie);
      break;
  }

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
