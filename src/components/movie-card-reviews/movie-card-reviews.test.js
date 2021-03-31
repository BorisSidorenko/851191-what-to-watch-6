import React from 'react';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {reviewStructure, getStructureToRender} from '../../utils/test-utils';
import MovieCardReviews from './movie-card-reviews';

it(`Should MovieCardReviews render correctly`, () => {
  const history = createMemoryHistory();
  const reviews = [reviewStructure];

  const structureToRender = getStructureToRender(history, <MovieCardReviews reviews={reviews} />);
  render(structureToRender);

  expect(screen.getByText(reviewStructure.comment)).toBeInTheDocument();
  expect(screen.getByText(reviewStructure.user.name)).toBeInTheDocument();
  expect(screen.getByText(reviewStructure.rating)).toBeInTheDocument();
});
