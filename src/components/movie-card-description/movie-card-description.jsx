import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {nameProp, genreProp, releasedProp} from '../props/movie-props';
import MovieCardButtons from '../movie-card-buttons/movie-card-buttons';

const MovieCardDescription = ({name, genre, released, reviewPageLink}) => (
  <div className="movie-card__desc">
    <h2 className="movie-card__title">{name}</h2>
    <p className="movie-card__meta">
      <span className="movie-card__genre">{genre}</span>
      <span className="movie-card__year">{released}</span>
    </p>

    <MovieCardButtons reviewPageLink={reviewPageLink}/>

  </div>
);

MovieCardDescription.propTypes = {
  reviewPageLink: PropTypes.string
};

MovieCardDescription.propTypes = {
  name: nameProp,
  genre: genreProp,
  released: releasedProp
};

export default memo(MovieCardDescription);
