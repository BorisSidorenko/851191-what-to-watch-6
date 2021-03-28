import React from 'react';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {DEFAULT_GENRE} from '../../utils/constatns';
import {movieStructure, getStructureToRender} from '../../utils/test-utils';
import GenresList from './genres-list';

it(`Should GenresList render correctly`, () => {
  const handleMock = jest.fn();
  const history = createMemoryHistory();

  const structureToRender = getStructureToRender(history, <GenresList onGenreChange={handleMock}/>);
  render(structureToRender);

  expect(screen.getAllByRole(`link`).map((el) => el.innerHTML)).toHaveLength(2);
  expect(screen.getAllByRole(`link`).map((el) => el.innerHTML)).toEqual([DEFAULT_GENRE, movieStructure.genre]);
});
