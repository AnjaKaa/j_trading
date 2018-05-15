import { fork } from 'redux-saga/effects';
import authFlow from './auth';
import { userInfoWatch } from './user';
import { fetchBtcWatch, fetchEthWatch, currencyWatch } from './currency';
import { buyWatch, sellWatch, walletWatch } from './wallet';
export default function*() {
  yield fork(authFlow);
  yield fork(userInfoWatch);
  yield fork(fetchBtcWatch);
  yield fork(fetchEthWatch);
  yield fork(currencyWatch);
  yield fork(buyWatch);
  yield fork(sellWatch);
  yield fork(walletWatch);
  yield fork(userInfoWatch);
}
