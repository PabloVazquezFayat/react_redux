import { createStore, combineReducers } from 'redux';
import { counter, backgroundColor } from '../reducers/';

const store = createStore(combineReducers({counter, backgroundColor}));

export default store;