import { fork } from 'redux-saga/effects';
import authFlow from './auth';
export default function*() {
  yield fork(authFlow);
}
