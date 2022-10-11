import { APP_ROUTES, PATH_URL, PathUrl } from './../actionTypes';
import { routeAction } from '../actionTypes';
import { ReactNode } from 'react';

export interface CustomRout {
  id: number;
  path: string;
  component: ReactNode;
}

export interface routesState {
  routesArray: Array<Omit<CustomRout, 'component'>>;
  path: string;
  url: string;
}

const initialState: routesState = {
  routesArray: [],
  path: '',
  url: ''
};

export default function routReducer(state = initialState, action: routeAction): routesState {
  switch (action.type) {
    case APP_ROUTES:
      // eslint-disable-next-line no-case-declarations
      const routesArray = action.payload as Array<Omit<CustomRout, 'component'>>;
      return {
        ...state,
        routesArray
      };
    case PATH_URL:
      // eslint-disable-next-line no-case-declarations
      const { path, url } = action.payload as PathUrl;
      return {
        ...state,
        path,
        url
      };
    default:
      return state;
  }
}
