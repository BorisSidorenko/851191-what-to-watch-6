import React from 'react';
import PropTypes from 'prop-types';

const MovieCardDescription = ({name, genre, released, children}) => (
  <div className="movie-card__desc">
    <h2 className="movie-card__title">{name}</h2>
    <p className="movie-card__meta">
      <span className="movie-card__genre">{genre}</span>
      <span className="movie-card__year">{released}</span>
    </p>

    {children}

  </div>
);

MovieCardDescription.propTypes = {
  children: PropTypes.element.isRequired
};

MovieCardDescription.propTypes = {
  "name": PropTypes.string.isRequired,
  "genre": PropTypes.string.isRequired,
  "released": PropTypes.number.isRequired
};

export default MovieCardDescription;
