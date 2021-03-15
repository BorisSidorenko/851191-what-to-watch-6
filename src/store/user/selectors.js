import {NameSpace} from '../root-reducer';

export const getUser = (state) => state[NameSpace.USER].user;

export const getIsAuthtorizedFlag = (state) => state[NameSpace.USER].isAuthtorized;

export const getRequestedRoute = (state) => state[NameSpace.USER].requestedRoute;
