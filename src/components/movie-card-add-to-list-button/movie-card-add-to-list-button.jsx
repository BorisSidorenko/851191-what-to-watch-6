import React from 'react';
import {useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {idProp} from '../props/movie-props';
import {addMovieToFavorite} from '../../api/api-actions';
import {markMovieAsFavoriteAction} from '../../store/action';
import {getSelectedMovie} from '../../store/data/selectors';
import {RoutePaths} from '../../utils/constatns';

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

const MovieCardAddToListButton = ({id, markMovieAsFavorite, isFavorite, onAddButtonClick}) => {
  const history = useHistory();

  const handleAddButtonClick = () => {
    onAddButtonClick(id, !isFavorite)
      .then(({data}) => markMovieAsFavorite(data))
      .catch(() => history.push(RoutePaths.SIGN_IN));
  };

  return (
    <button className="btn btn--list movie-card__button" type="button" onClick={handleAddButtonClick}>
      {isFavorite ? getSVGInList() : getSVGAddToList()}
      <span>My list</span>
    </button>
  );
};

MovieCardAddToListButton.propTypes = {
  id: idProp,
  isFavorite: PropTypes.bool.isRequired,
  onAddButtonClick: PropTypes.func.isRequired,
  markMovieAsFavorite: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const movie = getSelectedMovie(state);

  return ({
    id: movie.id,
    isFavorite: movie.is_favorite
  });
};

const mapDispatchToProps = (dispatch) => ({
  onAddButtonClick(movieId, isFavorite) {
    return dispatch(addMovieToFavorite(movieId, isFavorite));
  },
  markMovieAsFavorite(data) {
    dispatch(markMovieAsFavoriteAction(data));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieCardAddToListButton);
