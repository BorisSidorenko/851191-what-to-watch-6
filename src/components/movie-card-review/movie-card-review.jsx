import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import {ReviewDateFormat} from '../../utils/constatns';

const MovieCardReview = ({user, comment, date, rating}) => {
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

MovieCardReview.propTypes = {
  user: PropTypes.object.isRequired,
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

export default MovieCardReview;
