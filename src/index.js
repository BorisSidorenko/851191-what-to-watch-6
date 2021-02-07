import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import {MovieNameAndPoster, MovieFromHeader} from './utils/constatns';

ReactDOM.render(
    <App
      currentMovie = {MovieFromHeader}
      smallMovieCardsInfo = {Object.entries(MovieNameAndPoster)}
    />,
    document.querySelector(`#root`)
);
