
import React from 'react';
import PropTypes from 'prop-types';

const PromoMovieInfo = ({name, poster_image: poster, genre, released}) => (
  <div className="movie-card__info">
    <div className="movie-card__poster">
      <img src={poster} alt={name} width="218" height="327" />
    </div>

    <div className="movie-card__desc">
      <h2 className="movie-card__title">{name}</h2>
      <p className="movie-card__meta">
        <span className="movie-card__genre">{genre}</span>
        <span className="movie-card__year">{released}</span>
      </p>

      <div className="movie-card__buttons">
        <button className="btn btn--play movie-card__button" type="button">
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>Play</span>
        </button>
        <button className="btn btn--list movie-card__button" type="button">
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add"></use>
          </svg>
          <span>My list</span>
        </button>
      </div>
    </div>
  </div>
);

PromoMovieInfo.propTypes = {
  "poster_image": PropTypes.string.isRequired,
  "name": PropTypes.string.isRequired,
  "genre": PropTypes.string.isRequired,
  "released": PropTypes.number.isRequired
};

export default PromoMovieInfo;
