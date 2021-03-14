import React, {memo} from 'react';
import {Link} from 'react-router-dom';
import {idProp, nameProp} from '../props/movie-props';
import {RoutePaths} from '../../utils/constatns';

const MovieCardTitle = ({movieId, name}) => (
  <h3 className="small-movie-card__title">
    <Link className="small-movie-card__link" to={`${RoutePaths.MOVIE_PAGE}/${movieId}`}>{name}</Link>
  </h3>
);

MovieCardTitle.propTypes = {
  movieId: idProp,
  name: nameProp
};

export default memo(MovieCardTitle);
