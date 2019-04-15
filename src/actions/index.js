// index.js

import { FETCH_CAR_SHOWS } from './types';
import axios from 'axios';

const apiUrl = 'http://eacodingtest.digital.energyaustralia.com.au/api/v1/cars';

export const fetchData = (data) => {
  return {
    type: FETCH_CAR_SHOWS,
    data
  }
};

export const fetchCarShows = () => {
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => {
        dispatch(fetchData(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};