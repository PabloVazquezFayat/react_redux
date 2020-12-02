import { createStore, combineReducers } from 'redux';
import { counter, backgroundColor, text, data, updateData } from '../reducers/';

const store = createStore(combineReducers({counter, backgroundColor, text, data, updateData}));

export default store;