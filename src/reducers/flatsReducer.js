import { SET_FLATS } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case SET_FLATS:
      return action.payload;
    default:
      return state;
  }
};
