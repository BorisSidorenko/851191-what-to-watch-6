import React from 'react';
import {GENRES} from '../../utils/constatns';

const GenresList = () => {
  return (
    <ul className="catalog__genres-list">
      {GENRES.map((genre, i) => {
        return (
          <li key={i} className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">{genre}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default GenresList;
