import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {createAPI} from '../src/api/api';
import App from './components/app/app';
import rootReducer from '../src/store/root-reducer';
import {AuthorizationStatus} from '../src/utils/constatns';
import {ActionCreator} from '../src/store/action';
import {redirect} from '../src/redirect';

const makeUserNotAuthtorized = () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NOT_AUTHORIZED));

const api = createAPI(makeUserNotAuthtorized);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
