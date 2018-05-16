import { call, put, select, take } from 'redux-saga/effects';
import { authRequest, authSuccess, authFailure, getIsAuthorized } from '../ducks/auth';
import { login, setTokenApi } from '../api.js';
import { getTokenFromLocalStorage, setTokenToLocalStorage } from '../localStorage.js';

export default function* authWatch() {
  while (true) {
    const isAuthorized = yield select(getIsAuthorized);
    const localStorageToken = yield call(getTokenFromLocalStorage);
    let token;

    if (!isAuthorized) {
      if (localStorageToken) {
        token = localStorageToken;

        yield call(setTokenApi, token);
        yield call(setTokenToLocalStorage, token);

        yield put(authSuccess());
      } else {
        try {
          const action = yield take(authRequest);
          const result = yield call(login, action.payload);
          token = result.data.jwt;

          yield call(setTokenApi, token);
          yield call(setTokenToLocalStorage, token);

          yield put(authSuccess());
        } catch (error) {
          const message = error.data.message;

          yield put(authFailure(message));
        }
      }
    }
  }
}
