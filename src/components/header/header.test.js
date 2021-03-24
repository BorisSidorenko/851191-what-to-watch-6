import React from 'react';
import {AuthorizationStatus} from '../../utils/constatns';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import {RoutePaths} from '../../utils/constatns';
import {movieStructure, authInfoStructure} from '../../data-structure';
import Header from './header';

const mockStore = configureStore({});
const store = mockStore({
  USER: {
    isAuthtorized: AuthorizationStatus.AUTHORIZED,
    user: authInfoStructure
  }
});
const history = createMemoryHistory();

jest.spyOn(redux, `useSelector`);
describe(`Header should render correctly`, () => {
  it(`Should Header render correctly if user is authorized`, () => {
    const {id, name} = movieStructure;

    const {container} = render(
        <redux.Provider store={store}>
          <Router history={history}>
            <Header name={name} movieId={id} />
          </Router>
        </redux.Provider>
    );

    expect(container.querySelector(`.logo`)).toBeInTheDocument();

    expect(screen.getByAltText(authInfoStructure.name)).toBeInTheDocument();
  });

  it(`Should Header render correctly if user is authorized and has children`, () => {
    const {id, name} = movieStructure;

    const title = `Test title`;

    const {container} = render(
        <redux.Provider store={store}>
          <Router history={history}>
            <Header name={name} movieId={id}>
              <h2>{title}</h2>
            </Header>
          </Router>
        </redux.Provider>
    );

    expect(container.querySelector(`.logo`)).toBeInTheDocument();

    expect(screen.getByAltText(authInfoStructure.name)).toBeInTheDocument();

    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it(`Should Header render correctly if user is authorized and it's movie page`, () => {
    const {id, name} = movieStructure;

    history.location.pathname = `${RoutePaths.MOVIE_PAGE}/${id}${RoutePaths.REVIEW}`;

    const {container} = render(
        <redux.Provider store={store}>
          <Router history={history}>
            <Header name={name} movieId={id}/>
          </Router>
        </redux.Provider>
    );

    expect(container.querySelector(`.logo`)).toBeInTheDocument();

    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(`Add review`)).toBeInTheDocument();

    expect(screen.getByAltText(authInfoStructure.name)).toBeInTheDocument();
  });

  it(`Should Header render correctly if user is not authorized`, () => {
    const {id, name} = movieStructure;

    const storeRedux = mockStore({
      USER: {
        isAuthtorized: AuthorizationStatus.NOT_AUTHORIZED,
        user: authInfoStructure
      }
    });

    const {container} = render(
        <redux.Provider store={storeRedux}>
          <Router history={history}>
            <Header name={name} movieId={id}/>
          </Router>
        </redux.Provider>
    );

    expect(container.querySelector(`.logo`)).toBeInTheDocument();

    expect(screen.getByText(`Sign in`)).toBeInTheDocument();
  });
});
