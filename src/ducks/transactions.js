import { combineReducers } from 'redux';
import { handleActions, createActions } from 'redux-actions';

const {
  transactions: { fetchTransactionsRequest, fetchTransactionsSuccess, fetchTransactionsFailure },
} = createActions({
  TRANSACTIONS: {
    FETCH_TRANSACTIONS_REQUEST: null,
    FETCH_TRANSACTIONS_SUCCESS: null,
    FETCH_TRANSACTIONS_FAILURE: null,
  },
});

/*
isLoading
error
records
*/
const isFetching = handleActions(
  {
    [fetchTransactionsRequest]: () => true,
    [fetchTransactionsSuccess]: () => false,
    [fetchTransactionsFailure]: () => false,
  },
  false,
);

const error = handleActions(
  {
    [fetchTransactionsRequest]: () => null,
    [fetchTransactionsSuccess]: () => null,
    [fetchTransactionsFailure]: (state, action) => action.payload,
  },
  null,
);

const records = handleActions(
  // data
  {
    [fetchTransactionsSuccess]: (state, action) => action.payload,
  },
  null,
);

export default combineReducers({
  isFetching,
  error,
  records,
});

export { fetchTransactionsRequest, fetchTransactionsSuccess, fetchTransactionsFailure };

export const getIsFetching = state => state.transactions.isFetching;
export const getRecords = state => state.transactions.records; // getData
