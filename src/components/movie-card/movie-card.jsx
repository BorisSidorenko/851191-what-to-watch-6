import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player';
import {RoutePaths} from '../../utils/constatns';
import {idProp, previewProp, nameProp, genreProp} from '../props/movie-props';
import {ActionCreator} from '../../store/action';

const VIDEO_PREVIEW_DELAY = 1000;

const MovieCardImage = ({preview, name}) => <img src={preview} alt={name} width="280" height="175" />;

const MovieCardTitle = ({movieId, name}) => (
  <h3 className="small-movie-card__title">
    <Link className="small-movie-card__link" to={`${RoutePaths.MOVIE_PAGE}/${movieId}`}>{name}</Link>
  </h3>
);

const MovieCard = ({movieId, name, genre, preview_image: preview, onMovieCardMouseEnter, onMovieCardMouseLeave, currentMovieId, onMovieCardClick}) => {
  const isNeedToPlay = movieId === currentMovieId;
  const [delayHandler, setDelayHandler] = useState(null);

  const handleCardMouseEnter = () => {
    setDelayHandler(setTimeout(() => {
      onMovieCardMouseEnter(movieId);

    }, VIDEO_PREVIEW_DELAY));
  };

  const handleCardMouseLeave = () => {
    clearTimeout(delayHandler);
    onMovieCardMouseLeave();
  };

  const handleMovieCardClick = () => {
    const param = {
      clickedMovieId: movieId,
      similarGenre: genre
    };

    onMovieCardClick(param);
  };

  return (
    <article onMouseEnter={handleCardMouseEnter} onMouseLeave={handleCardMouseLeave} onClick={handleMovieCardClick} className="small-movie-card catalog__movies-card">
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
  "genre": genreProp,
  "onMovieCardMouseEnter": PropTypes.func.isRequired,
  "onMovieCardMouseLeave": PropTypes.func.isRequired,
  "onMovieCardClick": PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onMovieCardClick(param) {
    dispatch(ActionCreator.loadSimilarMovies(param));
  }
});

export {MovieCard};
export default connect(null, mapDispatchToProps)(MovieCard);
