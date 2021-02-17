import React from 'react';
import PropTypes from 'prop-types';
import {GENRES} from '../../utils/constatns';

const Genre = ({genre}) => (
  <li className="catalog__genres-item">
    <a href="#" className="catalog__genres-link">{genre}</a>
  </li>
);

const GenresList = () => (
  <ul className="catalog__genres-list">
    {GENRES.map((genre, i) => <Genre key={i} genre={genre}/>)}
  </ul>
);

Genre.propTypes = {
  genre: PropTypes.string.isRequired
};

export default GenresList;
