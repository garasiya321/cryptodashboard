import { createStore, combineReducers } from 'redux';
import { accountBalance } from './reducers/reducer';



export const store = createStore(
  combineReducers({
    accountBalance: accountBalance,
  })
);

