import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import MovieCardImage from '../movie-card-image/movie-card-image';
import MovieCardTitle from '../movie-card-title/movie-card-title';
import VideoPlayer from '../video-player/video-player';
import {RoutePaths} from '../../utils/constatns';
import {idProp, previewProp, nameProp} from '../props/movie-props';

const MovieCard = ({movieId, name, preview_image: preview, onMovieCardMouseEnter, onMovieCardMouseLeave, currentMovieId}) => {
  const isNeedToPlay = movieId === currentMovieId;

  const handleCardMouseEnter = (id) => onMovieCardMouseEnter(id);

  const handleCardMouseLeave = () => onMovieCardMouseLeave();

  return (
    <article onMouseEnter={() => handleCardMouseEnter(movieId)} onMouseLeave={handleCardMouseLeave} className="small-movie-card catalog__movies-card">
      <Link className="small-movie-card__link" to={`${RoutePaths.MOVIE_PAGE}/${movieId}`}>
        <div className="small-movie-card__image">
          {isNeedToPlay ? <VideoPlayer movieId={movieId} isPreview={true}/> : <MovieCardImage preview={preview} name={name}/>}
        </div>
      </Link>
      {!isNeedToPlay && <MovieCardTitle movieId={movieId} name={name}/>}
    </article>
  );
};

MovieCardImage.propTypes = {
  preview: previewProp,
  name: nameProp
};

MovieCardTitle.propTypes = {
  movieId: idProp,
  name: nameProp
};

MovieCard.propTypes = {
  "movieId": idProp,
  "currentMovieId": idProp,
  "preview_image": previewProp,
  "name": nameProp,
  "onMovieCardMouseEnter": PropTypes.func.isRequired,
  "onMovieCardMouseLeave": PropTypes.func.isRequired
};

export default MovieCard;
