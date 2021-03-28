import React from 'react';
import {render} from '@testing-library/react';
import MovieCardDetails from './movie-card-details';
import {movieStructure} from '../../utils/test-utils';

it(`Should MovieCardDetails render correctly`, () => {
  const {getByText} = render(<MovieCardDetails {...movieStructure} />);

  const directorText = getByText(`Director`);
  const starringText = getByText(`Starring`);
  const runTimeText = getByText(`Run Time`);
  const genreText = getByText(`Genre`);
  const releasedText = getByText(`Released`);

  expect(directorText).toBeInTheDocument();
  expect(starringText).toBeInTheDocument();
  expect(runTimeText).toBeInTheDocument();
  expect(genreText).toBeInTheDocument();
  expect(releasedText).toBeInTheDocument();
});
