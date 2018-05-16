import { createActions, handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

export const {
  fetchTransactionsRequest,
  fetchTransactionsSuccess,
  fetchTransactionsFailure,
} = createActions(
  'FETCH_TRANSACTION_REQUEST',
  'FETCH_TRANSACTION_SUCCESS',
  'FETCH_TRANSACTION_FAILURE',
);

const initialState = {
  records: {},
  isLoading: false,
  error: null,
};

export default handleActions(
  {
    [fetchTransactionsRequest]: (state, action) => ({
      ...state,
      isLoading: true,
    }),

    [fetchTransactionsSuccess]: (state, action) => ({
      ...state,
      isLoading: false,
      records: action.payload.data.result,
    }),

    [fetchTransactionsFailure]: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
  },
  initialState,
);

export const getUserTransactions = state => state.transactions.records;
