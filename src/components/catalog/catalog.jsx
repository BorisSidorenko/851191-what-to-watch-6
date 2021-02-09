import React from 'react';
import PropTypes from 'prop-types';
import GenresList from '../genres-list/genres-list';
import MoviesList from '../movies-list/movies-list';
import CatalogButton from '../catalog-button/catalog-button';

const Catalog = ({allMovies, showGenres}) => (
  <section className="catalog">
    <h2 className="catalog__title visually-hidden">Catalog</h2>

    {showGenres && <GenresList />}

    <MoviesList
      allMovies = {allMovies}
    />

    <CatalogButton />

  </section>
);

Catalog.defaultProps = {
  showGenres: true
};

Catalog.propTypes = {
  allMovies: PropTypes.array.isRequired,
  showGenres: PropTypes.bool.isRequired
};

export default Catalog;
