import React from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {addMovieToFavorite} from '../../api/api-actions';
import {markMovieAsFavoriteAction} from '../../store/data/action';
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

const MovieCardAddToListButton = () => {
  const {selectedMovie} = useSelector((state) => state.DATA);
  const {id, is_favorite: isFavorite} = selectedMovie;
  const history = useHistory();
  const dispatch = useDispatch();

  const handleAddButtonClick = () => {
    dispatch(addMovieToFavorite(id, !isFavorite))
      .then(({data}) => dispatch(markMovieAsFavoriteAction(data)))
      .catch(() => history.push(RoutePaths.SIGN_IN));
  };

  return (
    <button className="btn btn--list movie-card__button" type="button" onClick={handleAddButtonClick}>
      {isFavorite ? getSVGInList() : getSVGAddToList()}
      <span>My list</span>
    </button>
  );
};

export default MovieCardAddToListButton;
