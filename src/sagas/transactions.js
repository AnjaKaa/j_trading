import {
  fetchTransactionsRequest,
  fetchTransactionsSuccess,
  fetchTransactionsFailure,
} from '../ducks/transactions';
import { takeLatest, put, call } from 'redux-saga/effects';
import { getUserTransactions } from '../api';

export function* transactionsFlow(action) {
  try {
    const result = yield call(getUserTransactions);
    yield put(fetchTransactionsSuccess(result));
  } catch (error) {
    const message = error.data.message;
    yield put(fetchTransactionsFailure(message));
  }
}

export function* transactionsWatch() {
  yield takeLatest(fetchTransactionsRequest, transactionsFlow);
}
