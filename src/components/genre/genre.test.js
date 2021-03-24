import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Genre from './genre';

it(`Should Genre render correctly`, () => {
  const testGenre = `Test`;
  const isCurrentGenre = true;
  const handleMock = jest.fn();
  const history = createMemoryHistory();

  render(
      <Router history={history}>
        <Genre genre={testGenre} onGenreClick={handleMock} isCurrentGenre={isCurrentGenre} onGenreChange={handleMock}/>
      </Router>
  );

  expect(screen.getByText(testGenre)).toBeInTheDocument();
});
