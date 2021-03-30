import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  LOGIN: `user/login`,
  REQUIRED_AUTH: `user/requireAuthorization`,
  ADD_REQUESTED_ROUTE: `user/addRequestedRoute`,
  REDIRECT_TO_ROUTE: `user/redirectToRoute`
};

export const loginAction = createAction(ActionType.LOGIN, (data) => ({payload: data}));

export const requireAuthorizationAction = createAction(ActionType.REQUIRED_AUTH, (isAuthtorized) => ({payload: isAuthtorized}));

export const addRequestedRouteAction = createAction(ActionType.ADD_REQUESTED_ROUTE, (data) => ({payload: data}));

export const redirectToRouteAction = createAction(ActionType.REDIRECT_TO_ROUTE, (data) => ({payload: data}));
