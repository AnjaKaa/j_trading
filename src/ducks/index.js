import { combineReducers } from 'redux';
import auth from './auth';
import reg from './reg';
import user from './user';
import currency from './currency';
import wallet from './wallet';
import transactions from './transactions';

export default combineReducers({
  auth,
  reg,
  user,
  currency,
  wallet,
  transactions,
});
