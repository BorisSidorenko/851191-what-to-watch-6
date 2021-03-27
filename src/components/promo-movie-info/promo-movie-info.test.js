import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import {createMemoryHistory} from 'history';
import {movieStructure, getFakeStore} from '../../data-structure';
import PromoMovieInfo from './promo-movie-info';

it(`Should PromoMovieInfo render correctly`, () => {
  const store = getFakeStore();
  const {name} = movieStructure;
  const history = createMemoryHistory();

  const {container} = render(
      <redux.Provider store={store}>
        <Router history={history}>
          <PromoMovieInfo {...movieStructure} poster={movieStructure.poster_image}/>
        </Router>
      </redux.Provider>
  );

  expect(container.querySelector(`.movie-card__info`)).toBeInTheDocument();
  expect(screen.getByAltText(name)).toBeInTheDocument();
});
