import { combineReducers } from 'redux';
import users from './reducerUsers';
import data from './reducerData';
import token from './reducerToken';

const rootReducers = combineReducers({ users, data, token });

export default rootReducers;
