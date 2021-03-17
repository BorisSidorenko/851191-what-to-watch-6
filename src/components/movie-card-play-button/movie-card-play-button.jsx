import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {getSelectedMovie} from '../../store/data/selectors';
import {RoutePaths} from '../../utils/constatns';
import {idProp} from '../props/movie-props';
import {ActionCreator} from '../../store/action';

const MovieCardPlayButton = ({id, onRequestedPlayerPath}) => {
  const history = useHistory();
  const playerPath = `${RoutePaths.PLAYER}/${id}`;

  const handlePlayButtonClick = () => {
    onRequestedPlayerPath(history.location.pathname);
    history.push(playerPath);
  };

  return (
    <button className="btn btn--play movie-card__button" type="button" onClick={handlePlayButtonClick}>
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </button>
  );
};

MovieCardPlayButton.propTypes = {
  id: idProp,
  onRequestedPlayerPath: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({id: getSelectedMovie(state).id});

const mapDispatchToProps = (dispatch) => ({
  onRequestedPlayerPath(path) {
    dispatch(ActionCreator.addRequestedPlayerPath(path));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieCardPlayButton);
