import { takeLatest, call, put } from 'redux-saga/effects';
import { regRequest, regSuccess, regFailure } from '../ducks/reg';
import { authSuccess } from '../ducks/auth';
import { registration, setTokenApi } from '../api';
import { setTokenToLocalStorage } from '../localStorage';

export function* registerFlow(action) {
  try {
    const result = yield call(registration, action.payload);
    const token = result.data.jwt;

    setTokenToLocalStorage(token);
    setTokenApi(token);

    yield put(regSuccess(token));
    yield put(authSuccess());
  } catch (error) {
    const messages = error.data.message;
    const keys = Object.keys(messages);
    let message = '';

    for (const key of keys) {
      message += `${key}: ${messages[key]}`;
    }

    yield put(regFailure(message));
  }
}

export default function* registerWatch() {
  yield takeLatest(regRequest, registerFlow);
}
