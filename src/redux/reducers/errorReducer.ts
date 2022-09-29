import { MovieAction, SET_ERROR } from '../actionTypes';

const initialState = '';

export default (state = initialState, action: MovieAction) => {
  switch (action.type) {
    case SET_ERROR:
      return action.payload;
    default:
      return state;
  }
};
