import React from 'react';
import {createAPI} from '../api/api';
import rootReducer from '../store/root-reducer';
import {configureStore} from '@reduxjs/toolkit';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import {RoutePaths, AuthorizationStatus} from './constatns';

export const movieStructure = {
  "name": `Test Movie`,
  "poster_image": `test-image.jpg`,
  "preview_image": `https://test.com`,
  "background_image": `test-bg-image.jpg`,
  "background_color": `black`,
  "description": `Test description`,
  "rating": 1,
  "scores_count": 1.1,
  "director": `Test Director`,
  "starring": [`Test Actor 1`, `Test Actor 2`],
  "run_time": 100,
  "genre": `Test genre`,
  "released": 2021,
  "id": 1,
  "is_favorite": false,
  "video_link": `https://test.com`,
  "preview_video_link": `https://test.com`
};

export const moviesToTest = [
  {
    "name": `Test Movie 1`,
    "poster_image": `test-image.jpg`,
    "preview_image": `https://test.com`,
    "background_image": `test-bg-image.jpg`,
    "background_color": `black`,
    "description": `Test description`,
    "rating": 1,
    "scores_count": 1.1,
    "director": `Test Director`,
    "starring": [`Test Actor 1`, `Test Actor 2`],
    "run_time": 100,
    "genre": `Genre to test`,
    "released": 2021,
    "id": 1,
    "is_favorite": false,
    "video_link": `https://test.com`,
    "preview_video_link": `https://test.com`
  },
  {
    "name": `Test Movie 2`,
    "poster_image": `test-image.jpg`,
    "preview_image": `https://test.com`,
    "background_image": `test-bg-image.jpg`,
    "background_color": `black`,
    "description": `Test description`,
    "rating": 1,
    "scores_count": 1.1,
    "director": `Test Director`,
    "starring": [`Test Actor 1`, `Test Actor 2`],
    "run_time": 100,
    "genre": `Genre to test`,
    "released": 2021,
    "id": 2,
    "is_favorite": true,
    "video_link": `https://test.com`,
    "preview_video_link": `https://test.com`
  },
  {
    "name": `Test Movie 3`,
    "poster_image": `test-image.jpg`,
    "preview_image": `https://test.com`,
    "background_image": `test-bg-image.jpg`,
    "background_color": `black`,
    "description": `Test description`,
    "rating": 1,
    "scores_count": 1.1,
    "director": `Test Director`,
    "starring": [`Test Actor 1`, `Test Actor 2`],
    "run_time": 100,
    "genre": `Test genre`,
    "released": 2021,
    "id": 3,
    "is_favorite": false,
    "video_link": `https://test.com`,
    "preview_video_link": `https://test.com`
  }
];

export const reviewStructure = {
  "id": 1,
  "user": {
    "id": 1,
    "name": `User`
  },
  "rating": 1,
  "comment": `Test comment`,
  "date": `02-02-2021`
};

export const userStructure = {
  "email": `user@email.com`,
  "password": `123456`
};

export const authInfoStructure = {
  "id": 1,
  "email": `user@email.com`,
  "name": `User`,
  "avatar_url": `img/1.png`
};

export const getFakeStore = () => {
  const api = createAPI({});

  const mockStore = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: api
        },
      }),
    preloadedState: {
      DATA: {
        selectedMovie: movieStructure,
        selectedMovieReviews: [reviewStructure],
        genre: movieStructure.genre,
        isPromoLoaded: true,
        movies: [movieStructure]
      },
      USER: {
        isAuthtorized: AuthorizationStatus.AUTHORIZED,
        user: authInfoStructure,
        requestedRoute: RoutePaths.MAIN
      },
      PLAYER: {
        movieToPlay: movieStructure,
        requestedPlayerPath: RoutePaths.MAIN,
        isLoading: false,
        isPlaying: false
      }
    }
  });

  return mockStore;
};

export const getStructureToRender = (history, children, store) => {
  const fakeStore = store ? store : getFakeStore();

  return (
    <redux.Provider store={fakeStore}>
      <Router history={history}>
        {children}
      </Router>
    </redux.Provider>
  );
};
