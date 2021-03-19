import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import classNames from 'classnames';
import {genreProp} from '../props/movie-props';
import {changeGenreAction} from '../../store/action';
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

const GenresList = ({onGenreChange}) => {
  const {currentGenre, movies} = useSelector((state) => state.DATA);
  const allGenres = movies.map(({genre}) => genre);
  const uniqueGenres = [`All genres`, ...new Set(allGenres)];

  const dispatch = useDispatch();

  const onGenreClick = (selectedGenre) => {
    dispatch(changeGenreAction(selectedGenre));
  };

  const getGenreComponent = (genre, i) => <Genre key={i} genre={genre} onGenreClick={onGenreClick} isCurrentGenre={currentGenre === genre} onGenreChange={onGenreChange}/>;

  return (
    <ul className="catalog__genres-list">
      {uniqueGenres.map((genre, i) => getGenreComponent(genre, i))}
    </ul>
  );
};

Genre.propTypes = {
  genre: genreProp,
  onGenreClick: PropTypes.func.isRequired,
  onGenreChange: PropTypes.func.isRequired,
  isCurrentGenre: PropTypes.bool.isRequired
};

GenresList.propTypes = {
  onGenreChange: PropTypes.func.isRequired
};

export default GenresList;
