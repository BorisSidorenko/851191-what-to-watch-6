import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {movieStructure} from '../../utils/test-utils';
import MovieCardOverview from './movie-card-overview';

it(`Should MovieCardOverview render correctly`, () => {
  const history = createMemoryHistory();

  render(
      <Router history={history}>
        <MovieCardOverview {...movieStructure} />
      </Router>
  );

  expect(screen.getByText(movieStructure.rating)).toBeInTheDocument();
  expect(screen.getByText(`${movieStructure.scores_count} ratings`)).toBeInTheDocument();
  expect(screen.getByText(`Director: ${movieStructure.director}`)).toBeInTheDocument();
  expect(screen.getByText(`Starring: ${movieStructure.starring.join(`, `)}`)).toBeInTheDocument();
});
