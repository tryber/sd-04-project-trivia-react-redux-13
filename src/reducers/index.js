import { combineReducers } from 'redux';
import data from './reducerData';
import token from './reducerToken';

const rootReducers = combineReducers({ data, token });

export default rootReducers;
