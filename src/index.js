import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import {MovieNameAndPoster} from './utils/constatns';

ReactDOM.render(
    <App
      smallMovieCardsInfo = {Object.entries(MovieNameAndPoster)}
    />,
    document.querySelector(`#root`)
);
