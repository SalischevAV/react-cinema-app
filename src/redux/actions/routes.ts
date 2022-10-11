import { CustomRout } from './../reducers/routReducer';
import { Dispatch } from 'redux';
import { APP_ROUTES, PATH_URL } from '../actionTypes';

export const appRoutes = (payload: Array<Omit<CustomRout, 'component'>>) => (dispatch: Dispatch) =>
  dispatch({ type: APP_ROUTES, payload });

export const pathUrl = (path: string, url: string) => (dispatch: Dispatch) =>
  dispatch({
    type: PATH_URL,
    payload: {
      path,
      url
    }
  });
