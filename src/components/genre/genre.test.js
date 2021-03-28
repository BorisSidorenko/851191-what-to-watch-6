import React from 'react';
import {render, screen} from '@testing-library/react';
import {getStructureToRender} from '../../utils/test-utils';
import {createMemoryHistory} from 'history';
import Genre from './genre';

it(`Should Genre render correctly`, () => {
  const testGenre = `Test`;
  const isCurrentGenre = true;
  const handleMock = jest.fn();
  const history = createMemoryHistory();

  const structureToRender = getStructureToRender(history, <Genre genre={testGenre} onGenreClick={handleMock} isCurrentGenre={isCurrentGenre} onGenreChange={handleMock}/>);
  render(structureToRender);

  expect(screen.getByText(testGenre)).toBeInTheDocument();
});
