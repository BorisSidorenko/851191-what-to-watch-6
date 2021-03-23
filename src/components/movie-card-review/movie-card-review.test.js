import React from 'react';
import {render} from '@testing-library/react';
import MovieCardReview from './movie-card-review';

it(`Should MovieCardReview render correctly`, () => {
  const props = {
    user: {
      name: `Test`
    },
    comment: `test`,
    date: `01-01-2021`,
    rating: 10
  };

  const {getByText} = render(<MovieCardReview {...props} />);

  const commentText = getByText(props.comment);
  const nameText = getByText(props.user.name);
  const ratingText = getByText(props.rating);

  expect(commentText).toBeInTheDocument();
  expect(nameText).toBeInTheDocument();
  expect(ratingText).toBeInTheDocument();
});
