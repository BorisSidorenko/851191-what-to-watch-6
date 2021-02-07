
import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import MovieCardInfo from '../movie-card-info/movie-card-info';

const MovieCard = (props) => {
  const {poster, background, name, genre, year} = props.currentMovie;
  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={background} alt={name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header />

      <div className="movie-card__wrap">
        <MovieCardInfo
          poster = {poster}
          name = {name}
          genre = {genre}
          year = {year}
        />
      </div>
    </section>
  );
};

MovieCard.propTypes = {
  currentMovie: PropTypes.object.isRequired
};

export default MovieCard;
