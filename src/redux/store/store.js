import { createStore, combineReducers } from 'redux';
import { counter, backgroundColor, text } from '../reducers/';

const store = createStore(combineReducers({counter, backgroundColor, text}));

export default store;