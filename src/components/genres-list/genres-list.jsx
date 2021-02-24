import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import classNames from 'classnames';
import {movieProp, genreProp} from '../props/movie-props';
import {ActionCreator} from '../../store/action';

const Genre = ({genre, onGenreClick, isCurrentGenre}) => {
  const handleGenreChange = (evt) => {
    evt.preventDefault();
    onGenreClick(genre);
  };

  return (
    <li className={classNames(`catalog__genres-item`, {
      "catalog__genres-item--active": isCurrentGenre
    })}>
      <a href="#" className="catalog__genres-link" onClick={handleGenreChange}>{genre}</a>
    </li>
  );
};

const GenresList = ({currentGenre, movies, onGenreClick}) => {
  const allGenres = movies.map(({genre}) => genre);
  const uniqueGenres = [`All genres`, ...new Set(allGenres)];

  return (
    <ul className="catalog__genres-list">
      {uniqueGenres.map((genre, i) => <Genre key={i} genre={genre} onGenreClick={onGenreClick} isCurrentGenre={currentGenre === genre}/>)}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  currentGenre: state.genre,
  movies: state.allMovies
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(selectedGenre) {
    dispatch(ActionCreator.changeGenre(selectedGenre));
    dispatch(ActionCreator.loadMovieList());
  }
});

Genre.propTypes = {
  genre: genreProp,
  onGenreClick: PropTypes.func.isRequired,
  isCurrentGenre: PropTypes.bool.isRequired
};

GenresList.propTypes = {
  movies: PropTypes.arrayOf(movieProp),
  onGenreClick: PropTypes.func.isRequired,
  currentGenre: PropTypes.string.isRequired
};

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
