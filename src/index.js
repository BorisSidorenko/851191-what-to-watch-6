import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import AllMovies from '../src/mock/movie/data';
import {getRandomInt} from './utils/common';

const movie = AllMovies[getRandomInt(AllMovies.length)];

ReactDOM.render(
    <App
      promoMovie={movie}
      allMovies={AllMovies}
    />,
    document.querySelector(`#root`)
);
