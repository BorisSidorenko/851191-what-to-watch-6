import React from 'react';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import MovieCardReview from './movie-card-review';
import {reviewStructure, getStructureToRender} from '../../utils/test-utils';

it(`Should MovieCardReview render correctly`, () => {
  const history = createMemoryHistory();
  const {user, comment, rating} = reviewStructure;

  const structureToRender = getStructureToRender(history, <MovieCardReview {...reviewStructure} />);
  render(structureToRender);

  expect(screen.getByText(comment)).toBeInTheDocument();
  expect(screen.getByText(user.name)).toBeInTheDocument();
  expect(screen.getByText(rating)).toBeInTheDocument();
});
