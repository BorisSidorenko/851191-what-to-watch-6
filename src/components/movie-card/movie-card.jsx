
import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import MovieCardInfo from '../movie-card-info/movie-card-info';

const MovieCard = ({background_image: background, name, ...rest}) => (
  <section className="movie-card">
    <div className="movie-card__bg">
      <img src={background} alt={name} />
    </div>

    <h1 className="visually-hidden">WTW</h1>

    <Header />

    <div className="movie-card__wrap">
      <MovieCardInfo
        name = {name}
        {...rest}
      />
    </div>
  </section>
);

MovieCard.propTypes = {
  "background_image": PropTypes.string.isRequired,
  "name": PropTypes.string.isRequired
};

export default MovieCard;
