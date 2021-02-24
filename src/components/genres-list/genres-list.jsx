import React from 'react';
import PropTypes from 'prop-types';
import {movieProp, genreProp} from '../props/movie-props';
import {connect} from 'react-redux';

const Genre = ({genre}) => (
  <li className="catalog__genres-item">
    <a href="#" className="catalog__genres-link">{genre}</a>
  </li>
);

const GenresList = ({movies}) => {
  const allGenres = movies.map(({genre}) => genre);
  const uniqueGenres = [`All genres`, ...new Set(allGenres)];

  return (
    <ul className="catalog__genres-list">
      {uniqueGenres.map((genre, i) => <Genre key={i} genre={genre}/>)}
    </ul>
  );
};

const mapStateToProps = (state) => ({movies: state.movies});

Genre.propTypes = {
  genre: genreProp
};

GenresList.propTypes = {
  movies: PropTypes.arrayOf(movieProp)
};

export {GenresList};
export default connect(mapStateToProps, null)(GenresList);
