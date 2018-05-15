import { createActions, handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

import {
  buyCurrencySuccess,
  sellCurrencySuccess,
  buyCurrencyFailure,
  sellCurrencyFailure,
} from '../ducks/currency';

export const { fetchWalletRequest, fetchWalletSuccess, fetchWalletFailure } = createActions(
  'FETCH_WALLET_REQUEST',
  'FETCH_WALLET_SUCCESS',
  'FETCH_WALLET_FAILURE',
);

export const isLoading = handleActions(
  {
    [fetchWalletRequest]: () => true,
    [fetchWalletSuccess]: () => false,
    [fetchWalletFailure]: () => false,
  },
  false,
);

export const error = handleActions(
  {
    [fetchWalletRequest]: () => null,
    [fetchWalletSuccess]: () => null,
    [fetchWalletFailure]: (state, action) => action.payload,
    [buyCurrencyFailure]: (state, action) => action.payload,
    [sellCurrencyFailure]: (state, action) => action.payload,
  },
  null,
);

export const btc = handleActions(
  {
    [fetchWalletSuccess]: (state, action) => action.payload.data.result.btc,
    [sellCurrencySuccess]: (state, action) => action.payload.data.btc,
    [buyCurrencySuccess]: (state, action) => action.payload.data.btc,
  },
  0,
);
export const eth = handleActions(
  {
    [fetchWalletSuccess]: (state, action) => action.payload.data.result.eth,
    [sellCurrencySuccess]: (state, action) => action.payload.data.eth,
    [buyCurrencySuccess]: (state, action) => action.payload.data.eth,
  },
  0,
);
export const usd = handleActions(
  {
    [fetchWalletSuccess]: (state, action) => action.payload.data.result.usd,
    [sellCurrencySuccess]: (state, action) => action.payload.data.usd,
    [buyCurrencySuccess]: (state, action) => action.payload.data.usd,
  },
  10000,
);

export const coins = combineReducers({
  btc,
  eth,
  usd,
});

export default combineReducers({
  isLoading,
  coins,
  error,
});

export const getWalletError = state => state.wallet.error;
export const getWalletUsd = state => state.wallet.coins.usd;
export const getWalletBtc = state => state.wallet.coins.btc;
export const getWalletEth = state => state.wallet.coins.eth;
