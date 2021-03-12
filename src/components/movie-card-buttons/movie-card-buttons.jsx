import React from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addMovieToFavorite} from '../../api/api-actions';
import {ActionCreator} from '../../store/action';
import {idProp} from '../props/movie-props';

const getSVGInList = () => (
  <svg viewBox="0 0 18 14" width="18" height="14">
    <use xlinkHref="#in-list"></use>
  </svg>
);

const getSVGAddToList = () => (
  <svg viewBox="0 0 19 20" width="19" height="20">
    <use xlinkHref="#add"></use>
  </svg>
);

const MovieCardButtons = ({isAuthtorized, id, isFavorite, children, onAddButtonClick, markMovieAsFavorite}) => {
  const handleAddButtonClick = () => {
    onAddButtonClick(id, !isFavorite)
      .then(({data}) => markMovieAsFavorite(data))
      .catch(() => {});
  };

  return (
    <div className="movie-card__buttons">
      <button className="btn btn--play movie-card__button" type="button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
      <button className="btn btn--list movie-card__button" type="button" onClick={handleAddButtonClick}>
        {isFavorite ? getSVGInList() : getSVGAddToList()}
        <span>My list</span>
      </button>

      {isAuthtorized && children}

    </div>
  );
};

MovieCardButtons.propTypes = {
  id: idProp,
  isFavorite: PropTypes.bool.isRequired,
  onAddButtonClick: PropTypes.func.isRequired,
  markMovieAsFavorite: PropTypes.func.isRequired,
  isAuthtorized: PropTypes.bool.isRequired,
  children: PropTypes.element
};

const mapStateToProps = ({isAuthtorized, selectedMovie}) => ({
  isAuthtorized,
  id: selectedMovie.id,
  isFavorite: selectedMovie.is_favorite
});

const mapDispatchToProps = (dispatch) => ({
  onAddButtonClick(movieId, isFavorite) {
    return dispatch(addMovieToFavorite(movieId, isFavorite));
  },
  markMovieAsFavorite(data) {
    dispatch(ActionCreator.markMovieAsFavorite(data));
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieCardButtons));
