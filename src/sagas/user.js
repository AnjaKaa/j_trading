import { fetchUserInfoRequest, fetchUserInfoSuccess, fetchUserInfoFailure } from '../ducks/user';
import { takeLatest, put, call } from 'redux-saga/effects';
import { getUserInfo } from '../api';

export function* UserInfoFlow() {
  try {
    const result = yield call(getUserInfo);
    yield put(fetchUserInfoSuccess(result));
  } catch (error) {
    const message = error.data.message;
    yield put(fetchUserInfoFailure(message));
  }
}

export function* userInfoWatch() {
  yield takeLatest(fetchUserInfoRequest, UserInfoFlow);
}
