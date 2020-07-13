import { userActions } from './actionTypes';

export const setAuth = (payload) => ({
  type: userActions.SET_AUTH,
  auth: payload.auth,
  token: payload.token,
  username: payload.username
});

export const logout = () => ({
  type: userActions.LOGOUT
});
