import React from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import {changeGenreAction} from '../../store/data/action';
import Genre from '../genre/genre';

const GenresList = ({onGenreChange}) => {
  const {currentGenre, movies} = useSelector((state) => state.DATA);
  const allGenres = movies.map(({genre}) => genre);
  const uniqueGenres = [`All genres`, ...new Set(allGenres)];

  const dispatch = useDispatch();

  const onGenreClick = (selectedGenre) => {
    dispatch(changeGenreAction(selectedGenre));
  };

  const getGenreComponent = (genre, i) => <Genre key={`${genre}-${i}`} genre={genre} onGenreClick={onGenreClick} isCurrentGenre={currentGenre === genre} onGenreChange={onGenreChange}/>;

  return (
    <ul className="catalog__genres-list">
      {uniqueGenres.map((genre, i) => getGenreComponent(genre, i))}
    </ul>
  );
};

GenresList.propTypes = {
  onGenreChange: PropTypes.func.isRequired
};

export default GenresList;
