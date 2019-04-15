// index.js

import { combineReducers } from 'redux';
import data from './carShowsReducer';

export default combineReducers({
    data: data
});