import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import MovieCardTitle from './movie-card-title';

it(`Should MovieCardTitle render correctly`, () => {
  const history = createMemoryHistory();
  const props = {name: `test`, movieId: 1};

  const {getByText} = render(
      <Router history={history}>
        <MovieCardTitle {...props}/>
      </Router>
  );

  const linkElement = getByText(props.name);

  expect(linkElement).toBeInTheDocument();
});
