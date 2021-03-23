import React from 'react';
import {render} from '@testing-library/react';
import MovieCardReview from './movie-card-review';
import {reviewStructure} from '../../data-structure';

it(`Should MovieCardReview render correctly`, () => {
  const {user, comment, rating} = reviewStructure;

  const {getByText} = render(<MovieCardReview {...reviewStructure} />);

  const commentText = getByText(comment);
  const nameText = getByText(user.name);
  const ratingText = getByText(rating);

  expect(commentText).toBeInTheDocument();
  expect(nameText).toBeInTheDocument();
  expect(ratingText).toBeInTheDocument();
});
