import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MovieCardPlayButton from '../movie-card-play-button/movie-card-play-button';
import MovieCardAddToListButton from '../movie-card-add-to-list-button/movie-card-add-to-list-button';

const MovieCardButtons = ({isAuthtorized, reviewPageLink}) => (
  <div className="movie-card__buttons">
    <MovieCardPlayButton />
    <MovieCardAddToListButton />

    {isAuthtorized && reviewPageLink && <Link to={reviewPageLink} className="btn movie-card__button">Add review</Link> }

  </div>
);

MovieCardButtons.propTypes = {
  isAuthtorized: PropTypes.bool.isRequired,
  reviewPageLink: PropTypes.string
};

const mapStateToProps = ({USER}) => ({isAuthtorized: USER.isAuthtorized});

export default withRouter(connect(mapStateToProps)(MovieCardButtons));
