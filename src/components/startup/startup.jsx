import React from 'react';
import PropTypes from 'prop-types';
import GenresList from '../genres-list/genres-list';
import MovieCard from '../movie-card/movie-card';
import MoviesList from '../movies-list/movies-list';
import Footer from '../footer/footer';


const Startup = (props) => {
  const {currentMovie, allMovies} = props;
  return (
    <>
      <MovieCard
        currentMovie = {currentMovie}
      />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList />

          <div className="catalog__movies-list">
            <MoviesList
              allMovies = {allMovies}
            />
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

Startup.propTypes = {
  currentMovie: PropTypes.object.isRequired,
  allMovies: PropTypes.array.isRequired
};

export default Startup;
