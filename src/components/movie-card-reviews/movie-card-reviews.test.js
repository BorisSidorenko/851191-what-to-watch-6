import React from 'react';
import {render, screen} from '@testing-library/react';
import {reviewStructure} from '../../data-structure';
import MovieCardReviews from './movie-card-reviews';

it(`Should MovieCardReviews render correctly`, () => {
  const reviews = [reviewStructure];

  render(<MovieCardReviews reviews={reviews} />);

  expect(screen.getByText(reviewStructure.comment)).toBeInTheDocument();
  expect(screen.getByText(reviewStructure.user.name)).toBeInTheDocument();
  expect(screen.getByText(reviewStructure.rating)).toBeInTheDocument();
});
