import React from 'react';
import {render} from '@testing-library/react';
import {reviewStructure} from '../../data-structure';
import MovieCardReviews from './movie-card-reviews';

it(`Should MovieCardReviews render correctly`, () => {
  const reviews = [reviewStructure];

  const {container} = render(<MovieCardReviews reviews={reviews} />);

  expect(container.querySelector(`.movie-card__reviews`)).toBeInTheDocument();
  expect(container.querySelector(`.movie-card__reviews-col`)).toBeInTheDocument();
});
