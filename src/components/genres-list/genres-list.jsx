import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import classNames from 'classnames';
import {movieProp, genreProp} from '../props/movie-props';
import {ActionCreator} from '../../store/action';
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

const GenresList = ({currentGenre, movies, onGenreClick, onGenreChange}) => {
  const allGenres = movies.map(({genre}) => genre);
  const uniqueGenres = [`All genres`, ...new Set(allGenres)];

  const getGenreComponent = (genre, i) => <Genre key={i} genre={genre} onGenreClick={onGenreClick} isCurrentGenre={currentGenre === genre} onGenreChange={onGenreChange}/>;

  return (
    <ul className="catalog__genres-list">
      {uniqueGenres.map((genre, i) => getGenreComponent(genre, i))}
    </ul>
  );
};

const mapStateToProps = ({DATA}) => ({
  currentGenre: DATA.genre,
  movies: DATA.movies
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(selectedGenre) {
    dispatch(ActionCreator.changeGenre(selectedGenre));
  }
});

Genre.propTypes = {
  genre: genreProp,
  onGenreClick: PropTypes.func.isRequired,
  onGenreChange: PropTypes.func.isRequired,
  isCurrentGenre: PropTypes.bool.isRequired
};

GenresList.propTypes = {
  movies: PropTypes.arrayOf(movieProp),
  onGenreClick: PropTypes.func.isRequired,
  onGenreChange: PropTypes.func.isRequired,
  currentGenre: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
