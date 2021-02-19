
import React from 'react';
import MovieCardDescription from '../movie-card-description/movie-card-description';
import MovieCardButtons from '../movie-card-buttons/movie-card-buttons';
import {posterProp, nameProp, genreProp, releasedProp} from '../props/movie-props';

const PromoMovieInfo = ({name, poster_image: poster, ...rest}) => (
  <div className="movie-card__info">
    <div className="movie-card__poster">
      <img src={poster} alt={name} width="218" height="327" />
    </div>

    <MovieCardDescription
      name={name}
      {...rest}
    >

      <MovieCardButtons />

    </MovieCardDescription>
  </div>
);

PromoMovieInfo.propTypes = {
  "poster_image": posterProp,
  "name": nameProp,
  "genre": genreProp,
  "released": releasedProp
};

export default PromoMovieInfo;
