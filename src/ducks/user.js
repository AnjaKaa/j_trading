import { createActions, handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

export const { fetchUserInfoRequest, fetchUserInfoSuccess, fetchUserInfoFailure } = createActions(
  'FETCH_USER_INFO_REQUEST',
  'FETCH_USER_INFO_SUCCESS',
  'FETCH_USER_INFO_FAILURE',
);

const initialState = {
  info: {},
  isLoading: false,
  error: null,
};

export default handleActions(
  {
    [fetchUserInfoRequest]: (state, action) => ({
      ...state,
      isLoading: true,
    }),

    [fetchUserInfoSuccess]: (state, action) => ({
      ...state,
      isLoading: false,
      info: action.payload.data.result,
    }),

    [fetchUserInfoFailure]: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
  },
  initialState,
);

export const getUserInfo = state => state.user.info;
