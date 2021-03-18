import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getRequestedPlayerPath} from '../../store/video-player/selectors';

const ExitButton = ({requestedPlayerPath}) => <Link to={requestedPlayerPath} className="btn player__exit">Exit</Link>;

ExitButton.propTypes = {
  requestedPlayerPath: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({requestedPlayerPath: getRequestedPlayerPath(state)});

export default connect(mapStateToProps)(ExitButton);
