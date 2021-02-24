import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MovieCard from '../movie-card/movie-card';
import {movieProp} from '../props/movie-props';

const getMovieCardComponent = (id, rest, onMovieCardMouseEnter, onMovieCardMouseLeave, currentMovieId) => {
  return <MovieCard key={id} movieId={id} {...rest} onMovieCardMouseEnter={onMovieCardMouseEnter} onMovieCardMouseLeave={onMovieCardMouseLeave} currentMovieId={currentMovieId} />;
};

const MoviesList = ({movies}) => {
  const [currentMovieId, setCurrentMovieId] = useState(-1);

  const onMovieCardMouseEnter = (id) => setCurrentMovieId(id);

  const onMovieCardMouseLeave = () => setCurrentMovieId(-1);

  return (
    <div className="catalog__movies-list">
      {movies.map(({id, ...rest}) => getMovieCardComponent(id, rest, onMovieCardMouseEnter, onMovieCardMouseLeave, currentMovieId))}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(movieProp).isRequired
};

const mapStateToProps = (state) => ({movies: state.filteredMoviesByGenre});

export {MoviesList};
export default connect(mapStateToProps)(MoviesList);
