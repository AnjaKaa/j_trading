import { createActions, handleAction } from 'redux-actions';
import { combineReducers } from 'redux';

export const { fetchUserInfoRequest, fetchUserInfoSuccess, fetchUserInfoFailure } = createActions(
  ('FETCH_USER_INFO_REQUEST': null),
  ('FETCH_USER_INFO_SUCCESS': null),
  ('FETCH_USER_INFO_FAILURE': null),
);

export const email = handleAction(
  fetchUserInfoRequest,
  (state, action) => (action.payload ? action.payload.data.result.email : null),
  '',
);

export default combineReducers({
  email,
});

export const getUserEmail = state => state.user.email;
