import { fetchFeedRequest, fetchFeedSuccess, fetchFeedFailure } from '../ducks/feed';
import { takeLatest, put, call } from 'redux-saga/effects';
import { getFeed } from '../api';

export function* FeedFlow(action) {
  try {
    const result = yield call(getFeed, action.payload);
    yield put(fetchFeedSuccess(result));
  } catch (error) {
    const message = error.data.message;
    yield put(fetchFeedFailure(message));
  }
}

export function* feedWatch() {
  yield takeLatest(fetchFeedRequest, FeedFlow);
}
