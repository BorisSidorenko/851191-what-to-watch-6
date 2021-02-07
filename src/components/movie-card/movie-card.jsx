
import React from 'react';
import Header from '../header/header';
import MovieCardInfo from '../movie-card-info/movie-card-info';

const MovieCard = () => {
  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header />

      <div className="movie-card__wrap">
        <MovieCardInfo />
      </div>
    </section>
  );
};

export default MovieCard;
