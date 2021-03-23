import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import MovieCard from '../movie-card/movie-card';
import {getMovieByPathName} from '../../utils/common';
import {loadMovieList} from '../../api/api-actions';
import {loadMoviesAction} from '../../store/action';
import Loading from '../loading/loading';
import NothingToDisplay from '../nothing-to-display/nothing-to-display';

const getMovieCardComponent = (id, rest, onMovieCardMouseEnter, onMovieCardMouseLeave, currentMovieId) => {
  return <MovieCard key={id} movieId={id} {...rest} onMovieCardMouseEnter={onMovieCardMouseEnter} onMovieCardMouseLeave={onMovieCardMouseLeave} currentMovieId={currentMovieId} />;
};

const MoviesList = ({amountToDisplay, onMovieListUpdate, location}) => {
  const {movies, genre, selectedMovie} = useSelector((state) => state.DATA);
  const targetMovies = getMovieByPathName(movies, genre, selectedMovie, location.pathname);
  const [currentMovieId, setCurrentMovieId] = useState(-1);
  const [needToLoad, setNeedToLoad] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (needToLoad) {
      dispatch(loadMovieList())
        .then(({data}) => dispatch(loadMoviesAction(data)));
    }

    return () => setNeedToLoad(false);
  }, []);

  const onMovieCardMouseEnter = (id) => setCurrentMovieId(id);

  const onMovieCardMouseLeave = () => setCurrentMovieId(-1);

  const targetMoviesToShowByClick = targetMovies && targetMovies.slice(0, amountToDisplay);

  const renderTargetMovies = () => {
    if (targetMoviesToShowByClick.length > 0) {
      return targetMoviesToShowByClick.map(({id, ...rest}) => getMovieCardComponent(id, rest, onMovieCardMouseEnter, onMovieCardMouseLeave, currentMovieId));
    } else {
      return <NothingToDisplay />;
    }
  };

  useEffect(() => {
    if (targetMovies && targetMovies.length <= amountToDisplay) {
      onMovieListUpdate(false);
    } else {
      onMovieListUpdate(true);
    }
  }, [targetMovies, amountToDisplay]);

  return (
    <div className="catalog__movies-list">
      {needToLoad && targetMoviesToShowByClick ? renderTargetMovies() : <Loading />}
    </div>
  );
};

MoviesList.propTypes = {
  amountToDisplay: PropTypes.number.isRequired,
  location: PropTypes.object.isRequired,
  onMovieListUpdate: PropTypes.func.isRequired
};

export default withRouter(MoviesList);
