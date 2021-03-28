import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import {createMemoryHistory} from 'history';
import {movieStructure, getFakeStore} from '../../data-structure';
import {RoutePaths} from '../../utils/constatns';
import userEvent from '@testing-library/user-event';
import LayoutRouter from './layout-router';

const fakeStore = getFakeStore();

describe(`Test routing`, () => {

  it(`Render 'MAIN' when user navigate to '/' url`, () => {
    const history = createMemoryHistory();

    render(
        <redux.Provider store={fakeStore}>
          <Router history={history}>
            <LayoutRouter />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/WTW/i)).toBeInTheDocument();
    expect(screen.getByText(/Play/)).toBeInTheDocument();
    expect(screen.getByText(/My list/i)).toBeInTheDocument();
    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
    expect(screen.queryByText(/Add Review/i)).not.toBeInTheDocument();
  });

  it(`Render 'SignIn' when user navigate to '/login' url`, () => {
    const history = createMemoryHistory();
    history.push(RoutePaths.SIGN_IN);

    render(
        <redux.Provider store={fakeStore}>
          <Router history={history}>
            <LayoutRouter />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByLabelText(`Email address`)).toBeInTheDocument();
    expect(screen.getByLabelText(`Password`)).toBeInTheDocument();

    userEvent.type(screen.getByTestId(`email`), `keks`);
    userEvent.type(screen.getByTestId(`password`), `123456`);

    expect(screen.getByDisplayValue(`keks`)).toBeInTheDocument();
    expect(screen.getByDisplayValue(`123456`)).toBeInTheDocument();
  });

  it(`Render 'MyList' when user navigate to '/mylist' url`, () => {
    const history = createMemoryHistory();
    history.push(RoutePaths.MY_LIST);

    render(
        <redux.Provider store={fakeStore}>
          <Router history={history}>
            <LayoutRouter />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/My list/i)).toBeInTheDocument();
    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
  });

  it(`Render 'MoviePage' when user navigate to '/movies/:id' url`, () => {
    const history = createMemoryHistory();
    history.push(`${RoutePaths.MOVIE_PAGE}/${movieStructure.id}`);

    render(
        <redux.Provider store={fakeStore}>
          <Router history={history}>
            <LayoutRouter />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Play/)).toBeInTheDocument();
    expect(screen.getByText(/My list/i)).toBeInTheDocument();
    expect(screen.getByText(/Add review/i)).toBeInTheDocument();
    expect(screen.getByText(/Overview/i)).toBeInTheDocument();
    expect(screen.getByText(/Details/i)).toBeInTheDocument();
    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
    expect(screen.getByText(/More like this/i)).toBeInTheDocument();
  });

  it(`Render 'Review' when user navigate to '/movies/:id/review' url`, () => {
    const history = createMemoryHistory();
    history.push(`${RoutePaths.MOVIE_PAGE}/${movieStructure.id}${RoutePaths.REVIEW}`);

    render(
        <redux.Provider store={fakeStore}>
          <Router history={history}>
            <LayoutRouter />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByTestId(`comment`)).toBeInTheDocument();
    expect(screen.getByText(/Post/i)).toBeInTheDocument();
  });


  it(`Render 'Player' when user navigate to '/player/:id' url`, () => {
    const history = createMemoryHistory();
    history.push(`${RoutePaths.PLAYER}/${movieStructure.id}`);

    window.HTMLMediaElement.prototype.play = () => {};
    window.HTMLMediaElement.prototype.pause = () => {};

    render(
        <redux.Provider store={fakeStore}>
          <Router history={history}>
            <LayoutRouter />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Exit/i)).toBeInTheDocument();
    expect(screen.getByText(/Toggler/i)).toBeInTheDocument();
    expect(screen.getByText(/Play/)).toBeInTheDocument();
    expect(screen.getByText(/Transpotting/i)).toBeInTheDocument();
    expect(screen.getByText(/Full screen/i)).toBeInTheDocument();
  });
});
