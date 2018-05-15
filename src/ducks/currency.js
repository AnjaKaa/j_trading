import { combineReducers } from 'redux';
import { handleActions, createActions } from 'redux-actions';


export const { 
  selectBtc,
	selectEth,

	fetchBtcRequest,
	fetchBtcSuccess,
	fetchBtcFailure,

	fetchEthRequest,
	fetchEthSuccess,
	fetchEthFailure,

  selectOffset,

  buyCurrencyRequest,
  buyCurrencySuccess,
  buyCurrencyFailure,

  sellCurrencySuccess,  
  sellCurrencyRequest, 
  sellCurrencyFailure
 } = createActions(
    "SELECT_BTC",
    "SELECT_ETH",
  
    "FETCH_BTC_REQUEST",
    "FETCH_BTC_SUCCESS",
    "FETCH_BTC_FAILURE",
  
    "FETCH_ETH_REQUEST",
    "FETCH_ETH_SUCCESS",
    "FETCH_ETH_FAILURE",

    "SELECT_OFFSET",

    "BUY_CURRENCY_REQUEST",
	  "BUY_CURRENCY_SUCCESS",
	  "BUY_CURRENCY_FAILURE",

    "SELL_CURRENCY_REQUEST",
    "SELL_CURRENCY_SUCCESS",
    "SELL_CURRENCY_FAILURE",
);


export const selected = handleActions(
	{
		[selectBtc]: () => "btc",
		[selectEth]: () => "eth"
	},
	"btc"
);
export const offset = handleActions(
	{
		[selectOffset]: (state, action) => action.payload
	},
	"4h"
);
export const btc = handleActions(
	{
		[fetchBtcSuccess]: (state, action) => action.payload
	},
	[]
);
export const eth = handleActions(
	{
		[fetchEthSuccess]: (state, action) => action.payload
	},
	[]
);
export const isBtcLoading = handleActions(
	{
		[fetchBtcRequest]: () => true,
		[fetchBtcSuccess]: () => false,
		[fetchBtcFailure]: () => false
	},
	false
);
export const isEthLoading = handleActions(
	{
		[fetchEthRequest]: () => true,
		[fetchEthSuccess]: () => false,
		[fetchEthFailure]: () => false
	},
	false
);
export default combineReducers({
	selected,
	offset,
	btc,
	eth,
	isBtcLoading,
	isEthLoading
});

export const getOffset = state => state.currency? state.currency.offset:null;
export const getSelected = state => state.currency? state.currency.selected:null;
export const getIsBtcLoading = state => state.currency? state.currency.isBtcLoading:null;
export const getIsEthLoading = state => state.currency? state.currency.isEthLoading:null;

export const getCurrentBtcPurchase = state => {
	if (state.currency.btc[0]) return state.currency.btc[0].purchase;
	return 0;
};
export const getCurrentEthPurchase = state => {
	if (state.currency && state.currency.eth[0]) return state.currency.eth[0].purchase;
	return 0;
};
export const getCurrentBtcSell = state => {
	if (state.currency && state.currency.btc[0]) return state.currency.btc[0].sell;
	return 0;
};
export const getCurrentEthSell = state => {
	if (state.currency && state.currency.eth[0]) return state.currency.eth[0].sell;
	return 0;
};

export const sellBtc = state =>
	state.currency.btc.map(item => [new Date(item.mts), item.sell]);
export const purchaseBtc = state =>
	state.currency.btc.map(item => [new Date(item.mts), item.purchase]);
export const sellEth = state =>
	state.currency.eth.map(item => [new Date(item.mts), item.sell]);
export const purchaseEth = state =>
	state.currency.eth.map(item => [new Date(item.mts), item.purchase]);


