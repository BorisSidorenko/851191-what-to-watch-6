import React from 'react';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import {ReviewDateFormat} from '../../utils/constatns';

const getReviewComponent = ({user, comment, date, rating}) => {
  const dayjsDate = dayjs(date);

  const reviewDateDefaultFormat = dayjsDate.format(ReviewDateFormat.DEFAULT);
  const reviewDateMonthFormat = dayjsDate.format(ReviewDateFormat.MONTH_FULL_DESC);

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime={reviewDateDefaultFormat}>{reviewDateMonthFormat}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
};

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
