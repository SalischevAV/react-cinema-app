import { SET_ERROR } from './../actionTypes';
import { Dispatch } from 'redux';
import { ErrorState } from '../reducers/errorReducer';

export const setError = (errorMsg: ErrorState) => (dispatch: Dispatch) => {
  if (errorMsg) {
    const payload = {
      errorMessage: errorMsg.errorMessage,
      statusCode: errorMsg.statusCode
    };
    dispatch({
      type: SET_ERROR,
      payload
    });
  } else {
    dispatch({
      type: SET_ERROR,
      payload: {
        errorMessage: ''
      }
    });
  }
};
