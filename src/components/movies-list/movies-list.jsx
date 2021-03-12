import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MovieCard from '../movie-card/movie-card';
import {movieProp} from '../props/movie-props';
import {getMovieByPathName} from '../../utils/common';
import {loadMovieList} from '../../api/api-actions';
import {ActionCreator} from '../../store/action';
import Loading from '../loading/loading';
import NothingToDisplay from '../nothing-to-display/nothing-to-display';

const getMovieCardComponent = (id, rest, onMovieCardMouseEnter, onMovieCardMouseLeave, currentMovieId) => {
  return <MovieCard key={id} movieId={id} {...rest} onMovieCardMouseEnter={onMovieCardMouseEnter} onMovieCardMouseLeave={onMovieCardMouseLeave} currentMovieId={currentMovieId} />;
};

const MoviesList = ({targetMovies, amountToDisplay, onMovieListUpdate, onLoadData, loadMovies}) => {
  const [currentMovieId, setCurrentMovieId] = useState(-1);
  const [needToLoad, setNeedToLoad] = useState(true);

  useEffect(() => {
    if (needToLoad) {
      onLoadData()
      .then(({data}) => loadMovies(data));
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
  targetMovies: PropTypes.arrayOf(movieProp),
  amountToDisplay: PropTypes.number.isRequired,
  onMovieListUpdate: PropTypes.func.isRequired,
  loadMovies: PropTypes.func.isRequired,
  onLoadData: PropTypes.func.isRequired
};

const mapStateToProps = (state, componentProps) => {
  const targetMovies = getMovieByPathName(state, componentProps);

  return {
    targetMovies
  };
};

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    return dispatch(loadMovieList());
  },
  loadMovies(data) {
    dispatch(ActionCreator.loadMovies(data));
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MoviesList));
