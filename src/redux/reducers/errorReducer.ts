import { MovieAction, SET_ERROR } from '../actionTypes';

const initialState = {
  errorMessage: ''
};

export default (state = initialState, action: MovieAction) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        errorMessage: action.payload
      };
    default:
      return {
        ...state
      };
  }
};
