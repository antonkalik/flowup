import { combineReducers } from 'redux'
import paperReducer from './paperReducer';

export default combineReducers({ paper: paperReducer });