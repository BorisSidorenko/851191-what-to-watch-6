import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import Movies from '../src/mocks/movies';
import {getRandomInt} from './utils/common';

const movie = Movies[getRandomInt(Movies.length)];

ReactDOM.render(
    <App
      promoMovie={movie}
      allMovies={Movies}
    />,
    document.querySelector(`#root`)
);
