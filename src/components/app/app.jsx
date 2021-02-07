import React from 'react';
import PropTypes from 'prop-types';
import Startup from '../startup/startup';

const App = (props) => {
  const {currentMovie, smallMovieCardsInfo} = props;
  return (
    <Startup
      currentMovie = {currentMovie}
      smallMovieCardsInfo = {smallMovieCardsInfo}
    />
  );
};

App.propTypes = {
  currentMovie: PropTypes.object.isRequired,
  smallMovieCardsInfo: PropTypes.array.isRequired
};

export default App;
