import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {genreProp} from '../props/movie-props';
import {DEFAULT_CARDS_COUNT_TO_DISPLAY} from '../../utils/constatns';

const Genre = ({genre, onGenreClick, isCurrentGenre, onGenreChange}) => {
  const handleGenreChange = (evt) => {
    evt.preventDefault();
    onGenreClick(genre);
    onGenreChange(DEFAULT_CARDS_COUNT_TO_DISPLAY);
  };

  return (
    <li className={classNames(`catalog__genres-item`, {
      "catalog__genres-item--active": isCurrentGenre
    })}>
      <Link to="#" className="catalog__genres-link" onClick={handleGenreChange}>{genre}</Link>
    </li>
  );
};

Genre.propTypes = {
  genre: genreProp,
  onGenreClick: PropTypes.func.isRequired,
  onGenreChange: PropTypes.func.isRequired,
  isCurrentGenre: PropTypes.bool.isRequired
};

export default Genre;
