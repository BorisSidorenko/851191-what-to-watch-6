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
        <h3 className="small-movie-card__title">{name}</h3>
      </Link>
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
