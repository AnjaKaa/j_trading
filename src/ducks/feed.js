import { createActions, handleActions } from 'redux-actions';
//import { combineReducers } from 'redux';

export const { fetchFeedRequest, fetchFeedSuccess, fetchFeedFailure } = createActions(
  'FETCH_FEED_REQUEST',
  'FETCH_FEED_SUCCESS',
  'FETCH_FEED_FAILURE',
);

const initialState = {
  records: {},
  isLoading: false,
  error: null,
};

export default handleActions(
  {
    [fetchFeedRequest]: (state, action) => ({
      ...state,
      isLoading: true,
    }),

    [fetchFeedSuccess]: (state, action) => ({
      ...state,
      isLoading: false,
      records: action.payload.data,
    }),

    [fetchFeedFailure]: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
  },
  initialState,
);

export const getUserFeed = state => (state.feed.records ? state.feed.records.result : []);
