// carshowsReducer.js

import { FETCH_CAR_SHOWS } from '../actions/types';

export default function carshowsReducer(state = [], action) {
  switch (action.type) {
      case FETCH_CAR_SHOWS:
      return action.data;
    default:
      return state;
  }
}