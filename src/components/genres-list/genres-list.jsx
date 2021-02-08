import React from 'react';
import {v4 as uuidv4} from 'uuid';
import {GENRES} from '../../utils/constatns';

const getGenreComponent = (genre) => {
  const [id] = React.useState(uuidv4);

  return (
    <li key={id} className="catalog__genres-item">
      <a href="#" className="catalog__genres-link">{genre}</a>
    </li>
  );
};

const GenresList = () => (
  <ul className="catalog__genres-list">
    {GENRES.map((genre) => getGenreComponent(genre))}
  </ul>
);

export default GenresList;
