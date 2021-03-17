import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {getRequestedPlayerPath} from '../../store/video-player/selectors';

const ExitButton = ({requestedPlayerPath}) => {
  const history = useHistory();

  const handleExitButtonClick = () => {
    history.push(requestedPlayerPath);
  };

  return <button type="button" className="player__exit" onClick={handleExitButtonClick}>Exit</button>;
};

ExitButton.propTypes = {
  requestedPlayerPath: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({requestedPlayerPath: getRequestedPlayerPath(state)});

export default connect(mapStateToProps)(ExitButton);
