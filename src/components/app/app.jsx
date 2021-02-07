import React from 'react';
import PropTypes from 'prop-types';
import Startup from '../startup/startup';

const App = (props) => {
  const {smallMovieCardsInfo} = props;
  return (
    <Startup
      smallMovieCardsInfo = {smallMovieCardsInfo}
    />
  );
};

App.propTypes = {
  smallMovieCardsInfo: PropTypes.array.isRequired
};

export default App;
