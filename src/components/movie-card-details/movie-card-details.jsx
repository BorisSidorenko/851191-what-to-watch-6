import React from 'react';
import {directorProp, genreProp, releasedProp, starringProp, runTimeProp} from '../props/movie-props';


const MovieCardDetails = ({director, starring, run_time: duration, genre, released}) => (
  <div className="movie-card__text movie-card__row">
    <div className="movie-card__text-col">
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Director</strong>
        <span className="movie-card__details-value">{director.join(`, `)}</span>
      </p>
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Starring</strong>
        <span className="movie-card__details-value">
          {starring.join(`, `)}
        </span>
      </p>
    </div>

    <div className="movie-card__text-col">
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Run Time</strong>
        <span className="movie-card__details-value">{duration}</span>
      </p>
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Genre</strong>
        <span className="movie-card__details-value">{genre}</span>
      </p>
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Released</strong>
        <span className="movie-card__details-value">{released}</span>
      </p>
    </div>
  </div>
);

MovieCardDetails.propTypes = {
  "released": releasedProp,
  "genre": genreProp,
  "director": directorProp,
  "starring": starringProp,
  "run_time": runTimeProp
};


export default MovieCardDetails;
