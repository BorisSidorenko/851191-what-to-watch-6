import React from 'react';
import {render} from '@testing-library/react';
import MovieCardImage from './movie-card-image';
import {movieStructure} from '../../utils/test-utils';

it(`Should MovieCardImage render correctly`, () => {
  const {getByAltText} = render(<MovieCardImage preview={movieStructure.preview_image} name={movieStructure.name} />);

  const imgText = getByAltText(movieStructure.name);

  expect(imgText).toBeInTheDocument();
});
