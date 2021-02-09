import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({name, preview_image: preview}) => (
  <article className="small-movie-card catalog__movies-card">
    <div className="small-movie-card__image">
      <img src={preview} alt={name} width="280" height="175" />
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href="movie-page.html">{name}</a>
    </h3>
  </article>
);

MovieCard.propTypes = {
  "preview_image": PropTypes.string.isRequired,
  "name": PropTypes.string.isRequired
};

export default MovieCard;
