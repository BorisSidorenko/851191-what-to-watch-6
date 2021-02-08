import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import {generateMovie, generateMovies} from './mock/movie/movie';

ReactDOM.render(
    <App
      promoMovie = {generateMovie()}
      allMovies = {generateMovies()}
    />,
    document.querySelector(`#root`)
);
