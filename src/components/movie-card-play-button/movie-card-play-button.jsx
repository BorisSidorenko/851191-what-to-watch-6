import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory, Link} from 'react-router-dom';
import {RoutePaths} from '../../utils/constatns';
import {addRequestedPlayerPathAction} from '../../store/video-player/action';

const MovieCardPlayButton = () => {
  const {selectedMovie} = useSelector((state) => state.DATA);
  const {id} = selectedMovie;
  const history = useHistory();
  const playerPath = `${RoutePaths.PLAYER}/${id}`;

  const dispatch = useDispatch();

  const handlePlayButtonClick = () => dispatch(addRequestedPlayerPathAction(history.location.pathname));

  return (
    <Link to={playerPath} className="btn btn--play movie-card__button" onClick={handlePlayButtonClick}>
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </Link>
  );
};

export default MovieCardPlayButton;
