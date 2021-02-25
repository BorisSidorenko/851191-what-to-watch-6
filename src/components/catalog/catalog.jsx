import React from 'react';
import PropTypes from 'prop-types';
import GenresList from '../genres-list/genres-list';
import MoviesList from '../movies-list/movies-list';
import ShowMore from '../show-more/show-more';

const Catalog = ({catalogClass, showGenres = true, shwoButton = true, children}) => (
  <section className={catalogClass}>
    {children}

    {showGenres && <GenresList />}

    <MoviesList />

    {shwoButton && <ShowMore />}

  </section>
);

Catalog.propTypes = {
  catalogClass: PropTypes.string.isRequired,
  showGenres: PropTypes.bool,
  shwoButton: PropTypes.bool,
  children: PropTypes.node
};

export default Catalog;
