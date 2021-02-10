
import React from 'react';
import PropTypes from 'prop-types';
import MovieCardDescription from '../movie-card-description/movie-card-description';
import MovieCardButtons from '../movie-card-buttons/movie-card-buttons';

const PromoMovieInfo = ({name, poster_image: poster, ...rest}) => (
  <div className="movie-card__info">
    <div className="movie-card__poster">
      <img src={poster} alt={name} width="218" height="327" />
    </div>

    <MovieCardDescription
      name = {name}
      {...rest}
    >

      <MovieCardButtons />

    </MovieCardDescription>
  </div>
);

PromoMovieInfo.propTypes = {
  "poster_image": PropTypes.string.isRequired,
  "name": PropTypes.string.isRequired,
  "genre": PropTypes.string.isRequired,
  "released": PropTypes.number.isRequired
};

export default PromoMovieInfo;
