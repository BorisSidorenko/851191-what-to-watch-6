import React from 'react';
import PropTypes from 'prop-types';
import GenresList from '../genres-list/genres-list';
import MoviesList from '../movies-list/movies-list';

const Catalog = ({allMovies}) => (
  <section className="catalog">
    <h2 className="catalog__title visually-hidden">Catalog</h2>

    <GenresList />
    <MoviesList
      allMovies = {allMovies}
    />

    <div className="catalog__more">
      <button className="catalog__button" type="button">Show more</button>
    </div>
  </section>
);

Catalog.propTypes = {
  allMovies: PropTypes.array.isRequired
};

export default Catalog;
