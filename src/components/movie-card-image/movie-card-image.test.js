import React from 'react';
import {render} from '@testing-library/react';
import MovieCardImage from './movie-card-image';

it(`Should MovieCardImage render correctly`, () => {
  const props = {
    preview: `test`,
    name: `test`
  };

  const {getByAltText} = render(<MovieCardImage {...props} />);

  const imgText = getByAltText(props.name);

  expect(imgText).toBeInTheDocument();
});
