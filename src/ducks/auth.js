import { handleActions, createActions } from 'redux-actions';

const { authRequest, authSuccess, authFailure, logout } = createActions(
  'AUTH_REQUEST',
  'AUTH_SUCCESS',
  'AUTH_FAILURE',
  'LOGOUT'
);

const initialState = {
  isAuthorize: false,
  loginError: null,
  logout: null,
};

export default handleActions(
  {
    [authRequest]: (state, action) => ({
      ...state,
      isAuthorize: false,
      loginError: null,      
      logout: true,
    }),

    [authSuccess]: (state, action) => ({
      ...state,
      isAuthorize: true,
      loginError: null,
      logout: false,
    }),

    [authFailure]: (state, action) => ({
      ...state,
      isAuthorize: false,
      loginError: action.payload,
      logout: true,
    }),
  },
  initialState,
);

export { authRequest, authSuccess, authFailure,logout };

export const getIsAuthorized = state => state.auth.isAuthorize;
export const getAuthError = state => state.auth.loginError;
