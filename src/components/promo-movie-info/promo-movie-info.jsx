
import React, {memo} from 'react';
import MovieCardDescription from '../movie-card-description/movie-card-description';
import {posterProp, nameProp, releasedProp} from '../props/movie-props';

const PromoMovieInfo = ({name, poster, ...rest}) => (
  <div className="movie-card__info">
    <div className="movie-card__poster">
      <img src={poster} alt={name} width="218" height="327" />
    </div>

    <MovieCardDescription
      name={name}
      {...rest}
    />

  </div>
);

PromoMovieInfo.propTypes = {
  poster: posterProp,
  name: nameProp,
  released: releasedProp
};

export default memo(PromoMovieInfo);
