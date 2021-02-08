import React from 'react';
import {nanoid} from '../../vendor/nanoid';
import {GENRES} from '../../utils/constatns';

const getGenreComponent = (genre) => {
  const [id] = React.useState(nanoid);

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
