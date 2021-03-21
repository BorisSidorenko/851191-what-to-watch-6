import React from 'react';
import PropTypes from 'prop-types';
import MovieCardReview from '../movie-card-review/movie-card-review';

const MovieCardReviews = ({reviews}) => {
  const leftColumnReviewsCount = Math.ceil(reviews.length / 2);
  const leftColumnReviews = reviews.slice(0, leftColumnReviewsCount);
  const rightColumnReviews = reviews.slice(leftColumnReviewsCount);

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {leftColumnReviews.map(({id, ...rest}) => <MovieCardReview key={id} {...rest} />)}
      </div>
      <div className="movie-card__reviews-col">
        {rightColumnReviews.map(({id, ...rest}) => <MovieCardReview key={id} {...rest} />)}
      </div>
    </div>
  );
};

MovieCardReviews.propTypes = {
  reviews: PropTypes.array.isRequired
};

export default MovieCardReviews;
