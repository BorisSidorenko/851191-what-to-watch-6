import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {RoutePaths} from '../../utils/constatns';

const MovieCard = ({movieId, name, preview_image: preview, onMovieCardMouseEnter}) => {
  const handleCardMouseEnter = () => {
    onMovieCardMouseEnter(movieId);
  };

  return (
    <article onMouseEnter={handleCardMouseEnter} className="small-movie-card catalog__movies-card">
      <Link className="small-movie-card__link" to={`${RoutePaths.MOVIE_PAGE}/${movieId}`}>
        <div className="small-movie-card__image">
          <img src={preview} alt={name} width="280" height="175" />
        </div>
      </Link>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`${RoutePaths.MOVIE_PAGE}/${movieId}`}>{name}</Link>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  "movieId": PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  "preview_image": PropTypes.string.isRequired,
  "name": PropTypes.string.isRequired,
  "onMovieCardMouseEnter": PropTypes.func.isRequired
};

export default MovieCard;
