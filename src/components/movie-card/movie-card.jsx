import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({movieId, name, preview_image: preview, onMovieCardMouseEnter}) => {
  const handleCardMouseEnter = () => {
    onMovieCardMouseEnter(movieId);
  };

  return (
    <article onMouseEnter={handleCardMouseEnter} className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={preview} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{name}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  "movieId": PropTypes.number.isRequired,
  "preview_image": PropTypes.string.isRequired,
  "name": PropTypes.string.isRequired,
  "onMovieCardMouseEnter": PropTypes.func.isRequired
};

export default MovieCard;
