import React from 'react';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import UserBlockAvatar from './user-block-avatar';
import {authInfoStructure, getStructureToRender} from '../../utils/test-utils';

it(`Should UserBlockAvatar render correctly`, () => {
  const history = createMemoryHistory();

  const structureToRender = getStructureToRender(history, <UserBlockAvatar />);
  render(structureToRender);

  expect(screen.getByAltText(authInfoStructure.name)).toBeInTheDocument();
});
