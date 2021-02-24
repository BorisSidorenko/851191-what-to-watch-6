import React from 'react';
import {GENRES} from '../../utils/constatns';
import {genreProp} from '../props/movie-props';

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
  genre: genreProp
};

export default GenresList;
