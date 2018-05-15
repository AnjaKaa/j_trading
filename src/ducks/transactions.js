import { createActions, handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

export const {
  fetchTransactionRequest,
  fetchTransactionSuccess,
  fetchTransactionFailure,
} = createActions(
  'FETCH_TRANSACTION_REQUEST',
  'FETCH_TRANSACTION_SUCCESS',
  'FETCH_TRANSACTION_FAILURE',
);
