import { userActions } from '../actions/actionTypes';

const initState = {
  isAuth: false,
  token: null,
  username: null
};

export const setAuth = (state, action) => ({
  ...state,
  isAuth: action.auth,
  token: action.token,
  username: action.username
});

export const logout = () => ({
  ...initState
});

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case userActions.SET_AUTH: return setAuth(state, action);
    case userActions.LOGOUT: return logout(state, action);
    default: return state;
  }
};

export default userReducer;
