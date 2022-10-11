import { MovieType, MovieTypeType } from './reducers/movieReducer';
import { Url } from './../interfaces/Urls';
import { Result, Results } from './../interfaces/payloads/Result';
import { CustomRout } from './reducers/routReducer';
import { ErrorState } from './reducers/errorReducer';

export const MOVIE_LIST = 'MOVIE_LIST';
export const LOAD_MORE_MOVIES = 'LOAD_MORE_MOVIES';
export const SET_ERROR = 'SET_ERROR';
export const RESPONSE_PAGE = 'RESPONSE_PAGE';
export const MOVIE_TYPE = 'MOVIE_TYPE';
export const SEARCH_QUERY = 'SEARCH_QUERY';
export const SEARCH_RESULT = 'SEARCH_RESULT';

export const MOVIE_DETAILS = 'MOVIE_DETAILS';
export const CLEAR_MOVIE_DETAILS = 'CLEAR_MOVIE_DETAILS';

export const SET_SLIDESHOW = 'SET_SLIDESHOW';

export const APP_ROUTES = 'APP_ROUTES';
export const PATH_URL = 'PATH_URL';

export type ACTION_TYPES =
  | typeof MOVIE_LIST
  | typeof RESPONSE_PAGE
  | typeof LOAD_MORE_MOVIES
  | typeof MOVIE_TYPE
  | typeof SEARCH_QUERY
  | typeof SEARCH_RESULT
  | typeof MOVIE_DETAILS
  | typeof CLEAR_MOVIE_DETAILS;

export interface MovieAction {
  type: ACTION_TYPES;
  payload: Results & {
    movieType?: MovieType;
    requestType: MovieTypeType;
    searchQuery?: string;
    searchResult: Result[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    movie: any[];
  };
}

export type ERROR_TYPE = typeof SET_ERROR;

export interface ErrorAction {
  type: ERROR_TYPE;
  payload: ErrorState;
}

export interface slideShowAction {
  type: typeof SET_SLIDESHOW;
  payload?: Url[];
}

export interface PathUrl {
  path: string;
  url: string;
}

export interface routeAction {
  type: typeof APP_ROUTES | typeof PATH_URL;
  payload: Array<Omit<CustomRout, 'component'>> | PathUrl;
}
