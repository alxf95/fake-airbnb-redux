import axios from 'axios';

export const SET_FLATS = 'SET_FLATS';
export const SELECT_FLAT = 'SELECT_FLAT';

export const setFlats = () => {
  const promise = axios
    .get(
      'https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json'
    )
    .then(response => response.data);
  return { type: SET_FLATS, payload: promise };
};

export const selectFlat = flat => {
  return {
    type: SELECT_FLAT,
    payload: flat,
  };
};
