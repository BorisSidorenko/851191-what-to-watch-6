import React from 'react';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import {REVIEW_DATE_FORMAT} from '../../utils/constatns';

const getReviewComponent = ({user, comment, date, rating}) => (
  <div className="review">
    <blockquote className="review__quote">
      <p className="review__text">{comment}</p>

      <footer className="review__details">
        <cite className="review__author">{user.name}</cite>
        <time className="review__date" dateTime={`${dayjs(date).format(REVIEW_DATE_FORMAT.DEFAULT)}`}>{dayjs(date).format(REVIEW_DATE_FORMAT.MONTH_FULL_DESC)}</time>
      </footer>
    </blockquote>

    <div className="review__rating">{rating}</div>
  </div>
);

const MovieCardReviews = ({reviews}) => (
  <div className="movie-card__reviews movie-card__row">
    <div className="movie-card__reviews-col">
      {reviews.map(getReviewComponent)}
    </div>
  </div>
);

MovieCardReviews.propTypes = {
  reviews: PropTypes.array.isRequired
};

export default MovieCardReviews;
