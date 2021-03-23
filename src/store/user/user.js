import {RoutePaths} from '../../utils/constatns';
import {loginAction, requireAuthorizationAction, addRequestedRouteAction} from '../../store/action';
import {createReducer} from '@reduxjs/toolkit';

export const initialState = {
  user: null,
  isAuthtorized: null,
  requestedRoute: RoutePaths.MAIN
};

export const user = createReducer(initialState, (builder) => {
  builder.addCase(loginAction, (state, action) => {
    state.user = action.payload;
  });
  builder.addCase(requireAuthorizationAction, (state, action) => {
    state.isAuthtorized = action.payload;
  });
  builder.addCase(addRequestedRouteAction, (state, action) => {
    state.requestedRoute = action.payload;
  });
});
