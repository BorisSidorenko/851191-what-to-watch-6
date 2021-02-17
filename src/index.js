import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import Movies from '../src/mocks/movies';
import Reviews from '../src/mocks/reviews';
import {getRandomInt} from './utils/common';

const movie = Movies[getRandomInt(Movies.length)];

ReactDOM.render(
    <App
      currentMovie={movie}
      allMovies={Movies}
      reviews={Reviews}
    />,
    document.querySelector(`#root`)
);
