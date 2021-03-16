import React from 'react';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {getSelectedMovie} from '../../store/data/selectors';
import {RoutePaths} from '../../utils/constatns';
import {idProp} from '../props/movie-props';

const MovieCardPlayButton = ({id}) => {
  const history = useHistory();
  const playerPath = `${RoutePaths.PLAYER}/${id}`;

  const handlePlayButtonClick = () => {
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
  id: idProp
};

const mapStateToProps = (state) => ({id: getSelectedMovie(state).id});

export default connect(mapStateToProps)(MovieCardPlayButton);
