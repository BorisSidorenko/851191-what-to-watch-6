import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {createAPI} from '../src/api/api';
import App from './components/app/app';
import {reducer} from '../src/store/reducer';
import {AuthorizationStatus} from '../src/utils/constatns';
import {ActionCreator} from '../src/store/action';

const makeUserNotAuthtorized = () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NOT_AUTHORIZED));

const api = createAPI(makeUserNotAuthtorized);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
