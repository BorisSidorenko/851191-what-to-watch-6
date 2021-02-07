import React from 'react';
import PropTypes from 'prop-types';
import Startup from '../startup/startup';

const App = (props) => {
  const {currentMovie, allMovies} = props;
  return (
    <Startup
      currentMovie = {currentMovie}
      allMovies = {allMovies}
    />
  );
};

App.propTypes = {
  currentMovie: PropTypes.object.isRequired,
  allMovies: PropTypes.array.isRequired
};

export default App;
