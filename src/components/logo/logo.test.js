import React from 'react';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {movieStructure} from '../../utils/test-utils';
import {RoutePaths} from '../../utils/constatns';
import {getStructureToRender} from '../../utils/test-utils';
import Logo from './logo';

it(`Should Logo render correctly`, () => {
  const history = createMemoryHistory();
  history.push(`${RoutePaths.MOVIE_PAGE}/${movieStructure.id}`);

  const structureToRender = getStructureToRender(history, <Logo />);
  render(structureToRender);

  expect(screen.getByRole(`link`)).toBeInTheDocument();
});
