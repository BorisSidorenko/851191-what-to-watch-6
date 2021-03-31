import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createAPI} from '../src/api/api';
import App from './components/app/app';
import rootReducer from '../src/store/root-reducer';
import {AuthorizationStatus} from '../src/utils/constatns';
import {requireAuthorizationAction} from '../src/store/user/action';
import {redirect} from '../src/middleware/redirect';
import {configureStore} from '@reduxjs/toolkit';

const makeUserNotAuthtorized = () => store.dispatch(requireAuthorizationAction(AuthorizationStatus.NOT_AUTHORIZED));

const api = createAPI(makeUserNotAuthtorized);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
    }).concat(redirect)
});

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
