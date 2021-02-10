import React from 'react';
import PropTypes from 'prop-types';
import {getRatingDescription} from '../../utils/common';

const MovieCardOverview = ({rating, description, director, starring, scores_count: score}) => (
  <>
    <div className="movie-rating">
      <div className="movie-rating__score">{rating}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">{getRatingDescription(rating)}</span>
        <span className="movie-rating__count">{score} ratings</span>
      </p>
    </div>

    <div className="movie-card__text">
      <p>{description}</p>

      <p className="movie-card__director"><strong>Director: {director}</strong></p>

      <p className="movie-card__starring"><strong>Starring: {starring}</strong></p>
    </div>
  </>
);

MovieCardOverview.propTypes = {
  "rating": PropTypes.number.isRequired,
  "description": PropTypes.string.isRequired,
  "director": PropTypes.string.isRequired,
  "starring": PropTypes.string.isRequired,
  "scores_count": PropTypes.number.isRequired
};

export default MovieCardOverview;
