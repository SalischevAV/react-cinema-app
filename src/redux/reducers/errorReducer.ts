import { ErrorAction, SET_ERROR } from '../actionTypes';

export interface ErrorState {
  errorMessage: string | undefined;
  statusCode?: string | number | undefined;
}

const initialState: ErrorState = {
  errorMessage: ''
};

export default (state = initialState, action: ErrorAction) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
        statusCode: action.payload.statusCode
      };
    default:
      return {
        ...state
      };
  }
};
