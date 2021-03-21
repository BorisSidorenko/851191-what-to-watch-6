import React from 'react';
import {render} from '@testing-library/react';
import MovieCardDetails from './movie-card-details';

it(`Should MovieCardDetails render correctly`, () => {
  const props = {
    "director": `test`,
    "starring": [`test`],
    "run_time": 1,
    "genre": `test`,
    "released": `test`
  };

  const {getByText} = render(<MovieCardDetails {...props} />);

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
