import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import Movies from '../src/mocks/movies';
import Reviews from '../src/mocks/reviews';
import {reducer} from '../src/store/reducer';
import {getRandomInt} from './utils/common';

const movie = Movies[getRandomInt(Movies.length)];

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
      <App
        currentMovie={movie}
        allMovies={Movies}
        reviews={Reviews}
      />
    </Provider>,
    document.querySelector(`#root`)
);
