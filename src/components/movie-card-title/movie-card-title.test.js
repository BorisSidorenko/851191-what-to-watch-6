import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import MovieCardTitle from './movie-card-title';
import {movieStructure} from '../../utils/test-utils';

it(`Should MovieCardTitle render correctly`, () => {
  const history = createMemoryHistory();
  const {id, name} = movieStructure;

  const {getByText} = render(
      <Router history={history}>
        <MovieCardTitle movieId={id} name={name}/>
      </Router>
  );

  const linkElement = getByText(movieStructure.name);

  expect(linkElement).toBeInTheDocument();
});
