import React from 'react';
import PropTypes from 'prop-types';
import GenresList from '../genres-list/genres-list';
import MoviesList from '../movies-list/movies-list';
import CatalogButton from '../catalog-button/catalog-button';

const Catalog = ({allMovies, catalogClass, showGenres, shwoButton, children}) => (
  <section className={catalogClass}>
    {children}

    {showGenres && <GenresList />}

    <MoviesList
      allMovies={allMovies}
    />

    {shwoButton && <CatalogButton />}

  </section>
);

Catalog.defaultProps = {
  showGenres: true,
  shwoButton: true
};

Catalog.propTypes = {
  allMovies: PropTypes.array.isRequired,
  catalogClass: PropTypes.string.isRequired,
  showGenres: PropTypes.bool.isRequired,
  shwoButton: PropTypes.bool.isRequired,
  children: PropTypes.node
};

export default Catalog;
